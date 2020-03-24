export const strict = false
export const state = () => ({
  Active: { about: false, portfolio: false, contact: false }
});

export const mutations = {
  ActiveChange(state, input) {
    state.Active = Object.assign(state.Active, input);
  }
};

export const actions = {
    ActiveChange({ commit }, input) {
      commit("ActiveChange", input)
    }
}