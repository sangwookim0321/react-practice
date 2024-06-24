import React from 'react';
import DragContainer from '../containers/drag-drop';

const Home: React.FC = () => {
  const items = [
    { id: '1', title: 'Item 1', ip: '192.168.0.1', image: 'https://via.placeholder.com/50' },
    { id: '2', title: 'Item 2', ip: '192.168.0.2', image: 'https://via.placeholder.com/50' },
    { id: '3', title: 'Item 3', ip: '192.168.0.3', image: 'https://via.placeholder.com/50' },
    { id: '4', title: 'Item 4', ip: '192.168.0.4', image: 'https://via.placeholder.com/50' },
    { id: '5', title: 'Item 5', ip: '192.168.0.5', image: 'https://via.placeholder.com/50' },
  ];

  return (
    <div>
      <DragContainer rows={2} columns={2} className={'drag-container'}>
        <DragContainer.List items={items} />
        <DragContainer.Area />
      </DragContainer>
    </div>
  );
};

export default Home;
