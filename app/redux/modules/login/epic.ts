import { from } from 'rxjs'
import { map, mergeMap } from 'rxjs/operators'
import {
  Epic,
  ofType,
  StateObservable,
  ActionsObservable
} from 'redux-observable'

import {
  LoginActionTypes,
  LoginResponse,
  SEND_LOGIN_REQUIEST,
  SEND_LOGIN_RESULTED
} from './action-type'
import { login } from './api'
import { RootState } from '../../reducer'

const LoginVerify = (response: LoginResponse): LoginActionTypes => ({
  type: SEND_LOGIN_RESULTED,
  payload: {
    success: response.data.login,
    error: response.errors ? response.errors[0].message.message : undefined
  }
})

export const loginEpic: Epic = (
  action$: ActionsObservable<LoginActionTypes>,
  state$: StateObservable<RootState>
) =>
  action$.pipe(
    ofType(SEND_LOGIN_REQUIEST),
    mergeMap(() =>
      from(
        login({
          email: state$.value.modules.login.email,
          password: state$.value.modules.login.password
        })
      ).pipe(map((res) => LoginVerify(res.data)))
    )
  )
