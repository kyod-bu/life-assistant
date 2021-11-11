import { useState } from 'react';
import { ConfigProvider, DatePicker, message, Button, version, Alert } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import './styles/App.css';

moment.locale('zh-cn');

const App = () => {
    const [date, setDate] = useState(null);

    const handleChange = value => {
        message.info(`您选择的日期是：${value ? value.format('YYYY年MM月DD日') : '未选择'}`);
        setDate(value);
    }
    return (
        <ConfigProvider locale={zhCN}>
            <div className="App">
                <h1>antd version: {version}</h1>
                <p>您选择的日期是：{date ? date.format('YYYY年MM月DD日') : '未选择'}</p>
                <DatePicker onChange={handleChange} />
                <Button type="primary" style={{ marginLeft: 8 }}>Button</Button>
                <Alert message="当前日期" description={date ? date.format('YYYY年MM月DD日') : '未选择'} />
            </div>
        </ConfigProvider>
    )
};

export default App;
