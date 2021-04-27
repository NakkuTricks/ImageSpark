<template>
  <div class="user-layout">
    <h2 class="user-layout__title">Найдено пользователей: {{ userAmount }}</h2>
    <div class="user-layout__sort">Сортировать..</div>
    <user-layout-list :userList="userList"></user-layout-list>
  </div>
</template>

<script>
import UserLayoutList from "./UserLayoutList";
export default {
  name: "UserLayout",
  props: {
    userList: {
      type: Array,
      default: () => {
        [];
      },
    },
    userAmount: {
      type: Number,
      default: 0,
    },
  },
  components: {
    UserLayoutList,
  },
};
</script>

<style lang="scss">
.user-layout {
  min-width: 400px;

  display: flex;
  flex-direction: column;

  border: 1px solid black;

  &__title {
  }

  &__sort {
  }
}
</style>
