import { useEffect, useState } from 'react'
import { EChartsReact, EChartsOption } from 'echarts-wrapper-react';
import Drawer from '@/components/Drawer';
import { ringGuageCodeSnippet } from '@/constant/guage/ringGuage';

const RingGauge = () => {

    const gaugeData = [
        {
            value: 20,
            name: 'Perfect',
            title: {
                offsetCenter: ['0%', '-30%'],
            },
            detail: {
                valueAnimation: true,
                offsetCenter: ['0%', '-20%'],
            },
        },
        {
            value: 40,
            name: 'Good',
            title: {
                offsetCenter: ['0%', '0%'],
            },
            detail: {
                valueAnimation: true,
                offsetCenter: ['0%', '10%'],
            },
        },
        {
            value: 60,
            name: 'Commonly',
            title: {
                offsetCenter: ['0%', '30%'],
            },
            detail: {
                valueAnimation: true,
                offsetCenter: ['0%', '40%'],
            },
        },
    ];
    const RingGaugeOption: EChartsOption = {
        series: [
            {
                type: 'gauge',
                startAngle: 90,
                endAngle: -270,
                pointer: {
                    show: false,
                },
                progress: {
                    show: true,
                    overlap: false,
                    roundCap: true,
                    clip: false,
                    itemStyle: {
                        borderWidth: 1,
                        borderColor: '#464646',
                    },
                },
                axisLine: {
                    lineStyle: {
                        width: 40,
                    },
                },
                splitLine: {
                    show: false,
                    distance: 0,
                    length: 10,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: false,
                    distance: 50,
                },
                data: gaugeData,
                title: {
                    fontSize: 14,
                },
                detail: {
                    width: 50,
                    height: 14,
                    fontSize: 14,
                    color: 'inherit',
                    borderColor: 'inherit',
                    borderRadius: 20,
                    borderWidth: 1,
                    formatter: '{value}%',
                },
            },
        ],
    };

    const [option, setOption] = useState(RingGaugeOption);

    useEffect(() => {
        const chartInterval = setInterval(function () {
            gaugeData[0].value = +(Math.random() * 100).toFixed(2);
            gaugeData[1].value = +(Math.random() * 100).toFixed(2);
            gaugeData[2].value = +(Math.random() * 100).toFixed(2);
            setOption(() => ({
                series: [
                    {
                        data: gaugeData,
                        pointer: {
                            show: false
                        }
                    }
                ]
            }));
            return () => {
                clearInterval(chartInterval);
            }
        }, 2000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Drawer>{ringGuageCodeSnippet}</Drawer>
            <EChartsReact option={option} />
        </>
    )
}

export default RingGauge
