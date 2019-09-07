# easy-vue-pro

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 路由表配置
路由基于 vue-router，在此基础上增量实现一些常见功能，因此只会对增加部分的配置加以注解，其他关于路由更详细说明可以参考[vue-router 文档](https://router.vuejs.org/zh/)。

example:

``` js
{
  path: "/",
  name: "主页",
  auth: true,
  redirect: "/home",
  menu: true,
  meta: {
    icon: "bars",
    title: "主页"
  },
  component: () =>
    import(/* webpackChunkName: "layout" */ "./layouts/BasicLayout"),
  children: [
    {
      path: "/child",
      name: "主页的下一级",
      auth: true,
      menu: true,
      meta: {
        icon: "edit",
        title: "主页的下一级"
      }
    }
  ]
}
```

补充说明：
```
auth: 是否需要鉴权，非必填，默认值为 false
menu: 是否渲染上menu，非必填
name: 若 menu 值为 true，也会使用该字段的值作为名称
meta: {
  icon: 具体参考[图标 Icon](https://vue.ant.design/components/icon-cn/)
  title: document title
},
component: 具体组件,
children: [
  {
    // 配置与父级一样
    menu: 只有父级 menu 设置为true，此处设置 true 才有效
  }
]
```