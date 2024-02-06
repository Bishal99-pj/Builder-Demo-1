<template>
    <div class="flex justify-center gap-2 m-6">
        <div class="card" v-for="p in products" :key="p.data.title">
            <img :src="p.data.image" :alt="p.data.title">
            <h1>{{ p.data.title }}</h1>
            <p>{{ p.data.description }}</p>
        </div>

        <div class="font-bold">
            x : {{ width }} , y : {{ height }}
        </div>
    </div>
</template>
  
<script lang="ts" setup>
import { builder } from '@builder.io/sdk'

const config = useRuntimeConfig()
builder.init(config.public.builderApiKey)
const { width, height } = useWindowSize({ initialWidth: 0, initialHeight: 0 })

const products = ref()

products.value = await builder.getAll('sample-data', {
    limit: width.value >= 1300 ? 2 : 1
})


</script>

<style lang="postcss" scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
    .card {
        @apply flex flex-col items-center gap-2 w-[300px] h-[350px] border rounded-md border-stone-300 bg-sky-50 p-3
    }
}

h1 {
    @apply font-bold text-2xl capitalize
}
</style>