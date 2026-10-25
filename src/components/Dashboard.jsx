import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Header } from './Header';
import { NotificationBanner } from './NotificationBanner';
import { ItemForm } from './ItemForm';
import { ItemList } from './ItemList';
import { OrderSummary } from './OrderSummary';

const SEED_DATA = [
  { id: '1a2b3c4d-0001', name: 'Mechanical Keyboard', price: 79.99, quantity: 1 },
  { id: '1a2b3c4d-0002', name: 'Wireless Mouse', price: 29.99, quantity: 2 },
  { id: '1a2b3c4d-0003', name: 'USB-C Cable', price: 9.99, quantity: 3 },
];

export const Dashboard = () => {
  const [items, setItems] = useLocalStorage('inventory_items', SEED_DATA);
  const [alert, setAlert] = useState(null);

  const handleAddItem = (newItem) => {
    setItems((prev) => [...prev, newItem]);
    setAlert(`Added "${newItem.name}" to inventory.`);
  };

  const handleDeleteItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
    setAlert('Item removed.');
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
    );
  };

  return (
    <div style={{ maxWidth: '850px', margin: '2rem auto', padding: '0 1rem', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <Header title="Store Inventory & Order Engine" />
      <NotificationBanner message={alert} onClose={() => setAlert(null)} />
      <ItemForm onAddItem={handleAddItem} />
      <ItemList items={items} onDeleteItem={handleDeleteItem} onUpdateQuantity={handleUpdateQuantity} />
      <OrderSummary items={items} />
    </div>
  );
};