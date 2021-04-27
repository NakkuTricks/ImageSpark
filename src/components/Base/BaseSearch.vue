<template>
  <div class="base-search">
    <input
      type="text"
      class="base-search__input"
      v-model.trim="getValue"
      @keyup.enter="onKeyup"
    />
    <button class="base-search__button" @click="onClick">Найти</button>
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
  methods: {
    onClick() {
      this.$emit("click");
    },
    onKeyup() {
      this.$emit("keyup");
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
