import { Home } from "./pages";
import RootLayout from "./pages/RootLayout";



export const routes = [
    {
        path: "/",
        element: <RootLayout />,
        name: "Home",
        children: [
            {
                index: true,
                element: <Home />
            },
        ]
    },
    {
        path: "/line",
        element: <RootLayout />,
        name: "Line",
        children: [
            {
                path: '/line/basic-line-chart',
                lazy: async () => {
                    const module = await import('./pages/charts/line/BasicLineChart');
                    return { Component: module.default };
                },
                name: "Basic Line Chart"
            },
            {
                path: '/line/bump-chart',
                lazy: async () => {
                    const module = await import('./pages/charts/line/BumpChart');
                    return { Component: module.default };
                },
                name: "Bump Chart"
            },
            {
                path: '/line/data-transform-filter',
                lazy: async () => {
                    const module = await import('./pages/charts/line/DataTransformFilter');
                    return { Component: module.default, loader: module.dataTransFormFilterLoader };
                },
                name: "Data Transform Filter",
            },
            {
                path: '/line/click-to-add-points',
                lazy: async () => {
                    const module = await import('./pages/charts/line/ClickToAddPoints');
                    return { Component: module.default };
                },
                name: "Click To Add Points",
            },
        ]
    },
    {
        path: "/bar",
        element: <RootLayout />,
        name: "Bar",
        children: [
            {
                path: '/bar/waterfall-chart',
                lazy: async () => {
                    const module = await import('./pages/charts/bar/WaterFallChart');
                    return { Component: module.default };
                },
                name: "Waterfall Chart"
            },
            {
                path: '/bar/clickable-column-chart',
                lazy: async () => {
                    const module = await import('./pages/charts/bar/ClickableColumnChart');
                    return { Component: module.default };
                },
                name: "clickable column Chart"
            },
            {
                path: '/bar/stacked-bar-with-border-radius',
                lazy: async () => {
                    const module = await import('./pages/charts/bar/StackedBarWithBorderRadius');
                    return { Component: module.default };
                },
                name: "Stacked Bar With Border Radius"
            }
        ]
    },
    {
        path: "/pie",
        element: <RootLayout />,
        name: "Pie",
        children: [
            {
                path: '/pie/nightingale-chart',
                lazy: async () => {
                    const module = await import('./pages/charts/pie/NightingaleChart');
                    return { Component: module.default };
                },
                name: "Nightingale Chart"
            }
        ]
    },
    {
        path: "/scatter",
        element: <RootLayout />,
        name: "Scatter",
        children: [
            {
                path: '/scatter/clustering-process',
                lazy: async () => {
                    const module = await import('./pages/charts/scatter/ClusteringProcess');
                    return { Component: module.default };
                },
                name: "Clustering Process"
            }
        ]
    },
    {
        path: "/geo-map",
        element: <RootLayout />,
        name: "GEO/Map",
        children: [
            {
                path: '/geo-map/geo-beef-cuts',
                lazy: async () => {
                    const module = await import('./pages/charts/geo-map/GEOBeefCuts');
                    return { Component: module.default, loader: module.GEOBeefCutsloader };
                },
                name: "GEO Beef Cuts",
            }
        ]
    },
    {
        path: "/candle-stick",
        element: <RootLayout />,
        name: "Candle Stick",
        children: [
            {
                path: '/candle-stick/OHLC-chart',
                lazy: async () => {
                    const module = await import('./pages/charts/candleStick/OHLCChart');
                    return { Component: module.default, loader: module.OHLCChartLoader };
                },
                name: "OHLC Chart",
            }
        ]
    },
    {
        path: "/heat-map",
        element: <RootLayout />,
        name: "Heat Map",
        children: [
            {
                path: '/heat-map/discrete-mapping-of-color',
                lazy: async () => {
                    const module = await import('./pages/charts/heatMap/DiscreteMappingOfColor');
                    return { Component: module.default };
                },
                name: "Discrete Mapping Of Color",
            }
        ]
    },
    {
        path: "/graph",
        element: <RootLayout />,
        name: "Graph",
        children: [
            {
                path: '/graph/hide-overlapped-label',
                lazy: async () => {
                    const module = await import('./pages/charts/graph/HideOverLappedLabel');
                    return { Component: module.default, loader: module.hideOverLappedLabelLoader };
                },
                name: "Hide OverLapped Label",
            }
        ]
    },
    // {
    //     path: "/lines",
    //     element: <RootLayout />,
    //     name: "Lines",
    //     children: [
    //         {
    //             path: '/lines/bus-lines-of-beijing',
    //             element: <BusLinesOfBeijing />,
    //             name: "Bus Lines Of Beijing",
    //             loader: busLinesOfBeijingLoader
    //         }
    //     ]
    // },
    {
        path: "/tree",
        element: <RootLayout />,
        name: "Tree",
        children: [
            {
                path: '/tree/radial-tree',
                lazy: async () => {
                    const module = await import('./pages/charts/tree/RadialTree');
                    return { Component: module.default, loader: module.RadialTreeLoader };
                },
                name: "Radial Tree",
            }
        ]
    },
    {
        path: "/tree-map",
        element: <RootLayout />,
        name: "Tree Map",
        children: [
            {
                path: '/tree-map/transition-between-treeMap-and-sunBurst',
                lazy: async () => {
                    const module = await import('./pages/charts/treeMap/TransitionBetweenTreeMap&Sunburst');
                    return { Component: module.default, loader: module.TransitionBetweenTreeMapAndSunburstLoader };
                },
                name: "Transition Between TreeMap & SunBurst",
            }
        ]
    },
    {
        path: "/sun-burst",
        element: <RootLayout />,
        name: "Sunburst",
        children: [
            {
                path: '/sun-burst/book-records',
                lazy: async () => {
                    const module = await import('./pages/charts/sunburst/BookRecords');
                    return { Component: module.default };
                },
                name: "book Records",
            }
        ]
    },
    {
        path: "/parallel",
        element: <RootLayout />,
        name: "Parallel",
        children: [
            {
                path: '/parallel/parallel-nutrients',
                lazy: async () => {
                    const module = await import('./pages/charts/parallel/ParallelNutrients');
                    return { Component: module.default, loader: module.parallelNutrientsLoader };
                },
                name: "parallel Nutrients",
            }
        ]
    },
    {
        path: "/sankey",
        element: <RootLayout />,
        name: "Sankey",
        children: [
            {
                path: '/sankey/gradient-edge',
                lazy: async () => {
                    const module = await import('./pages/charts/sankey/GradientEdge');
                    return { Component: module.default, loader: module.gradientEdgeLodaer };
                },
                name: "Gradient Edge",
            }
        ]
    },
    {
        path: "/guage",
        element: <RootLayout />,
        name: "Guage",
        children: [
            {
                path: '/guage/ring-guage',
                lazy: async () => {
                    const module = await import('./pages/charts/guage/RingGuage');
                    return { Component: module.default };
                },
                name: "Ring Guage",
            }
        ]
    },
    {
        path: "/theme-river",
        element: <RootLayout />,
        name: "Theme River",
        children: [
            {
                path: '/theme-river/theme-river-lastfn',
                lazy: async () => {
                    const module = await import('./pages/charts/theme-river/ThemeRiverLastfm');
                    return { Component: module.default };
                },
                name: "Theme River Lastfn",
            }
        ]
    },
    {
        path: "/calender",
        element: <RootLayout />,
        name: "Calender",
        children: [
            {
                path: '/calender/custom-calender-icon',
                lazy: async () => {
                    const module = await import('./pages/charts/calender/CustomCalenderIcon');
                    return { Component: module.default };
                },
                name: "Custom Calender Icon",
            }
        ]
    },
    {
        path: "/dataset",
        element: <RootLayout />,
        name: "Dataset",
        children: [
            {
                path: '/dataset/encode-and-matrix',
                lazy: async () => {
                    const module = await import('./pages/charts/dataset/EncodeAndMatrix');
                    return { Component: module.default, loader: module.encodeAndMatrixLoader };
                },
                name: "Encode and Matrix",
            }
        ]
    },
    {
        path: "/dataZoom",
        element: <RootLayout />,
        name: "DataZoom",
        children: [
            {
                path: '/dataZoom/windbarb',
                lazy: async () => {
                    const module = await import('./pages/charts/dataZoom/Windbarb');
                    return { Component: module.default, loader: module.windbarbLoader };
                },
                name: "Windbarb",
            }
        ]
    },
    {
        path: "/graphic",
        element: <RootLayout />,
        name: "Graphic",
        children: [
            {
                path: '/graphic/stroke-animation',
                lazy: async () => {
                    const module = await import('./pages/charts/graphic/StrokeAnimation');
                    return { Component: module.default };
                },
                name: "Stroke Animation"
            }
        ]
    },
    {
        path: "/3D-globe",
        element: <RootLayout />,
        name: "3D Globe",
        children: [
            {
                path: '/3D-globe/global-layers',
                lazy: async () => {
                    const module = await import('./pages/charts/3D-globe/GlobeLayers');
                    return { Component: module.default };
                },
                name: "Global Layers"
            }
        ]
    },
    {
        path: "/3D-bar",
        element: <RootLayout />,
        name: "3D Bar",
        children: [
            {
                path: '/3D-bar/3D-bar-with-dataset',
                lazy: async () => {
                    const module = await import('./pages/charts/3D-bar/3DBarWithDataSet');
                    return { Component: module.default, loader: module._3DBarWithDataSetLoader };
                },
                name: "3D bar with dataset",
            }
        ]
    },
];

export default routes;