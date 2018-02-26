import React,{ Component, Children } from 'react'

class MapUIWrap extends Component {

  constructor(props) {
    super(props)
    this.map = props.__map__
    this.state = {
      mapUILoaded: false
    }

    // if (typeof window !== 'undefined') {
    //   this.pluginMapUI = {}
    //   this.loader = new apiLoader('f97efc35164149d0c0f299e7a8adb3d2').load()
    // }
  }

  componentDidMount() {
    this.loadMap()
  }
  
  componentDidUpdate() {
    // this.loadMap()
  }

  loadMap() {
    // this.loader.then(() => {
    this.AMapUI = window.AMapUI
    if (this.AMapUI!=undefined) {
      console.log('Loading AMapUI finished...')
      this.setState({
        mapUILoaded: true
      })
    }
    else console.error('Load AMapUI first plz..')
    // })
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
