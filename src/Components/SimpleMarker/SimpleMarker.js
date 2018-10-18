import React,{ Component } from 'react'
import UIBase from '../../Base'
import './style.css'
class SimpleMarker extends UIBase {

  constructor(props) {
    super(props)
    this.instanceName = 'simpleMarker'
  }

  initialInstance() {
    
    const { eventSupport=false } = this.props
    if (this[this.instanceName]) {
      return new Promise((resolve) => {
        resolve(this[this.instanceName])
      })
    } else {
      return new Promise((resolve) => {
        this.amapui.load(['ui/overlay/SimpleMarker'], (InstanceInit) => {


          this.initPage(InstanceInit)
          const events = this.exposeInstance(this.props)
          events && this.bindEvents(events)
          resolve(this[this.instanceName])
        })
      })
    }
  }

  // render AllPage

  initPage(InstanceInit) {

    this[this.instanceName] = new InstanceInit({
      //前景文字
      iconLabel: 'circleMar',

      //图标主题

      //背景图标样式
      iconStyle: '<div className="circleMar"></div>',

      containerClassNames: 'circleMar',

      //...其他Marker选项...，不包括content
      map: this.map,
      position: [116.405285, 39.904989]
    })

  }

  componentWillUnmount() {
    if(this[this.instanceName]) {
      console.log(`${this.instanceName} unmount`)
      this[this.instanceName].setMap(null)
      delete this[this.instanceName]      
    }

  }

}

export default SimpleMarker
