import React from 'react';
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';

const GraphThree: React.FC = () => {
  const generateData = () => {
    const data = [];
    const months = ['1월', '2월', '3월', '4월', '5월', '6월'];
    const daysPerMonth = [31, 28, 31, 30, 31, 30]; // 각 월별 일 수

    for (let i = 0; i < months.length; i++) {
      const month = months[i];
      for (let j = 1; j <= daysPerMonth[i]; j++) {
        data.push({
          name: `${month} ${j}일`,
          램수면: Math.floor(Math.random() * 100),
          '깊은 수면': Math.floor(Math.random() * 100),
          '얕은 수면': Math.floor(Math.random() * 100),
          각성상태: Math.floor(Math.random() * 100),
        });
      }
    }

    return data;
  };

  const data = generateData();

  let cumulativeDays = 0;
  const daysPerMonth = [31, 28, 31, 30, 31, 30];
  const middleDayNames: (string | number)[] | undefined = [];
  const lastDayIndexes: number[] = [];
  daysPerMonth.forEach((days, index) => {
    cumulativeDays += days;
    const middleDayIndex = Math.floor(cumulativeDays - days + days / 2);
    middleDayNames.push(data[middleDayIndex].name);
    lastDayIndexes.push(cumulativeDays);
  });

  return (
    <ResponsiveContainer width="100%" height="90%">
      <BarChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" ticks={middleDayNames} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="램수면" stackId="a" fill="#D62728" />
        <Bar dataKey="깊은 수면" stackId="a" fill="#2CA02C" />
        <Bar dataKey="얕은 수면" stackId="a" fill="#FF7F0E" />
        <Bar dataKey="각성상태" stackId="a" fill="#0F0F70" />
        {lastDayIndexes.map((index, i) => (
          <ReferenceLine key={i} x={data[index - 1].name} stroke="black" strokeDasharray="3 3" />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default GraphThree;
