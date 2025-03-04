
import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts'

const Expense = () => {
    const [chartData, setChartData] = useState({
      series: [],
      options: {
        chart: { type: "pie" },
        labels: [],
      },
    });
  
    useEffect(() => {
      fetch("//inertia-pos.manirul.xyz/api/expense-list")
        .then((response) => response.json())
        .then((data) => {
          if (data.status === "Success") {
            const { entertainment, bill, investment, others } = data.data;
            setChartData({
              series: [entertainment, bill, investment, others],
              options: {
                chart: { type: "pie" },
                labels: ["Entertainment", "Bill", "Investment", "Others"],
              },
            });
          }
        })
        .catch((error) => console.error("Error fetching data:", error));
    }, []);
  
    return (
      <div>
        <h2 className="font-semibold text-lg pb-4">Expense Statistics</h2>
        <div
          className="lg:min-w-[350px] w-full lg:min-h-[235px] rounded-[25px] 
            bg-gradient-to-r from-[#FFF] to-[#FFF] via-[#FFF] flex flex-col text-black"
        >
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="pie"
            width="400"
          />
        </div>
      </div>
    );
  };

export default Expense;