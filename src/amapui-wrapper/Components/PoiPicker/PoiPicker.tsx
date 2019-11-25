import React,{ Component } from 'react'
import UIBase from '../../Base'

class PoiPicker extends UIBase {

  constructor(props) {
    super(props)
    this.instanceName = 'poiPicker'
  }

  initialInstance = () => {
    
    const { eventSupport=false } = this.props
    if (this.instance) {
      return new Promise((resolve) => {
        resolve(this.instance)
      })
    } else {
      return new Promise((resolve) => {

        this.amapui.load(['ui/misc/PoiPicker','lib/$'], (PoiPicker,$) => {
          
          this.initPage(PoiPicker,$)
          const events = this.exposeInstance()
          events && this.bindEvents(events)


          resolve(this.instance)
        })
      })
    }
  }

  initPage(PoiPicker,$) {
    this.instance = new PoiPicker({
      input: 'pickerInput' //输入框id
    })
  }

  componentWillUnmount() {
    //destroy later
  }
}

export default PoiPicker
