import React,{ Component, Children, Fragment } from 'react'

const Wrapper = props => {
  const RenderChildren = () => {
    const childrenWithProps = Children.map(props.children,
      (child) => { 
          return React.cloneElement(child, {})
        } 
      )
    return childrenWithProps
  }
  return (<Fragment>{RenderChildren()}</Fragment>)
}

export default Wrapper
