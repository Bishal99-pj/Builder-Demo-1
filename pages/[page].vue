<template>
  <div id="home">
    <div class="text-center">Hello world from your Vue project. Below is Builder Content:</div>

    <div v-if="content || isPreviewing()">
      <Content v-bind="$attrs" model="page" :content="content" :api-key="builderPublicKey"
        :customComponents="REGISTERED_COMPONENTS" />
    </div>
    <div v-else class="text-center">Content not Found</div>
  </div>
</template>

<script lang="ts" setup>
import { Content, fetchOneEntry, isPreviewing } from '@builder.io/sdk-vue';

// Register your Builder components
import { REGISTERED_COMPONENTS } from '~/init.builder';

defineOptions({
  inheritAttrs: false
})

// Enter your public API key
const config = useRuntimeConfig()
const builderPublicKey = config.public.builderApiKey

const route = useRoute();

// fetch builder content data
const { data: content } = await useAsyncData('builderData', () =>
  fetchOneEntry({
    model: 'page',
    apiKey: builderPublicKey,
    userAttributes: {
      urlPath: route.path,
    },
  })
);
</script>