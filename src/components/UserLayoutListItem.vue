<template>
  <li class="user-layout-list-item">
    <router-link
      class="user-layout-list-item__link"
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
  display: flex;
  margin-bottom: 20px;
  border-bottom: 1px solid black;
  padding: 5px 0;

  &__link {
    width: 100%;
  }
}
</style>
