export const WaterfallChartCodeSnippets = `import { EChartsReact, EChartsOption } from 'echarts-wrapper-react'

const WaterFallChart = () => {
    const option: EChartsOption = {
        title: {
            text: 'Waterfall Chart',
            subtext: 'Living Expenses in Shenzhen'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: function (params) {
                const tar = params[1];
                return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            splitLine: { show: false },
            data: ['Total', 'Rent', 'Utilities', 'Transportation', 'Meals', 'Other']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'Placeholder',
                type: 'bar',
                stack: 'Total',
                itemStyle: {
                    borderColor: 'transparent',
                    color: 'transparent'
                },
                emphasis: {
                    itemStyle: {
                        borderColor: 'transparent',
                        color: 'transparent'
                    }
                },
                data: [0, 1700, 1400, 1200, 300, 0]
            },
            {
                name: 'Life Cost',
                type: 'bar',
                stack: 'Total',
                label: {
                    show: true,
                    position: 'inside'
                },
                data: [2900, 1200, 300, 200, 900, 300]
            }
        ]
    };
    return (
        <EChartsReact option={option} />
    )
}

export default WaterFallChart
`;
