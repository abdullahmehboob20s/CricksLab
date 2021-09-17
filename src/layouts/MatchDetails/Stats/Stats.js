import TitleBar5 from "components/TitleBars/TitleBar5/TitleBar5";
import TitleBar6 from "components/TitleBars/TitleBar6/TitleBar6";
import React from "react";
import { Bar as ChartJsBar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
  BarChart,
  Bar,
} from "recharts";

function Stats() {
  const { data, data2 } = useSelector((state) => state.playerDetails);

  const dataChart = {
    labels: [
      "11(10)",
      "10(9)",
      "49(18)",
      "27(12)",
      "2(2)",
      "8(6)",
      "3(7)",
      "0(1)",
      "4(4)",
      "0(0)",
    ],
    datasets: [
      {
        data: [12, 10, 3, 5, 2, 3, 15, 0, 5, 0],
        backgroundColor: [
          "#BC4D3D",
          "#3B6F9F",
          "#4DA38A",
          "#4DA38A",
          "#4B975B",
          "#CEAE3C",
          "#AD511F",
          "#AD511F",
          "#925CB1",
          "#925CB1",
        ],
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    // stack: true,
    plugins: {
      legend: false,
    },

    scales: {
      x: {
        ticks: {
          color: "#B5B5BB",
        },
        grid: {
          display: true,
          drawBorder: false,
          drawOnChartArea: true,
          drawTicks: false,
        },
      },
      y: {
        ticks: {
          color: "#B5B5BB",
        },
        grid: {
          display: true,
          drawBorder: true,
          drawTicks: false,
          drawOnChartArea: false,
        },
      },
    },
  };

  return (
    <>
      <div className="mb-30">
        <TitleBar5 title="Stats" fontSize="1.25rem" />
      </div>

      <TitleBar5
        title="Worm (Over vs Runs)"
        fontSize="0.875rem"
        showBg={true}
        flex={true}
        leading={
          <div className="stats_title_bar_title_right">
            <p className="stats_title_bar_indicator indicator_1">
              Crease Hunters
            </p>
            <p className="stats_title_bar_indicator indicator_2">Mash Eagles</p>
          </div>
        }
      />

      <div className="container-wrapper-30 mb-30">
        <div className="stats_chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="0 0" />
              <XAxis
                tickLine={false}
                axisLine={false}
                dataKey="name"
                height={60}
              >
                <Label value="Overs" offset={0} position="insideBottom" />
              </XAxis>
              <YAxis
                label={{
                  value: "Runs",
                  angle: -90,
                  position: "left",
                }}
                width={50}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip />
              <Line
                type="linear"
                dataKey="pv"
                dot={false}
                stroke="#33a2d2"
                activeDot={false}
                strokeWidth={3}
              />
              <Line
                type="linear"
                dataKey="uv"
                dot={false}
                stroke="#0fb918"
                activeDot={false}
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <TitleBar5
        title="Manhattan (Overs vs Runs)"
        fontSize="0.875rem"
        showBg={true}
        flex={true}
        leading={
          <div className="stats_title_bar_title_right">
            <p className="stats_title_bar_indicator indicator_1">
              Crease Hunters
            </p>
            <p className="stats_title_bar_indicator indicator_2">Mash Eagles</p>
          </div>
        }
      />

      <div className="container-wrapper-30 mb-30">
        <div className="stats_chart_2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data2}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="0 0" />
              <XAxis
                tickLine={false}
                axisLine={false}
                dataKey="name"
                height={90}
                angle={-50}
                tickMargin={20}
              >
                <Label value="Overs" offset={0} position="insideBottom" />
              </XAxis>
              <YAxis
                label={{
                  value: "Runs",
                  angle: -90,
                  position: "left",
                }}
                width={50}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip />
              <Bar dataKey="uv" barSize={2} stackId="a" fill="#0fb918" />
              <Bar dataKey="pv" barSize={2} stackId="a" fill="#33a2d2" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <TitleBar5
        title="Partnership (Khawar Tiger)"
        fontSize="0.875rem"
        showBg={true}
        flex={true}
        leading={
          <div className="stats_title_bar_title_right">
            <p className="stats_title_bar_title_right_filter">filter by :</p>
            <div className="stats_title_bar_title_right_dropdown">
              Khawar Tiger &#711;
            </div>
          </div>
        }
      />

      <div className="container-wrapper-30">
        <div className="stats_chart_2">
          <ChartJsBar data={dataChart} options={options} />
          {/* <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              // layout="vertical"
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="0 0" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="pv" stackId="a" fill="#8884d8" />
              <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer> */}
        </div>
      </div>
    </>
  );
}

export default Stats;
