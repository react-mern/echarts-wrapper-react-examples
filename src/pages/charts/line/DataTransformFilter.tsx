import Drawer from '@/components/Drawer';
import { dataTransformFilterCodeSnippets } from '@/constant/line/dataTransformFilter';
import { EChartsReact, EChartsOption } from 'echarts-wrapper-react';
import { useLoaderData } from 'react-router-dom';

const DataTransformFilter = () => {
  const data: any = useLoaderData();

  const option: EChartsOption = {
    dataset: [
      {
        id: 'dataset_raw',
        source: data,
      },
      {
        id: 'dataset_since_1950_of_germany',
        fromDatasetId: 'dataset_raw',
        transform: {
          type: 'filter',
          config: {
            and: [
              { dimension: 'Year', gte: 1950 },
              { dimension: 'Country', '=': 'Germany' },
            ],
          },
        },
      },
      {
        id: 'dataset_since_1950_of_france',
        fromDatasetId: 'dataset_raw',
        transform: {
          type: 'filter',
          config: {
            and: [
              { dimension: 'Year', gte: 1950 },
              { dimension: 'Country', '=': 'France' },
            ],
          },
        },
      },
    ],
    title: {
      text: 'Income of Germany and France since 1950',
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      nameLocation: 'middle',
    },
    yAxis: {
      name: 'Income',
    },
    series: [
      {
        type: 'line',
        datasetId: 'dataset_since_1950_of_germany',
        showSymbol: false,
        encode: {
          x: 'Year',
          y: 'Income',
          itemName: 'Year',
          tooltip: ['Income'],
        },
      },
      {
        type: 'line',
        datasetId: 'dataset_since_1950_of_france',
        showSymbol: false,
        encode: {
          x: 'Year',
          y: 'Income',
          itemName: 'Year',
          tooltip: ['Income'],
        },
      },
    ],
  };
  return (
    <>
      <Drawer>{dataTransformFilterCodeSnippets}</Drawer>
      <EChartsReact option={option} />
    </>
  );
};

export default DataTransformFilter;

export async function dataTransFormFilterLoader() {
  const response = await fetch('https://echarts.apache.org/examples/data/asset/data/life-expectancy-table.json');
  const data = await response.json();
  return data;
}
