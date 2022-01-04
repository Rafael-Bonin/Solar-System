import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    const AllMissions = missions.map((c) => (
      <MissionCard
        key={ c.name }
        name={ c.name }
        year={ c.year }
        country={ c.country }
        destination={ c.destination }
      />
    ));
    return (
      <div data-testid="missions" className="missoes">
        <Title headline="Missões" />
        {AllMissions}
      </div>
    );
  }
}

export default Missions;
