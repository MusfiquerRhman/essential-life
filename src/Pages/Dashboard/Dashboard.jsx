import React, { useState } from 'react';
import Cards from './DashboardComponents/Cards';
import CardWithDonutChart from './DashboardComponents/CardWithDonutChart';
import CardWithLineChart from './DashboardComponents/CardWithLineChart';

function Dashboard() {
  const [legacyUserCount, setLegacyUserCount] = useState(500);

  return (
    <section>
      <h1>Dashboard</h1>
      <div className='cards__container'>
        <Cards text="Legacy User Count" value={legacyUserCount} />
        <Cards text="Active Trial Users" value={legacyUserCount} />
        <Cards text="Inactive Trial Users" value={legacyUserCount} />
        <Cards text="Total Users" value={legacyUserCount} />
      </div>
      <div className='cards__container'>
        <CardWithDonutChart />
        <CardWithLineChart text="Total Users Per Day" />
        <CardWithLineChart text="Total Users Per Month"/>

      </div>
    </section>
  )
}

export default Dashboard