import React,{ Component } from 'react'
import UIBase from '../../Base'

class DistrictExplorer extends UIBase {
  currentAreaNode: Number | String

  constructor(props) {
    super(props)
    this.instanceName = 'districtExplorer'
  }

  componentWillUnmount() {
    if (this.instance) {
      this.instance.clearAreaNodeCache()
      console.log(this.instanceName + ' Unmount')
      delete this.instance      
    }

  }

  updateProps(nextProps,thisProps) {
    
  }
  
  initialInstance = () => {
    const { eventSupport=false } = this.props
    if (this.instance) {
      return new Promise((resolve) => {
        resolve(this.instance)
      })
    } else {
      return new Promise((resolve) => {
        this.amapui.load(['ui/geo/DistrictExplorer'], (DistrictExplorer) => {

          this.instance = new DistrictExplorer({
            eventSupport: eventSupport,
            map: this.map //关联的地图实例
          })
          const events = this.exposeInstance()
          events && this.bindEvents(events)
          this.initPage()
          resolve(this.instance)
        })
      })
    }
  }

  // render AllPage

  initPage() {
    let adcode = '110000' //全国的区划编码
    this.currentAreaNode = adcode
    this.instance.loadAreaNode(this.props.initialAdcode, (error, areaNode)=> {
 
      if (error) {
        console.error(error)
        return
      }
      //绘制载入的区划节点
      this.renderAreaNode(this.instance, areaNode)
    })
  }

  // render accoding to areaNode
  renderAreaNode = (districtExplorer, areaNode) => {
    // 清除已有的绘制内容
    this.instance.clearFeaturePolygons()
  
    //just some colors
    var colors = ['#3366cc', '#dc3912', '#ff9900', '#109618', '#990099', '#0099c6', '#dd4477', '#66aa00']
  
    //renderSubFeatures
    this.instance.renderSubFeatures(areaNode, (feature, i) => {
      var fillColor = colors[i % colors.length]
      var strokeColor = colors[colors.length - 1 - i % colors.length]
      return {
        cursor: 'default',
        bubble: true,
        strokeColor: strokeColor, //线颜色
        strokeOpacity: 1, //线透明度
        strokeWeight: 1, //线宽
        fillColor: fillColor, //填充色
        fillOpacity: 0.35, //填充透明度
      }
    })
  
    //绘制父级区划，仅用黑色描边
    this.instance.renderParentFeature(areaNode, {
      cursor: 'default',
      bubble: true,
      strokeColor: 'black', //线颜色
      fillColor: null,
      strokeWeight: 3, //线宽
    })
  
    //更新地图视野以适合区划面
    this.map.setFitView(this.instance.getAllFeaturePolygons())
  }

  loadAreaNode(adcode, callback) {
    this.instance.loadAreaNode(adcode, (error, areaNode) => {
      if (error) {
        if (callback) {
          callback(error)
        }
        console.error(error)
        return
      }
      if (callback) {
        callback(null, areaNode)
      }
    })
  }

}

export default DistrictExplorer
