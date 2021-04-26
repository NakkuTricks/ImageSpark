<template>
  <div class="base-search">
    <input type="text" class="base-search__input" v-model.trim="getValue" />
    <button class="base-search__button">Найти</button>
  </div>
</template>

<script>
export default {
  name: "BaseSearch",
  props: {
    value: {
      type: [String, Number],
      default: "",
    },
  },
  computed: {
    getValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("setValue", value);
      },
    },
  },
};
</script>

<style lang="scss">
.base-search {
  display: flex;
  &__input {
    margin-right: 10px;
  }

  &__button {
  }
}
</style>
