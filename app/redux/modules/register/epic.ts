import { from } from 'rxjs'
import { map, mergeMap } from 'rxjs/operators'
import {
  Epic,
  ofType,
  StateObservable,
  ActionsObservable
} from 'redux-observable'

import {
  RegisterActionTypes,
  RegisterResponse,
  SEND_REGISTER_REQUIEST,
  SEND_REGISTER_RESULTED
} from './action-type'
import { register } from './api'
import { RootState } from '../../reducer'

const RegisterVerify = (response: RegisterResponse): RegisterActionTypes => ({
  type: SEND_REGISTER_RESULTED,
  payload: {
    success: response.data.register,
    error: response.errors ? response.errors[0].message.message : undefined
  }
})

export const registerEpic: Epic = (
  action$: ActionsObservable<RegisterActionTypes>,
  state$: StateObservable<RootState>
) =>
  action$.pipe(
    ofType(SEND_REGISTER_REQUIEST),
    mergeMap(() =>
      from(
        register({
          nickname: state$.value.modules.register.nickName,
          email: state$.value.modules.register.email,
          password: state$.value.modules.register.password
        })
      ).pipe(map((res) => RegisterVerify(res.data)))
    )
  )
