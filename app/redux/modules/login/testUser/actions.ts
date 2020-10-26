import {
  TestLoginActionTypes,
  LOGIN_LOADING,
  TEST_LOGIN_REQUIEST
} from './action-type'

export const TestLoginRequest = (): TestLoginActionTypes => ({
  type: TEST_LOGIN_REQUIEST
})

export const IsLoginLoading = (isLoading: boolean): TestLoginActionTypes => ({
  type: LOGIN_LOADING,
  payload: {
    isLoading
  }
})
