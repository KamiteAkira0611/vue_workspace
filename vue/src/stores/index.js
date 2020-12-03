import Vue from 'vue';
import Vuex from 'vuex';

import member from './member';

Vue.use(Vuex);

const debug = process.env.NODE_ENV == 'development';

export default new Vuex.Store({
  modules: {
    member
  },
  strict: debug
});
