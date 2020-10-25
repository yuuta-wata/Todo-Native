export const FETCH_TASK_LIST = 'FETCH_TASK_LIST'

export const FETCH_TASK_LIST_RESULTED = 'FETCH_TASK_LIST_RESULTED'

export const TASK_LOADING = 'TASK_LOADING'

export const INPUT_TASK = 'INPUT_TASK'

export const ADD_TASK = 'ADD_TASK'

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

interface InputTask {
  type: typeof INPUT_TASK
  payload: {
    task: string
  }
}

interface AddTask {
  type: typeof ADD_TASK
}

export type TaskActionType =
  | FetchTaskList
  | FetchTaskListResulted
  | TaskIsLoading
  | InputTask
  | AddTask
