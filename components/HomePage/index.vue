<template>
  <div>
    <search-input />
    <div
      class="grid grid-flow-rows grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-full pt-5"
    >
      <card
        v-for="(character, id) in characters"
        :key="id"
        :link="`/character-page/${character.id}`"
        :image="
          FormatThumbnailUrl(
            character.thumbnail.path,
            character.thumbnail.extension
          )
        "
        :title="character.name"
      />
    </div>
  </div>
</template>

<script>
import { computed, useStore, onMounted } from '@nuxtjs/composition-api'
import { FormatThumbnailUrl } from '~/utils/formatUrl'

export default {
  setup() {
    const store = useStore()

    const characters = computed(() => {
      return store.state.marvelCharactersList
    })

    onMounted(async () => {
      store.commit('setLoading', true)

      if (store.state.searchCharacter.length > 0) {
        await store.dispatch('getMarvelCharactersByName')
      } else {
        await store.dispatch('getMarvelCharactersList')
      }

      store.commit('setLoading', false)
    })

    return {
      store,
      characters,
      FormatThumbnailUrl,
    }
  },
}
</script>
