import { observer } from 'mobx-react-lite';
import RenderCounter from './RenderCounter';

export default observer(({ todo }) => {
    const onRename = () => {
        todo.task = prompt('任务名称', todo.task) || todo.task;
    }

    const onToggleCompleted = () => {
        todo.completed = !todo.completed;
    }

    return (
        <li onDoubleClick={ onRename }>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={onToggleCompleted}
            />
            { todo.task }
            {todo.assignee ? <small>{todo.assignee.name}</small> : null}
            <RenderCounter />
        </li>
    );
});
