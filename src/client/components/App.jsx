import React, { useState } from 'react';
import { Switch } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';

function App() {
  return (
    <div className="app">
      <Switch>
        <div className="chart">
          <Bar
            data={data}
            width={100}
            height={50}
            options={{ maintainAspectRatio: false }}
          />
        </div>
      </Switch>
    </div>
  );
}

export default App;
