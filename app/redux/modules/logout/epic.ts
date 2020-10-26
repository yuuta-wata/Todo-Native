import { mergeMap } from 'rxjs/operators'
import {
  Epic,
  ofType,
  ActionsObservable,
  StateObservable
} from 'redux-observable'

import { RootState } from '../../reducer'

import { GetAccessToken } from '../token/actions'

import { LogoutActionType, LOGOUT } from './action-type'
import { sendLogoutRequest } from './api'

export const logoutEpic: Epic = (
  action$: ActionsObservable<LogoutActionType>,
  state$: StateObservable<RootState>
) =>
  action$.pipe(
    ofType(LOGOUT),
    mergeMap(() =>
      sendLogoutRequest(state$.value.modules.token.accessToken).then(res => {
        console.log('res:', res.headers)
        return GetAccessToken(res.headers.cookie, false)
      })
    )
  )
