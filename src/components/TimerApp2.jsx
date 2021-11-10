import { makeAutoObservable } from 'mobx';
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
            <h1>Timer</h1>
            <TimerView />
        </TimerContext.Provider>
    );
}
