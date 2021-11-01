# life-assistant
生活小助手

## 架构

**技术栈：ES6 + React + Mobx + AntD + Highcharts**

备选：TypeScript + React + Mobx + AntD + @ant-design/charts

### React

```bash
# 初始化工程
# 使用 create-react-app 脚手架
yarn create react-app life-assistant
cd life-assistant
yarn start
```

### Mobx

### AntD

```bash
# 引入 antd
yarn add antd

# 高级配置
yarn add @craco/craco
```

### Highcharts

```bash
# 引入 highcharts
yarn add highcharts highcharts-react-official
```

#### 支持外部数据加载

Highcharts 系列软件支持多种数据形式，可以是 Javascript 数组、json 文件、json 对象、表格数据、CSV 文件等，这些数据来源可以是本地文件、数据接口，甚至是不同网站。

#### 推荐的更新图标方式

将所有的图表配置选项保存在一个状态中。当 `setState` 被调用时，选项将被覆盖，只有新的配置选项被传递给 `charts.update()` 方法。

```js
// 初始化图表

// 更新图表
// ref 的使用

// Mobx
```

#### 使用 Highcharts 常见问题

##### 1、如何获得图表实例？

###### 方法一：使用 `React.createRef()`

###### 方法二：使用回调函数存储

##### 2、如何添加其他模块？

```js
// 导入模块
import HighchartsNoData from 'highcharts/modules/no-data-to-display';

// 初始化模块
HighchartsNoData(Highcharts);
```

##### 3、如何将 React 组件添加到图表元素中？

------通过使用 Portals（传送门），可以向每个 HTML 图表元素添加组件。

#### 替代方案 `@ant-design/charts`

demo

```bash
yarn add lodash
```

