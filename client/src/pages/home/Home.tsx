import { homePageData } from '@/constant/home/home';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Link } from 'react-router-dom';

const Home = () => {
  const themeCodeString = `
    import { EChartsReact, EChartsOption } from 'echarts-wrapper-react';
    import { registerTheme } from 'echarts';
    
    const greenOrangeTheme = {
      color: [
        '#32CD32', // Lime Green
        '#FFA500', // Orange
        '#228B22', // Forest Green
        '#FF8C00', // Dark Orange
        '#006400', // Dark Green
        '#FF4500', // Orange Red
        '#ADFF2F', // Green Yellow
        '#FF6347', // Tomato
      ],
      backgroundColor: '#F0FFF0', // Honeydew background
      textStyle: {
        color: '#228B22', // Forest Green text
      },
    };
    
    registerTheme('greenOrangeTheme', greenOrangeTheme);

    //define option 

    return (
        <div style={{ width: '50vw', height: '50vh' }}>
            <EChartsReact option={option} theme="greenOrangeTheme" />
        </div>
    )
  `;

  const optsCodeString = `
    import { EChartsReact, EChartsOption, EChartsReactComponentProps } from 'echarts-wrapper-react';

    const BasicLineChart = () => {
        
      //define option

      const opts: EChartsReactComponentProps['opts'] = {
        devicePixelRatio: 2,
        renderer: 'svg',
      };

      return (
        <div style={{ width: '50vw', height: '50vh' }}>
          <EChartsReact option={option} opts={opts} />
        </div>
      );
    };
  `;

  return (
    <div className="p-5 container mx-auto">
      <div className="bg-white p-5 rounded-md">
        <h1 className="text-4xl font-bold text-indigo-600 mb-5">ECharts Wrapper React</h1>
        <p className="mb-5 text-gray-700">
          It is a project showing use cases of echarts-react-wrapper npm package for embedding{' '}
          <a href="https://echarts.apache.org/en/index.html" className="text-blue-500 underline">
            Apache ECharts
          </a>{' '}
          charts in a React application.
        </p>

        <h2 className="text-3xl font-bold text-indigo-600 mb-3">Installation</h2>
        <pre className="bg-gray-100 p-4 rounded-md mb-5 text-sm">
          npm install echarts-wrapper-react
          <br />
          npm install echarts
        </pre>

        <h2 className="text-3xl font-bold text-indigo-600 mb-3">Props</h2>
        <div className="overflow-auto max-w-full">
          <table className="table-auto mb-5 border-collapse border border-gray-300">
            <thead>
              <tr className="bg-indigo-500 text-white">
                <th className="border border-gray-300 px-4 py-2">Prop</th>
                <th className="border border-gray-300 px-4 py-2">Type</th>
                <th className="border border-gray-300 px-4 py-2">Description</th>
                <th className="border border-gray-300 px-4 py-2">Default</th>
                <th className="border border-gray-300 px-4 py-2">Example</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {homePageData.tableData.map((row, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">{row.prop}</td>
                  <td className="border border-gray-300 px-4 py-2">{row.type}</td>
                  <td className="border border-gray-300 px-4 py-2">{row.description}</td>
                  <td className="border border-gray-300 px-4 py-2">{row.defaultValue}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {row.exampleLink ? (
                      <Link className="underline text-blue-400" to={row.exampleLink}>
                        Example
                      </Link>
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-gray-700 mb-8">
          <h3 className="text-xl font-bold mb-4">Theme Prop Example</h3>
          <p className="text-gray-700 mb-4">
            This example demonstrates how to use the theme prop to apply custom styling to the chart.
          </p>

          <SyntaxHighlighter language="javascript" style={docco} className="rounded-lg overflow-auto">
            {themeCodeString}
          </SyntaxHighlighter>

          <p className="text-gray-700 mb-4">
            You can customize the theme using the{' '}
            <a
              href="https://echarts.apache.org/en/theme-builder.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition duration-300"
            >
              ECharts Theme Builder
            </a>
            .
          </p>
          <p className="mb-4">You can use "dark" and "light" themes as well.</p>
        </div>

        <div className="text-gray-700">
          <h3 className="text-xl font-bold mb-4">Using opts with EChartsReact</h3>
          <SyntaxHighlighter language="javascript" style={docco} className="rounded-lg overflow-auto">
            {optsCodeString}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default Home;
