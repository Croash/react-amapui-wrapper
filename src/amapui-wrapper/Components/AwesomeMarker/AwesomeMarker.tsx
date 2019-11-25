import React,{ Component } from 'react'
import UIBase from '../../Base'

class AwesomeMarker extends UIBase {

  constructor(props) {
    super(props)
    this.instanceName = 'awesomeMarker'
  }

  initialInstance = () => {
    const { eventSupport=false } = this.props
    if (this.instance) {
      return new Promise((resolve) => {
        resolve(this.instance)
      })
    } else {
      return new Promise((resolve) => {
        this.amapui.load(['ui/overlay/AwesomeMarker'], (InstanceInit) => {

          this.initPage(InstanceInit)

          const events = this.exposeInstance()
          events && this.bindEvents(events)
          resolve(this.instance)
        })
      })
    }
  }

  // render AllPage

  initPage(InstanceInit) {
    this.instance = new InstanceInit({
      //前景文字
      awesomeIcon: 'arrows', //可用的icons参见： http://fontawesome.io/icons/

      //下列参数继承自父类

      //iconLabel中不能包含innerHTML属性（内部会利用awesomeIcon自动构建）
      iconLabel: {
        style: {
          color: '#333' //设置颜色
        }
      },
      iconStyle: 'orange', //设置图标样式

      //基础的Marker参数
      map: this.map,
      position: this.map.getCenter()
    })
  }

  componentWillUnmount() {
    if (this.instance) {
      console.log(`${this.instanceName} unmount`)
      this.instance.setMap(null)
      delete(this.instance)      
    }
  }
}

export default AwesomeMarker