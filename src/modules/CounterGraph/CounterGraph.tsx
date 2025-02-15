import "./CounterGraph.css";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useEffect, useState } from "react";
import { expenses } from "../Store/Charges";
import { useStoreState } from "../../store";

export const CounterGraph = () => {
  const [isExpenses, setIsExpenses] = useState<expenses[]>([]);
  const expenses = useStoreState((state) => state.expensesStore.expenses);
  const choosenMonth = useStoreState(
    (state) => state.calendarStore.choosenMonth
  );

  useEffect(() => {
    const getExpenses = () => {
      if (choosenMonth === "") {
      } else {
      }
    };
    getExpenses();
  }, [expenses, choosenMonth]);

  return (
    <ResponsiveContainer width="60%" height="60%">
      <BarChart
        width={200}
        height={300}
        maxBarSize={50}
        data={isExpenses}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="amount"
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
