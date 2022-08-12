import "./chart.scss";
import {
  BarChart,
  LineChart,
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "January", Total: 1200 },
  { name: "February", Total: 2100 },
  { name: "March", Total: 800 },
  { name: "April", Total: 1600 },
  { name: "May", Total: 900 },
  { name: "June", Total: 1700 },
  { name: "July", Total: 300 },
];

const Chart = ({ aspect, title, income }) => {
  const x = income.sort(function (a, b) {
    if (a._id < b._id) return -1;
  });
  const newArr = x.map((obj) => {
    if (obj._id === 2) {
      return { ...obj, _id: "February" };
    } else if (obj._id === 3) {
      return { ...obj, _id: "March" };
    } else if (obj._id === 4) {
      return { ...obj, _id: "April" };
    } else if (obj._id === 5) {
      return { ...obj, _id: "May" };
    } else if (obj._id === 6) {
      return { ...obj, _id: "June" };
    } else if (obj._id === 7) {
      return { ...obj, _id: "July" };
    } else if (obj._id === 8) {
      return { ...obj, _id: "Agust" };
    }

    return obj;
  });

  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={newArr}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="_id" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
