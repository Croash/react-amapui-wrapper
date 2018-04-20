import React,{ Component } from 'react'
import isFun from '../utils/isFun'

class Base extends Component {

  constructor(props) {
    super(props)
    if (typeof window !== 'undefined') {
      if (!props.__map__&&!props.__amapui__) {
        throw new Error('this component has to be a child of Map and AMapUI component')
      }
      else if(props.instanceName==undefined)
        throw new Error('the component has to have a instanceName') 
      else {
        this.map = props.__map__
        this.amapui = props.__amapui__
        this.element = props.__ele__//this.map.getContainer()
        this.instanceName = props.instanceName
        this.initialInstance()
      }
    }

  }

  shouldComponentUpdate() {
    return false
  }

  componentWillReceiveProps(nextProps) {
    const prevProps = this.props
    if (this[this.instanceName]) {
      this.updateMapProps(prevProps, nextProps)
    }
  }
  
  // Customize updateProps, decide what'll happen when props change
  updateMapProps(nextProps,thisProps) {
  }

  componentWillMount() {
    console.log(`mount ${this.instanceName}`)
  }

  // componentWillUnmount() {
  //   /*
  //    * if districtExplorer has hide function,
  //    * use it when unmount this component
  //    */
  //   this[this.instanceName].hide()
  //   console.log(`${this.instanceName} Unmount`)
  //   delete this[this.instanceName]
  // }

  //can be change to ( events, objName ) 
  //                => {...  this[objName].on(evName, events[evName])}

  /*
   *   events
   * when outside events could use like this
   * 
   * (params)=>{
   *   events[evName](params)
   * }
   * 
   * if i bind events like upon, i'll have to use events like this, stupid way..
   * 
   * featureClick(params) {
   *   this.districtExplorer.func(params.e,params.feature)
   * }
   * 
   */
  
  bindEvents (events,mapInstance) {
    const list = Object.keys(events)
    list.length && list.forEach((evName) => {
      this[this.instanceName].on(evName, 
        events[evName]
        // (params)=>{
        //   events[evName](params)
        // }
      )
    })
  }

  exposeInstance() {

    if ('events' in this.props) {
      const events = this.props.events || {}
      if (isFun(events.created)) {
        events.created(this[this.instanceName],this.instanceName)
        delete events.created
      }
      return events
    }
    return false

  }

  render() {
    return null
  }

  // Customize component initialization
  initialInstance() {
  }

}

export default Base
