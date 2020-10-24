export const FETCH_TASK_LIST = 'FETCH_TASK_LIST'

export const FETCH_TASK_LIST_RESULTED = 'FETCH_TASK_LIST_RESULTED'

export const TASK_LOADING = 'TASK_LOADING'

export interface TaskList {
  id: string
  userId: string
  title: string
}

export interface FetchResponse {
  data: {
    getTodoList: TaskList[] | null
  }
  errors?: {
    message: {
      message: string
    }
  }[]
}

interface FetchTaskList {
  type: typeof FETCH_TASK_LIST
}

interface FetchTaskListResulted {
  type: typeof FETCH_TASK_LIST_RESULTED
  payload: {
    taskList: TaskList[] | null
    error: string | null
    isLoading: boolean
  }
}

interface TaskIsLoading {
  type: typeof TASK_LOADING
  payload: {
    isLoading: boolean
  }
}

export type TaskActionType =
  | FetchTaskList
  | FetchTaskListResulted
  | TaskIsLoading
