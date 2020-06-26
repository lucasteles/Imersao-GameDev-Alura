export const ALTURA_MINIMA = 30

let DEBUG = false
export const setDebugState = (v: boolean) => DEBUG = v
export const getDebugState = () => DEBUG
export const toggleDebugState = () => DEBUG = !DEBUG
  