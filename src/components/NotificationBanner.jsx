export const NotificationBanner = ({ message, onClose }) => {
  if (!message) return null;
  return (
    <div style={{ backgroundColor: '#064e3b', color: '#a7f3d0', padding: '0.75rem 1rem', borderRadius: '6px', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span>{message}</span>
      <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#a7f3d0', cursor: 'pointer', fontSize: '1.2rem', fontWeight: 'bold' }}>×</button>
    </div>
  );
};