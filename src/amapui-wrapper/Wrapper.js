import React,{ Component, Children } from 'react'

const Wrapper = props => {
  const renderChildren = () => {
    const childrenWithProps = Children.map(props.children,
      (child) => { 
          return React.cloneElement(child, {})
        } 
      )
    return childrenWithProps
  }
  return (<>{renderChildren()}</>)
}

export default Wrapper
