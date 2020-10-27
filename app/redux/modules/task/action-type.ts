export const FETCH_TASK_LIST = 'FETCH_TASK_LIST'

export const FETCH_TASK_LIST_RESULTED = 'FETCH_TASK_LIST_RESULTED'

export const TASK_LOADING = 'TASK_LOADING'

export const INPUT_TASK = 'INPUT_TASK'

export const ADD_TASK = 'ADD_TASK'

export const TASK_DELETE = 'TASK_DELETE'

export const TASK_DELETE_RESULTED = 'TASK_DELETE_RESULTED'

export const TASK_DELETE_LOADING = 'TASK_DELETE_LOADING'

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

export interface TaskDeleteResponse {
  data: {
    deleteTodo: boolean | null
  }
  errors?: {
    message: {
      message: string
    }
  }[]
}

export interface TaskDeleteResult {
  success: boolean
  deleteError?: string
  deleteLoading: boolean
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

interface TaskDelete {
  type: typeof TASK_DELETE
  payload: {
    taskId: number
  }
}

interface TaskDeleteResulted {
  type: typeof TASK_DELETE_RESULTED
  payload: TaskDeleteResult
}

interface TaskDeleteLoading {
  type: typeof TASK_DELETE_LOADING
  payload: {
    deleteLoading: boolean
  }
}

export type TaskActionType =
  | FetchTaskList
  | FetchTaskListResulted
  | TaskIsLoading
  | InputTask
  | AddTask
  | TaskDelete
  | TaskDeleteResulted
  | TaskDeleteLoading
