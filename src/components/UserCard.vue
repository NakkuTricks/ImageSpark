<template>
  <article class="user-card">
    <div class="user-card__avatar">
      <img src="#" alt="Аватар пользователя" />
      {{ user.login }}
    </div>
    <user-repos-list></user-repos-list>
  </article>
</template>

<script>
import UserReposList from "./UserReposList";
export default {
  name: "UserCard",
  props: ["user"],
  components: {
    UserReposList,
  },
  created() {
    const login = this.$route.params.userLogin;
    this.$store.dispatch("getUserCard", login);
  },
};
</script>

<style lang="scss">
.user-card {
  min-width: 400px;

  display: flex;
  flex-direction: column;

  border: 1px solid black;

  &__avatar {
  }
}
</style>
