import HelloWorld from "./components/HelloWorld.vue";
import Container from "./components/Container.vue";

export const REGISTERED_COMPONENTS = [
  {
    component: HelloWorld,
    name: "MyFunComponent",
    canHaveChildren: true,
    inputs: [
      {
        name: "text",
        type: "string",
        defaultValue: "World",
        required: true,
      },
    ],
  },
  {
    component: Container,
    name: "Container",
    canHaveChildren: true,
  },
];
