import React from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import TodoFilter from './TodoFilter';
import { useTodos } from '../hooks/useTodos';
import { ListChecks } from 'lucide-react';

const TodoApp: React.FC = () => {
  const {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    filter,
    setFilter,
    clearCompleted,
    activeCount,
    completedCount
  } = useTodos();

  return (
    <div className="max-w-xl mx-auto p-4 sm:p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-indigo-600 flex items-center">
          <ListChecks className="mr-2" />
          To-Do List
        </h1>
      </div>

      <TodoForm onAddTodo={addTodo} />

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {todos.length > 0 ? (
          <ul className="divide-y divide-slate-100">
            {todos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))}
          </ul>
        ) : (
          <div className="py-8 px-4 text-center text-slate-500">
            {filter === 'all' 
              ? "You don't have any tasks yet. Add one above!" 
              : filter === 'active'
                ? "No active tasks found."
                : "No completed tasks found."}
          </div>
        )}

        <TodoFilter
          currentFilter={filter}
          onFilterChange={setFilter}
          activeCount={activeCount}
          completedCount={completedCount}
          onClearCompleted={clearCompleted}
        />
      </div>
    </div>
  );
};

export default TodoApp;