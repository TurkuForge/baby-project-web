<template>
  <img alt="Vue logo" src="@/assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
});
</script>
