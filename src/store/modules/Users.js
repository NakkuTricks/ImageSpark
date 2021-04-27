import { API_URL } from "@/constants";

export default {
  state: {
    users: [],
    user: {},
    amount: 0,
  },
  actions: {
    getUserList({ commit }, userName) {
      fetch(`${API_URL}/search/users?q=${userName}`)
        .then((users) => users.json())
        .then((users) => commit("setUsersToState", users))
        .catch((error) => console.log(error));
    },
    getUserCard({ commit }, userLogin) {
      fetch(`${API_URL}/users/${userLogin}`)
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
    },
    setUserCardToState(state, user) {
      state.user = user;
    },
  },
  getters: {},
};
