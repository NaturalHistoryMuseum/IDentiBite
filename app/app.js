import Vue from "nativescript-vue";
import App from "./components/App";
import Home from "./pages/Home";
import DrawerContent from "./components/DrawerContent";
import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
import * as utils from "~/shared/utils";
import SelectedPageService from "~/shared/selected-page-service";

Vue.use(RadSideDrawer);

import RadListView from 'nativescript-ui-listview/vue';
Vue.use(RadListView);

import { ModalStack, overrideModalViewMethod, VueWindowedModal } from "nativescript-windowed-modal"
overrideModalViewMethod()
Vue.registerElement("ModalStack", () => ModalStack)
Vue.use(VueWindowedModal)


Vue.config.silent = (TNS_ENV === 'production');

import store from './store';

import './filters.js';

// Routing
import router from './router'

Vue.prototype.$router = router

Vue.prototype.$goto = function (pageName, options = {}) {

    if (pageName == 'home') {
        options['clearHistory'] = true
    } else if (pageName == 'modal') {
        // Fake it like a modal
        options['transition'] = {
            name: "fade",
            duration: 200,
            curve: "spring"
        }
    }

    this.$navigateTo(this.$router[pageName], options);
    utils.closeDrawer();
}

Vue.prototype.$updateSelectedPage = function (pageName) {
    SelectedPageService.getInstance().updateSelectedPage(pageName);
}


// Register the header component globally
import Header from "./components/Header";
Vue.component('Header', Header);

// Register the subheader component globally
import SubHeader from "./components/SubHeader";
Vue.component('SubHeader', SubHeader);

import Anchor from "./components/Anchor";
Vue.component('Anchor', Anchor);

new Vue({
    render(h) {
        return h(
            App,
            [
                h(DrawerContent, { slot: 'drawerContent' }),
                h(Home, { slot: 'mainContent' })
            ]
        )
    },
    store: store
}).$start();
