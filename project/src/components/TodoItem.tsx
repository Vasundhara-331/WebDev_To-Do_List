import React, { useState } from 'react';
import { Todo } from '../types';
import { Check, Trash2 } from 'lucide-react';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <li 
      className="group flex items-center p-3 mb-2 rounded-lg transition-all duration-200 
                hover:bg-slate-100 dark:hover:bg-slate-800"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <button
        onClick={() => onToggle(todo.id)}
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center mr-3
                   transition-all duration-200 ${
                     todo.completed 
                       ? 'bg-emerald-500 border-emerald-500' 
                       : 'border-slate-300 dark:border-slate-600 hover:border-emerald-500 dark:hover:border-emerald-500'
                   }`}
        aria-label={todo.completed ? "Mark as incomplete" : "Mark as complete"}
      >
        {todo.completed && <Check size={14} className="text-white" />}
      </button>
      
      <span 
        className={`flex-grow transition-all duration-200 ${
          todo.completed ? 'text-slate-400 dark:text-slate-500 line-through' : 'text-slate-700 dark:text-slate-200'
        }`}
      >
        {todo.text}
      </span>
      
      <button
        onClick={() => onDelete(todo.id)}
        className={`text-slate-400 hover:text-red-500 dark:text-slate-500 dark:hover:text-red-500 
                  transition-all duration-200 ${isHovering ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
        aria-label="Delete todo"
      >
        <Trash2 size={18} />
      </button>
    </li>
  );
};

export default TodoItem;