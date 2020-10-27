import {
  FETCH_TASK_LIST,
  FETCH_TASK_LIST_RESULTED,
  TASK_DELETE,
  TASK_DELETE_RESULTED,
  TASK_LOADING,
  INPUT_TASK,
  ADD_TASK,
  TaskDeleteResponse,
  FetchResponse,
  TaskActionType,
  TASK_DELETE_LOADING
} from './action-type'

export const FetchTaskListAction = (): TaskActionType => ({
  type: FETCH_TASK_LIST
})

export const FetchTaskResultAction = (
  response: FetchResponse
): TaskActionType => {
  // console.log('response:', response)
  return {
    type: FETCH_TASK_LIST_RESULTED,
    payload: {
      taskList: response.data.getTodoList ? response.data.getTodoList : null,
      error: response.errors ? response.errors[0].message.message : null,
      isLoading: false
    }
  }
}

export const TaskLoading = (): TaskActionType => ({
  type: TASK_LOADING,
  payload: {
    isLoading: true
  }
})

export const ChangeTask = (task: string): TaskActionType => ({
  type: INPUT_TASK,
  payload: {
    task
  }
})

export const AddTask = (): TaskActionType => ({
  type: ADD_TASK
})

export const TaskDeleteRequest = (taskId: number): TaskActionType => ({
  type: TASK_DELETE,
  payload: {
    taskId
  }
})

export const TaskDeleteResult = (
  response: TaskDeleteResponse
): TaskActionType => {
  console.log('TaskDeleteResponse:', response.data)
  return {
    type: TASK_DELETE_RESULTED,
    payload: {
      success: !!response.data.deleteTodo,
      deleteError: response.errors
        ? response.errors[0].message.message
        : undefined,
      deleteLoading: false
    }
  }
}

export const TaskDeleteLoading = (): TaskActionType => ({
  type: TASK_DELETE_LOADING,
  payload: {
    deleteLoading: true
  }
})
