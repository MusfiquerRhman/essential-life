import React, { useState } from 'react';
import Cards from './DashboardComponents/Cards';

function Dashboard() {
  const [legacyUserCount, setLegacyUserCount] = useState(500);

  return (
    <div>
      <div className='cards__container'>
        <Cards text="Legacy User Count" value={legacyUserCount} />
        <Cards text="Legacy User Count" value={legacyUserCount} />
        <Cards text="Legacy User Count" value={legacyUserCount} />
        <Cards text="Legacy User Count" value={legacyUserCount} />
      </div>
    </div>
  )
}

export default Dashboard