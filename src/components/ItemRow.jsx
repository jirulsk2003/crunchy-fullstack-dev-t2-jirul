export const ItemRow = ({ item, onDelete, onUpdateQuantity }) => {
  return (
    <tr style={{ borderBottom: '1px solid #334155' }}>
      <td style={{ padding: '0.75rem', color: '#f8fafc' }}>{item.name}</td>
      <td style={{ padding: '0.75rem', color: '#94a3b8' }}>${item.price.toFixed(2)}</td>
      <td style={{ padding: '0.75rem' }}>
        <button onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))} style={{ padding: '0.2rem 0.5rem', background: '#334155', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>-</button>
        <span style={{ margin: '0 0.6rem', color: '#f8fafc' }}>{item.quantity}</span>
        <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} style={{ padding: '0.2rem 0.5rem', background: '#334155', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>+</button>
      </td>
      <td style={{ padding: '0.75rem', color: '#f8fafc' }}>${(item.price * item.quantity).toFixed(2)}</td>
      <td style={{ padding: '0.75rem' }}>
        <button onClick={() => onDelete(item.id)} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', fontWeight: 'bold' }}>
          Delete
        </button>
      </td>
    </tr>
  );
};