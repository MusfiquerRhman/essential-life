import React, { useState } from 'react';
import Cards from './DashboardComponents/Cards';
import CardWithDonutChart from './DashboardComponents/CardWithDonutChart';
import CardWithLineChart from './DashboardComponents/CardWithLineChart';

function Dashboard() {
  const [legacyUserCount, setLegacyUserCount] = useState(500);
  const [ActiveTrailUserCount, setActiveTrailUserCount] = useState(1560);
  const [incativeTrailUserCout, setIncativeTrailUserCout] = useState(2500);
  const [totalUserCount, setTotalUserCount] = useState(5026);

  return (
    <section>
      <h1>Dashboard</h1>
      <div className='cards__container'>
        <Cards text="Legacy User Count" value={legacyUserCount} />
        <Cards text="Active Trial Users" value={ActiveTrailUserCount} />
        <Cards text="Inactive Trial Users" value={incativeTrailUserCout} />
        <Cards text="Total Users" value={totalUserCount} />
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