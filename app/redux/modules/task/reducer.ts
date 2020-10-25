import {
  TaskActionType,
  TaskList,
  FETCH_TASK_LIST_RESULTED,
  TASK_LOADING,
  INPUT_TASK
} from './action-type'

interface State {
  taskList: TaskList[] | null
  error: string | null
  isLoading: boolean
  content: string
}

const initialState: State = {
  taskList: null,
  error: null,
  isLoading: false,
  content: ''
}

export const TaskReducer = (
  state = initialState,
  action: TaskActionType
): State => {
  switch (action.type) {
    case FETCH_TASK_LIST_RESULTED:
      const { taskList, error, isLoading: loadingDone } = action.payload
      return { ...state, taskList, error, isLoading: loadingDone }

    case TASK_LOADING:
      const { isLoading } = action.payload
      return { ...state, isLoading }

    case INPUT_TASK:
      const { task } = action.payload
      return { ...state, content: task }

    default:
      return state
  }
}
