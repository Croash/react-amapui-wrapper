import React,{ Component } from 'react'
import UIBase from '../../Base'

class DistrictCluster extends UIBase {

  constructor(props) {
    super(props)
    this.instanceName = 'districtCluster'
  }

  initialInstance() {
    const { eventSupport=false } = this.props
    if (this[this.instanceName]) {
      return new Promise((resolve) => {
        resolve(this[this.instanceName])
      })
    } else {
      return new Promise((resolve) => {

        this.amapui.load(['ui/geo/DistrictCluster'], (DistrictCluster) => {
          
          this[this.instanceName] = new DistrictCluster({
            map: this.map, //所属的地图实例
            getPosition: function(item) {
              return item.position
            }
          })

          const events = this.exposeInstance(this.props)
          events && this.bindEvents(events)

          this.initPage(DistrictCluster)
          resolve(this[this.instanceName])
        })
      })
    }
  }

  // render AllPage

  initPage(DistrictCluster) {

    var data = this.createPoints(this.map.getCenter(), 100000);
    //设置数据
    this[this.instanceName].setData(data);

  }

  createPoints(center, num) {
    var data = []
    for (var i = 0, len = num; i < len; i++) {
      data.push({
        position: [
          center.getLng() + (Math.random() > 0.5 ? 1 : -1) * Math.random() * 30,
          center.getLat() + (Math.random() > 0.5 ? 1 : -1) * Math.random() * 20
        ]
      })
    }
    return data
  }
  // render accoding to areaNode

  componentWillUnmount() {
    if (this[this.instanceName]) {
      console.log(`${this.instanceName} unmount`)
      this[this.instanceName].hide()
      delete(this[this.instanceName])
    }

  }

}

export default DistrictCluster
