import Vue from 'vue';
import Vuex from 'vuex';
import sustainStore from './modules/sustainStore';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
    modules: {
        sustainStore
    }
});