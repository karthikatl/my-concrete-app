import React from 'react';
import { useSelector } from 'react-redux';
import { selectSelectedConcreteId } from '../store/concreteSlice';
import useFetchConcreteDataByDetails from '../hooks/useFetchConcreteDataByDetails';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label, LabelList
} from 'recharts';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const BarChartConcrete = () => {
  const selectedConcreteId = useSelector(selectSelectedConcreteId);
  const { data, error, isLoading } = useFetchConcreteDataByDetails(selectedConcreteId);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data.</div>;

  // Ensure we have valid data structure
  const barChartData = data?.cementContents?.map(item => ({
    type: item.label,
    value: item.value,
  })) || [];

  const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 420,
    height: 320,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'left',
  }));

  // Calculate domain for XAxis
  const minValue = 100;
  const maxValue = 400;
  const range = maxValue - minValue;
  const buffer = range * 0.1; // Adjust the buffer percentage as needed

  // Calculate domain for XAxis
  const xAxisDomain = [minValue, maxValue + buffer];

  return (
    <DemoPaper variant="outlined" sx={{ mt: 4 }} style={{ position: 'relative'}}>
      {/* Custom label positioned at the top */}
      <div style={{ top: '15px', position: 'absolute', left: '10px'}}>
        Size
      </div>
      <div style={{ top: '15px', position: 'absolute', left: '100px'}}>
        Minimum cement content (kg/m3)
      </div>
      <ResponsiveContainer width="100%" height={300} style={{ marginTop: '30px'}}>
        <BarChart data={barChartData} layout="vertical">
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis type="number" domain={xAxisDomain} />
          <YAxis type="category" dataKey="type" width={60} />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" barSize={20}>
            <LabelList dataKey="value" position="right" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </DemoPaper>
  );
};

export default BarChartConcrete;
