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
      :placeholder="placeholder"
    ></base-search>
    <div class="view-users__wrapper">
      <user-layout :userList="userList" :userAmount="userAmount"></user-layout>
      <router-view
        :user="userCard"
        :key="this.$route.params.userLogin"
      ></router-view>
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
      placeholder: "Введите псевдоним",
    };
  },
  methods: {
    setUserName(userName) {
      this.userName = userName;
    },
    searchUsers() {
      this.$store.dispatch("getUserList", this.userName);
      this.userName = "";
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
  display: flex;
  flex-direction: column;
  height: 80%;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    padding: 0 50px;
    height: calc(100% - 75px);
  }

  &__input {
    margin-bottom: 60px;
  }
}
</style>
