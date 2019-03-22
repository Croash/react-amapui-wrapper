# react-amapui-wrapper

> 一个令人兴奋的消息，react-amap 可以在内部load amapui 了，这样就可以不用我自己写的apiloader了.

---

## 简介

> react-amapui-wrapper 是一个基于 react-amap 封装的高德地图组件；主要是用于处理 react-amap 的 AMapUI 的部分。

---

## 如何使用

```JavaScript
import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import { Map as Amap } from 'react-amap'
import { Wrapper, DistrictExplorer } from 'react-amapui-wrapper'

class MapUIComponent extends Component {
  render() {
    const useAMapUI = true
    return (
    <div style={{ width:'600px', height:'400px' }}>
      <Amap useAMapUI = {useAMapUI}>
        <Wrapper>
          <DistrictExplorer
            events = {{}}
            initialAdcode={100000}
            eventSupport = {true}
            instanceName = {'DistrictExplorer'}
          />
        </Wrapper>
      </Amap>
     </div> 
    )
  }
}

ReactDOM.render(
  <MapUIComponent/>,
  document.querySelector('#app')
)
```
需要注意的是：引入AmapUi需要输入useAmapUi的参数，如上，否则会在控制台中出现import AmapUi plz...的console

---

## 如何自定义各个组件的初始化样式

可以使用组件的默认初始，也可以自定义组件的初始化样式

```javascript

import React,{ Component } from 'react'
import { SimpleMarker } from 'react-amapui-wrapper'

class newMarker extends SimpleMarker {

  initPage(InstanceInit) {
    this[this.instanceName] = new InstanceInit({
      //前景文字
      iconLabel: 'circleMar',
      //背景图标样式
      iconStyle: '<div className="circleMar"></div>',
      containerClassNames: 'circleMar',
      //...其他Marker选项...，不包括content
      map: this.map,
      position: [116.405285, 39.904989]
    })
  }

}

```

其中initPage方法为初始化的方法，InstanceInit为实例的初始化方法，具体初始化方式需要参照官方文档[高德地图UI组件库](http://lbs.amap.com/api/javascript-api/summary)

---

## 相关配置项

1. `eventSupport`为事件支持，true为支持事件，false为不支持，默认为false

1. `events`为事件配置项，事件绑定方式与[react-amap中绑定方式](https://github.com/ElemeFE/react-amap/blob/master/components/about.md)相同

2. `instanceName`为从高德地图中load的地图元素，具体填入内容参照高德地图AMapUI。

---

## 如何自定义AMapUI组件

```JavaScript
import React,{ Component } from 'react'
import { Base } from 'react-amapui-wrapper'

// 自定义组件, 此为自定义DistrictExplorer的过程
class newCp extends Base {

// initialInstance 用于初始化组件, 可自定义如何初始化组件
  initialInstance() {
    const { eventSupport=false } = this.props
    if (this[this.instanceName]) {
      return new Promise((resolve) => {
        resolve(this[this.instanceName])
      })
    } else {
      return new Promise((resolve) => {
        this.amapui.load(['ui/geo/DistrictExplorer'], (DistrictExplorer) => {

          this[this.instanceName] = new DistrictExplorer({
            eventSupport: eventSupport,
            map: this.map //关联的地图实例
          })
          const events = this.exposeInstance(this.props)
          events && this.bindEvents(events)
          this.initPage()
          resolve(this[this.instanceName])
        })
      })
    }
  }
export default newCp
```

---

## todo

* [ ] 1. 将组件的继承方式改成通过hoc继承
* [ ] 2. 为各个组件添加static props和dynamic props