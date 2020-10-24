import { RootState } from '../../reducer'

export const propsSelector = (state: RootState) => ({
  taskList: state.modules.task.taskList,
  error: state.modules.task.error,
  isLoading: state.modules.task.isLoading
})
