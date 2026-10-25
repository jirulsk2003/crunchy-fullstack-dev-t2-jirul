export const FilterControls = ({ filterTerm, onFilterChange, sortOrder, onSortToggle }) => {
  return (
    <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', alignItems: 'center' }}>
      <input
        type="text"
        placeholder="Search items..."
        value={filterTerm}
        onChange={(e) => onFilterChange(e.target.value)}
        style={{ flex: 1, padding: '0.5rem', borderRadius: '4px', border: '1px solid #475569', background: '#0f172a', color: '#f8fafc' }}
      />
      <button onClick={onSortToggle} style={{ padding: '0.5rem 1rem', background: '#334155', color: '#f8fafc', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Sort Price: {sortOrder.toUpperCase()}
      </button>
    </div>
  );
};