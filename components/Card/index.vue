<template>
  <NuxtLink :to="link">
    <div class="w-full overflow-hidden shadow-sm border rounded-2xl group">
      <div class="relative bg-slate-300 overflow-hidden">
        <img
          :src="imagePath"
          :alt="title"
          srcset=""
          class="w-full object-cover h-72 xl:h-72"
        />
        <div
          class="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 ease-in-out transition duration-300"
        ></div>
      </div>
      <div class="p-5 bg-white">
        <p class="pb-5 font-[600] text-rose-500 truncate group-hover:underline">
          {{ title }}
        </p>
        <hr />
        <p class="text-xs text-slate-500 pt-2">
          Data provided by Marvel. © {{ new Date().getFullYear() }} Marvel
        </p>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
import { computed } from '@nuxtjs/composition-api'

export default {
  props: {
    link: {
      type: String,
      default: () => '',
    },
    image: {
      type: String,
      default: () => '',
    },
    title: {
      type: String,
      default: () => '',
    },
  },
  setup(props) {
    return {
      imagePath: computed(() => {
        return props.image
      }),
    }
  },
}
</script>
