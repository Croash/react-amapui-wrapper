import React,{ Component, Children } from 'react'

class MapUIWrap extends Component {

  constructor(props) {
    super(props)
    this.map = props.__map__
    this.state = {
      mapUILoaded: false
    }

  }

  componentDidMount() {
    this.loadMap()
  }
  
  componentDidUpdate() {
  }

  loadMap() {
    this.AMapUI = window.AMapUI
    if (this.AMapUI!=undefined) {
      console.log('Loading AMapUI finished...')
      this.setState({
        mapUILoaded: true
      })
    }
    else console.error('Load AMapUI first plz..')
  }

  renderChildren() {
    const childrenWithProps = Children.map(this.props.children,
      (child) => { 
        if(child!=null)
          return React.cloneElement(child, { ...this.props, __amapui__: this.AMapUI })
        else return null
        } 
      )
    return childrenWithProps
  }

  render() {
    return (
      <div>
        { this.state.mapUILoaded ? this.renderChildren():null }
      </div>
    )
  }

}

export default MapUIWrap
