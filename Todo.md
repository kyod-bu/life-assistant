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

### 集成 React

用法

```jsx
import { observer } from 'mobx-react-lite'; // 或 'mobx-react'

const MyComponent = observer(props => ReactElement);
```

## 路由管理 Router