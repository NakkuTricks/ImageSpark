<template>
  <section class="view-users">
    <base-title>
      <template v-slot>Поиск пользователей:</template>
    </base-title>
    <base-search
      class="view-users__input"
      :value="users"
      @setValue="setUsers"
    ></base-search>
    <div class="view-users__wrapper">
      <user-layout></user-layout>
      <user-card></user-card>
    </div>
  </section>
</template>

<script>
import BaseSearch from "../components/Base/BaseSearch";
import BaseTitle from "../components/Base/BaseTitle";
import UserLayout from "../components/UserLayout";
import UserCard from "../components/UserCard";
export default {
  name: "ViewUsers",
  components: {
    BaseSearch,
    BaseTitle,
    UserCard,
    UserLayout,
  },
  data() {
    return {
      users: "",
    };
  },
  methods: {
    setUsers(value) {
      this.users = value;
    },
  },
};
</script>

<style lang="scss">
.view-users {
  height: 100%;

  &__wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__input {
    margin-bottom: 60px;
  }
}
</style>
