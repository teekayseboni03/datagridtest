import logo from './logo.svg';

import './App.css';
import React,{useEffect, useState} from 'react';
import {Box, Typography, useTheme} from '@mui/material'
import {DataGrid} from '@mui/x-data-grid';
//import data from './dataSource'
import HRAccess from './components/HRAccess/HRAccess';

function App() {

  return (
   
      <HRAccess/>
    
  );
}

export default App;
