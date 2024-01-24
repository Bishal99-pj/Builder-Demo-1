import HelloWorld from './components/HelloWorld.vue';

export const REGISTERED_COMPONENTS = [
    {
      component: HelloWorld,
      name: 'MyHelloWorld',
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