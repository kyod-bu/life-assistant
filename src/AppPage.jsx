import { useState } from 'react';
import { DatePicker, message, Button, version, Alert } from 'antd';

// import moment from 'moment';
// moment.locale('zh-cn');

export default function App2() {
    const [date, setDate] = useState(null);

    const handleChange = value => {
        message.info(`您选择的日期是：${value ? value.format('YYYY年MM月DD日') : '未选择'}`);
        setDate(value);
    }
    return (
        <div className="App">
            <h1>antd version: {version}</h1>
            <p>您选择的日期是：{date ? date.format('YYYY年MM月DD日') : '未选择'}</p>
            <DatePicker onChange={handleChange} />
            <Button type="primary" style={{ marginLeft: 8 }}>Button</Button>
            <Alert message="当前日期" description={date ? date.format('YYYY年MM月DD日') : '未选择'} />
        </div>
    )
};
