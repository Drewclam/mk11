<template>
  <div>
    <h1>MK 11 App</h1>
    <FighterGrid
      v-for="(fighter, index) in fighters"
      :fighter="fighter"
      :key="index"
    />
  </div>
</template>

<script>
import { default as subzero } from "../data/subzero.json";
import { default as scorpion } from "../data/scorpion.json";
import FighterGrid from "./FighterGrid";
export default {
  name: "HelloWorld",
  components: { FighterGrid },
  data() {
    return {
      fighters: [subzero, scorpion],
    };
  },
};
</script>
