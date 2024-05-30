import { ReactEcharts } from 'echarts-wrapper-react';
import { useLoaderData } from 'react-router-dom';
import 'echarts-gl';
import Drawer from '@/components/Drawer';
import { _3DBarWithDataSetCodeSnippet } from '@/constant/3D-bar/3DbarWithDataset';

const _3DBarWithDataSet = () => {
    const data = useLoaderData();

    const option: any = {
        grid3D: {},
        tooltip: {},
        xAxis3D: {
            type: 'category',
        },
        yAxis3D: {
            type: 'category',
        },
        zAxis3D: {},
        visualMap: {
            max: 1e8,
            dimension: 'Population',
        },
        dataset: {
            dimensions: [
                'Income',
                'Life Expectancy',
                'Population',
                'Country',
                { name: 'Year', type: 'ordinal' },
            ],
            source: data,
        },
        series: [
            {
                type: 'bar3D',
                // symbolSize: symbolSize,
                shading: 'lambert',
                encode: {
                    x: 'Year',
                    y: 'Country',
                    z: 'Life Expectancy',
                    tooltip: [0, 1, 2, 3, 4],
                },
            },
        ],
    };
    return (
        <>
            <Drawer>{_3DBarWithDataSetCodeSnippet}</Drawer>
            <ReactEcharts option={option} />
        </>
    );
};

export default _3DBarWithDataSet;

export async function _3DBarWithDataSetLoader() {
    const response = await fetch(
        '/api/examples/data/asset/data/life-expectancy-table.json'
    );
    const data = await response.json();
    return data;
}
