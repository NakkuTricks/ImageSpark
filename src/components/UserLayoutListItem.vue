<template>
  <li class="user-layout-list-item">
    <router-link
      :to="{ name: 'userCard', params: { userLogin: `${user.login}` } }"
    >
      {{ user.login }}
    </router-link>
  </li>
</template>

<script>
export default {
  name: "UserLayoutListItem",
  props: {
    user: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
};
</script>

<style lang="scss">
.user-layout-list-item {
  margin-bottom: 10px;
}
</style>
