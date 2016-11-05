/* eslint-disable react/self-closing-comp, no-useless-constructor, no-undef, no-unused-vars, new-cap, quotes, spaced-comment */
/*
 * action types
 */
import * as constant from './constants'

export const ping = () => ({ type: constant.PING })
export const save = () => ({ type: constant.SAVE, payload: 'cool' })
export const makeAjaxRequest = options => ({ type: constant.FETCH_REQUEST, payload: options })
export const ajaxFulfilled = payload => ({ type: constant.FETCH_FULFILLED, payload })

