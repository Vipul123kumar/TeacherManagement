import React, { useState, useEffect } from 'react';
export default function TeacherForm({ onSubmit, initialData }) {
  const [form, setForm] = useState({ name: '', subject: '', email: '' });

  useEffect(() => {
    if (initialData) setForm({ name: initialData.name, subject: initialData.subject, email: initialData.email });
  }, [initialData]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.subject) return;
    onSubmit(form);
    setForm({ name: '', subject: '', email: '' });
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-indigo-800 mb-4">{initialData ? 'Edit' : 'Add'} Teacher</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Subject</label>
        <input
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition"
      >
        {initialData ? 'Update' : 'Add'} Teacher
      </button>
    </form>
  );
}
