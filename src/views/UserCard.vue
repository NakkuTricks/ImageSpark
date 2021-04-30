<template>
  <article class="user-card">
    <a
      class="user-card__avatar"
      :href="user.html_url"
      target="_blank"
      title="Ссылка на гитхаб аккаунт"
      rel="noopener noreferrer"
    >
      <img :src="user.avatar_url" alt="Аватар пользователя" />
    </a>
    <ul class="user-card__list">
      <li class="user-card__item">Логин пользователя: {{ user.login }}</li>
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
    this.$store.dispatch("getUserByLogin", login);
  },
};
</script>

<style lang="scss">
.user-card {
  max-width: 600px;
  width: 100%;

  display: flex;

  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: column;
  }

  &__avatar {
    max-width: 250px;

    display: flex;

    overflow: hidden;

    margin-right: 10%;

    border: 10px solid black;
    border-radius: 50%;

    transition: 200ms ease;

    &:hover {
      transform: scale(1.05);
    }

    @media (max-width: 500px) {
      margin-right: 0;
      margin-bottom: 10px;

      border: 5px solid black;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
  }

  &__item {
    margin-bottom: 10px;
    border-bottom: 1px solid black;
    padding: 10px 0;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
}
</style>
