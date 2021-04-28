<template>
  <article class="user-card">
    <div class="user-card__avatar">
      <img :src="user.avatar_url" alt="Аватар пользователя" />
      {{ user.login }}
    </div>
    <ul class="user-card__list">
      <li class="user-card__item">
        Количество публичных репозиториев: {{ user.public_repos }}
      </li>
      <li class="user-card__item">
        Количество фолловеров: {{ user.followers }}
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    user: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  created() {
    const login = this.$route.params.userLogin;
    this.$store.dispatch("getUserCard", login);
  },
};
</script>

<style lang="scss">
.user-card {
  max-width: 400px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__avatar {
    width: 250px;
    overflow: hidden;
    border-radius: 50%;
    display: flex;
    margin-bottom: 25px;
  }

  &__list {
    display: flex;
    flex-direction: column;
  }

  &__item {
    margin-bottom: 10px;
    text-align: center;
    border-bottom: 1px solid black;
    padding: 10px 0;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
}
</style>
