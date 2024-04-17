import React from 'react';
import { Line, Bar, ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function GraphTwo() {
  const data = [
    { name: '1', '하루 총 칼로리 소모': 300, '하루 총 활동 시간(분)': 200, '하루 총 걸음수': 300 },
    { name: '2', '하루 총 칼로리 소모': 200, '하루 총 활동 시간(분)': 400, '하루 총 걸음수': 250 },
    { name: '3', '하루 총 칼로리 소모': 500, '하루 총 활동 시간(분)': 250, '하루 총 걸음수': 200 },
    { name: '4', '하루 총 칼로리 소모': 600, '하루 총 활동 시간(분)': 100, '하루 총 걸음수': 200 },
    { name: '5', '하루 총 칼로리 소모': 800, '하루 총 활동 시간(분)': 300, '하루 총 걸음수': 400 },
  ];

  return (
    <div style={{ width: '100%' }}>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="하루 총 칼로리 소모" barSize={20} fill="#0F0F70" />
          <Line type="linear" dataKey="하루 총 활동 시간(분)" stroke="#12E400" />
          <Line type="linear" dataKey="하루 총 걸음수" stroke="#F56E4E" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
