import {
  FETCH_TASK_LIST,
  FETCH_TASK_LIST_RESULTED,
  TASK_LOADING,
  INPUT_TASK,
  FetchResponse,
  TaskActionType,
  ADD_TASK
} from './action-type'

export const FetchTaskListAction = (): TaskActionType => ({
  type: FETCH_TASK_LIST
})

export const FetchTaskResultAction = (
  response: FetchResponse
): TaskActionType => {
  console.log('response:', response)
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
