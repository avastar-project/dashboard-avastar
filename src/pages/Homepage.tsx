import BarChart from '../components/BarChart';
import React from 'react';
import DropzoneMultiplefiles from '../dropZone'

export default function Homepage() {
  return (
    <div>
      <h1>Homepage</h1>
      <BarChart />
      <DropzoneMultiplefiles />
    </div>
  );
}
