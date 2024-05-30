import Drawer from '@/components/Drawer';
import { encodeAndMatrixCodeSnippet } from '@/constant/dataset/encodeAndMatrix';
import { EChartsOption, ReactEcharts } from 'echarts-wrapper-react';
import { useLoaderData } from 'react-router-dom';

const EncodeAndMatrix = () => {

    const data: any = useLoaderData();
    const sizeValue = '57%';
    const symbolSize = 2.5;

    const option: EChartsOption = {
        legend: {},
        tooltip: {},
        toolbox: {
            left: 'center',
            feature: {
                dataZoom: {}
            }
        },
        grid: [
            { right: sizeValue, bottom: sizeValue },
            { left: sizeValue, bottom: sizeValue },
            { right: sizeValue, top: sizeValue },
            { left: sizeValue, top: sizeValue }
        ],
        xAxis: [
            {
                type: 'value',
                gridIndex: 0,
                name: 'Income',
                axisLabel: { rotate: 50, interval: 0 }
            },
            {
                type: 'category',
                gridIndex: 1,
                name: 'Country',
                boundaryGap: false,
                axisLabel: { rotate: 50, interval: 0 }
            },
            {
                type: 'value',
                gridIndex: 2,
                name: 'Income',
                axisLabel: { rotate: 50, interval: 0 }
            },
            {
                type: 'value',
                gridIndex: 3,
                name: 'Life Expectancy',
                axisLabel: { rotate: 50, interval: 0 }
            }
        ],
        yAxis: [
            { type: 'value', gridIndex: 0, name: 'Life Expectancy' },
            { type: 'value', gridIndex: 1, name: 'Income' },
            { type: 'value', gridIndex: 2, name: 'Population' },
            { type: 'value', gridIndex: 3, name: 'Population' }
        ],
        dataset: {
            dimensions: [
                'Income',
                'Life Expectancy',
                'Population',
                'Country',
                { name: 'Year', type: 'ordinal' }
            ],
            source: data
        },
        series: [
            {
                type: 'scatter',
                symbolSize: symbolSize,
                xAxisIndex: 0,
                yAxisIndex: 0,
                encode: {
                    x: 'Income',
                    y: 'Life Expectancy',
                    tooltip: [0, 1, 2, 3, 4]
                }
            },
            {
                type: 'scatter',
                symbolSize: symbolSize,
                xAxisIndex: 1,
                yAxisIndex: 1,
                encode: {
                    x: 'Country',
                    y: 'Income',
                    tooltip: [0, 1, 2, 3, 4]
                }
            },
            {
                type: 'scatter',
                symbolSize: symbolSize,
                xAxisIndex: 2,
                yAxisIndex: 2,
                encode: {
                    x: 'Income',
                    y: 'Population',
                    tooltip: [0, 1, 2, 3, 4]
                }
            },
            {
                type: 'scatter',
                symbolSize: symbolSize,
                xAxisIndex: 3,
                yAxisIndex: 3,
                encode: {
                    x: 'Life Expectancy',
                    y: 'Population',
                    tooltip: [0, 1, 2, 3, 4]
                }
            }
        ]
    }
    return (
        <>
            <Drawer>{encodeAndMatrixCodeSnippet}</Drawer>
            <ReactEcharts option={option} />
        </>
    )
}

export default EncodeAndMatrix

export async function encodeAndMatrixLoader() {
    const response = await fetch("/api/examples/data/asset/data/life-expectancy-table.json");
    const svgData = await response.json();
    return svgData
}
