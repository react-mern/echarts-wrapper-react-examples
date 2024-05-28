export const radialTreeCodeSnippet = `import Drawer from '@/components/Drawer';
import { radialTreeCodeSnippet } from '@/constant/tree/radialTree';
import { ReactEcharts, EChartsOption } from 'echarts-wrapper-react';
import { useLoaderData } from 'react-router-dom'

const RadialTree = () => {
    const data: any = useLoaderData();
    const option: EChartsOption = {
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [
            {
                type: 'tree',
                data: [data],
                top: '18%',
                bottom: '14%',
                layout: 'radial',
                symbol: 'emptyCircle',
                symbolSize: 7,
                initialTreeDepth: 3,
                animationDurationUpdate: 750,
                emphasis: {
                    focus: 'descendant'
                }
            }
        ]
    }
    return (
            <ReactEcharts option={option} />
    )
}

export default RadialTree

export async function RadialTreeLoader() {
    const response = await fetch("/api/examples/data/asset/data/flare.json");
    const data = await response.json();
    console.log(data)
    return data;
}`;
