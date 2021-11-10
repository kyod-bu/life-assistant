import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';

class Timer {
    secondsPassed = 0;

    constructor() {
        makeAutoObservable(this);
    }

    increaseTimer() {
        this.secondsPassed += 1;
    }
}

const myTimer = new Timer();

// 被`observer`包裹的函数式组件会被监听，在它每一次调用前发生的任何变化
const TimerView = observer(({ timer }) => <span>Seconds passed: {timer.secondsPassed}</span>);


export default function App() {
    return (
        <div>
            <h1>Timer</h1>
            <TimerView timer={myTimer} />
        </div>
    );
}

const intervalID = setInterval(() => {
    myTimer.increaseTimer();
}, 1000);

setTimeout(() => {
    clearInterval(intervalID);
    console.log("5秒后，清除计时器 intervalID")
}, 5 * 1000);
