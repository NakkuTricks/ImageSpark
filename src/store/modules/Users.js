import { API_URL } from "@/constants";

export default {
  state: {
    users: JSON.parse(localStorage.getItem("users") || "[]"),
    user: JSON.parse(localStorage.getItem("user") || "{}"),
    amount: JSON.parse(localStorage.getItem("users-amount") || "0"),
  },
  actions: {
    getUserList({ commit }, userName, currentPage) {
      // eslint-disable-next-line prettier/prettier
      fetch(`${API_URL}/search/users?q=${userName}&page=${currentPage}&per_page=10`, {
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
        }
      )
        .then((users) => users.json())
        .then((users) => commit("setUserListToState", users))
        .catch((error) => console.log(error));
    },
    getUserByLogin({ commit }, userLogin) {
      fetch(`${API_URL}/users/${userLogin}`, {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      })
        .then((user) => user.json())
        .then((user) => commit("setUserToState", user))
        .catch((error) => console.log(error));
    },
    getUsersAscending({ commit }, userName) {
      // eslint-disable-next-line prettier/prettier
      fetch(`${API_URL}/search/users?q=${userName}&sort=repositories&order=desc`, {
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
        }
      )
        .then((users) => users.json())
        .then((users) => commit("setUsersAscending", users))
        .catch((error) => console.log(error));
    },
    getUsersDescending({ commit }, userName) {
      // eslint-disable-next-line prettier/prettier
      fetch(`${API_URL}/search/users?q=${userName}&sort=repositories&order=asc`, {
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
        }
      )
        .then((users) => users.json())
        .then((users) => commit("setUsersDescending", users))
        .catch((error) => console.log(error));
    },
  },
  mutations: {
    setUserListToState(state, users) {
      const user = users.items;
      state.users = user;
      state.amount = Number(users.total_count);

      localStorage.setItem("users", JSON.stringify(state.users));
      localStorage.setItem("users-amount", JSON.stringify(state.amount));
    },
    setUserToState(state, user) {
      state.user = user;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    setUsersAscending(state, users) {
      const user = users.items;
      state.users = user;
      state.amount = Number(users.total_count);

      localStorage.setItem("users", JSON.stringify(state.users));
      localStorage.setItem("users-amount", JSON.stringify(state.amount));
    },
    setUsersDescending(state, users) {
      const user = users.items;
      state.users = user;
      state.amount = Number(users.total_count);

      localStorage.setItem("users", JSON.stringify(state.users));
      localStorage.setItem("users-amount", JSON.stringify(state.amount));
    }
  },
  getters: {},
};
