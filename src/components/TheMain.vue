<template>
  <main class="the-main">
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  name: "TheMain",
};
</script>

<style lang="scss">
.the-main {
  max-width: 1250px;
  width: 100%;
  height: 80%;

  @media (max-width: 500px) {
    height: 100%;

    padding: 0 15px 25px;
  }
}
</style>
