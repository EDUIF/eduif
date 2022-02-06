import EdAlerts from './src/Alerts.vue'
EdAlerts.install = function(vue){
  vue.component( EdAlerts.name,EdAlerts)
}
export default EdAlerts