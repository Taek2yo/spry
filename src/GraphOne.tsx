import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface Data {
  name: string;
  심박수: number;
  산소포화도: number;
  amt: number;
}

const data: Data[] = [
  {
    name: '1',
    심박수: 400,
    산소포화도: 240,
    amt: 240,
  },
  {
    name: '2',
    심박수: 300,
    산소포화도: 139,
    amt: 221,
  },
  {
    name: '3',
    심박수: 200,
    산소포화도: 980,
    amt: 229,
  },
  {
    name: '4',
    심박수: 278,
    산소포화도: 390,
    amt: 200,
  },
  {
    name: '5',
    심박수: 189,
    산소포화도: 480,
    amt: 218,
  },
  {
    name: '6',
    심박수: 239,
    산소포화도: 380,
    amt: 250,
  },
  {
    name: '7',
    심박수: 349,
    산소포화도: 430,
    amt: 210,
  },
  {
    name: '8',
    심박수: 100,
    산소포화도: 150,
    amt: 200,
  },
  {
    name: '9',
    심박수: 549,
    산소포화도: 480,
    amt: 210,
  },
  {
    name: '10',
    심박수: 423,
    산소포화도: 345,
    amt: 210,
  },
];

const GraphOne: React.FC = () => {
  const [opacity, setOpacity] = useState<{ [key: string]: number }>({
    uv: 1,
    pv: 1,
  });

  const handleMouseEnter = (data: any, index: number) => {
    const dataKey = Object.keys(data)[index + 1];
    setOpacity((prevOpacity) => ({ ...prevOpacity, [dataKey]: 0.5 }));
  };

  const handleMouseLeave = (data: any, index: number) => {
    const dataKey = Object.keys(data)[index + 1];
    setOpacity((prevOpacity) => ({ ...prevOpacity, [dataKey]: 1 }));
  };

  return (
    <div style={{ width: '100%' }}>
      <ResponsiveContainer width="100%" height={300}>
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
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
          <Line type="linear" dataKey="심박수" strokeOpacity={opacity.uv} stroke="#F56E4E" />
          <Line type="linear" dataKey="산소포화도" strokeOpacity={opacity.pv} stroke="#12E400" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphOne;
