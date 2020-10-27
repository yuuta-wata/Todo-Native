import { mergeMap } from 'rxjs/operators'
import {
  ofType,
  ActionsObservable,
  StateObservable,
  combineEpics
} from 'redux-observable'

import { RootState } from '../../reducer'

import {
  ADD_TASK,
  FETCH_TASK_LIST,
  TaskActionType,
  TASK_DELETE
} from './action-type'
import { fetchTaskList, taskPostRepuest, taskDeleteRepuest } from './api'
import {
  FetchTaskListAction,
  FetchTaskResultAction,
  TaskDeleteResult
} from './actions'

export const taskEpic = combineEpics(
  (
    action$: ActionsObservable<TaskActionType>,
    state$: StateObservable<RootState>
  ) =>
    action$.pipe(
      ofType(FETCH_TASK_LIST),
      mergeMap(() =>
        fetchTaskList(state$.value.modules.token.accessToken)
          .then(res => FetchTaskResultAction(res.data))
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
          .then(() => FetchTaskListAction())
          .catch(err => console.log(err))
      )
    ),
  (action$: ActionsObservable<TaskActionType>) =>
    action$.pipe(
      ofType(TASK_DELETE),
      mergeMap(action =>
        taskDeleteRepuest(
          action.type === TASK_DELETE ? action.payload.taskId : null
        )
          .then(res => TaskDeleteResult(res.data))
          .catch(err => console.log(err))
      )
    )
)
