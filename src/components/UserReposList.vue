<template>
  <ul class="user-repos-list">
    <user-repos-list-item></user-repos-list-item>
  </ul>
</template>

<script>
import UserReposListItem from "./UserReposListItem";
export default {
  name: "UserReposList",
  components: {
    UserReposListItem,
  },
};
</script>

<style lang="scss"></style>
