

// src/App.jsx
import React, { useState, useEffect } from 'react';
import TeacherList from './components/TeacherList';
import TeacherForm from './components/TeacherForm';
import SearchBar from './components/SearchBar';

export default function App() {
  const [teachers, setTeachers] = useState([]);
  const [editingTeacher, setEditingTeacher] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('teachers');
    if (saved) setTeachers(JSON.parse(saved));
  }, []);
  useEffect(() => {
    localStorage.setItem('teachers', JSON.stringify(teachers));
  }, [teachers]);

  function addTeacher(data) {
    setTeachers([...teachers, { id: Date.now(), ...data }]);
  }

  function updateTeacher(id, data) {
    setTeachers(teachers.map(t => t.id === id ? { ...t, ...data } : t));
    setEditingTeacher(null);
  }

  function deleteTeacher(id) {
    if (window.confirm('Delete this teacher?')) {
      setTeachers(teachers.filter(t => t.id !== id));
    }
  }

  const filtered = teachers.filter(t =>
    t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
     <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-100 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl p-8">
        <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-6">Teacher Management</h1>
        <SearchBar className=" text-2xl bold bg-re" value={searchTerm} onChange={setSearchTerm} />
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <TeacherForm
            key={editingTeacher ? editingTeacher.id : 'new'}
            onSubmit={editingTeacher ? data => updateTeacher(editingTeacher.id, data) : addTeacher}
            initialData={editingTeacher}
          />
          <TeacherList
            teachers={filtered}
            onEdit={setEditingTeacher}
            onDelete={deleteTeacher}
          />
        </div>
      </div>
    </div>
  );
}



