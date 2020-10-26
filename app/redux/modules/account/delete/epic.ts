import { from } from 'rxjs'
import { map, mergeMap } from 'rxjs/operators'
import {
  Epic,
  ofType,
  StateObservable,
  ActionsObservable
} from 'redux-observable'

import { AccountDeleteActionTypes, SEND_DELETE_REQUEST } from './action-type'
import { sendDeleteRequest } from './api'
import { RootState } from '../../../reducer'
import { SendDeleteResult } from './actions'

export const deleteEpic: Epic = (
  action$: ActionsObservable<AccountDeleteActionTypes>,
  state$: StateObservable<RootState>
) =>
  action$.pipe(
    ofType(SEND_DELETE_REQUEST),
    mergeMap(() =>
      from(
        sendDeleteRequest(
          state$.value.modules.account.delete.nickName,
          state$.value.modules.account.delete.email,
          state$.value.modules.account.delete.password,
          state$.value.modules.token.accessToken
        )
      ).pipe(map(res => SendDeleteResult(res.data, res.headers.cookie)))
    )
  )
