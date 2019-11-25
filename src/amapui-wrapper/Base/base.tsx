import React,{ Component } from 'react'
import { isFun } from '../utils/index'

export interface IEvents {
  created?: Function
  [propName: string]: any
}

export interface IProps {
  __map__: any
  __amapui__: any
  __ele__: any
  instanceName?: String
  events?: IEvents
  [propName: string]: any
}

class Base extends Component<IProps, {}> {
  map: any
  amapui: any
  element: any
  instance: any
  instanceName: String
  props: IProps

  constructor(props) {
    super(props)
    if (typeof window !== 'undefined') {
      if (!props.__map__&&!props.__amapui__) {
        throw new Error('this component has to be a child of Map and AMapUI component')
      }
      else {
        this.map = props.__map__
        this.amapui = props.__amapui__
        this.element = props.__ele__//this.map.getContainer()
        this.instanceName = props.instanceName || 'instance'
        this.initialInstance()
      }
    }
  }

  shouldComponentUpdate() {
    return false
  }

  componentWillReceiveProps(nextProps) {
    const prevProps = this.props
    if (this.instance) {
      this.updateMapProps(prevProps, nextProps)
    }
  }
  
  // Customize updateProps, decide what'll happen when props change
  updateMapProps(nextProps,thisProps) {
  }

  componentWillMount() {
    console.log(`mount ${this.instanceName}`)
  }

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
  
  bindEvents = (events) => {
    const list = Object.keys(events)
    list.length && list.forEach((evName) => {
      this.instance.on(evName, 
        events[evName]
      )
    })
  }

  exposeInstance = () => {
    if ('events' in this.props) {
      const events = this.props.events || {}
      if (isFun(events.created)) {
        const instanceName = this.instanceName
        events.created(this.instance,instanceName)
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
  initialInstance = () => {
    console.log('rewrite ur initialInstance, plz')
  }

}

export default Base
