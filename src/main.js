import { createApp } from 'vue'
import App from './App.vue'
import './base.css'

const app = createApp(App)

app.directive('christmas', (el, val) => {
  const { arg, value } = val;
  el.classList.add('christmas-text', arg ?? 'red-green')
  // bind prop inside `arg`
  // bind value inside `value`
  if (value) {
    el.style.animationDuration = `${value}s`;
  }
})

app.mount('#app')
