import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", value: 500 },
  { name: "Feb", value: 400 },
  { name: "Mar", value: 500 },
  { name: "Apr", value: 300 },
  { name: "Mai", value: 400 },
  { name: "Jun", value: 300 },
  { name: "July", value: 600 },
];

const PortfolioChart = () => {
  return (
    <div className="overflow-x-scroll mt-10 mx-auto p-6 rounded-xl shadow-custom">
      {/* Chart title */}
      <h3 className="font-semibold mb-4 font-lexend text-2xl">
        Portfolio value
      </h3>

      <div className="w-[1000px] md:w-full">
        {/* Chart container */}
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart
            data={data}
            margin={{ top: 20, right: 50, left: 20, bottom: 0 }}
          >
            {/* Gradient for shaded area */}
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="green" stopOpacity={0.4} />
                <stop offset="100%" stopColor="green" stopOpacity={0} />
              </linearGradient>
            </defs>

            {/* Grid */}
            <CartesianGrid stroke="" strokeDasharray="3 3" />

            {/* X-Axis */}
            <XAxis
              dataKey="name"
              tick={{ fontSize: 12, fill: "#555" }}
              tickLine={false}
            />

            {/* Y-Axis */}
            <YAxis
              className="bg-blue-300"
              domain={[100, 600]}
              tickFormatter={(value) => `${value}€`}
              tick={{ fontSize: 12, fill: "#555" }}
              tickLine={false}
            />

            {/* Tooltip */}
            <Tooltip
              formatter={(valuer) => `${valuer}€`}
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #ddd",
                borderRadius: "5px",
                fontSize: "12px",
              }}
            />

            {/* Area with points */}
            <Area
              type="monotone"
              dataKey="value"
              stroke="green"
              fill="url(#gradient)"
              strokeWidth={2}
              dot={{ r: 6, fill: "black", stroke: "green", strokeWidth: 2 }}
              activeDot={{ r: 8 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Bottom section */}
      <p className="text-sm font-bold font-[Roboto] text-[#6B6B6B] mt-4">
        This month{" "}
        <span className="text-green-600 text-xl font-bold ml-2">+104€</span>
      </p>
    </div>
  );
};

export default PortfolioChart;
