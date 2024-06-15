import Drawer from '@/components/Drawer';
import { gradientEdgeCodeSnippet } from '@/constant/sankey/gradientEdge';
import { EChartsOption, EChartsReact } from 'echarts-wrapper-react';
import { useLoaderData } from 'react-router-dom';

const GradientEdge = () => {
  const data: any = useLoaderData();
  const option: EChartsOption = {
    title: {
      text: 'Sankey Diagram',
    },
    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove',
    },
    series: [
      {
        type: 'sankey',
        data: data.nodes,
        links: data.links,
        emphasis: {
          focus: 'adjacency',
        },
        lineStyle: {
          color: 'gradient',
          curveness: 0.5,
        },
      },
    ],
  };
  return (
    <>
      <Drawer>{gradientEdgeCodeSnippet}</Drawer>
      <EChartsReact option={option} />
    </>
  );
};

export default GradientEdge;

export async function gradientEdgeLoader() {
  const response = await fetch(import.meta.env.VITE_BASE_SERVER_URL + '/examples/data/asset/data/energy.json');
  const data = await response.json();
  return data;
}
