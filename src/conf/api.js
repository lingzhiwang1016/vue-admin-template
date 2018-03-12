import config from "@/conf/config";

export default {

    login: config.json + "/users/login",
    logout: config.json + "/users/logout",

    sysUser_getCurrentUser: config.json + "/users/current" // 用户信息

};
