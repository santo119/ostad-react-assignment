
import React from 'react';

import { useEffect, useState } from "react";
import ApexCharts from "react-apexcharts";

const WeeklyActivity = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Deposit",
        data: [],
        color: "#16DBCC",
      },
      {
        name: "Withdraw",
        data: [],
        color: "#1814F3",
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
        animations: {
          enabled: true,
          easing: "easeinout",
          speed: 800,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "20%",
          endingShape: "rounded",
          dataLabels: {
            position: "top",
          },
          barHeight: "100%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [],
      },
      yaxis: {
        title: {
          text: "Amount (in USD)",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: (val) => `$${val / 1000}K`,
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
      },
    },
  });

  useEffect(() => {
    fetch("//inertia-pos.manirul.xyz/api/weekly-activity-list")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "Success") {
          const days = data.data.map((item) => item.days);
          const deposits = data.data.map((item) => item.deposit);
          const withdraws = data.data.map((item) => item.withdraw);

          setChartData({
            series: [
              {
                name: "Deposit",
                data: deposits,
                color: "#16DBCC",
              },
              {
                name: "Withdraw",
                data: withdraws,
                color: "#1814F3",
              },
            ],
            options: {
              ...chartData.options,
              xaxis: {
                categories: days,
              },
            },
          });
        }
      });
  }, []);

  return (
    <div className="">
      <h2 className="font-semibold text-lg pb-4">Weekly Activity</h2>
      <div
        className="lg:min-w-[250px] w-full lg:min-h-[235px] rounded-[25px] 
          bg-gradient-to-r from-[#FFF] to-[#FFF] via-[#FFF] flex flex-col text-black"
      >
        <ApexCharts
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height={250}
        />
      </div>
    </div>
  );
};
export default WeeklyActivity;