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
  overflow-y: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
}
</style>
