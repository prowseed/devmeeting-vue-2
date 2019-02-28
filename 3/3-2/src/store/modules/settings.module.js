//1/ 9. Import RepositoryFactory
import RepositoryFactory from '@/repositories/repository.factory';
//1/ 10. and get settings repository
const settingsRepository = RepositoryFactory.get('settings');

const initialState = () => ({
  settings: undefined,
});

const state = initialState;

const getters = {
  settings: store => store.settings,
};

const mutations = {
  SET_SETTINGS(store, settings) {
    store.settings = settings;
  },
};

const actions = {
  async getSettings(context) {
    //1/ 11. The repository is now used to perform API calls
    const res = await settingsRepository.get();

    context.commit('SET_SETTINGS', res);

    return res;
  },
  async updateSettings(context, payload) {
    const res = await settingsRepository.update(payload);

    context.commit('SET_SETTINGS', res);

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
