/* eslint-disable react/self-closing-comp, no-useless-constructor, no-undef, no-unused-vars, new-cap, quotes, spaced-comment */
/*
 * action types
 */
import { PING, PONG, SAVE } from './constants'

export const ping = () => ({ type: PING })
export const save = () => ({ type: SAVE, payload: 'cool' })

