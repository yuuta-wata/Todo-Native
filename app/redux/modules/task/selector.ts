import { RootState } from '../../reducer'

export const propsSelector = (state: RootState) => {
  const {
    modules: {
      task: {
        taskList,
        error,
        content,
        isLoading,
        isDeleteLoading,
        deleteResult
      }
    }
  } = state
  return {
    taskList,
    error,
    task: content,
    isLoading,
    isDeleteLoading,
    deleteResulte: deleteResult ? deleteResult : undefined
  }
}
