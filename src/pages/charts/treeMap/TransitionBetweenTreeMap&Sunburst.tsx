import Drawer from '@/components/Drawer';
import { transitionBetweenTreeMapAndSunburstCodeSnippet } from '@/constant/tree-map/transitionBetweenTreeMap&Sunburst';
import {
    ReactEcharts,
    EChartsOption,
} from 'echarts-wrapper-react';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const TransitionBetweenTreeMapAndSunburst = () => {
    const data: any = useLoaderData();

    const treemapOption = {
        series: [
            {
                type: 'treemap',
                id: 'echarts-package-size',
                animationDurationUpdate: 1000,
                roam: false,
                nodeClick: undefined,
                data: data.children,
                universalTransition: true,
                label: {
                    show: true,
                },
                breadcrumb: {
                    show: false,
                },
            },
        ],
    };
    const sunburstOption = {
        series: [
            {
                type: 'sunburst',
                id: 'echarts-package-size',
                radius: ['20%', '90%'],
                animationDurationUpdate: 1000,
                nodeClick: undefined,
                data: data.children,
                universalTransition: true,
                itemStyle: {
                    borderWidth: 1,
                    borderColor: 'rgba(255,255,255,.5)',
                },
                label: {
                    show: false,
                },
            },
        ],
    };

    const [option, setOption] = useState<EChartsOption>(treemapOption as EChartsOption);

    useEffect(() => {
        const interval = setInterval(function () {
            setOption((prev) => {
                if (prev === treemapOption) {
                    return sunburstOption;
                }
                return treemapOption;
            });
            console.log('here');
        }, 3000);
        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Drawer>{transitionBetweenTreeMapAndSunburstCodeSnippet}</Drawer>
            <ReactEcharts option={option} />
        </>
    )
};

export default TransitionBetweenTreeMapAndSunburst;

export async function TransitionBetweenTreeMapAndSunburstLoader() {
    const response = await fetch(
        '/api/examples/data/asset/data/echarts-package-size.json'
    );
    const data = await response.json();
    console.log(data);
    return data;
}
