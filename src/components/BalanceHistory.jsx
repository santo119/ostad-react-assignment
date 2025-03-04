
import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const BalanceHistory = () => {
    const [chartData, setChartData] = useState({
      series: [
        {
          name: "Sales",
          data: [200, 400, 700, 354, 240, 780, 400, 300, 600],
        },
      ],
      options: {
        chart: {
          type: "line",
          height: 250,
          zoom: { enabled: false },
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
          ],
        },
        stroke: { curve: "smooth" },
        title: { text: "Monthly Sales", align: "center" },
      },
    });
  
    return (
      <div>
        <h2 className="font-semibold text-lg my-2">Balance History</h2>
        <div
          className="lg:min-w-[200px] w-full lg:min-h-[235px] rounded-[25px] 
            bg-gradient-to-r from-[#FFF] to-[#FFF] via-[#FFF] flex flex-col text-black"
        >
          <div className="p-4">
            <Chart
              options={chartData.options}
              series={chartData.series}
              type="line"
              height={190}
            />
          </div>
        </div>
      </div>
    );
  };

export default BalanceHistory;
