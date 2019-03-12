import Vue from 'vue';
import Vuex from 'vuex';
import settings from './modules/settings.module';

Vue.use(Vuex);

//1/ 1. We will define our store...
export default new Vuex.Store({
  modules: {
    //1 2. with first module
    settings,
  },
});
