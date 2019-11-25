import React,{ Component } from 'react'
import UIBase from '../../Base'

class PoiPicker extends UIBase {

  constructor(props) {
    super(props)
    this.instanceName = 'poiPicker'
  }

  initialInstance() {
    
    const { eventSupport=false } = this.props
    if (this[this.instanceName]) {
      return new Promise((resolve) => {
        resolve(this[this.instanceName])
      })
    } else {
      return new Promise((resolve) => {

        this.amapui.load(['ui/misc/PoiPicker','lib/$'], (PoiPicker,$) => {
          
          this.initPage(PoiPicker,$)
          const events = this.exposeInstance(this.props)
          events && this.bindEvents(events)


          resolve(this[this.instanceName])
        })
      })
    }
  }

  initPage(PoiPicker,$) {
    this[this.instanceName] = new PoiPicker({
      input: 'pickerInput' //输入框id
    })
  }

  componentWillUnmount() {
    //destroy later
  }
}

export default PoiPicker
