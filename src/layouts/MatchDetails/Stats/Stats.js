import TitleBar6 from "components/TitleBars/TitleBar6/TitleBar6";
import React from "react";
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

  return (
    <>
      <div className="container-wrapper-30">
        <p className="stats_title">Stats</p>
      </div>

      <TitleBar6
        title="Worm (Over vs Runs)"
        leading={
          <div className="stats_title_bar_title_right">
            <p className="stats_title_bar_indicator indicator_1">
              Crease Hunters
            </p>
            <p className="stats_title_bar_indicator indicator_2">Mash Eagles</p>
          </div>
        }
      />

      <div className="container-wrapper-30">
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

      <div className="stats_title_bar_wrapper">
        <div className="container-wrapper-30">
          <div className="stats_title_bar">
            <p className="stats_title_bar_title">Manhattan (Overs vs Runs)</p>
            <div className="stats_title_bar_title_right">
              <p className="stats_title_bar_indicator indicator_1">
                Crease Hunters
              </p>
              <p className="stats_title_bar_indicator indicator_2">
                Mash Eagles
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-wrapper-30">
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
      <div className="stats_title_bar_wrapper">
        <div className="container-wrapper-30">
          <div className="stats_title_bar">
            <p className="stats_title_bar_title">Partnership (Khawar Tiger)</p>
            <div className="stats_title_bar_title_right">
              <p className="stats_title_bar_title_right_filter">filter by :</p>
              <div className="stats_title_bar_title_right_dropdown">
                Khawar Tiger &#711;
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-wrapper-30">
        <div className="stats_chart_2">
          <ResponsiveContainer width="100%" height="100%">
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
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}

export default Stats;
