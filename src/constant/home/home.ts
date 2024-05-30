export const homePageData = {
  tableData: [
    {
      prop: 'option',
      type: 'EChartsOption',
      description: 'The ECharts option configuration object.',
      defaultValue: 'N/A',
    },
    {
      prop: 'theme',
      type: 'string | object',
      description: 'Theme configuration for ECharts.',
      defaultValue: 'N/A',
    },
    {
      prop: 'opts',
      type: 'EChartsInitOpts',
      description: 'Additional options for initializing ECharts.',
      defaultValue: 'N/A',
    },
    {
      prop: 'autoResize',
      type: 'boolean',
      description: 'Determines whether the chart should automatically resize.',
      defaultValue: 'true',
    },
    {
      prop: 'onEvents',
      type: 'object',
      description: 'Event handlers for ECharts events.',
      defaultValue: 'N/A',
    },
    {
      prop: 'width',
      type: 'PixelValue',
      description: 'Width of the chart.',
      defaultValue: 'N/A',
    },
    {
      prop: 'height',
      type: 'PixelValue',
      description: 'Height of the chart.',
      defaultValue: 'N/A',
    },
    {
      prop: 'loadingType',
      type: 'string',
      description: 'Type of loading animation for ECharts.',
      defaultValue: 'N/A',
    },
    {
      prop: 'loadingOption',
      type: 'object',
      description: 'Configuration options for the loading animation.',
      defaultValue: 'N/A',
    },
    {
      prop: 'notMerge',
      type: 'boolean',
      description: 'Config for ECharts, default is false.',
      defaultValue: 'false',
    },
    {
      prop: 'lazyUpdate',
      type: 'boolean',
      description: 'Config for ECharts, default is false.',
      defaultValue: 'false',
    },
  ],
};
