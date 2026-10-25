export const Header = ({ title }) => {
  return (
    <header style={{ padding: '1rem 0', borderBottom: '1px solid #334155', marginBottom: '1.5rem' }}>
      <h1 style={{ margin: 0, fontSize: '1.6rem', color: '#f8fafc' }}>{title}</h1>
    </header>
  );
};