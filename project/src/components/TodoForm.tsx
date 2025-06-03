import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface TodoFormProps {
  onAddTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex items-center bg-white dark:bg-slate-800 rounded-lg shadow-sm overflow-hidden">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
          className="flex-grow p-3 outline-none bg-transparent text-slate-700 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500"
        />
        <button
          type="submit"
          className="flex-shrink-0 bg-indigo-600 hover:bg-indigo-700 text-white p-3 transition-colors duration-200"
          aria-label="Add task"
        >
          <Plus size={20} />
        </button>
      </div>
    </form>
  );
};

export default TodoForm;