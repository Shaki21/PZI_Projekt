import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuetify);
Vue.use(VueAxios, axios)

export default new Vuetify({
});
