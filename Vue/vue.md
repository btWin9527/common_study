# vue学习

## 1. 项目初始化

> 1.1 项目初始化

```text
    # 初始化项目
    vue create vue-admin
```

> 1.2 项目配置测试环境和生产环境

**【配置第一步】**

+   【本地开发模式】最外层目录新建.env.development文件

```text
    # 本地开发环境
    ENV = 'development'
    
    # 本地开发环境的api
    VUE_APP_BASE_API = '/dev-api'
    
    # 本地开发模式路由取消懒加载
    VUE_CLI_BABEL_TRANSPILE_MODULES = true
    
```


+   【线上测试模式】最外层目录新建.env.staging文件

```text
    # 区分线上环境和本地开发
   NODE_ENV = production
   
   # 标识为线上测试环境
   ENV = 'staging'
   
   # 测试环境对应的api
   VUE_APP_BASE_API = '/stage-api'
    
```

+   【线上正式模式】最外层目录新建.env.staging文件

```text
    # 区分线上环境和本地开发
     ENV = 'production'
  
     # 线上正式环境对应的api
    VUE_APP_BASE_API = '/prod-api'
    
```

**【配置第二步】**

+   【配置打包环境】在package.json中的scripts:{}下配置如下

```json
{
"scripts": {
    "dev": "vue-cli-service serve",
    "build:prod": "vue-cli-service build",
    "build:stage": "vue-cli-service build --mode staging"
    }
}
    
```

> 1.3 eslint配置

> 1.4 mockjs配置

```text
    # 1. 下载mockjs
    npm install mockjs@1.0.1-beta3 -D
    # 或添加到package.json的devDependencies中,"mockjs": "1.0.1-beta3",再执行npm i
    
    # 2. 🏃🏃🏃 https://github.com/GGupzHH/Vue-cli-3.0-Mock 
```

> vue.config.js的配置
