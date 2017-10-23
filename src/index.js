import VueMosaic from './components/VueMosaic'
import Promise from 'promise-polyfill'

function install (Vue) {
  Vue.component('VueMosaic', VueMosaic)
}

if (!window.Promise) {
  window.Promise = Promise
}

export {
  VueMosaic,
  install
}

export default VueMosaic
