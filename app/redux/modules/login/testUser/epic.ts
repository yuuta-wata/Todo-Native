import { from } from 'rxjs'
import { map, mergeMap } from 'rxjs/operators'
import {
  Epic,
  ofType,
  StateObservable,
  ActionsObservable
} from 'redux-observable'

import { RootState } from '../../../reducer'

import { TestLoginActionTypes, TEST_LOGIN_REQUIEST } from './action-type'
import {} from '../../task/actions'
import { testLogin } from './api'
import { GetAccessToken } from '../../token/actions'

export const testLoginEpic: Epic = (
  action$: ActionsObservable<TestLoginActionTypes>,
  state$: StateObservable<RootState>
) =>
  action$.pipe(
    ofType(TEST_LOGIN_REQUIEST),
    mergeMap(() =>
      from(
        testLogin({
          email: state$.value.modules.testLogin.email,
          password: state$.value.modules.testLogin.password
        })
      ).pipe(map(res => GetAccessToken(res.headers.cookie, true)))
    )
  )
