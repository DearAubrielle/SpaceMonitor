import { useState } from 'react';
import groundFloor from '@/images/floorplans/house_ground_floor.jpg';

const floorplans = [
  { id: 1, name: 'Ground Floor', image: groundFloor }
];

interface Sensor {
  id: number;
  x: number;
  y: number;
}

export default function FloorplanPage() {
  const [selected, setSelected] = useState(floorplans[0]);
  const [sensors, setSensors] = useState<Sensor[]>([]);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setSensors((prev) => [
      ...prev,
      { id: prev.length + 1, x, y },
    ]);
  };

  return (
    <div style={{ display: 'flex', height: '100vh', padding: '1rem', gap: '1rem' }}>
      {/* Floorplan List */}
      <div
        style={{
          flex: '0 0 25%',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 0 5px rgba(141, 141, 141, 0.1)',
          padding: '1rem',
          overflowY: 'auto',
        }}
      >
        <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>Floorplans</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {floorplans.map((plan) => (
            <li
              key={plan.id}
              onClick={() => setSelected(plan)}
              style={{
                padding: '0.5rem 1rem',
                marginBottom: '0.5rem',
                borderRadius: '8px',
                backgroundColor: selected.id === plan.id ? '#dbeafe' : '#f9f9f9',
                fontWeight: selected.id === plan.id ? 'bold' : 'normal',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
              }}
            >
              {plan.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Floorplan Image with Drag-and-Drop */}
      <div
        style={{
          flex: 1,
          padding: '1rem',
          backgroundColor: 'chocolate',
          borderRadius: '8px',
          boxShadow: '0 0 5px rgba(141, 141, 141, 0.1)',
          display: 'inline',
          alignItems: 'start',
          justifyContent: 'center',
          position: 'relative',
        }}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <img
          src={selected.image}
          alt={selected.name}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
            borderRadius: '5px',
          }}
        />
        {/* Sensor Overlay */}
        {sensors.map((sensor) => (
          <div
            key={sensor.id}
            style={{
              position: 'absolute',
              top: sensor.y,
              left: sensor.x,
              width: '16px',
              height: '16px',
              backgroundColor: 'red',
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>
    </div>
  );
}