import Drawer from '@/components/Drawer';
import { strokeAnimationCodeSnippet } from '@/constant/graphic/strokeAnimation';
import { EChartsOption, EChartsReact } from 'echarts-wrapper-react';

const StrokeAnimation = () => {

    const option: EChartsOption = {
        graphic: {
            elements: [
                {
                    type: 'text',
                    left: 'center',
                    top: 'center',
                    style: {
                        text: 'Apache ECharts',
                        fontSize: 80,
                        fontWeight: 'bold',
                        lineDash: [0, 200],
                        lineDashOffset: 0,
                        fill: 'transparent',
                        stroke: '#000',
                        lineWidth: 1
                    },
                    keyframeAnimation: {
                        duration: 3000,
                        loop: true,
                        keyframes: [
                            {
                                percent: 0.7,
                                style: {
                                    fill: 'transparent',
                                    lineDashOffset: 200,
                                    lineDash: [200, 0]
                                }
                            },
                            {
                                // Stop for a while.
                                percent: 0.8,
                                style: {
                                    fill: 'transparent'
                                }
                            },
                            {
                                percent: 1,
                                style: {
                                    fill: 'black'
                                }
                            }
                        ]
                    }
                }
            ]
        }
    };

    return (
        <>
            <Drawer>{strokeAnimationCodeSnippet}</Drawer>
            <EChartsReact option={option} />
        </>
    )
}

export default StrokeAnimation
