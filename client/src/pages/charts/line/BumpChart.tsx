import { EChartsReact, EChartsOption } from 'echarts-wrapper-react';
import { SeriesOption } from 'echarts';
import Drawer from '@/components/Drawer';
import { bumpChartCodeSnippets } from '@/constant/line/bumpChart';

const BumpChart = () => {
    const names = [
        'Orange',
        'Tomato',
        'Apple',
        'Sakana',
        'Banana',
        'Iwashi',
        'Snappy Fish',
        'Lemon',
        'Pasta',
    ] as const;

    const years = ['2001', '2002', '2003', '2004', '2005', '2006'];

    const shuffle = <T,>(array: T[]): T[] => {
        let currentIndex = array.length;
        let randomIndex: number;

        // While there remain elements to shuffle...
        while (currentIndex > 0) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex],
                array[currentIndex],
            ];
        }

        return array;
    };

    const generateRankingData = (): Map<string, number[]> => {
        const map: Map<string, number[]> = new Map();
        const defaultRanking: number[] = Array.from(
            { length: names.length },
            (_, i) => i + 1
        );

        years.forEach(() => {
            const shuffleArray = shuffle(defaultRanking);
            names.forEach((name, index) => {
                map.set(name, (map.get(name) || []).concat(shuffleArray[index]));
            });
        });
        return map;
    };

    const generateSeriesList = (): SeriesOption[] => {
        const seriesList: SeriesOption[] = [];
        const rankingMap = generateRankingData();

        rankingMap.forEach((data, name) => {
            const series: SeriesOption = {
                name,
                symbolSize: 20,
                type: 'line',
                smooth: true,
                emphasis: {
                    focus: 'series',
                },
                endLabel: {
                    show: true,
                    formatter: '{a}',
                    distance: 20,
                },
                lineStyle: {
                    width: 4,
                },
                data,
            };
            seriesList.push(series);
        });
        return seriesList;
    };
    const option: EChartsOption = {
        title: {
            text: 'Bump Chart (Ranking)',
        },
        tooltip: {
            trigger: 'item',
        },
        grid: {
            left: 30,
            right: 110,
            bottom: 30,
            containLabel: true,
        },
        toolbox: {
            feature: {
                saveAsImage: {},
            },
        },
        xAxis: {
            type: 'category',
            splitLine: {
                show: true,
            },
            axisLabel: {
                margin: 30,
                fontSize: 16,
            },
            boundaryGap: false,
            data: years,
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                margin: 30,
                fontSize: 16,
                formatter: '#{value}',
            },
            inverse: true,
            interval: 1,
            min: 1,
            max: names.length,
        },
        series: generateSeriesList(),
    };

    return (
        <>
            <Drawer>{bumpChartCodeSnippets}</Drawer>
            <EChartsReact option={option} />
        </>
    );
};

export default BumpChart;
