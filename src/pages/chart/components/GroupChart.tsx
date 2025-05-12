// @ts-nocheck
import * as React from 'react';
import {tGroup} from "../groupdata";
import {axisClasses, LineChart} from "@mui/x-charts";
import { BarChart } from '@mui/x-charts/BarChart';
import Container from "@mui/material/Container";
import SettingChart from "./SettingsChart";

type GroupProps = {
    data: tGroup;
};

function GroupChart({ data }: GroupProps) {
    const [isBar, setIsBar] = React.useState(true);
    const chartSetting = {
        yAxis: [
            {
                label: 'Цена($)',
            },
        ],
        height: 500,

        sx: {
            [`.${axisClasses.left} .${axisClasses.label}`]: {
                transform: 'translate(-10px, 0)',
            },

        },
    };

    const [series, setSeries] = React.useState({
        'maxPrice': true,
        'avgPrice': false,
        'minPrice': false,
    });
    const labels = {
        'maxPrice': 'Максимальная цена',
        'avgPrice': 'Средняя цена',
        'minPrice': 'Минимальная цена',
    }
    let seriesY = Object.entries(series)
        .filter(item => item[1] === true)
        .map(item => {
            return {"dataKey": item[0], "label": labels[item[0]]}
        });

    return (
        <Container maxWidth="lg">

            {isBar ? (
            <BarChart
                barLabel={seriesY.length === 1 ? "value" : undefined}
                dataset={data}
                xAxis={[{ scaleType: 'band', dataKey: 'name' }]}
                series={seriesY}
                slotProps={{
                    legend: {
                        position: { vertical: 'bottom', horizontal: 'center' },
                    },
                }}
                {...chartSetting}

            />
            ) : (
            <LineChart
                dataset={ data }
                xAxis={[{ scaleType: 'band', dataKey: 'name' }]}
                series={ seriesY}
                slotProps={{
                    legend: {
                        position: { vertical: 'bottom', horizontal: 'center' },
                    },
                }}
                {...chartSetting}
            />
            )}
            <SettingChart series={ series } setSeries={ setSeries } isBar={ isBar } setIsBar={ setIsBar } />
        </Container>
    );
}

export default GroupChart;