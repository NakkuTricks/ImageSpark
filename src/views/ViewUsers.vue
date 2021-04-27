<template>
  <section class="view-users">
    <base-title>
      <template v-slot>Поиск пользователей:</template>
    </base-title>
    <base-search
      class="view-users__input"
      :value="userName"
      @setValue="setUserName"
      @click="searchUsers"
      @keyup="searchUsers"
    ></base-search>
    <div class="view-users__wrapper">
      <user-layout :userList="userList" :userAmount="userAmount"></user-layout>
      <router-view :user="userCard" :key="userCard.id"></router-view>
    </div>
  </section>
</template>

<script>
import BaseSearch from "../components/Base/BaseSearch";
import BaseTitle from "../components/Base/BaseTitle";
import UserLayout from "../components/UserLayout";
export default {
  name: "ViewUsers",
  components: {
    BaseSearch,
    BaseTitle,
    UserLayout,
  },
  data() {
    return {
      userName: "",
    };
  },
  methods: {
    setUserName(userName) {
      this.userName = userName;
    },
    searchUsers() {
      return this.$store.dispatch("getUserList", this.userName);
    },
  },
  computed: {
    userList() {
      return this.$store.state.Users.users;
    },
    userAmount() {
      return this.$store.state.Users.amount;
    },
    userCard() {
      return this.$store.state.Users.user;
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

    padding: 0 50px;

    height: 500px;
  }

  &__input {
    margin-bottom: 60px;
  }
}
</style>
