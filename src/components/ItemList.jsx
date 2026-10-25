import { useState, useMemo } from 'react';
import { FilterControls } from './FilterControls';
import { ItemRow } from './ItemRow';

export const ItemList = ({ items, onDeleteItem, onUpdateQuantity }) => {
  const [filterTerm, setFilterTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const processedItems = useMemo(() => {
    return items
      .filter((item) => item.name.toLowerCase().includes(filterTerm.toLowerCase()))
      .toSorted((a, b) => (sortOrder === 'asc' ? a.price - b.price : b.price - a.price));
  }, [items, filterTerm, sortOrder]);

  return (
    <div style={{ background: '#1e293b', padding: '1.25rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
      <FilterControls
        filterTerm={filterTerm}
        onFilterChange={setFilterTerm}
        sortOrder={sortOrder}
        onSortToggle={() => setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))}
      />
      {processedItems.length === 0 ? (
        <p style={{ color: '#94a3b8', margin: 0 }}>No items match your filter.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #475569', color: '#cbd5e1' }}>
              <th style={{ padding: '0.5rem 0.75rem' }}>Name</th>
              <th style={{ padding: '0.5rem 0.75rem' }}>Price</th>
              <th style={{ padding: '0.5rem 0.75rem' }}>Qty</th>
              <th style={{ padding: '0.5rem 0.75rem' }}>Total</th>
              <th style={{ padding: '0.5rem 0.75rem' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {processedItems.map((item) => (
              <ItemRow
                key={item.id}
                item={item}
                onDelete={onDeleteItem}
                onUpdateQuantity={onUpdateQuantity}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};