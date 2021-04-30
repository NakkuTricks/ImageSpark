<template>
  <section class="view-users">
    <base-title class="view-users__title">
      <template v-slot>Поиск пользователей github по логину:</template>
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
      <user-layout
        :userList="userList"
        :userAmount="userAmount"
        :currentPage="currentPage"
        @sortUsersAscending="sortUsersAscending"
        @sortUsersDescending="sortUsersDescending"
        @prevPage="prevUserPage"
        @nextPage="nextUserPage"
        v-if="userList.length"
      ></user-layout>
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
      currentPage: JSON.parse(localStorage.getItem("current-page") || "1"),
      userName: "",
      placeholder: "Введите логин",
    };
  },
  methods: {
    setUserName(userName) {
      this.userName = userName;
    },
    searchUsers() {
      if (this.userName) {
        this.$store.dispatch("getUserList", this.userName);
        this.userName = "";
        this.currentPage = 1;
        localStorage.setItem("current-page", this.currentPage);
      } else {
        alert("Пожалуйста, введите псевдоним пользователя");
      }
    },
    prevUserPage() {
      this.currentPage--;
      localStorage.setItem("current-page", this.currentPage);
      let userName = JSON.parse(localStorage.getItem("userName"));
      this.$store.dispatch("getUserPerPage", [userName, this.currentPage]);
    },
    nextUserPage() {
      this.currentPage++;
      localStorage.setItem("current-page", this.currentPage);
      let userName = JSON.parse(localStorage.getItem("userName"));
      this.$store.dispatch("getUserPerPage", [userName, this.currentPage]);
    },
    sortUsersAscending() {
      const userName = JSON.parse(localStorage.getItem("userName"));
      this.$store.dispatch("getUsersBySort", [
        userName,
        this.currentPage,
        "asc",
      ]);
    },
    sortUsersDescending() {
      const userName = JSON.parse(localStorage.getItem("userName"));
      this.$store.dispatch("getUsersBySort", [
        userName,
        this.currentPage,
        "desc",
      ]);
    },
  },
  computed: {
    userList() {
      return this.$store.state.Users.userList;
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

  @media (max-width: 500px) {
    height: auto;
    padding-bottom: 20px;
  }

  &__title {
    @media (max-width: 500px) {
      margin-bottom: 15px;
      font-size: 30px;
    }
  }

  &__wrapper {
    display: flex;
    height: calc(100% - 75px);

    @media (max-width: 500px) {
      flex-direction: column;
    }
  }

  &__input {
    margin-bottom: 60px;

    @media (max-width: 500px) {
      align-self: center;
      margin-bottom: 25px;
    }
  }
}
</style>
