/* eslint-disable semi, no-trailing-spaces, no-useless-constructor, no-undef, no-unused-vars, new-cap, quotes, spaced-comment */
import  *  as constant from '../common/constants'
import { ajaxFulfilled } from '../common/actions'
import Rx from 'rxjs/Rx'  
import 'rxjs/add/observable/dom/ajax'
import { combineEpics } from 'redux-observable'

const ajaxEpic = action$ =>
  action$.ofType(constant.FETCH_REQUEST)
    .mergeMap(action =>
      Rx.Observable.ajax(action.payload)
        /*.delay(5000) // this is the best place to simulate a delay*/
        .map(ajaxFulfilled)
        .takeUntil(action$.ofType(constant.FETCH_CANCELLED))
    )

export const rootEpic = combineEpics(
   ajaxEpic
 )