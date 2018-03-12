
vue的后台系统模版（纯单页配置）


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

重要的几点：

```
    element-ui升级到了2.0
    有支持mock
    有对页面根据登录状态做控制
    有对alioss进行支持，配置在src/uitl/alioss.js
    有对页面资源做cdn处理，配置在build/app.config.js

```
