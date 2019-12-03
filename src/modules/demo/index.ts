import Demo1Page from './Demo1Page'
import ComponentPage from './ComponentPage'

const demoModule: Module = {
  name: 'demo',
  routes: [
    {
      name: '公用组件',
      path: '/demo/component',
      component: ComponentPage,
    },
    {
      name: '演示2',
      path: '/demo/demo1',
      component: Demo1Page,
    },
  ],
}
export default demoModule
