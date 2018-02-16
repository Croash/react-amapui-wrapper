import React,{ Component } from 'react'
import UIBase from '../../Base'

class PositionPicker extends UIBase {

  componentWillMount() {
    this.instanceName = 'positionPicker'
  }
  
  initialInstance() {
    
    const { eventSupport=false } = this.props
    if (this[this.instanceName]) {
      return new Promise((resolve) => {
        resolve(this[this.instanceName])
      })
    } else {
      return new Promise((resolve) => {

        this.amapui.load(['ui/misc/PositionPicker','lib/$'], (PositionPicker,$) => {
          
          this.initPage(PositionPicker,$)
          const events = this.exposeInstance(this.props)
          events && this.bindEvents(events)


          resolve(this[this.instanceName])
        })
      })
    }
  }

  // render AllPage

  initPage(PositionPicker,$) {

    console.log($)
    this[this.instanceName] = new PositionPicker({
      eventSupport: true,
      mode:'dragMap',//设定为拖拽地图模式，可选'dragMap'、'dragMarker'，默认为'dragMap'
      map:this.map,//依赖地图对象
      iconStyle:{//自定义外观
        url:'//webapi.amap.com/ui/1.0/assets/position-picker2.png',//图片地址
        size:[48,48],  //要显示的点大小，将缩放图片
        ancher:[24,40],//锚点的位置，即被size缩放之后，图片的什么位置作为选中的位置
      }
    })

    this.positionPicker.start(this.map.getBounds().getSouthWest())
    
  }
  // render accoding to areaNode

}

export default PositionPicker
