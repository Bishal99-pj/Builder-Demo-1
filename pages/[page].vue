<template>
  <div id="home">
    <div class="text-center">Hello world from your Vue project. Below is Builder Content:</div>

    <div v-if="content || isPreviewing()">
      <div>
        page title:
        {{ content?.data?.title || 'Unpublished' }}
      </div>
      <RenderContent
        model="page"
        :content="content"
        :api-key="builderPublicKey"
        :customComponents="REGISTERED_COMPONENTS"
      />
    </div>
    <div v-else class="text-center">Content not Found</div>
  </div>
</template>

<script setup>
import { RenderContent, getContent, isPreviewing } from '@builder.io/sdk-vue';

import HelloWorldComponent from '../components/HelloWorld.vue';

// Register your Builder components
const REGISTERED_COMPONENTS = [
  {
    component: HelloWorldComponent,
    name: 'MyFunComponent',
    canHaveChildren: true,
    inputs: [
      {
        name: 'text',
        type: 'string',
        defaultValue: 'World',
      },
    ],
  },
];


// Enter your public API key
const config = useRuntimeConfig()
const builderPublicKey = config.public.builderApiKey

const route = useRoute();

// fetch builder content data
const { data: content } = await useAsyncData('builderData', () =>
  getContent({
    model: 'page',
    apiKey: builderPublicKey,
    userAttributes: {
      urlPath: route.path,
    },
  })
);
</script>