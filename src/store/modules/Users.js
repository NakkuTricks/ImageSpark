import { API_URL } from "@/constants";

export default {
  state: {
    userList: JSON.parse(localStorage.getItem("userList") || "[]"),
    user: JSON.parse(localStorage.getItem("user") || "{}"),
    amount: JSON.parse(localStorage.getItem("users-amount") || "0"),
  },
  actions: {
    getUserList({ commit }, userName) {
      fetch(`${API_URL}/search/users?q=${userName}&page=1&per_page=10`, {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      })
        .then((userList) => {
          if (userList.ok) {
            return userList.json();
          } else {
            return alert("Превышен лимит запросов");
          }
        })
        .then((userList) => {
          if (userList.items.length) {
            localStorage.setItem("userName", JSON.stringify(userName));
            return commit("setUserListToState", userList);
          } else {
            return alert("Пользователь не найден");
          }
        })
        .catch((error) => console.log(error));
    },
    getUserPerPage({ commit }, [userName, currentPage]) {
      fetch(
        `${API_URL}/search/users?q=${userName}&page=${currentPage}&per_page=10`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
        }
      )
        .then((userList) => {
          if (userList.ok) {
            return userList.json();
          } else {
            return alert("Превышен лимит запросов");
          }
        })
        .then((userList) => commit("setUserPerPage", userList))
        .catch((error) => console.log(error));
    },
    getUserByLogin({ commit }, userLogin) {
      fetch(`${API_URL}/users/${userLogin}`, {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      })
        .then((user) => user.json())
        .then((user) => commit("setUserCardToState", user))
        .catch((error) => console.log(error));
    },
    getUsersBySort({ commit }, [userName, currentPage, sort]) {
      fetch(
        `${API_URL}/search/users?q=${userName}&page=${currentPage}&per_page=10&sort=repositories&order=${sort}`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
        }
      )
        .then((userList) => {
          if (userList.ok) {
            return userList.json();
          } else {
            return alert("Превышен лимит запросов");
          }
        })
        .then((userList) => commit("setSortUsers", userList))
        .catch((error) => console.log(error));
    },
  },
  mutations: {
    setUserListToState(state, users) {
      state.userList = users.items;
      state.amount = Number(users.total_count);

      localStorage.setItem("userList", JSON.stringify(state.userList));
      localStorage.setItem("users-amount", JSON.stringify(state.amount));
    },
    setUserPerPage(state, userPerPage) {
      state.userList = userPerPage.items;
      localStorage.setItem("userList", JSON.stringify(state.userList));
    },
    setUserCardToState(state, user) {
      state.user = user;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    setSortUsers(state, users) {
      const user = users.items;
      state.userList = user;
      state.amount = Number(users.total_count);

      localStorage.setItem("userList", JSON.stringify(state.userList));
      localStorage.setItem("users-amount", JSON.stringify(state.amount));
    },
  },
};
