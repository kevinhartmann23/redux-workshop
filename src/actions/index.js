export const addTodo = todo => ({
  type: 'ADD_TODO',
  todo
})

export const toggleTodo = (id, display) => ({
  type: 'TOGGLE_COMPLETED',
  id,
  display
})

export const filterCompleted = () => ({
  type: 'FILTER_COMPLETED'
})

export const filterActive = () => ({
  type: 'FILTER_ACTIVE'
})

export const showAll = () => ({
  type: 'SHOW_ALL'
})