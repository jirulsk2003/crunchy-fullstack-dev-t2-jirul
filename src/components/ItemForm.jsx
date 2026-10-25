import { useState } from 'react';

export const ItemForm = ({ onAddItem }) => {
  const [formData, setFormData] = useState({ name: '', price: '', quantity: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Item name is required';
    if (!formData.price || Number(formData.price) <= 0) errs.price = 'Price must be greater than 0';
    if (!formData.quantity || Number(formData.quantity) < 1) errs.quantity = 'Quantity must be at least 1';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    onAddItem({
      id: crypto.randomUUID(),
      name: formData.name.trim(),
      price: parseFloat(formData.price),
      quantity: parseInt(formData.quantity, 10),
    });

    setFormData({ name: '', price: '', quantity: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ background: '#1e293b', padding: '1.25rem', borderRadius: '8px', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <h3 style={{ margin: 0, color: '#f1f5f9' }}>Add New Item</h3>
      <div>
        <input
          name="name"
          placeholder="Item Name"
          value={formData.name}
          onChange={handleChange}
          style={{ width: '100%', boxSizing: 'border-box', padding: '0.5rem', borderRadius: '4px', border: '1px solid #475569', background: '#0f172a', color: '#f8fafc' }}
        />
        {errors.name && <span style={{ color: '#f87171', fontSize: '0.75rem' }}>{errors.name}</span>}
      </div>

      <div style={{ display: 'flex', gap: '0.75rem' }}>
        <div style={{ flex: 1 }}>
          <input
            type="number"
            name="price"
            placeholder="Price ($)"
            value={formData.price}
            onChange={handleChange}
            step="0.01"
            style={{ width: '100%', boxSizing: 'border-box', padding: '0.5rem', borderRadius: '4px', border: '1px solid #475569', background: '#0f172a', color: '#f8fafc' }}
          />
          {errors.price && <span style={{ color: '#f87171', fontSize: '0.75rem' }}>{errors.price}</span>}
        </div>

        <div style={{ flex: 1 }}>
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleChange}
            style={{ width: '100%', boxSizing: 'border-box', padding: '0.5rem', borderRadius: '4px', border: '1px solid #475569', background: '#0f172a', color: '#f8fafc' }}
          />
          {errors.quantity && <span style={{ color: '#f87171', fontSize: '0.75rem' }}>{errors.quantity}</span>}
        </div>
      </div>

      <button type="submit" style={{ padding: '0.6rem', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
        Add Item
      </button>
    </form>
  );
};