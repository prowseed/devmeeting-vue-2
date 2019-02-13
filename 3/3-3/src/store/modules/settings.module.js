import { SETTINGS } from '@/store/getters.types';
import { GET_SETTINGS, UPDATE_SETTINGS } from '@/store/actions.types';
import { SET_SETTINGS } from '@/store/mutations.types';
import RepositoryFactory from '@/repositories/repository.factory';

const settingsRepository = RepositoryFactory.get('settings');

const initialState = () => ({
  settings: undefined,
});

const state = initialState;

const getters = {
  [SETTINGS]: store => store.settings,
};

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  [SET_SETTINGS]: (store, settings) => {
    store.settings = settings;
  },
};

const actions = {
  [GET_SETTINGS]: async (context) => {
    const res = await settingsRepository.get();

    context.commit(SET_SETTINGS, res);

    return res;
  },
  [UPDATE_SETTINGS]: async (context, payload) => {
    const res = await settingsRepository.update(payload);

    context.commit(SET_SETTINGS, res);

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
