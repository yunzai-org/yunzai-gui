## Yunzai GUI

只需要有Node.js环境即可随时随地可用的Yunzai可视化管理

此仓库正在设计中....

## 使用

- 启动

> 可以在任意目录执行，GUI会把当前目录视为机器人根目录

> 若当前目前没有机器人，会进入安装项目步骤

```sh
npx yunzai-gui@latest
```

访问 `http://localhost:3000/`

账户 `12345678`

密码 `12345678`

- 修改

`yunzai-gui.json`

```json
{
  "admins": [
    {
      "username": "12345678",
      "password": "12345678"
    }
  ]
}
```

## 测试

```sh
git clone --depth=1 https://github.com/yunzai-org/yunzai-gui.git
cd yunzai-gui
```

> 尝试启动

```sh
npm install yarn@1.19.1 -g
yarn
yarn dev
```

> 测试

在任意目录中执行

```sh
yunzai-gui
```

- 访问接口

http://localhost:3000/api/env

http://localhost:3000/api/config
