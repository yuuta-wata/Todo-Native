import { mergeMap } from 'rxjs/operators'
import {
  ofType,
  ActionsObservable,
  StateObservable,
  combineEpics
} from 'redux-observable'

import { RootState } from '../../reducer'

import { ADD_TASK, FETCH_TASK_LIST, TaskActionType } from './action-type'
import { fetchTaskList, taskPostRepuest } from './api'
import { FetchTaskListAction, FetchTaskResultAction } from './actions'

export const taskEpic = combineEpics(
  (
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
    ),
  (
    action$: ActionsObservable<TaskActionType>,
    state$: StateObservable<RootState>
  ) =>
    action$.pipe(
      ofType(ADD_TASK),
      mergeMap(() =>
        taskPostRepuest(
          state$.value.modules.token.accessToken,
          state$.value.modules.task.content
        )
          .then(() => {
            return FetchTaskListAction()
          })
          .catch(err => console.log(err))
      )
    )
)
