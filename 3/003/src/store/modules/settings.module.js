/* eslint no-param-reassign: ["error", { "props": false }] */

import RepositoryFactory from '@/repositories/repository.factory';

const settingsRepository = RepositoryFactory.get('settings');

//3/ 3. Let's create initial state...
const initialState = () => ({
  settings: undefined,
});

//1 4. and assign it to our state
const state = initialState;

//3 5. getters are the way to get informations from store
const getters = {
  settings: store => store.settings,
};

//5 6. mutations allow to mutate our state
const mutations = {
  setSettings(store, settings) {
    store.settings = settings;
  },
};

//15 7. actions keep our business logic and can perform API calls
const actions = {
  async getSettings(context) {
    const res = await settingsRepository.get();

    context.commit('setSettings', res);

    return res;
  },
  async updateSettings(context, payload) {
    const res = await settingsRepository.update(payload);

    context.commit('setSettings', res);

    return res;
  },
};

//7 8. At the end we export everything as our namespaced module
export default {
  namespaced: true,
  getters,
  actions,
  mutations,
  state,
};
