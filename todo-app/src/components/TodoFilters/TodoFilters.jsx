import { FiltersContainer, ItemsLeft, FilterButtonContainer, FilterButton } from "./TodoFilters.components"

const TodoFilters = ({ total, activeFilter, showAllTodos, showActiveTodos, showCompletedTodos, handleClearComplete }) => {
    return (
        <FiltersContainer>
            <ItemsLeft total={total} />
            <FilterButtonContainer>
                <FilterButton action={() => showAllTodos()} active={activeFilter} filter='All'/>
                <p> | </p>
                <FilterButton action={() => showActiveTodos()} active={activeFilter} filter='Active' />
                <p> | </p>
                <FilterButton action={() => showCompletedTodos()} active={activeFilter} filter='Completed' /> 
            </FilterButtonContainer>
            <button onClick={() => handleClearComplete()} className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in">
                Clear Completed
            </button>
        </FiltersContainer>
    )
}

export {TodoFilters}