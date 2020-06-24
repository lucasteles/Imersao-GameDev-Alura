import P5  from 'p5'
export = P5
export as namespace P5


declare module 'p5' {
  export interface p5InstanceExtensions {
    loadSound: typeof P5.SoundFile.prototype.loadSound
  }
}

declare global {
  interface Window {
    p5: P5
  }

  // eslint-disable-next-line no-var
  var p5: P5
}
