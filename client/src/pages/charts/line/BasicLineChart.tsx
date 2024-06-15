import { EChartsReact, EChartsOption } from 'echarts-wrapper-react'
import { basicLineChartCodeSnippets } from '../../../constant/line/basicLineChart';
import Drawer from '../../../components/Drawer';

const BasicLineChart = () => {

    const option: EChartsOption = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [150, 230, 224, 218, 135, 147, 260],
                type: 'line'
            }
        ]
    };

    return (
        <>
            <Drawer>
                {basicLineChartCodeSnippets}
            </Drawer>
            <EChartsReact option={option} />
        </>
    )
}

export default BasicLineChart
