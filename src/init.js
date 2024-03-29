/**
 * Created by vyouyou on 17-8-4.
 */

import "babel-polyfill";
// import "babel-runtime";
import Vue from "vue";
// import ElementUI from "element-ui";
// import "element-ui/lib/theme-default/index.css";
import "element-ui/lib/theme-chalk/index.css";

// Vue.use(ElementUI);
import {
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Form,
    FormItem,
    Button,
    Input,
    InputNumber,
    Loading,
    MessageBox,
    Message,
    Notification
} from "element-ui";

Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Button);
Vue.use(Input);
Vue.use(InputNumber);

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;

import AsyncComputed from "vue-async-computed";

Vue.use(AsyncComputed);
import NetPlugin from "@/plugin/net";

Vue.use(NetPlugin);

import logger from "@/util/logger";
import api from "@/conf/api";
import * as constants from "@/conf/constants";
import cache from "@/util/cache";
import utils from "@/util/utils";
import debounce from "throttle-debounce/debounce";
import moment from "moment";

window.moment = moment;
const install = function (VueClass, opts = {}) {
    /* istanbul ignore if */

    //method
    VueClass.utils = utils;
    VueClass.prototype.$utils = utils;

    VueClass.logger = logger;
    VueClass.prototype.$logger = logger;

    VueClass.api = api;
    VueClass.prototype.$api = api;

    VueClass.constants = constants;
    VueClass.prototype.$constants = constants;

    VueClass.cache = cache;
    VueClass.prototype.$cache = cache;

    const deb = (...args) => {
        if (args.length === 2) {
            return debounce.call(this, args[1], args[0]);
        } else {
            return debounce.call(this, 300, args[0]);
        }
    };
    VueClass.debounce = deb;
    VueClass.prototype.$debounce = deb;
};

Vue.use(install);

import store from "@/store";
import router from "@/router";

Vue.store = store;
Vue.router = router;

import Axios from "axios";
// set server response cookie save
Axios.defaults.withCredentials = true;

export default { store, router };
