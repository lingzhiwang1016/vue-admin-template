// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from "vue";
import init from "@/init";
import store from "@/store";
import router from "@/router";

import App from "@/App";

const renderVue = () => {
    const vm = new Vue({
        el: "#app",
        router,
        store,
        template: "<App/>",
        components: { App }
    });
    Vue.vm = vm;
};

store.dispatch("init").then(data => {
    renderVue();
}).catch(error => {
    Vue.logger.error("dispatch init error", error);
    renderVue();
});
window.Vue = Vue;
