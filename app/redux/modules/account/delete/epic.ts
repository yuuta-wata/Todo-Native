import { mergeMap } from 'rxjs/operators'
import {
  Epic,
  ofType,
  StateObservable,
  ActionsObservable
} from 'redux-observable'

import { AccountDeleteActionTypes, SEND_DELETE_REQUEST } from './action-type'
import { sendDeleteRequest } from './api'
import { RootState } from '../../../reducer'
import { GetAccessToken } from '../../token/actions'

export const deleteEpic: Epic = (
  action$: ActionsObservable<AccountDeleteActionTypes>,
  state$: StateObservable<RootState>
) =>
  action$.pipe(
    ofType(SEND_DELETE_REQUEST),
    mergeMap(() =>
      sendDeleteRequest(
        state$.value.modules.account.delete.nickName,
        state$.value.modules.account.delete.email,
        state$.value.modules.account.delete.password,
        state$.value.modules.token.accessToken
      ).then(res => GetAccessToken(res.headers.cookie, false))
    )
  )
