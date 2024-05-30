import { homePageData } from '@/constant/home/home';

const Home = () => {

    return (
        <div className="p-5">
            <div className="container mx-auto">
                <div className="bg-white p-5 rounded-md">
                    <h1 className="text-4xl font-bold text-indigo-600 mb-5">ECharts Wrapper React</h1>
                    <p className="mb-5 text-gray-700">
                        It is a React wrapper for embedding <a href="https://echarts.apache.org/en/index.html" className="text-blue-500 underline">Apache ECharts</a> charts in a React application.
                    </p>

                    <h2 className="text-3xl font-bold text-indigo-600 mb-3">Installation</h2>
                    <pre className="bg-gray-100 p-4 rounded-md mb-5 text-sm">
                        npm install echarts-wrapper-react<br />
                        npm install echarts
                    </pre>


                    <h2 className="text-3xl font-bold text-indigo-600 mb-3">Props</h2>
                    <table className="table-auto w-full mb-5 border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-indigo-500 text-white">
                                <th className="border border-gray-300 px-4 py-2">Prop</th>
                                <th className="border border-gray-300 px-4 py-2">Type</th>
                                <th className="border border-gray-300 px-4 py-2">Description</th>
                                <th className="border border-gray-300 px-4 py-2">Default</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            {homePageData.tableData.map((row, index) => (
                                <tr key={index}>
                                    <td className="border border-gray-300 px-4 py-2">{row.prop}</td>
                                    <td className="border border-gray-300 px-4 py-2">{row.type}</td>
                                    <td className="border border-gray-300 px-4 py-2">{row.description}</td>
                                    <td className="border border-gray-300 px-4 py-2">{row.defaultValue}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
};

export default Home;
