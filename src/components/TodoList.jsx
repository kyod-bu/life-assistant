import { observer } from 'mobx-react-lite';
import { action } from 'mobx';
import TodoView from './TodoView';
import RenderCounter from './RenderCounter';

export default observer(({ store }) => {
    const onNewTodo = () => {
        store.addTodo(prompt('输入新的待办：', '请来杯咖啡'));
    }

    const loadingTodo = () => {
        store.pendingRequests++;
        setTimeout(action(() => {
            store.addTodo('随机待办 ' + Math.random());
            store.pendingRequests--;
        }), 2000);
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
