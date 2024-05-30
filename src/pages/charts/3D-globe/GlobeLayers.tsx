import { EChartsOption, ReactEcharts } from 'echarts-wrapper-react';
import 'echarts-gl';
import Drawer from '@/components/Drawer';
import { globalLayersCodeSnippet } from '@/constant/3D-globe/globalLayers';

const GlobeLayers = () => {

    const option: EChartsOption = {
        backgroundColor: '#000',
        globe: {
            //provide URL for your image
            baseTexture: '/api/examples/data-gl/asset/earth.jpg',
            heightTexture: '/api/examples/data-gl/asset/bathymetry_bw_composite_4k.jpg',
            displacementScale: 0.1,
            shading: 'lambert',
            environment: '/api/examples/data-gl/asset/starfield.jpg',
            light: {
                ambient: {
                    intensity: 0.1
                },
                main: {
                    intensity: 1.5
                }
            },
            layers: [
                {
                    type: 'blend',
                    blendTo: 'emission',
                    texture: '/api/examples/data-gl/asset/night.jpg'
                },
                {
                    type: 'overlay',
                    texture: '/api/examples/data-gl/asset/clouds.png',
                    shading: 'lambert',
                    distance: 5
                }
            ]
        },
        series: []
    };

    return (
        <>
            <Drawer>{globalLayersCodeSnippet}</Drawer>
            <ReactEcharts option={option} />
        </>
    )
}

export default GlobeLayers
