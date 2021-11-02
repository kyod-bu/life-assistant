import { useState } from 'react';

import { DatePicker, message, Button, Alert } from 'antd';

import ChartsDemo from '../charts/ChartsDemo';

const Demo = () => {
    const [date, setDate] = useState(null);
    const handleChange = value => {
        message.info(`您选择的日期是：${value ? value.format('YYYY年MM月DD日') : '未选择'}`);
        setDate(value);
    };
    return (
        <div>
            <div style={{ width: 400, margin: '100px auto' }}>
                <Button type="primary">按钮</Button>
                <DatePicker onChange={handleChange} />
                <div style={{ marginTop: 16 }}>
                    <Alert message="当前日期" description={date ? date.format('YYYY年MM月DD日') : '未选择'} />
                </div>
            </div>
            <ChartsDemo series={[]} />
            <ChartsDemo series={[{name: '图2', data: [10, 3, 90]}]} />
            {/* <div id="container" style={{ width: 600, height: 400 }}>Highcharts 图表</div> */}
        </div>
    );
};

export default Demo;
