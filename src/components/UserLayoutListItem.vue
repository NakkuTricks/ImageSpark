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
  padding: 5px 10px;
  background: linear-gradient(
    90deg,
    #f5d7ffb0 0,
    #c9f5ffb0 52.75%,
    #6bcdff85 102.3%
  );
  border-radius: 10px;

  &:last-of-type {
    margin-bottom: 5px;
  }

  transition: 200ms ease;

  &:hover {
    transform: scale(0.95);
  }

  &__link {
    width: 100%;
  }
}
</style>
