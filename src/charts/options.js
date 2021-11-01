// 将所有的图表配置选项保存在一个状态中
export const options = {
    chart: {
        type: 'bar'
    },
    credits: {
        enabled: false // 禁用版权信息
    },
    title: {
        text: '我的第一个图表' // 标题
    },
    xAxis: {
        categories: ['苹果', '香蕉', '橙子'] // x 轴分类
    },
    yAxis: {},
    series: [{
        data: [1, 2, 3]
     }],
    plotOptions: {
        series: {
            point: {
                events: {
                    // mouseOver: setHoverData()
                }
            }
        }
    }
};
