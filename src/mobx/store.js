/**
 * 对应用状态进行建模 Store
 */
// import { action, autorun, computed, makeObservable, observable } from 'mobx';
const { action, autorun, computed, makeObservable, observable } = require('mobx');

class ObservableTodoStore {
    todos = [];
    pendingRequests = 0;

    constructor() {
        makeObservable(this, {
            todos: observable,
            pendingRequests: observable,
            completedtodosCount: computed,
            report: computed,
            addTodo: action,
        });
        autorun(() => console.log(this.report));
    }

    get completedtodosCount() {
        return this.todos.filter(
            todo => todo.completed === true
        ).length;
    }

    get report() {
        if(this.todos.length === 0) {
            return "<无>";
        }
        const nextTodo = this.todos.find(todo => todo.completed === false);
        return `
            下一个待办："${nextTodo ? nextTodo.task : "<无>"}"。
            进度：${this.completedtodosCount}/${this.todos.length}
        `;
    }

    addTodo(task) {
        this.todos.push({
            task: task,
            completed: false,
            assignee: null
        });
    }
}

// 创建一个带有待办 todos 集合的 todoStore 实例
const todoStore = new ObservableTodoStore();

todoStore.addTodo("阅读 Mobx 教程");
todoStore.addTodo("试用 Mobx 教程");
todoStore.todos[0].completed = !todoStore.todos[0].completed;
todoStore.todos[1].task = "随机待办 " + Math.random();
todoStore.todos.push({
    task: '找到一块好奶酪',
    completed: true
});
// 诸如此类……可以添加你自己的语句


const peopleStore = observable([
    { name: 'Michel' },
    { name: '我' },
]);
todoStore.todos[0].assignee = peopleStore[0];
todoStore.todos[1].assignee = peopleStore[1];
peopleStore[0].name = "Michel Weststrate";

export { todoStore, peopleStore };
