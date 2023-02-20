<template>
  <div>
    <navigation-button />
    <div class="flex flex-wrap md:flex-nowrap w-full gap-5 py-20">
      <div class="w-full md:w-2/4 xl:w-1/4 min-h-[150px]">
        <img
          :src="thumbnail"
          :alt="details?.title"
          class="w-full rounded-2xl h-96 object-cover bg-slate-300"
        />
      </div>
      <div class="w-full md:w-2/4 xl:w-3/4">
        <h1 class="text-4xl font-[600] text-rose-500">
          {{ details.title }}
        </h1>
        <div class="flex flex-wrap pt-10 text-sm">
          <NuxtLink
            v-for="(creator, index) in creators"
            :key="index"
            :to="`/creator-page/${parseCreatorId(creator.resourceURI)}`"
            class="text-white bg-slate-700 py-2 px-3 relative inline-block rounded-md rounded-tl-none my-5 mr-3 min-w-[11rem] hover:underline"
          >
            <span
              class="absolute left-0 bottom-9 bg-rose-500 px-2 py-1 rounded-t-lg text-xs"
            >
              {{ creator.role }}</span
            >
            {{ creator.name }}
          </NuxtLink>
        </div>
        <p class="pt-5 text-sm text-slate-500">
          Data provided by Marvel. © {{ new Date().getFullYear() }} MARVEL
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {
  computed,
  useStore,
  onMounted,
  useRoute,
} from '@nuxtjs/composition-api'

export default {
  setup() {
    const store = useStore()
    const route = useRoute()

    const id = computed(() => route.value.params.id)
    const details = computed(() => store.state.marvelComicsDetails)

    const thumbnail = computed(() => {
      const url =
        details.value?.thumbnail?.path +
        '.' +
        details.value?.thumbnail?.extension
      return url.replace('http', 'https')
    })

    const creators = computed(() => {
      return details.value?.creators?.items
    })

    const parseCreatorId = (url) => {
      return url.substring(url.lastIndexOf('/') + 1)
    }

    onMounted(async () => {
      store.commit('setLoading', true)

      await store.dispatch('getMarvelComicsDetails', id.value)
      store.commit('setLoading', false)
    })

    return {
      details,
      thumbnail,
      creators,
      parseCreatorId,
    }
  },
}
</script>
