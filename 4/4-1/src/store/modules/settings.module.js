import RepositoryFactory from '@/repositories/repository.factory';

const settingsRepository = RepositoryFactory.get('settings');

const initialState = () => ({
  settings: undefined,
});

const state = initialState;

const getters = {
  settings: store => store.settings,
};

const mutations = {
  setSettings(store, settings) {
    store.settings = settings;
  },
};

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

export default {
  namespaced: true,
  getters,
  actions,
  mutations,
  state,
};
