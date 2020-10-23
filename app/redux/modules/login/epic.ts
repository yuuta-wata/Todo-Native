import { from } from 'rxjs'
import { map, mergeMap } from 'rxjs/operators'
import {
  Epic,
  ofType,
  StateObservable,
  ActionsObservable
} from 'redux-observable'

import { RootState } from '../../reducer'

import { LoginActionTypes, SEND_LOGIN_REQUIEST } from './action-type'
import { LoginVerify } from './actions'
import { login } from './api'

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
        }).then((response) => response)
      ).pipe(map((res) => LoginVerify(res.data)))
    )
  )
