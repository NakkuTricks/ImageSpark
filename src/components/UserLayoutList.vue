<template>
  <ul class="user-layout-list">
    <user-layout-list-item
      :user="user"
      v-for="user in userList"
      :key="user.login"
    ></user-layout-list-item>
  </ul>
</template>

<script>
import UserLayoutListItem from "./UserLayoutListItem";
export default {
  name: "UserLayoutList",
  props: {
    userList: {
      type: Array,
      default: () => {
        [];
      },
    },
  },
  components: {
    UserLayoutListItem,
  },
};
</script>

<style lang="scss">
.user-layout-list {
  display: flex;
  flex-direction: column;

  max-height: 400px;

  margin-bottom: 10px;

  overflow-y: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  @media (max-width: 500px) {
    max-height: 250px;
  }
}
</style>
