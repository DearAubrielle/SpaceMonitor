import { useState } from 'react';

const floorplans = [
  {
    id: 1,
    name: 'Ground Floor',
    image: '@/images/floorplans/house_ground_floor.jpg',
  },
  {
    id: 2,
    name: 'Second Floor',
    image: '/images/floorplans/house_second_floor.png',
  },
  {
    id: 3,
    name: 'Rooftop Garden',
    image: '/images/floorplans/house_rooftop.png',
  },
];

export default function FloorplanPage() {
  const [selected, setSelected] = useState(floorplans[0]);

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
        {/* Future: Add drag-and-drop sensor overlay here */}
      </div>
    </div>
  );
}