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

  useEffect(() => {
    const sumAmountToDate = () => {
      const sortbyDateExpenses: { [key: string]: number } = {};
      for (let i = 0; i < expenses.length; i++) {
        const date = expenses[i].date;
        const amount = expenses[i].amount;

        if (sortbyDateExpenses[date]) {
          sortbyDateExpenses[date] += amount;
        } else {
          sortbyDateExpenses[date] = amount;
        }
      }
      const expensesArray: expenses[] = Object.entries(sortbyDateExpenses).map(
        ([date, amount]) => ({
          date,
          amount,
        })
      );
      console.log(expensesArray);

      // Обновляем состояние с массивом объектов
      setIsExpenses(expensesArray);
    };

    sumAmountToDate();
  }, [expenses]);

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
