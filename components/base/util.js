import {createPoint} from './factory'

export const isPoint = obj => obj.lng && obj.lat
export const checkType = val => Object.prototype.toString.call(val).slice(8, -1)

export const getPosition = (BMapGL, point) => isPoint(point) ? createPoint(BMapGL, point) : point
