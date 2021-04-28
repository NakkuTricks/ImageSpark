<template>
  <div class="user-layout">
    <div class="user-layout__wrapper">
      <h2 class="user-layout__title">
        Найдено пользователей: {{ userAmount }}
      </h2>
      <button class="user-layout__sort">
        <span class="user-layout__sort-text">Сортировать по</span>
        <svg
          class="user-layout__sort-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 451.847 451.846"
        >
          <path
            d="M248.292 106.406l194.281 194.29c12.365 12.359 12.365 32.391 0 44.744-12.354 12.354-32.391 12.354-44.744 0L225.923 173.529 54.018 345.44c-12.36 12.354-32.395 12.354-44.748 0-12.359-12.354-12.359-32.391 0-44.75L203.554 106.4c6.18-6.174 14.271-9.259 22.369-9.259 8.095 0 16.192 3.091 22.369 9.265z"
          />
        </svg>
      </button>
    </div>
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

  &__wrapper {
    display: flex;
    flex-direction: column;

    padding: 20px 20px 0;
  }

  &__title {
    margin-bottom: 10px;
  }

  &__sort {
    align-self: flex-end;
    font-size: 17px;

    background-color: transparent;

    border: none;

    cursor: pointer;
  }

  &__sort-text {
    margin-right: 10px;
  }

  &__sort-icon {
    width: 20px;
    height: 20px;
  }
}
</style>
