import { mergeMap } from 'rxjs/operators'
import { Epic, ofType, ActionsObservable } from 'redux-observable'

import { TokenActionType, FETCH_REFRESH_TOKEN } from './action-type'
import { fetchRefreshToken } from './api'
import { FetchResult } from './actions'

export const tokenEpic: Epic = (action$: ActionsObservable<TokenActionType>) =>
  action$.pipe(
    ofType(FETCH_REFRESH_TOKEN),
    mergeMap(() =>
      fetchRefreshToken()
        .then(() => FetchResult(true))
        .catch(() => FetchResult(false))
    )
  )
