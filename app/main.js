import Vue from 'nativescript-vue'
import App from './components/App'
import store from './store';

import VueDevtools from 'nativescript-vue-devtools'

// Routing
import router from './router'
Vue.prototype.$router = router
Vue.prototype.$goto = function (to) {
    this.$navigateTo(
        this.$router[to], {}
    )
}

// Register the page template
import PageTemplate from './templates/PageTemplate.vue'
Vue.component('page-template', PageTemplate);

if (TNS_ENV !== 'production') {
    Vue.use(VueDevtools)
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer)

new Vue({
    store,
    render: h => h('frame', [h(App)])
}).$start()
