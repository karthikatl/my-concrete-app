import React from 'react';
import Header from './components/common/Header';
import BarChartConcrete from './components/BarChartConcrete';
import SelectConcrete from './components/SelectConcrete';
import Grid from '@mui/material/Grid';


function App() {
  return (
   
    <div>
      <Header />
      <Grid container
        direction="column"
        justifyContent="space-between"
        alignItems="center">
          <SelectConcrete data-testid="select-concrete"/>
          <BarChartConcrete />
      </Grid>
    </div>
  );
}

export default App;
