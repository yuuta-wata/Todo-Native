import { mergeMap } from 'rxjs/operators'
import {
  Epic,
  ofType,
  ActionsObservable,
  StateObservable
} from 'redux-observable'

import { RootState } from '../../reducer'

import { FETCH_TASK_LIST, TaskActionType } from './action-type'
import { fetchTaskList } from './api'
import { FetchTaskResultAction } from './actions'

export const taskEpic: Epic = (
  action$: ActionsObservable<TaskActionType>,
  state$: StateObservable<RootState>
) =>
  action$.pipe(
    ofType(FETCH_TASK_LIST),
    mergeMap(() =>
      fetchTaskList(state$.value.modules.token.accessToken)
        .then(res => {
          // console.log('response:', res.data)
          return FetchTaskResultAction(res.data)
        })
        .catch(err => console.log(err))
    )
  )
