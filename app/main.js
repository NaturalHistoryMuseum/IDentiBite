import Vue from 'nativescript-vue'
import App from './components/App'
import store from './store';

import './filters.js';

// FIXME: Add to production flag??
import VueDevtools from 'nativescript-vue-devtools'
Vue.use(VueDevtools)

import RadListView from 'nativescript-ui-listview/vue';
Vue.use(RadListView);

import { ModalStack, overrideModalViewMethod, VueWindowedModal } from "nativescript-windowed-modal"
overrideModalViewMethod()
Vue.registerElement("ModalStack", () => ModalStack)
Vue.use(VueWindowedModal)

// Routing
import router from './router'

// Prototype functions
Vue.prototype.$router = router
Vue.prototype.$goto = function (to, options = {}) {

    this.$closeDrawer();
    // Merge frame option into any option parameters
    Object.assign(options, { frame: "mainContent" });

    if (to == 'home') {
        options['clearHistory'] = true
    }

    this.$navigateTo(
        this.$router[to],
        options
    )
}

Vue.prototype.$tapPreventPropagation = function () { }

Vue.prototype.$showDrawer = function () {
    Vue.prototype.drawer.showDrawer();
}

Vue.prototype.$closeDrawer = function () {
    Vue.prototype.drawer.closeDrawer();
}

// onBackTap() {
//     frameModule.topmost().goBack();
// },
// onToggleDrawerTap() {
//     Vue.prototype.drawer.toggleDrawerState();
// }

// Register the header component globally
import Header from "./components/Header";
Vue.component('Header', Header);

if (TNS_ENV !== 'production') {
    Vue.use(VueDevtools)
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer)

import { TNSFontIcon, fonticon } from 'nativescript-fonticon';

TNSFontIcon.debug = true;
TNSFontIcon.paths = {
    'fa': './assets/font-awesome.css'
};
TNSFontIcon.loadCss();

Vue.filter('fonticon', fonticon);

new Vue({
    store,
    render: h => h('frame', [h(App)]),
}).$start()
