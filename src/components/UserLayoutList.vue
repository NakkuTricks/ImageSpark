<template>
  <ul class="user-layout-list">
    <user-layout-list-item
      :user="user"
      v-for="user in userList"
      :key="user.id"
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
  padding: 15px 25px;
  overflow-y: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
}
</style>
