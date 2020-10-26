import { RootState } from '../../../reducer'

export const propsSelector = (state: RootState) => {
  const {
    modules: { testLogin }
  } = state
  return {
    testLoginResulted: testLogin ? testLogin.loginResult : undefined
  }
}
