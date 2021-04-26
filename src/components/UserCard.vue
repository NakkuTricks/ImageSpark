<template>
  <article class="user-card">
    <div class="user-card__avatar">
      <img src="#" alt="Аватар пользователя" />
    </div>
    <user-repos-list></user-repos-list>
  </article>
</template>

<script>
import UserReposList from "./UserReposList";
export default {
  name: "UserCard",
  components: {
    UserReposList,
  },
};
</script>

<style lang="scss">
.user-card {
  min-width: 400px;

  display: flex;
  flex-direction: column;

  &__avatar {
  }
}
</style>
