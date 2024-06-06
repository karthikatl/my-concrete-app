import React from 'react';
import Paper from '@mui/material/Paper';

function Header() {
  return (
    <Paper square={false} sx={{ p: 1, mb: 3 }} >
      <h2>Designated Concrete</h2>
    </Paper>
  );
}

export default Header;