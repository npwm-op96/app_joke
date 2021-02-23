import Vue from 'vue';
import Vuex from 'vuex';

import {joke} from './joke.module';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        joke
        
    }
});