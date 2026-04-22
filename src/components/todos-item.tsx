
const TodoItem = ({ todo, onToggle, onDelete }: any) => {
    return (
        <div className={`flex items-center justify-between p-4 transition-colors ${todo.completed ? 'bg-gray-50' : 'bg-white hover:bg-blue-50'}`}>
            <div className="flex items-center gap-3">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onToggle(todo.id)}
                    className="w-5 h-5 cursor-pointer accent-blue-600 rounded"
                />
                <span className={`text-lg transition-all duration-300 ${todo.completed ? 'line-through text-gray-400' : 'text-gray-800 font-medium'}`}>
                    {todo.title}
                </span>
            </div>
            <button
                onClick={() => onDelete(todo.id)}
                className="px-3 py-1 bg-red-100 text-red-600 text-sm font-semibold rounded-md hover:bg-red-600 hover:text-white transition-colors duration-200"
            >
                Delete
            </button>
        </div>
    );
};

export default TodoItem;