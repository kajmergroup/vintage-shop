import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {
  useSearchParams,
} from 'react-router-dom';

import "./chart2.scss"


const BarChar = ({ aspect, title, data, setQuery }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleChange = event => {
    setSearchParams({query: event.target.value});
    setQuery(  event.target.value)
  };
  return (
    <div className="chart">
      <div className="ty-df">
      <div className="title">{title}</div>
      <select onChange={handleChange} className='chart-select'>
        <option className='chart-option'>last 6 months</option>
        <option className='chart-option'>last 3 months</option>
        <option className='chart-option'>last 12 months</option>
      </select>
      </div>
      
      <ResponsiveContainer width="100%" aspect={aspect}>
      <BarChart
       width={730}
        height={250}
         data={data}
         margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
         >
          <XAxis dataKey="name" stroke="gray" />
          <YAxis dataKey="total" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Bar dataKey="total" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChar;
