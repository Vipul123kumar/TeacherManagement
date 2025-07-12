import React from 'react';
import TeacherCard from './TeacherCard';

export default function TeacherList({ teachers, onEdit, onDelete }) {
  if (!teachers.length) return <p className="text-gray-500 italic text-center">No teachers found.</p>;
  return (
    <div className="space-y-4">
      {teachers.map(t => (
        <TeacherCard key={t.id} teacher={t} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}