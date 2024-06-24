import React, { createContext, useContext, useState } from 'react';
import styles from './index.module.css';

interface DragContextType {
  dropZones: string[][];
  setDropZones: React.Dispatch<React.SetStateAction<string[][]>>;
  droppedItems: { [key: string]: string | null };
  setDroppedItems: React.Dispatch<React.SetStateAction<{ [key: string]: string | null }>>;
}

interface DragContainerProps {
  children: React.ReactNode;
  rows: number;
  columns: number;
  className?: string;
}

const DragContext = createContext<DragContextType | undefined>(undefined);

const DragContainer: React.FC<DragContainerProps> & {
  Area: React.FC;
  Zone: React.FC<{ index: string }>;
  List: React.FC<{ items: { id: string; title: string; ip: string; image: string }[] }>;
  Item: React.FC<{ item: { id: string; title: string; ip: string; image: string } }>;
} = ({ children, rows, columns, className }) => {
  const initialDropZones = Array.from({ length: rows }, () => Array(columns).fill(null));
  const [dropZones, setDropZones] = useState<string[][]>(initialDropZones);
  const [droppedItems, setDroppedItems] = useState<{ [key: string]: string | null }>({});

  return (
    <DragContext.Provider value={{ dropZones, setDropZones, droppedItems, setDroppedItems }}>
      <div className={`${styles['drag-container']} ${className}`} style={{ display: 'flex', flexWrap: 'wrap' }}>
        {children}
      </div>
    </DragContext.Provider>
  );
};

const DragArea: React.FC = () => {
  const context = useContext(DragContext);
  if (!context) {
    throw new Error('DragArea 는 DragContainer 내부에서 사용해야합니다.');
  }
  const { dropZones } = context;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {dropZones.map((row, rowIndex) => row.map((_, colIndex) => <DragZone key={`${rowIndex}-${colIndex}`} index={`${rowIndex}-${colIndex}`} />))}
    </div>
  );
};

const DragZone: React.FC<{ index: string }> = ({ index }) => {
  const context = useContext(DragContext);
  if (!context) {
    throw new Error('DragZone 는 DragContainer 내부에서 사용해야합니다.');
  }
  const { droppedItems, setDroppedItems } = context;
  const [isDragZoneActive, setIsDragZoneActive] = useState(false);

  const handleDrop = (event: React.DragEvent) => {
    if (droppedItems[index]) return;
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    setDroppedItems((prev) => ({ ...prev, [index]: data }));
    setIsDragZoneActive(false);
  };

  const handleDragOver = (event: React.DragEvent) => {
    if (droppedItems[index]) return;
    event.preventDefault();
    setIsDragZoneActive(true);
  };

  const handleDragLeave = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragZoneActive(false);
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={isDragZoneActive ? styles['drag-zone-over'] : styles['drag-zone']}
      style={{ width: 100, height: 100, border: '1px solid black', margin: 10 }}
    >
      {droppedItems[index] && <div>{`${droppedItems[index]}`}</div>}
    </div>
  );
};

const DragList: React.FC<{ items: { id: string; title: string; ip: string; image: string }[] }> = ({ items }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      {items.map((item) => (
        <DragItem key={item.id} item={item} />
      ))}
    </div>
  );
};

const DragItem: React.FC<{ item: { id: string; title: string; ip: string; image: string } }> = ({ item }) => {
  const context = useContext(DragContext);
  if (!context) {
    throw new Error('DragItem 는 DragContainer 내부에서 사용해야합니다.');
  }
  const { droppedItems } = context;

  const handleDragStart = (event: React.DragEvent) => {
    event.dataTransfer.setData('text/plain', item.id);
  };

  const isDraggable = !Object.values(droppedItems).includes(item.id);

  return (
    <div
      className={isDraggable ? styles['drag-item'] : ''}
      draggable={isDraggable}
      onDragStart={isDraggable ? handleDragStart : undefined}
      style={{ width: 50, height: 50, border: '1px solid blue', margin: 5, opacity: isDraggable ? 1 : 0.5 }}
    >
      <div>{item.title}</div>
      <div>{item.ip}</div>
      <img src={item.image} alt={item.title} style={{ width: '100%' }} />
    </div>
  );
};

DragContainer.Area = DragArea;
DragContainer.Zone = DragZone;
DragContainer.List = DragList;
DragContainer.Item = DragItem;

export default DragContainer;
