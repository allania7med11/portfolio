export const strict = false
export const state = () => ({
  Active: { about: true, portfolio: true, contact: true },
  page: "home",
  isActive: false
});

export const mutations = {
  ActiveChange(state, input) {
    state.Active = Object.assign(state.Active, input);
  },
  stateChange(state, input) {
    state[input.state] = input.value
  }
};

export const actions = {
    ActiveChange({ commit }, input) {
      commit("ActiveChange", input)
    },
    stateChange({ commit }, input) {
      commit("stateChange", input)
    },
    pageChange({ commit, state }, page) {
      if (process.client && page) {
        commit("stateChange", {state:"page",value:page})
        document.getElementById(state.page).scrollIntoView();
      }
    }
}