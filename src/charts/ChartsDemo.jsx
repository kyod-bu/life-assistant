import React, { useState, useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsNoData from 'highcharts/modules/no-data-to-display';
// import _ from 'lodash';
import { options } from './options';

HighchartsNoData(Highcharts);

const ChartsDemo = (props) => {
    // const { series } = props;
    console.log(props);

    const chart = useRef();

    // 避免首次加载时，还没有拿到数据之前，页面就进行加载而导致没有数据
    // useEffect(() => {
    //     const reload = _.throttle(() => {
    //         chart.current.update({
    //             chart: {
    //                 type: 'bar'
    //             },
    //             series: []
    //         });
    //     }, 500);
    //     window.addEventListener('resize', reload);
    //     return () => window.removeEventListener('resize', reload);
    // }, []);

    const [chartOptions, setChartOptions] = useState(options);
    const chartRef = useRef();
    const updateSeries = () => {
        // 图表只使用新配置选项进行更新
        setChartOptions({
            series: [{
                name: '小明',
                data: [Math.random() * 15, Math.random() * 20, Math.random() * 10]
            }, {
                name: '小红',
                data: [Math.random() * 15, Math.random() * 20, Math.random() * 10]
            }]
        })
    };
    return (
        <div style={{ width: 600, height: 400 }}>
            <HighchartsReact
                highcharts={Highcharts} // 必须，用于模块初始化后传递 Highcharts 实例
                options={chartOptions} // 必须，Highcharts 图表配置对象
                ref={ chartRef }
                // callback={ref => chart.current = ref} // 非必需，创建图表后执行的回调函数。函数的第一个参数将保存创建的 chart。函数中的 this 默认指向 chart
                // // ====== 之后的配置为非必要的 ======
                // constructorType = { 'chart' } // 非必需，构造函数方法的字符串
                // allowChartUpdate = { true } // 非必需，在更改父组件时使用 chart.update() 方法将新选项应用于图表。此选项允许关闭更新
                // immutable = { false } // 非必需，在 prop 更新时重新初始化图表（与 chart.update() 相反），在某些情况下有用，但比常规更新慢
                // updateArgs = { [true, true, true] } // 非必需，数组 update() 的函数可选参数。参数应该以原生 Highcharts 函数相同的顺序定义：[redraw, oneToOne, animation]
                // containerProps = {{ className: 'chartContainer' }} // 非必需，将 props 对象传递给 React.createElement() 方法中的图表容器。用于添加样式
            />
            <button onClick={updateSeries}>Update Series</button>
        </div>
    );
}

export default ChartsDemo;
