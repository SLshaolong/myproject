/**
 * echarts图标库
 */
import * as echarts from 'echarts'
import china from '../assets/json/china.json'
export default {
    install: app => {
        app.config.globalProperties.$line = (element, series) => {
            // 加载 echarhts图标
            var myChart = echarts.init(document.getElementById(element) as HTMLElement)
            const option = {

                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['隧道数量', '施工数量',]
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series
            };


            myChart.setOption(option)
        }
        app.config.globalProperties.$leida = (element) => {
            const myechart = echarts.init(document.getElementById(element) as HTMLElement)
            const option = {
                legend: {
                    data: ['Allocated Budget', 'Actual Spending']
                },
                radar: {
                    indicator: [
                        { name: 'Sales', max: 6500 },
                        { name: 'Administration', max: 16000 },
                        { name: 'Information Technology', max: 30000 },
                        { name: 'Customer Support', max: 38000 },
                        { name: 'Development', max: 52000 },
                        { name: 'Marketing', max: 25000 }
                    ]
                },
                series: [
                    {
                        name: 'Budget vs spending',
                        type: 'radar',
                        data: [
                            {
                                value: [4200, 3000, 20000, 35000, 50000, 18000],
                                name: 'Allocated Budget'
                            },
                            {
                                value: [5000, 14000, 28000, 26000, 42000, 21000],
                                name: 'Actual Spending'
                            }
                        ]
                    }
                ]
            };
            myechart.setOption(option)
        }
        app.config.globalProperties.$bing = (element) => {
            const myChart = echarts.init(document.getElementById(element) as HTMLElement)
            const option = {
                legend: {
                    top: 'bottom'
                },
                toolbox: {
                    show: true,
                    feature: {
                        mark: { show: true },
                        dataView: { show: true, readOnly: false },
                        restore: { show: true },
                        saveAsImage: { show: true }
                    }
                },
                series: [
                    {
                        name: 'Nightingale Chart',
                        type: 'pie',
                        radius: [25, 150],
                        center: ['50%', '50%'],
                        roseType: 'area',
                        itemStyle: {
                            borderRadius: 8
                        },
                        data: [
                            { value: 40, name: 'rose 1' },
                            { value: 38, name: 'rose 2' },
                            { value: 32, name: 'rose 3' },
                            { value: 30, name: 'rose 4' },
                            { value: 28, name: 'rose 5' },
                            { value: 26, name: 'rose 6' },
                            { value: 22, name: 'rose 7' },
                            { value: 18, name: 'rose 8' }
                        ]
                    }
                ]
            };

            myChart.setOption(option)
        }
        app.config.globalProperties.$zhu = (element) => {
            const myChart = echarts.init(document.getElementById(element) as HTMLElement)
            const option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        // Use axis to trigger tooltip
                        type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
                    }
                },
                legend: {},
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value'
                },
                yAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                series: [
                    {
                        name: 'Direct',
                        type: 'bar',
                        stack: 'total',
                        label: {
                            show: true
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [320, 302, 301, 334, 390, 330, 320]
                    },
                    {
                        name: 'Mail Ad',
                        type: 'bar',
                        stack: 'total',
                        label: {
                            show: true
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: 'Affiliate Ad',
                        type: 'bar',
                        stack: 'total',
                        label: {
                            show: true
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: 'Video Ad',
                        type: 'bar',
                        stack: 'total',
                        label: {
                            show: true
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [150, 212, 201, 154, 190, 330, 410]
                    },
                    {
                        name: 'Search Engine',
                        type: 'bar',
                        stack: 'total',
                        label: {
                            show: true
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [820, 832, 901, 934, 1290, 1330, 1320]
                    }
                ]
            };


            myChart.setOption(option)
        }
        app.config.globalProperties.$china = (element) => {
            const myChart = echarts.init(document.getElementById(element) as HTMLElement)
            echarts.registerMap('china', china as any)
            const option = {
                tooltip: {
                    triggerOn: 'click',
                    enterable: true
                }, visualMap: {
                    origin: 'vertical',
                    type: 'piecewise',
                    pieces: [
                        { min: 0, max: 0, color: '#fff' },
                        { min: 0, max: 10, color: '#fdcf' },
                        { min: 10, max: 25, color: '#e55a4e' },
                        { min: 25, max: 100, color: '#ff0000' },
                    ]
                },
                series: [{
                    name: '中国地图',
                    type: 'map',
                    map: 'china',
                    roam: false,
                    zoom: 1.2,
                    label: {
                        show: true,
                        fontSize: 8
                    },

                    itemStyle: {
                        areaColor: 'rgba(255,255,255,1)',
                        borderColor: 'rgba(0,0,0,.2)'
                    },
                    data: [
                        { name: '内蒙古', value: 5 },
                        { name: '黑龙江', value: 20 },
                        { name: '山东', value: 15 },
                        { name: '上海', value: 20 },
                    ]
                }]
            }
            myChart.setOption(option)
        }
    }
}