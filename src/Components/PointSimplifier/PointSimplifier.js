import React,{ Component } from 'react'
import UIBase from '../../Base'

class PointSimplifier extends UIBase {

  componentWillMount() {
    this.instanceName = 'pointSimplifier'
  }

  initialInstance() {
    
    const { eventSupport=false } = this.props
    if (this[this.instanceName]) {
      return new Promise((resolve) => {
        resolve(this[this.instanceName])
      })
    } else {
      return new Promise((resolve) => {
        this.amapui.load(['ui/misc/PointSimplifier'], (PointSimplifier) => {

          const events = this.exposeInstance(this.props)
          events && this.bindEvents(events)
          this.initPage()
          resolve(this[this.instanceName])
        })
      })
    }
  }

  // render AllPage

  initPage() {
    let data = this.createPoints(this.map.getCenter(), 100000)

    this[this.instanceName] = new PointSimplifier({
      map: this.map, //关联的map
      compareDataItem: function(a, b, aIndex, bIndex) {
        //数据源中靠后的元素优先，index大的排到前面去
        return aIndex > bIndex ? -1 : 1
      },
      getPosition: function(dataItem) {
        //返回数据项的经纬度，AMap.LngLat实例或者经纬度数组
        return dataItem.position
      },
      getHoverTitle: function(dataItem, idx) {
        //返回数据项的Title信息，鼠标hover时显示
        return '序号: ' + idx
      },
      renderOptions: {
        //点的样式
        pointStyle: {
          fillStyle: 'blue' //蓝色填充
        }
      }
    })
    //设置数据源，data需要是一个数组
    this.pointSimplifier.setData(data)

  }

  createPoints(center, num) {
    let data = []
    for (let i = 0, len = num; i < len; i++) {
      data.push({
        position: [
          center.getLng() + (Math.random() > 0.5 ? 1 : -1) * Math.random(),
          center.getLat() + (Math.random() > 0.5 ? 1 : -1) * Math.random()
        ]
      })
    }
    return data
}

  // render accoding to areaNode

}

export default PointSimplifier
