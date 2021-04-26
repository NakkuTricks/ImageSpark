<template>
  <div class="user-layout">
    <h2 class="user-layout__title">Пользователи:</h2>
    <div class="user-layout__sort">Сортировать..</div>
    <user-layout-list></user-layout-list>
  </div>
</template>

<script>
import UserLayoutList from "./UserLayoutList";
export default {
  name: "UserLayout",
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

  &__title {
  }

  &__sort {
  }
}
</style>
