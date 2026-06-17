import React from 'react';
import Badges from './components/Badges';
import Progress from './components/Progress';
import Stats from './components/Stats';
import Timeline from './components/Timeline';

export default function App() {
  return (
    <div className="react-demo">
      <h3>React Component Showcase</h3>
      <section>
        <Badges />
      </section>
      <section>
        <Progress />
      </section>
      <section>
        <Stats />
      </section>
      <section>
        <Timeline />
      </section>
    </div>
  );
}
