import { RootState } from '../../../reducer'

export const propsSelector = (state: RootState) => {
  const {
    modules: {
      account: {
        delete: {
          nickName,
          email,
          password,
          isLoading,
          token,
          accountDeleteResult: { success, error }
        }
      }
    }
  } = state
  return {
    nickName,
    email,
    password,
    isLoading,
    success,
    error,
    token
  }
}
