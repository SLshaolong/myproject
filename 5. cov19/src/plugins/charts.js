import echarts from "echarts";
// import data from "./data";
import name from './name'
const app = function (Vue) {
    Object.defineProperties(Vue.prototype, {
        $charts: {
            get() {
                return {
                    chinaMap: function (id,data) {
                        var chartDom = document.getElementById(id);
                        var myChart = echarts.init(chartDom);
                        var option;
                        option = {
                            series: [{
                                name: '中国地图',
                                type: 'map',
                                map: 'china',
                                label: {
                                    normal: {
                                        show: true,
                                        textStyle: {
                                            fontSize: 8
                                        }
                                    },
                                   
                                }, 
                                // data:[{
                                //     name:'内蒙古',
                                //     value:103
                                // },{
                                //     name:'山东',
                                //     value:3000
                                // }],
                                data,

                                roma: 'false',
                                zoom: 1.2,
                                itemStyle: {
                                    normal: {
                                        areaColor: 'rgba(0,255,236,0)',
                                        borderColor: 'rgba(0,0,0,0.2)'
                                    },
                                    emphasis: {
                                        areaColor: 'rgba(255,180,0,0.8)',
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 0,
                                        shadowBlur: 20,
                                        borderWidth: 0

                                    }
                                }
                            }],
                            tooltip: {
                                triggerOn: 'click',
                                enterable: true,
                                formatter(data) {
                                      return `<a href='/cov19/#city/${data.name}' style='color:#fff'>${data.name} <br> ${data.value} </a>`
                                }
                            },
                            visualMap: [{
                                orient: 'vertical',
                                type: 'piecewise',
                                pieces: [{
                                        min: 0,
                                        max: 0,
                                        color: '#fff'
                                    },
                                    {
                                        min: 1,
                                        max: 10,
                                        color: '#fdfdcf'
                                    },
                                    {
                                        min: 10,
                                        max: 100,
                                        color: '#c2a517'
                                    },
                                    {
                                        min: 100,
                                        max: 1000,
                                        color: '#e55a4e'
                                    },
                                    {
                                        min: 1000,
                                        max: 10000,
                                        color: '#4f070f'
                                    },
                                    {
                                        min: 10000,
                                        max: 100000,
                                        color: '#700404'
                                    }
                                ]
                            }]
                        }


                        myChart.setOption(option);

                    },worldMap: function (id,data) {
                        var chartDom = document.getElementById(id);
                        var myChart = echarts.init(chartDom);
                        var option;
                        option = {
                            series: [{
                                name: '世界地图',
                                type: 'map',
                                map: 'world',
                                roam:true,
                                label: {
                                    normal: {
                                        show: false,
                                        textStyle: {
                                            fontSize: 8
                                        }
                                    },
                                   
                                }, 
                                // data:[{
                                //     name:'内蒙古',
                                //     value:103
                                // },{
                                //     name:'山东',
                                //     value:3000
                                // }],
                                data,
                                nameMap:name,
                                roma: 'false',
                                zoom: 1.2,
                                itemStyle: {
                                    normal: {
                                        areaColor: 'rgba(0,255,236,0)',
                                        borderColor: 'rgba(0,0,0,0.2)'
                                    },
                                    emphasis: {
                                        areaColor: 'rgba(255,180,0,0.8)',
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 0,
                                        shadowBlur: 20,
                                        borderWidth: 0

                                    }
                                }
                            }],
                            tooltip: {
                                triggerOn: 'click',
                                enterable: true,
                                formatter(data) {
                                    return data.name+"<br> 今日新增"+data.value
                                }
                            },
                            visualMap: [{
                                orient: 'vertical',
                                type: 'piecewise',
                                pieces: [{
                                        min: 0,
                                        max: 0,
                                        color: '#fff'
                                    },
                                    {
                                        min: 1,
                                        max: 100,
                                        color: '#fdfdcf'
                                    },
                                    {
                                        min: 100,
                                        max: 1000,
                                        color: '#c2a517'
                                    },
                                    {
                                        min: 1000,
                                        max: 10000,
                                        color: '#e55a4e'
                                    },
                                    {
                                        min: 10000,
                                        max: 100000,
                                        color: '#4f070f'
                                    },
                                    {
                                        min: 100000,
                                        max: 1000000,
                                        color: '#700404'
                                    }
                                ]
                            }]
                        }


                        myChart.setOption(option);

                    },provideMap: function (id,data,cityName) {
                        var chartDom = document.getElementById(id);
                        var myChart = echarts.init(chartDom);
                        var option;
                        option = {
                            series: [{
                                name: '省市地图',
                                type: 'map',
                                map: cityName,
                                label: {
                                    normal: {
                                        show: true,
                                        textStyle: {
                                            fontSize: 8
                                        }
                                    },
                                   
                                }, 
                                // data:[{
                                //     name:'内蒙古',
                                //     value:103
                                // },{
                                //     name:'山东',
                                //     value:3000
                                // }],
                                data,

                                roma: 'false',
                                zoom: 1.2,
                                itemStyle: {
                                    normal: {
                                        areaColor: 'rgba(0,255,236,0)',
                                        borderColor: 'rgba(0,0,0,0.2)'
                                    },
                                    emphasis: {
                                        areaColor: 'rgba(255,180,0,0.8)',
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 0,
                                        shadowBlur: 20,
                                        borderWidth: 0

                                    }
                                }
                            }],
                            tooltip: {
                                triggerOn: 'click',
                                enterable: true,
                                formatter(data) {
                                    return `${data.name}<br>${data.value?'今日新增:'+data.value:'获取失败'}`
                                }
                            },
                            visualMap: [{
                                orient: 'vertical',
                                type: 'piecewise',
                                pieces: [{
                                        min: 0,
                                        max: 0,
                                        color: '#fff'
                                    },
                                    {
                                        min: 1,
                                        max: 10,
                                        color: '#fdfdcf'
                                    },
                                    {
                                        min: 10,
                                        max: 100,
                                        color: '#c2a517'
                                    },
                                    {
                                        min: 100,
                                        max: 1000,
                                        color: '#e55a4e'
                                    },
                                    {
                                        min: 1000,
                                        max: 10000,
                                        color: '#4f070f'
                                    },
                                ]
                            }]
                        }


                        myChart.setOption(option);

                    }
                }
            }
        }
    })
}
export default app


