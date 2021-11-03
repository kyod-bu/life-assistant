import TodoList from './TodoList';
import { todoStore, peopleStore } from '../mobx/store';

export default function App() {
    return (
        <div>
            <p>
                更改用户名：<input onKeyUp={(e) => peopleStore[1].name = e.target.value} />
            </p>
            <TodoList store={todoStore} />
        </div>
    );
}
