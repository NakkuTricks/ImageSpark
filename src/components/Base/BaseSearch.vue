<template>
  <div class="base-search">
    <input
      type="text"
      class="base-search__input"
      v-model.trim="getValue"
      @keyup.enter="onKeyup"
      @placeholder="placeholder"
      :placeholder="placeholder"
    />
    <button class="base-search__button" @click="onClick">
      <svg
        class="base-search__button-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 468.204 468.204"
      >
        <path
          d="M283.703 266.267l35.14 35.14-17.396 17.396-35.14-35.14c3.088-2.653 6.132-5.436 9.046-8.35a162.733 162.733 0 008.35-9.046z"
          fill="#27a2db"
        />
        <path
          d="M275.354 47.165c59.972 59.973 62.756 155.824 8.35 219.102-2.653 3.088-5.436 6.132-8.35 9.046-2.914 2.914-5.958 5.697-9.046 8.35-63.321 54.449-159.173 51.666-219.146-8.307-62.886-62.887-62.886-165.262.043-228.192 62.887-62.886 165.262-62.885 228.149.001z"
          fill="#64798a"
        />
        <circle cx="161.235" cy="161.256" fill="#ebf0f3" r="136.722" />
        <g fill="#44c4a1">
          <path
            d="M288.284 331.959l43.672-43.672a6.244 6.244 0 018.83 0l11.631 11.631-52.502 52.502-11.631-11.631a6.244 6.244 0 010-8.83zM405.512 457.491l51.976-51.976 7.055 7.055c4.877 4.877 4.877 12.784 0 17.66l-34.316 34.316c-4.877 4.877-12.784 4.877-17.66 0l-7.055-7.055z"
          />
        </g>
        <path
          fill="#3ea69b"
          d="M459.798 407.243l-52.504 52.505L299.92 352.373l52.504-52.504z"
        />
      </svg>
    </button>
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
    placeholder: {
      type: String,
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
    padding: 5px 10px;
    margin-right: 10px;

    border-radius: 5px;
    border: 1px solid black;
  }

  &__button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  &__button-icon {
    width: 25px;
    height: auto;
  }
}
</style>
