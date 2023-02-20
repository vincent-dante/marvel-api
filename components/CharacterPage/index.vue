<template>
  <div>
    <navigation-button />
    <div class="flex flex-wrap md:flex-nowrap w-full gap-5 py-20">
      <div class="w-full md:w-2/4 xl:w-1/4 min-h-[150px]">
        <img
          :src="thumbnail"
          :alt="details?.name"
          class="w-full rounded-2xl h-96 object-cover bg-slate-300"
        />
      </div>
      <div class="w-full md:w-2/4 xl:w-3/4">
        <h1 class="text-4xl font-[600] text-rose-500">
          {{ details.name }}
        </h1>
        <p class="pt-5">
          {{ description }}
        </p>
        <p class="pt-5 text-sm text-slate-500">
          Data provided by Marvel. © {{ new Date().getFullYear() }} Marvel
        </p>
      </div>
    </div>
    <h2 class="text-2xl">Comics</h2>
    <div
      class="grid grid-flow-rows grid-cols-1 md:grid-cols-4 gap-3 w-full pt-5"
    >
      <card
        v-for="(comic, id) in comics"
        :key="id"
        :link="`/comics-page/${comic.id}`"
        :image="
          FormatThumbnailUrl(
            comic?.images[0]?.path,
            comic?.images[0]?.extension
          )
        "
        :title="comic.title"
      />
    </div>
    <p v-if="!comics.length">No comics found.</p>
  </div>
</template>

<script>
import {
  useStore,
  useRoute,
  onMounted,
  computed,
} from '@nuxtjs/composition-api'

import { FormatThumbnailUrl, FormatDescription } from '~/utils/formatUrl'

export default {
  setup() {
    const store = useStore()
    const route = useRoute()

    const id = computed(() => route.value.params.id)
    const details = computed(() => store.state.marvelCharacterDetails)
    const comics = computed(() => store.state.marvelCharacterComics)

    const thumbnail = computed(() => {
      const url =
        details.value?.thumbnail?.path +
        '.' +
        details.value?.thumbnail?.extension
      return url.replace('http', 'https')
    })

    const description = computed(() => {
      const result = FormatDescription(details.value.description)

      if (result) return result
      return 'No description found.'
    })

    onMounted(async () => {
      store.commit('setLoading', true)

      const characterDetails = await store.dispatch(
        'getMarvelCharacterDetails',
        id.value
      )
      const characterComics = await store.dispatch(
        'getMarvelCharacterComics',
        id.value
      )

      Promise.all([characterDetails, characterComics]).then(() => {
        store.commit('setLoading', false)
      })
    })

    return {
      details,
      thumbnail,
      comics,
      description,
      FormatThumbnailUrl,
      FormatDescription,
    }
  },
}
</script>
