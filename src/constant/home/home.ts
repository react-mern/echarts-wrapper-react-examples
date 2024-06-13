export const homePageData = {
  tableData: [
    {
      prop: 'option (required)',
      type: 'EChartsOption',
      description: 'The ECharts option configuration object. Refer to the ECharts documentation for more details.',
      defaultValue: 'N/A',
      exampleLink: '/line/basic-line-chart',
    },
    {
      prop: 'theme',
      type: 'string | object',
      description:
        'Theme configuration for ECharts. This can be either a string representing the theme name like "dark" or "light" or an object defining the theme.',
      defaultValue: 'N/A',
    },
    {
      prop: 'opts',
      type: 'EChartsInitOpts',
      description: 'Additional options for initializing ECharts, such as devicePixelRatio and renderer.',
      defaultValue: 'N/A',
    },
    {
      prop: 'autoResize',
      type: 'boolean',
      description: 'Determines whether the chart should automatically resize when the window is resized.',
      defaultValue: 'true',
    },
    {
      prop: 'onEvents',
      type: 'EChartsReactComponentProps["onEvents"]',
      description:
        'Event handlers for ECharts events. Each key represents an event type, and the corresponding value is a function that handles the event.',
      defaultValue: 'N/A',
      exampleLink: '/bar/clickable-column-chart',
    },
    {
      prop: 'width',
      type: 'PixelValue',
      description: 'Width of the chart. Accepts a string representing a CSS pixel value.',
      defaultValue: 'N/A',
    },
    {
      prop: 'height',
      type: 'PixelValue',
      description: 'Height of the chart. Accepts a string representing a CSS pixel value.',
      defaultValue: 'N/A',
    },
    {
      prop: 'loadingType',
      type: 'string',
      description: 'Type of loading animation for ECharts like "default".',
      defaultValue: 'N/A',
    },
    {
      prop: 'loadingOption',
      type: 'object',
      description: 'Configuration options for the loading inside showLoading, such as text, color, and maskColor.',
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
