import Card from "../common/Card";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const formatTime = (value) => {
  if (!value) return "";

  // API already provides HH:mm
  if (typeof value === "string") {
    return value.substring(0, 5);
  }

  return value;
};

const LineChartCard = ({ title, data = [], dataKey, color = "#2563eb" }) => {
  return (
    <Card>
      <h2 className="mb-5 text-lg font-semibold">{title}</h2>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 20,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="time" tickFormatter={formatTime} minTickGap={30} />

            <YAxis />

            <Tooltip labelFormatter={(value) => `Time: ${formatTime(value)}`} />

            <Line
              type="monotone"
              dataKey={dataKey}
              stroke={color}
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default LineChartCard;
