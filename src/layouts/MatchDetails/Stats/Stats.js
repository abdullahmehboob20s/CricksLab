import TitleBar5 from "components/TitleBars/TitleBar5/TitleBar5";
import React from "react";
import { useSelector } from "react-redux";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
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

  const options = {
    chart: {
      type: "bar",
    },
    credits: {
      enabled: false,
    },
    title: {
      style: { display: "none" },
    },

    legend: {
      enabled: false,
    },

    xAxis: {
      categories: [
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
    },
    yAxis: {
      lineWidth: 0,
      title: {
        style: { display: "none" },
      },
    },
    plotOptions: {
      series: {
        stacking: "normal",
      },
    },
    series: [
      {
        name: "John",
        data: [20, 32, 10, 7, 0, 30, 12, 0, 50, 0],
        colorByPoint: true,
        colors: [
          "#925CB1",
          "#925CB1",
          "#3B6F9F",
          "#3B6F9F",
          "#4B975B",
          "#418B76",
          "#418B76",
        ],
      },
      {
        name: "Jane",
        data: [10, 3, 30, 7, 5, 20, 22, 0, 5, 0],
        colorByPoint: true,
        colors: [
          "#BC4D3D",
          "#3B6F9F",
          "#4DA38A",
          "#4DA38A",
          "#4B975B",
          "#CEAE3C",
          "#925CB1",
        ],
      },
    ],
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
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
      </div>
    </>
  );
}

export default Stats;
