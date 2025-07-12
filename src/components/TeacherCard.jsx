import React from 'react';
export default function TeacherCard({ teacher, onEdit, onDelete }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
      <div>
        <h3 className="text-xl font-bold text-blue-800">{teacher.name}</h3>
        <p className="text-sm text-gray-700">Subject: {teacher.subject}</p>
        {teacher.email && <p className="text-sm text-gray-600">Email: {teacher.email}</p>}
      </div>
      <div className="mt-3 flex space-x-2">
        <button
          onClick={() => onEdit(teacher)}
          className="px-4 py-1 bg-yellow-400 text-white font-medium rounded hover:bg-yellow-500"
        >Edit</button>
        <button
          onClick={() => onDelete(teacher.id)}
          className="px-4 py-1 bg-red-500 text-white font-medium rounded hover:bg-red-600"
        >Delete</button>
      </div>
    </div>
  );
}