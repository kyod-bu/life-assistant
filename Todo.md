# TodoApp

实现一个 TodoApp（CRUD，create｜read｜update｜delete）

麻雀虽小，五脏俱全

## 状态管理 Mobx

[十分钟入门 Mob & React](https://zh.mobx.js.org/getting-started.html)

```js
import { action, autorun, computed, makeObservable, observable } from 'mobx';
import { observer } from 'mobx-react-lite';
```

1. 一个简单的待办 store ...

2. 变成响应式

   使用注解 `observable`  `computed`  `action` ，可以为对象引入 observable 属性

   刻意地展示出注解：借助 `makeObservable` 或 `makeAutoObservable`

3. 把 React 变成响应式

   围绕这个 Store 构建一个响应式的用户界面

   `mobx-react-lite` 包中的 `observer` 高阶组件包装器通过把 React 组件用 `autorun` 包装起来，实现React 组件响应式。如此这般，可以自动让组件和状态同步更新。

   ‼️Mobx 会从 store 里的状态中自动派生并更新用户界面中相关的部分。

   ```jsx
   import { observer } from 'mobx-react-lite';
   
   export default observer(({ store }) => {
       const onNewTodo = () => {
           store.addTodo(prompt('输入新的待办：', '请来杯咖啡'));
       }
   
       return (
           <div>
               { store.report }
               <ul>
                   { store.todos.map(
                       (todo, idx) => <TodoView todo={todo} key={idx} />
                   ) }
               </ul>
               {store.pendingRequests>0 ? <marquee>正在加载……</marquee> : null}
               <button onClick={onNewTodo}>新待办</button>
               <button onClick={loadingTodo}>加载待办</button>
               <small>（双击待办进行编辑）</small>
               <RenderCounter />
           </div>
       );
   });
   ```

4. 引用的使用

   ‼️数据存放在哪里，在什么时候发生改变，其实并不重要，只要对象被转化成了 observable，Mobx 就能对它们进行追踪。

5. 异步 actions

   ```js
   store.pendingRequests++;
   setTimeout(action(() => {
     store.addTodo('随机待办 ' + Math.random());
     store.pendingRequests--;
   }), 2000);
   ```

## MobX 集成 React

用法

```jsx
import { observer } from 'mobx-react-lite'; // 或 'mobx-react'

const MyComponent = observer(props => ReactElement);
```

### 本地与外部状态

通过不同的设计模式去使用被 `observer` 包裹的组件：

#### `observer` 组件中使用外部状态

1. 使用 props

2. 使用全局变量

3. 使用 React context 👍

   推荐👍：使用 React context 共享整个可观察子树

   ```jsx
   import { observer } from 'mobx-react-lite';
   import { createContext, useContext } from 'react';
   
   class Timer {
       secondsPassed = 0;
   
       constructor() {
           makeAutoObservable(this);
       }
   
       increaseTimer() {
           this.secondsPassed += 1;
       }
   }
   
   const TimerContext = createContext();
   
   const TimerView = observer(() => {
       // 从 context 中获取 timer
       const timer = useContext(TimerContext);
       return (
           <span>Seconds passed: {timer.secondsPassed}</span>
       );
   });
   
   
   export default function App() {
       return (
           <TimerContext.Provider value={new Timer()}>
               <TimerView />
           </TimerContext.Provider>
       );
   }
   ```

#### 在 `observer` 组件中使用全局可观察对象

1. useState 和 observable class
2. useState 与 全局可观察对象
3. useLocalObservable hook

#### 你可能并不需要全局的可观察状态

使用 MobX 的可观察能力作为 React Components 的一种状态补充，比如出现以下情况：

1. 层级很深
2. 拥有计算属性
3. 需要共享状态给其它 `observer` components

### 始终在 `observer` 组件中使用可观察能力

`observer` 是使用修饰模式增强你的组件，而不是它调用你的组件。所以通常所有的组件都可能用了 `observer` ，但是不要担心，它不会导致性能损失。从另一个角度讲，更多的 `observer` 组件可以使渲染更高效，因为它们更新数据的颗粒度更细。

#### 小贴士：尽可能晚地从对象中获取值

#### 不要将可观察对象传递到 不是 `observer` 的组件中

#### 回调组件可能会需要 `<Observer>`

### 小贴士

1. 服务器渲染（SSR）
2. 注意：`mobx-react` *VS* `mobx-react-lite`
3. 注意：`observer` or `React.memo`
4. 提示：应用 `observer` 到基于 class 的组件
5. 提示：给组件起个好名字，方便在 React DevTools 中查看
6. 提示：当你想要将 `observer` 和其他高阶组件（HOC）一起使用，需要首先调用 `observer`
7. 提示：从 props 导出计算属性
8. Tips：useEffect 与 可观察对象

### 疑难解答：组件没有进行重绘…

1. 请确保你没有遗漏 `observer` （常见错误）
2. 请确保你传入的对象是可观察对象。可以使用 `isObservable` 这个工具函数，如果需要在运行时检查可以使用这个工具函数 `isObservableProp`
3. 请检查在浏览器控制台中的任何错误或者警告
4. 请确保你大体上是理解 Mobx 的调用栈
5. 小贴士中提及的创建错误
6. 配置： Mobx 如何警告你的机制和输出日志
7. 使用追踪（trace）来确保你传递给 Mobx 了正确的东西，或者是否正确使用了 Mobx 的 `spy` / `mobx-logger` 包

## React优化

### 使用 React 组件渲染

Mobx 非常快，通常比 Redux 更快。

#### 使用大量的小组件

`observer` 组件将跟踪他们使用的值，并且当它们中任何一个值发生时重新渲染。所以你的组件越小，它们重新渲染产生的变化越小。这意味着用户界面的更多部分具备彼此独立渲染的可能性。

#### 专用组件去渲染列表

这点在渲染大量数据时格外重要。React 在渲染大量数据时表现非常糟糕，因为协调器必须评估每个集合变化的集合所产生的组件。因此，建议使用专门的组件来映射集合并渲染这个组件，且不再渲染其他组件。

#### 不要使用数组的索引作为 key

不要使用数组的索引或者将来可能会改变的值作为 key。如果需要的话，为你的对象生成 ids。

#### 晚一点使用间接引用值

使用 `mobx-react` 时，推荐尽可能晚的使用间接引用值。这是因为当使用 Observable 间接引用值时 Mobx 会自动重新渲染组件。如果间接引用值发生在组件树的层级很深，那么需要重新渲染的组件就越少。

```jsx
// 慢的：
<DisplayName name={person.name} />

// 快的：
<DisplayName person={person} />
```

在这个快的示例中，改变 `name` 属性只会触发 `DisplayName` 重新渲染，在慢的示例中，组件的所有者也必须重新渲染。前者没有错，如果组件的拥有者渲染的足够快（通常是这样！），这种方式也能很好的运行。

##### 尽早绑定函数

为了获得最佳的性能，你不得不创建大量小的 `observer` 组件，它们每个都用来渲染特定数据的不同部分，例如：

```jsx
const PersonNameDisplayer = observer(({ person }) => <DisplayName name={person.name} />);

const CarNameDisplayer = observer(({ car }) => <DisplayName name={car.model} />);

const ManufacturerNameDisplayer = observer(({ car }) => <DisplayName name={car.manufacturer.name} />);
```

如果你拥有很多不同的数据，这种快速的方式就会变得很冗长。另一种方式是使用函数来返回想要渲染 `Displayer` 的数据。

```jsx
const GenericNameDisplayer = observer(({ getName }) => <DisplayName name={getName()} />);
```

然而，你可以这样来使用组件：

```jsx
const MyComponent = ({ person, car }) => (
    <>
        <GenericNameDisplayer getName={() => person.name} />
        <GenericNameDisplayer getName={() => car.model} />
        <GenericNameDisplayer getName={() => car.manufacturer.name} />
    </>
)
```

这种方式允许 `GenericNameDisplayer` 渲染任何名称的组件，你依然可以保持组件渲染在最低的限度。

## 路由管理 Router

在 Web 应用中开始使用 React Router

```shell
# 引入 router
yarn add react-router-dom
```

### 基本使用

```jsx
/**
 * 在 create-react-app 中使用 `react-router-dom`
 */
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/" />Home</li>
                        <li><Link to="/about" />About</li>
                        <li><Link to="/users" />Users</li>
                    </ul>
                </nav>

                {/* 通过 Switch 查看它的子路由 Route，并渲染出 与当前 URL 匹配的第一个子路由 */}
                <Switch>
                    <Route path="/about"><About /></Route>
                    <Route path="/users"><Users /></Route>
                    <Route path="/"><Home /></Route>
                </Switch>
            </div>
        </Router>
    )
};

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

export default App;
```

### 基本使用2：嵌套路由

重点关注：Topics

```jsx
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/users">Users</Link></li>
                        <li><Link to="/topics">Topics</Link></li>
                    </ul>
                </nav>

                {/* 通过 Switch 查看它的子路由 Route，并渲染出 与当前 URL 匹配的第一个子路由 */}
                <Switch>
                    <Route path="/about"><About /></Route>
                    <Route path="/users"><Users /></Route>
                    <Route path="/topics"><Topics /></Route>
                    <Route path="/"><Home /></Route>
                </Switch>
            </div>
        </Router>
    )
};

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

// 嵌套路由
const Topics = () => {
    let match = useRouteMatch();

    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>Props vs State</Link>
                </li>
            </ul>

            {/* Topics 页面有自己的 Switch 和 建立在 /topics URL 路径上的更多的路由。
            你可以想到第二个 Route 在这里作为所有 topics 的“index”页面，或 未选择 topic 时显示的页面 */}
            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <Topic />
                </Route>
                <Route path={match.path}>
                    <h3>请选择一个 topic.</h3>
                </Route>
            </Switch>
        </div>
    );
};

const Topic = () => {
    let { topicId } = useParams();
    return <h3>Request topic ID: {topicId}</h3>;
};

export default App;
```

### 主要组件

React Router 中的组件主要分为三类：

```jsx
import { 
  BrowserRouter, HashRouter, // 路由器组件
  Switch, Route, // 路由匹配器组件
  Link, NavLink, Redirect // 导航组件，也可叫做 路由变更器组件
} from 'react-router-dom';
```

#### 路由器： `BrowserRouter`  *VS*  `HashRouter`

主要区别在于 它们存储 URL 以及与您的 Web 服务器通信方式。

* `<BrowserRouter>` 使用常规 URL 路径。这些通常是最好看的 URL，但他们需要正确配置您的服务器。
* `<HashRouter>` 将当前位置存储在 URL 的 hash 部分中，因此 URL 看起来像 <http://example.com/#/your/page> .由于哈希从未发送到服务器，这意味着不需要特殊的服务器配置。

要使用路由器，只需确保它在元素层次结构的根部呈现。通常，您会将顶级 `<App>` 元素包裹在路由器中，举个🌰

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
    return <h1>Hello React Router</h1>;
};

ReactDOM.render(
    <React.StrictMode>
    		<BrowserRouter>
           	<App />
    		</BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
```

#### 路由匹配器：`Switch` & `Route`

当一个 `<Switch>` 被渲染时，他会搜索他的 子元素 `<Route>` ，以找到 path 与当前 URL 匹配的元素。当他找到一个时，他会渲染他 `<Route>` 并忽略其他的。这意味着您应该将 子元素 `<Route>` 中，具有更具体（通常更长）的 path 放在不太具体的之前。

如果没有 `<Route>` 匹配项，则不 `<Switch>` 呈现任何内容 `null`。

```jsx
<Switch>
    {/* 如果当前 URL 为 `/about`，则渲染此路由，其余的被忽略 */}
    <Route path="/about"><About /></Route>
  
    {/* 请注意这两条路由是已经排序的。 
        更具体的 path="/contact/:id" 出现在 path="/contact" 之前，导致 查看单个联系人时将呈现路由 */}
    <Route path="/contact/:id"><Contact /></Route>
    <Route path="/contact"><AllContacts /></Route>
  
    {/* 如果之前的路由都没有渲染任何东西，这条路由充当 fallback
        ⚠️ 重要提示：带有 path="/" 的路由将 `始终` 匹配 URL，因为所有 URL 都以 "/" 开头。 所以我们把这个放在最后 */}
    <Route path="/"><Home /></Route>
</Switch>
```

⚠️ 注意：`<Route path>` 匹配 URL 的**开头**，而不是整个内容。所以 `<Route path="/">` 将**始终**匹配 URL 。正因如此，我们通常把 `<Route path="/">` 放在 `<Switch>` 的最后面。***另一种*** 可能的解决方案是使用 `<Route exact path="/">` 它确实匹配完整的 URL。

⚠️ 注：虽然 React Router 不支持渲染 `Switch` 元素外的 `<Route>` ，作为 5.1 版本，我们推荐使用 `useRouteMatch` 来代替。此外，不建议使用不带参数 path 的 `<Route>` ，而是建议您使用 hooks 来访问您需要的任何变量。

#### 导航 or 路由变更器：`Link` & `NavLink` & `Redirect`

React Router 提供了一个 `<Link>` 组件，在您的应用程序中创建链接。无论在何处渲染 `<Link>` , 一个锚点 `<a>` 都将在您的 html 文档中被渲染。

```jsx
<Link to="/">Home</Link>
// <a href="/">Home</a>
```

`<NavLink>` 是一种特殊类型的 `<Link>` 组件，当他的 `to` 参数与当前的 location 匹配时，他可以将自己设置为 `active` .

```jsx
<NavLink to="/react" activeClassName="hurray">
  React
</NavLink>

// 当 URL 是 `/react` 时，则渲染：
// <a href="/react" className="hurray">React</a>

// 否则，渲染：
// <a href="/react">React</a>
```

任何时候你想强制导航，你可以渲染一个 `<Redirect>` 。当 `<Redirect>` 渲染时，将使用他的 `to` 参数进行导航。

```jsx
<Redirect to="/login" />
```

### 服务器渲染

服务器上的渲染有点不同，因为它都是无状态的。基本思想是：将应用包装在无状态 `<StaticRouter>` 而不是 `<BrowserRouter>`. 我们从服务器传入请求的 URL，以便路由可以配置，并且 `context` props 将会被使用。

### 代码拆分

### 卷轴修复

### 哲学

### 测试

### 深度 Redux 集成

### 静态路由

## 整合项目架构