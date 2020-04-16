import React, { useState } from 'react';
import { Chart } from 'react-google-charts';

function App() {
  return (
    <Chart
      width={'500px'}
      height={'300px'}
      chartType="Timeline"
      loader={<div>Loading Chart</div>}
      data={[
        [
          { type: 'string', id: 'Resolver/Query' },
          { type: 'date', id: 'Start' },
          { type: 'date', id: 'End' },
        ],
        ['Query', 0, 291258],
        ['posts', 0, 28870],
        ['title', 28870, 42922],
        ['user', 42922, 52375],
        ['id', 52375, 60806],
        ['firstName', 60806, 68982],
        ['lastName', 68982, 76392],
        ['title', 76392, 90444],
        ['user', 90444, 98876],
        ['id', 98876, 105518],
        ['firstName', 105518, 113438],
        ['lastName', 113438, 119059],
      ]}
      options={{
        showRowNumber: false,
      }}
      rootProps={{ 'data-testid': '1' }}
    />
  );
}

export default App;
