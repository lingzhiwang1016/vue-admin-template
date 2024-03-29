const config = {
    base: {
        mock: "http://127.0.0.1:8080",
        json: "http://127.0.0.1:8080"
    },
    testing: {
        api: "http://127.0.0.1:8081"
    },
    local: {
        api: "http://127.0.0.1:8081"
    },
    development: {
        api: "http://127.0.0.1:8081"
    },
    alpha: {
        api: "http://127.0.0.1:8081"
    },
    beta: {
        api: "http://127.0.0.1:8081"
    },
    production: {
        api: "http://127.0.0.1:8081"
    }
};
export default Object.assign(config.base, config[process.env.PACK_ENV]);
