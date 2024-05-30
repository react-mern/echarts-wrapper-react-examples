export const clickToAddPointsCodeSnippets = `import { EChartsOption, EChartsReact, EChartsReactRef } from "echarts-wrapper-react";
import { useEffect, useMemo, useRef } from "react";

const ClickToAddPoints = () => {

    const symbolSize = 20;

    const data = useMemo(() => [
        [15, 0],
        [-50, 10],
        [-56.5, 20],
        [-46.5, 30],
        [-22.1, 40]
    ], []);

    const option: EChartsOption = {
        title: {
            text: 'Click to Add Points'
        },
        tooltip: {
            formatter: function (params) {
                const data = params.data || [0, 0];
                return data[0].toFixed(2) + ', ' + data[1].toFixed(2);
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            min: -60,
            max: 20,
            type: 'value',
            axisLine: { onZero: false }
        },
        yAxis: {
            min: 0,
            max: 40,
            type: 'value',
            axisLine: { onZero: false }
        },
        series: [
            {
                id: 'a',
                type: 'line',
                smooth: true,
                symbolSize: symbolSize,
                data: data
            }
        ]
    };

    const chartRef = useRef<EChartsReactRef>(null);

    useEffect(() => {
        const chartInsatnce = chartRef?.current?.getEchartsInstance();
        if (chartInsatnce) {
            const zr = chartInsatnce.getZr();
            zr.on('click', function (params) {
                const pointInPixel = [params.offsetX, params.offsetY];
                const pointInGrid = chartInsatnce.convertFromPixel('grid', pointInPixel);
                if (chartInsatnce.containPixel('grid', pointInPixel)) {
                    data.push(pointInGrid);
                    chartInsatnce.setOption({
                        series: [
                            {
                                id: 'a',
                                data: data
                            }
                        ]
                    });
                }
            });
            zr.on('mousemove', function (params) {
                const pointInPixel = [params.offsetX, params.offsetY];
                zr.setCursorStyle(
                    chartInsatnce.containPixel('grid', pointInPixel) ? 'copy' : 'default'
                );
            });
        }
    }, [data])

    return (
        <EChartsReact option={option} ref={chartRef} />
    )
}

export default ClickToAddPoints
`;
