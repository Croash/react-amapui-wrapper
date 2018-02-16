import React,{ Component } from 'react'
import UIBase from '../../Base'
import './style.css'

class SimpleInfoWindow extends UIBase {

  componentWillMount() {
    this.instanceName = 'simpleInfoWindow'
  }

  initialInstance() {
    
    const { eventSupport=false } = this.props
    if (this[this.instanceName]) {
      return new Promise((resolve) => {
        resolve(this[this.instanceName])
      })
    } else {
      return new Promise((resolve) => {

        this.amapui.load(['ui/overlay/SimpleInfoWindow','lib/$'], (SimpleInfoWindow,$) => {
          
          this.initPage(SimpleInfoWindow,$)
          const events = this.exposeInstance(this.props)
          events && this.bindEvents(events)


          resolve(this[this.instanceName])
        })
      })
    }
  }

  // render AllPage

  initPage(SimpleInfoWindow,$) {

    this[this.instanceName] = new SimpleInfoWindow({
      eventSupport: true,
      map:this.map,//依赖地图对象
      infoTitle: '<strong>这里是标题</strong>',
      infoBody: '<p>这里是内容。</p>',
      isCustom: true
    })

    let input = 
      '<div class="info"><div class="info-top">sgsgsgsgsg<br/>sgsg<br/>sgsg<br/>sgsg<br/></div>'
    this.simpleInfoWindow.setContent(input)

    //显示在map上
    this[this.instanceName].open(this.map, this.map.getCenter())
    
  }
  // render accoding to areaNode

}

export default SimpleInfoWindow
