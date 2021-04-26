<template>
  <ul class="user-layout-list">
    <user-layout-list-item></user-layout-list-item>
  </ul>
</template>

<script>
import UserLayoutListItem from "./UserLayoutListItem";
export default {
  name: "UserLayoutList",
  components: {
    UserLayoutListItem,
  },
};
</script>

<style lang="scss">
.user-layout-list {
  display: flex;
}
</style>
