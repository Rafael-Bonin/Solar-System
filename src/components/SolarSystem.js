import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    const RenderPlanets = planets.map(
      (c) => <PlanetCard key={ c.name } planetName={ c.name } planetImage={ c.image } />,
    );
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {RenderPlanets}
      </div>
    );
  }
}

export default SolarSystem;
