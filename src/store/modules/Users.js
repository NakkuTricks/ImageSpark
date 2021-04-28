import { API_URL } from "@/constants";

export default {
  state: {
    users: JSON.parse(localStorage.getItem("users") || "[]"),
    user: JSON.parse(localStorage.getItem("user") || "{}"),
    amount: JSON.parse(localStorage.getItem("users-amount") || "0"),
  },
  actions: {
    getUserList({ commit }, userName) {
      fetch(`${API_URL}/search/users?q=${userName}`, {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      })
        .then((users) => users.json())
        .then((users) => commit("setUsersToState", users))
        .catch((error) => console.log(error));
    },
    getUserCard({ commit }, userLogin) {
      fetch(`${API_URL}/users/${userLogin}`, {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      })
        .then((user) => user.json())
        .then((user) => commit("setUserCardToState", user))
        .catch((error) => console.log(error));
    },
  },
  mutations: {
    setUsersToState(state, users) {
      const user = users.items;
      state.users = user;
      state.amount = Number(users.total_count);

      localStorage.setItem("users", JSON.stringify(state.users));
      localStorage.setItem("users-amount", JSON.stringify(state.amount));
    },
    setUserCardToState(state, user) {
      state.user = user;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
  },
  getters: {},
};
