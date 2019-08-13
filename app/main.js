import Vue from 'nativescript-vue'
import App from './components/App'
import store from './store';

import VueDevtools from 'nativescript-vue-devtools'

// const data = require('./assets/data.json');

// var fs = require('file-system');
// var documents = fs.knownFolders.currentApp();
// var jsonFile = documents.getFile('./assets/data.json');

// jsonFile.readText().then(function (content) {
//     data = JSON.parse(content)
//     // x = JSON.parse(content)
//     // console.log(x)
// });

// Routing
import router from './router'
Vue.prototype.$router = router
Vue.prototype.$goto = function (to) {
    this.$closeDrawer();
    this.$navigateTo(
        this.$router[to], { frame: "mainContent" }
    )
}

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

// Register the page template
// import PageTemplate from './templates/PageTemplate.vue'
// Vue.component('page-template', PageTemplate);

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

// import NSVueGlobalDrawer from 'nativescript-vue-global-drawer'

// Vue.use(NSVueGlobalDrawer)

new Vue({
    store,
    render: h => h('frame', [h(App)])
}).$start()
