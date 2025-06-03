import React from 'react';
import { TodoFilter as FilterType } from '../types';

interface TodoFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  activeCount: number;
  completedCount: number;
  onClearCompleted: () => void;
}

const TodoFilter: React.FC<TodoFilterProps> = ({
  currentFilter,
  onFilterChange,
  activeCount,
  completedCount,
  onClearCompleted
}) => {
  const filters: FilterType[] = ['all', 'active', 'completed'];
  
  const getButtonClass = (filter: FilterType) => {
    return `px-3 py-1 rounded-md transition-colors duration-200 text-sm font-medium ${
      currentFilter === filter
        ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
    }`;
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mt-4 py-3 px-2 border-t border-slate-200 dark:border-slate-700">
      <div className="text-sm text-slate-500 dark:text-slate-400 mb-3 sm:mb-0">
        {activeCount} {activeCount === 1 ? 'task' : 'tasks'} remaining
      </div>
      
      <div className="flex space-x-1">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={getButtonClass(filter)}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>
      
      {completedCount > 0 && (
        <button
          onClick={onClearCompleted}
          className="mt-3 sm:mt-0 text-sm text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 transition-colors duration-200"
        >
          Clear completed
        </button>
      )}
    </div>
  );
};

export default TodoFilter;