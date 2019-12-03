import React from 'react'

const demos = (require as any).context('components', true, /Demo\.tsx$/)

console.log('demos', ...demos.keys())
const ComponentPage: PageComponent = props => {
  let lines = [...demos.keys()].map(key => {
    const demo = React.createElement(demos(key).default)
    return (
      <div key={key}>
        组件地址: {key}
        {demo}
      </div>
    )
  })
  return <div>{lines}</div>
}
export default ComponentPage
