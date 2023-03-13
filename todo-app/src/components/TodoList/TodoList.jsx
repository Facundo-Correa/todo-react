import { Todo } from "../Todo/Todo"
import { TodoFilters } from "../TodoFilters/TodoFilters"

const TodoList = ({
    todos,
    activeFilter,
    handleSetComplete,
    handleDelete,
    handleClearComplete,
    showAllTodos,
    showActiveTodos,
    showCompletedTodos
}) => {
    return (
        <div className= {"flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl hover:shadow-blue-800 shadow-lg transition-all duration-300 ease-in"} >
            {todos.map(todo => (
                <Todo key={todo.id} 
                todo={todo} 
                handleDelete={handleDelete}
                handleSetComplete={handleSetComplete}
                />
            )
            )}
            <TodoFilters
                activeFilter={activeFilter}
                total={todos.length}
                showAllTodos = {showAllTodos}
                showActiveTodos = {showActiveTodos}
                showCompletedTodos = {showCompletedTodos}
                handleClearComplete = {handleClearComplete}
             />
        </div>
    )
}

export { TodoList }