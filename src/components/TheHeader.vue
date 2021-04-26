<template>
  <header class="the-header">
    <main-logo></main-logo>
    <head-hunter-link></head-hunter-link>
  </header>
</template>

<script>
import MainLogo from "./MainLogo";
import HeadHunterLink from "./HeadHunterLink";
export default {
  name: "TheHeader",
  components: {
    MainLogo,
    HeadHunterLink,
  },
};
</script>

<style lang="scss">
.the-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  width: 100%;
  height: 10%;
}
</style>
