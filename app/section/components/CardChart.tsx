import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const CardChart = ({ open, inProgress, closed }: Props) => {
  const data = [
    { name: 'Open', value: open },
    { name: 'In Progress', value: inProgress },
    { name: 'Closed', value: closed },
  ];

  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CardChart;
