import React from 'react'
import { useEffect } from "react"
import dynamic from 'next/dynamic';
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import PropTypes from 'prop-types';

LineChart.propTypes = {
    data: PropTypes.array.isRequired,
}

export default function LineChart({ data, ...other }) {
    const chartLabels = data?.map((i) => i.label);

    const chartSeries = data?.map((i) => i.value);
    console.log(chartLabels)

    const option = {
        chart: {
            id: 'apexchart-example'
        },
        tooltip: {
            marker: { show: false },
            y: {
                // formatter: (seriesName) => fNumber(seriesName),
                title: {
                    formatter: () => '',
                },
            },
        },
        plotOptions: {
            bar: { vertical: true, barHeight: '80%', borderRadius: 2, columnWidth: '80%' },
        },
        xaxis: {
            categories: chartLabels
        }
    }

    return (
        <>
            <ApexChart type="line" options={option} series={[{ data: chartSeries }]} height={200} style={{ width: "100%" }} />
        </>
    )
}
