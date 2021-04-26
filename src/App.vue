<template>
  <div id="app">
    <the-header></the-header>
    <the-main></the-main>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader";
import TheMain from "./components/TheMain";
export default {
  name: "App",
  components: {
    TheHeader,
    TheMain,
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 100vh;

  padding: 0 35px;
}
</style>
