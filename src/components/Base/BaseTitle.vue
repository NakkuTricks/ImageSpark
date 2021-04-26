<template>
  <h1 class="base-title">
    <slot></slot>
  </h1>
</template>

<script>
export default {
  name: "BaseTitle",
};
</script>

<style lang="scss">
.base-title {
  font-size: 40px;
  margin-bottom: 30px;
}
</style>
