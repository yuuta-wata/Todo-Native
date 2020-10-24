import {
  TaskActionType,
  TaskList,
  FETCH_TASK_LIST_RESULTED,
  TASK_LOADING
} from './action-type'

interface State {
  taskList: TaskList[] | null
  error: string | null
  isLoading: boolean
}

const initialState: State = {
  taskList: null,
  error: null,
  isLoading: false
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

    default:
      return state
  }
}
