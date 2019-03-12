import guid from '@/utils/guid.util';

const initialState = () => ({
  userId: null,
  superuser: true,
});

const state = initialState;

const getters = {
  userId: store => store.userId,
  superuser: store => store.superuser,
};

const mutations = {
  SET_USER_ID(store, userId) {
    store.userId = userId;
  },
};

const actions = {
  setInitialUserID({ commit, getters }) {
    if (getters.userId) {
      return;
    }

    commit('SET_USER_ID', guid());
  },
};

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state,
};
