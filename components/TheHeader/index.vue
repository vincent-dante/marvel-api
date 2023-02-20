<template>
  <div class="text-center">
    <button @click="goToHomepage">
      <h1 class="text-[2rem] font-[600]">
        <span class="text-rose-500">MARVEL</span> CHARACTERS
      </h1>
    </button>
  </div>
</template>

<script>
import { useRouter, useStore } from '@nuxtjs/composition-api'

export default {
  setup() {
    const router = useRouter()
    const store = useStore()

    const goToHomepage = () => {
      store.commit('setSearchCharacter', '')

      if (router.currentRoute.path === '/') router.go()
      router.push('/')
    }

    return {
      goToHomepage,
    }
  },
}
</script>
