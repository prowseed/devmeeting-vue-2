import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import { firebaseMutations } from 'vuexfire';

import settings from './modules/settings.module';
import votes from './modules/votes.module';
import user from './modules/user.module';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  reducer: state => ({ user: state.user }),
});

export default new Vuex.Store({
  modules: {
    settings,
    votes,
    user,
  },
  mutations: {
    ...firebaseMutations,
  },
  plugins: [vuexLocal.plugin],
});
