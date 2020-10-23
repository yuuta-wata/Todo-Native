import { mergeMap } from 'rxjs/operators'
import {
  Epic,
  ofType,
  ActionsObservable,
  StateObservable
} from 'redux-observable'

import { RootState } from '../../reducer'

import { TokenActionType, FETCH_REFRESH_TOKEN } from './action-type'
import { fetchRefreshToken } from './api'
import { GetAccessToken } from './actions'

export const tokenEpic: Epic = (
  action$: ActionsObservable<TokenActionType>,
  state$: StateObservable<RootState>
) =>
  action$.pipe(
    ofType(FETCH_REFRESH_TOKEN),
    mergeMap(() =>
      fetchRefreshToken(state$.value.modules.token.accessToken)
        .then((res) => GetAccessToken(res.headers.cookie, true))
        .catch(() => GetAccessToken(null, false))
    )
  )
