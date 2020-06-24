import P5 from 'p5'

export = P5
export as namespace P5

declare module 'p5' {
  export interface p5InstanceExtensions {
    loadSound: typeof P5.SoundFile.prototype.loadSound
  }

  export interface p5InstanceExtensions {
    collidePointPoint(x: number, y: number, x2: number, y2: number, buffer?: number): boolean
    collidePointCircle(x: number, y: number, cx: number, cy: number, d: number): boolean
    collidePointEllipse(x: number, y: number, cx: number, cy: number, dx: number, dy: number): boolean
    collidePointRect(pointX: number, pointY: number, x: number, y: number, xW: number, yW: number): boolean
    collidePointLine(px: number, py: number, x1: number, y1: number, x2: number, y2: number, buffer?: number): boolean
    collidePointArc(px: number, py: number, ax: number, ay: number, arcRadius: number, arcHeading: number, arcAngle: number, buffer?: number): boolean
    collideRectRect(x: number, y: number, w: number, h: number, x2: number, y2: number, w2: number, h2: number): boolean
    collideCircleCircle(x: number, y: number, d: number, x2: number, y2: number, d2: number): boolean
    collideRectCircle(rx: number, ry: number, rw: number, rh: number, cx: number, cy: number, diameter: number): boolean
    collideLineLine(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number, calcIntersection?: boolean): boolean
    collideLineCircle(x1: number, y1: number, x2: number, y2: number, cx: number, cy: number, diameter: number): boolean
    collideLineRect(x1: number, y1: number, x2: number, y2: number, rx: number, ry: number, rw: number, rh: number, calcIntersection?: boolean): boolean
    collidePointPoly(px: number, py: number, vertices: number): boolean
    collideCirclePoly(cx: number, cy: number, diameter: number, vertices: number, interior: boolean): boolean
    collideRectPoly(rx: number, ry: number, rw: number, rh: number, vertices: number, interior?: boolean): boolean
    collideLinePoly(x1: number, y1: number, x2: number, y2: number, vertices: number): boolean
    collidePolyPoly(p1: number, p2: number, interior?: boolean): boolean
    collidePointTriangle(px: number, py: number, x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): boolean
  }
}
declare global {
  interface Window {
    p5: P5
  }

  // eslint-disable-next-line no-var
  var p5: P5
}
