import P5 from 'p5'
import { preload } from '~/lib/preload'
import { setup, draw, keyPressed } from '~/sketch'
import '~/styles.css'

const initP5 = () =>
  new P5((p5Instance: P5) => {
    window.p = p5Instance
    p5Instance.preload = preload
    p5Instance.setup = setup
    p5Instance.draw = draw
    p5Instance.keyPressed = keyPressed
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  }, document.getElementById('app')!)

const loadPlugins = () =>
  Promise.all([
    import('p5/lib/addons/p5.sound'),
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    import('p5.collide2d'!)
  ])

window.p5 = P5
loadPlugins().then(() => initP5())
