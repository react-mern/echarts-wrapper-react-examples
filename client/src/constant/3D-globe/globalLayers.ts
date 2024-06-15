export const globalLayersCodeSnippet = `import { EChartsOption, EChartsReact } from 'echarts-wrapper-react';
import 'echarts-gl';

const GlobeLayers = () => {

    const option: EChartsOption = {
        backgroundColor: '#000',
        globe: {
            //provide URL for your image
            baseTexture: import.meta.env.VITE_BASE_SERVER_URL+'/examples/data-gl/asset/earth.jpg',
            heightTexture: import.meta.env.VITE_BASE_SERVER_URL+'/examples/data-gl/asset/bathymetry_bw_composite_4k.jpg',
            displacementScale: 0.1,
            shading: 'lambert',
            environment: import.meta.env.VITE_BASE_SERVER_URL+'/examples/data-gl/asset/starfield.jpg',
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
                    texture: import.meta.env.VITE_BASE_SERVER_URL+'/examples/data-gl/asset/night.jpg'
                },
                {
                    type: 'overlay',
                    texture: import.meta.env.VITE_BASE_SERVER_URL+'/examples/data-gl/asset/clouds.png',
                    shading: 'lambert',
                    distance: 5
                }
            ]
        },
        series: []
    };

    return (
        <EChartsReact option={option} />
    )
}

export default GlobeLayers
`;
