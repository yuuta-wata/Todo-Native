import {
  TaskActionType,
  TaskList,
  TaskDeleteResult,
  FETCH_TASK_LIST_RESULTED,
  TASK_DELETE_RESULTED,
  TASK_LOADING,
  INPUT_TASK,
  TASK_DELETE_LOADING
} from './action-type'

interface State {
  taskList: TaskList[] | null
  error: string | null
  isLoading: boolean
  isDeleteLoading: boolean
  deleteResult: TaskDeleteResult
  content: string
}

const initialState: State = {
  taskList: null,
  error: null,
  isLoading: false,
  isDeleteLoading: false,
  deleteResult: {
    success: false,
    deleteError: undefined,
    deleteLoading: false
  },
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

    case TASK_DELETE_RESULTED:
      const {
        success,
        deleteError,
        deleteLoading: deleteLoadingDone
      } = action.payload
      return {
        ...state,
        deleteResult: {
          success,
          deleteError,
          deleteLoading: deleteLoadingDone
        },
        isDeleteLoading: deleteLoadingDone
      }

    case TASK_DELETE_LOADING:
      const { deleteLoading } = action.payload
      return { ...state, isDeleteLoading: deleteLoading }

    default:
      return state
  }
}
