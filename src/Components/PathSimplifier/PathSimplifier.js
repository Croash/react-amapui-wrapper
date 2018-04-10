import React,{ Component } from 'react'
import UIBase from '../../Base'

class PathSimplifier extends UIBase {

  componentWillMount() {
    this.instanceName = 'pathSimplifier'
  }

  initialInstance() {
    
    const { eventSupport=false } = this.props
    if (this[this.instanceName]) {
      return new Promise((resolve) => {
        resolve(this[this.instanceName])
      })
    } else {
      return new Promise((resolve) => {

        this.amapui.load(['ui/misc/PathSimplifier'], (PathSimplifier) => {
          
          this[this.instanceName] = new PathSimplifier({
            zIndex: 100,
            map: this.map, //所属的地图实例
            getPath: function(pathData, pathIndex) {
              //返回轨迹数据中的节点坐标信息，[AMap.LngLat, AMap.LngLat...] 或者 [[lng|number,lat|number],...]
              return pathData.path
            },
            getHoverTitle: function(pathData, pathIndex, pointIndex) {
              //返回鼠标悬停时显示的信息
              if (pointIndex >= 0) {
                //鼠标悬停在某个轨迹节点上
                return pathData.name + '，点:' + pointIndex + '/' + pathData.path.length
              }
              //鼠标悬停在节点之间的连线上
              return pathData.name + '，点数量' + pathData.path.length
            },
            renderOptions: {
              //轨迹线的样式
              pathLineStyle: {
                strokeStyle: 'red',
                lineWidth: 6,
                dirArrowStyle: true
              }
            }
          })

          const events = this.exposeInstance(this.props)
          events && this.bindEvents(events)

          this.initPage(PathSimplifier)
          resolve(this[this.instanceName])
        })
      })
    }
  }

  // render AllPage

  initPage(PathSimplifier) {

    this.pathSimplifier.setData([{
      name: '轨迹0',
      path: [
        [100.340417, 27.376994],
        [108.426354, 37.827452],
        [113.392174, 31.208439],
        [124.905846, 42.232876]
      ]
    }, {
      name: '大地线',
      //创建一条包括500个插值点的大地线
      path: PathSimplifier.getGeodesicPath([116.405289, 39.904987], [87.61792, 43.793308], 500)
    }])

    //创建一个巡航器
    let navg0 = this.pathSimplifier.createPathNavigator(0, //关联第1条轨迹
      {
        loop: true, //循环播放
        speed: 1000000
      })

    navg0.start()

  }
  // render accoding to areaNode

  componentWillUnmount() {
    console.log(`${this.instanceName} unmount`)
    this[this.instanceName].hide()
    delete(this[this.instanceName])
  }

}

export default PathSimplifier
