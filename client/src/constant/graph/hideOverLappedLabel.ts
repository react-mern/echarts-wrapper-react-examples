export const HideOverLappedLabelCodeSnippet = `import { EChartsOption, EChartsReact } from 'echarts-wrapper-react';
import { useLoaderData } from 'react-router-dom'

const HideOverLappedLabel = () => {
    const graphData: any = useLoaderData();

    const option: EChartsOption = {
        tooltip: {},
        legend: [
            {
                data: graphData.categories.map(function (a) {
                    return a.name;
                })
            }
        ],
        series: [
            {
                name: 'Les Miserables',
                type: 'graph',
                layout: 'none',
                data: graphData.nodes,
                links: graphData.links,
                categories: graphData.categories,
                roam: true,
                label: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                },
                labelLayout: {
                    hideOverlap: true
                },
                scaleLimit: {
                    min: 0.4,
                    max: 2
                },
                lineStyle: {
                    color: 'source',
                    curveness: 0.3
                }
            }
        ]
    };
    return (
        <EChartsReact option={option} />
    )
}

export default HideOverLappedLabel

export async function hideOverLappedLabelLoader() {
    const response = await fetch(import.meta.env.VITE_BASE_SERVER_URL+"/examples/data/asset/data/les-miserables.json");
    const data = await response.json();
    return data;
}`;
