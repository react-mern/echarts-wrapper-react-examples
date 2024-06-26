export const radialTreeCodeSnippet = `
import { EChartsReact, EChartsOption } from 'echarts-wrapper-react';
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
            <EChartsReact option={option} />
    )
}

export default RadialTree

export async function RadialTreeLoader() {
    const response = await fetch(import.meta.env.VITE_BASE_SERVER_URL+"/examples/data/asset/data/flare.json");
    const data = await response.json();
    return data;
}`;
