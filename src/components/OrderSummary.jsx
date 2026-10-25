export const OrderSummary = ({ items }) => {
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const grandTotal = subtotal + tax;

  return (
    <div style={{ background: '#1e293b', padding: '1.25rem', borderRadius: '8px' }}>
      <h3 style={{ margin: '0 0 0.75rem 0', color: '#f1f5f9' }}>Order Summary</h3>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', color: '#94a3b8' }}>
        <span>Subtotal:</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', color: '#94a3b8' }}>
        <span>Estimated Tax (8%):</span>
        <span>${tax.toFixed(2)}</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.15rem', color: '#38bdf8', borderTop: '1px solid #334155', paddingTop: '0.6rem', marginTop: '0.4rem' }}>
        <span>Grand Total:</span>
        <span>${grandTotal.toFixed(2)}</span>
      </div>
    </div>
  );
};