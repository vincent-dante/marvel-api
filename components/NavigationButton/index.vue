<template>
  <div class="pt-5 flex w-full gap-3">
    <button class="hover:text-rose-500" @click="goBack">
      <font-awesome-icon icon="fa-solid fa-arrow-left" class="mr-2" /> Back
    </button>
    /
    <button class="hover:text-rose-500" @click="goHome">
      <font-awesome-icon icon="fa-solid fa-house" /> Home
    </button>
  </div>
</template>

<script>
import { useRouter, useStore } from '@nuxtjs/composition-api'

export default {
  setup() {
    const router = useRouter()
    const store = useStore()

    const goBack = () => {
      router.go(-1)
    }

    const goHome = () => {
      store.commit('setSearchCharacter', '')

      if (router.currentRoute.path === '/') router.go()
      router.push('/')
    }

    return {
      goBack,
      goHome,
    }
  },
}
</script>
