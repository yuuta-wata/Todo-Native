import { LOGOUT, LogoutActionType } from './action-type'

export const LogoutRequest = (): LogoutActionType => ({
  type: LOGOUT
})
