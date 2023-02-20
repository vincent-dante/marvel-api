<template>
  <div class="text-center pt-5 pb-20 flex gap-5 w-full justify-center">
    <div class="relative inline-block lg:w-1/4">
      <input
        v-model="searchValue"
        type="text"
        placeholder="Search here."
        class="w-full bg-slate-100 border-2 border-rose-300 px-9 py-2 rounded-full text-rose-300 placeholder:text-rose-300 focus:outline-none focus:border-rose-500 focus:text-rose-500 peer"
        @keyup.enter="searchCharacter"
      />
      <font-awesome-icon
        icon="fa-solid fa-magnifying-glass"
        class="absolute left-4 top-1/2 translate-y-[-50%] text-rose-300 peer-focus:text-rose-500"
      />
    </div>

    <button
      class="px-4 py-2 rounded-full bg-rose-300 text-white hover:bg-rose-500 ease-in-out transition duration-300"
      @click="searchCharacter"
    >
      Search
    </button>
  </div>
</template>

<script>
import { useStore, ref, onMounted } from '@nuxtjs/composition-api'
export default {
  setup() {
    const searchValue = ref('')
    const store = useStore()

    const searchCharacter = async () => {
      store.commit('setLoading', true)
      store.commit('setSearchCharacter', searchValue.value)

      if (searchValue.value.length) {
        await store.dispatch('getMarvelCharactersByName')
      } else {
        await store.dispatch('getMarvelCharactersList')
      }

      store.commit('setLoading', false)
    }

    onMounted(() => {
      if (store.state.searchCharacter.length)
        searchValue.value = store.state.searchCharacter
    })

    return {
      searchCharacter,
      searchValue,
    }
  },
}
</script>
