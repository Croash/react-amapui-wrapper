import React,{ Component } from 'react'
import UIBase from '../../Base'
import './style.css'

class SimpleInfoWindow extends UIBase {

  constructor(props) {
    super(props)
    this.instanceName = 'simpleInfoWindow'
  }

  componentWillUnmount() {
    if(this.instance) {
      this.close()
      console.log(`${this.instanceName} unmount`)
      delete this.instance      
    }
  }

  initialInstance = () => {
    
    const { eventSupport=false } = this.props
    if (this.instance) {
      return new Promise((resolve) => {
        resolve(this.instance)
      })
    } else {
      return new Promise((resolve) => {

        this.amapui.load(['ui/overlay/SimpleInfoWindow','lib/$'], (SimpleInfoWindow,$) => {
          
          this.initPage(SimpleInfoWindow,$)
          const events = this.exposeInstance()
          events && this.bindEvents(events)


          resolve(this.instance)
        })
      })
    }
  }

  // render AllPage

  initPage(SimpleInfoWindow,$) {

    this.instance = new SimpleInfoWindow({
      eventSupport: true,
      map:this.map,//依赖地图对象
      infoTitle: '<strong>这里是标题</strong>',
      infoBody: '<p>这里是内容。</p>',
      isCustom: true
    })

    let input = 
      '<div class="infoWin"><div class="infoWin-top">sgsgsgsgsg<br/>sgsg<br/>sgsg<br/>sgsg<br/></div>'
    this.instance.setContent(input)

    //显示在map上
    this.instance.open(this.map, this.map.getCenter())
    
  }
  // render accoding to areaNode

  close = () => {}
  
}

export default SimpleInfoWindow
