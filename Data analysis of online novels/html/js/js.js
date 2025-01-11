$(window).load(function() {
    $(".loading").fadeOut()
})
$(function() {
    echarts_1();
    echarts_2();
    echarts_3();
    echarts_4();
    echarts_5();
    zb1();
    zb2();
    zb3();
    zb4();
    zb5();
    zb6();

    function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));

        var pieData = [
            { value: 41, name: '架空历史' },
            { value: 129, name: '近代现代' },
            { value: 25, name: '幻想未来' },
            { value: 5, name: '古色古香' },
        ];
        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },
            legend: {
                right: 0,
                top: 80,
                height: 100,
                itemWidth: 10,
                itemHeight: 10,
                itemGap: 10,
                textStyle: {
                    color: 'rgba(255,255,255,.6)',
                    fontSize: 12
                },
                orient: 'vertical',
            },
            calculable: true,
            series: [{
                name: ' ',
                color: ['#62c98d', '#2f89cf', '#4cb9cf', '#53b666', '#62c98d', '#205acf', '#c9c862', '#c98b62', '#c962b9', '#7562c9', '#c96262', '#c25775', '#00b7be'],
                type: 'pie',
                radius: [40,70],
                startAngle: 60,
                center: ['45%', '50%'],
                roseType: null,
                label: {
                    normal: {
                        show: true
                    },

                },

                lableLine: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },

                data: pieData
            }, ]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }

    function echarts_2() {
        var myChart = echarts.init(document.getElementById('echart2'));
    
        var pieData = [
            { value: 134, name: '爱情' },
            { value: 16, name: '剧情' },
            { value: 7, name: '悬疑' },
            { value: 14, name: '奇幻' },
            { value: 3, name: '科幻' },
            { value: 6, name: '传奇' },
            { value: 6, name: '轻小说' },
            { value: 4, name: '游戏' },
            { value: 10, name: '仙侠' },
        ];
    
        var option = {
            tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },
            legend: {
                top: '80%',
                data: pieData.map(item => item.name), // 从数据中获取名称作为图例数据
                icon: 'circle',
                textStyle: {
                    color: 'rgba(255,255,255,.6)',
                },
                itemWidth: 10,
                itemGap: 10,
            },
            calculable: true,
            series: [{
                name: '',
                color: ['#62c98d', '#2f89cf', '#4cb9cf', '#53b666', '#62c98d', '#205acf', '#c9c862', '#c98b62', '#c962b9', '#c96262'],
                type: 'pie',
                startAngle: 0,
                radius: [0, 80],
                center: ['50%', '40%'],
                roseType: null, 
                // 防止标签重叠
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                    },
                    emphasis: {
                        show: true
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        length2: 1,
                    },
                    emphasis: {
                        show: true
                    }
                },
                data: pieData 
            }]
        };
    
        myChart.setOption(option);
        myChart.getZr().on('mousewheel', function (params) {
            myChart.dispatchAction({
                type: 'scale',
                // 鼠标滚轮缩放的比例因子，可根据需求调整
                scale: params.wheelDelta > 0? 1.2 : 0.8
            });
        });
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }
    
    function echarts_3() {

        var myChart = echarts.init(document.getElementById('echart3'));

        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#57617B'
                    }
                }
            },
            legend: {
                data: ['上榜数量','平均积分'],
                top: '0',
                center:'50',
                textStyle: {
                    color: "#fff"
                },
                itemWidth: 15,
                itemHeight: 15,
                itemGap: 10,
            },
            grid: {
                left: '0',
                right: '20',
                top: '40',
                bottom: '20',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: true,
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba(255,255,255,1)',
                        fontSize: 11
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                },
                data: ['2012', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022','2023','2024'
                ]
            }, {

            }],
            yAxis: [{
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba(255,255,255,.6)'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                },
                name:'上榜数量'

            },{
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba(255,255,255,.6)'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                },
                name: '平均积分(亿)',
                position:'right',
                min:80
            }
        
        ],
        "dataZoom": [
                {
                    "type": "inside",
                    // x轴方向可缩放
                    "xAxisIndex": [0],
                    "start": 0,
                    "end": 100
                }
            ],
            series: [{
                name: '上榜数量',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(24, 163, 64, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(24, 163, 64, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#cdba00',
                        borderColor: 'rgba(137,189,2,0.27)',
                        borderWidth: 12
                    }
                },
                data: [2,2,7,8,16,31,39,38,24,20,8,5],
                yAxisIndex: 0
            }, {
                name: '平均积分',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(39, 122,206, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(39, 122,206, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#277ace',
                        borderColor: 'rgba(0,136,212,0.2)',
                        borderWidth: 12
                    }
                },
                data: [96,113,117,126,176,140,117,122,117,105,101,101],
                yAxisIndex: 1
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }

    function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));
        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#57617B'
                    }
                }
            },
            "legend": {
                "data": ["优秀", "良", "出现频率"],
                "top": "0%",
                "textStyle": {
                    "color": "rgba(255, 255, 255, 1)", //图例文字
                    "fontSize": "16"
                }
            },
            "xAxis": [{
                "type": "category",
                data: ['原创-纯爱-幻想未来-传奇',
                    '原创-纯爱-幻想未来-剧情',
                    '原创-纯爱-架空历史-仙侠',
                    '原创-纯爱-架空历史-爱情',
                    '原创-纯爱-近代现代-剧情',
                    '原创-纯爱-近代现代-奇幻',
                    '原创-纯爱-近代现代-悬疑',
                    '原创-纯爱-近代现代-爱情',
                    '原创-纯爱-近代现代-轻小说',
                    '原创-言情-架空历史-爱情',
                    '原创-言情-近代现代-爱情',
                    '原创-无CP-架空历史-剧情',
                    '原创-纯爱-幻想未来-游戏',
                    '原创-纯爱-幻想未来-爱情',
                    '原创-纯爱-幻想未来-科幻',
                    '原创-纯爱-架空历史-传奇',
                    '原创-言情-幻想未来-剧情',
                    '原创-言情-架空历史-仙侠',
                    '原创-言情-架空历史-奇幻',
                ],
                axisLine: {
                    lineStyle: {
                        color: "rgba(255, 255, 255,.1)"
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "rgb(255, 255, 255)",
                        fontSize: '12',
                    },
                },
            }, ],
            "yAxis": [{
                    "type": "value",
                    "min": 0,
                    "interval": 0.25,
                    "axisLabel": {
                        "show": true,
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 1)'
                        }
                    }, //左线色
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: "rgba(255, 255, 255, 0.5)"
                        }
                    }, //x轴线
                    max:1,
                    interval:0.2
                },
                {
                    "type": "value",
                    "min": 0,
                    "interval": 0.2,
                    "show": true,
                    "axisLabel": {
                        "show": true,
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 1 )'
                        }
                    }, //右线色
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: "rgba(255, 255, 255, 0.2)"
                        }
                    }, //x轴线
                    max:1,
                    interval:0.2
                },
            ],
            "grid": {
                "top": "10%",
                "right": "30",
                "bottom": "30",
                "left": "30",
            },
            // 添加dataZoom组件配置，用于实现缩放功能
            "dataZoom": [
                {
                    "type": "inside",
                    // x轴方向可缩放
                    "xAxisIndex": [0],
                    "start": 0,
                    "end": 100
                }
            ],
            "series": [{
                    "name": "优秀",
                    "type": "bar",
                    "stack": "品质",
                    "data": [1, 0.75, 0.4, 0.71, 0.6, 0.38, 1, 0.64, 0.4, 0.33, 0.34, 0, 0, 0, 0, 0, 0, 0, 0],
                    "barWidth": "25",
                    "itemStyle": {
                        "normal": {
                            "color": {
                                "type": "linear",
                                "x": 0,
                                "y": 0,
                                "x2": 0,
                                "y2": 1,
                                "colorStops": [{
                                        "offset": 0,
                                        "color": "#67E0E3"
                                    },
                                    {
                                        "offset": 1,
                                        "color": "#67E0E3"
                                    }
                                ],
                                "globalCoord": false
                            },
                            "barBorderRadius": [10, 10, 10, 10]
                        }
                    }
                },
                {
                    "name": "良",
                    "type": "bar",
                    "stack": "品质",
                    "data": [0, 0, 0.6, 0.29, 0.4, 0.63, 0, 0.36, 0.6, 0.67, 0.66, 1, 0.67, 0.86, 0.67, 1, 1, 0.75, 0.75],
                    "barWidth": "25",
                    "itemStyle": {
                        "normal": {
                            "color": {
                                "type": "linear",
                                "x": 0,
                                "y": 0,
                                "x2": 0,
                                "y2": 1,
                                "colorStops": [{
                                        "offset": 0,
                                        "color": "#FFDB5C"
                                    },
                                    {
                                        "offset": 1,
                                        "color": "#FFDB5C"
                                    }
                                ],
                                "globalCoord": false
                            },
                            "barBorderRadius": [10, 10, 10, 10]
                        }
                    },
                    "barGap": "0"
                },
                {
                    "name": "出现频率",
                    "type": "line",
                    "yAxisIndex": 1,
                    "data": [0.01, 0.02, 0.05, 0.14, 0.05, 0.08, 0.03, 0.7, 0.05, 0.06, 0.32, 0.01, 0.015, 0.035, 0.015, 0.01, 0.01, 0.02, 0.02],
                    lineStyle: {
                        normal: {
                            width: 2
                        },
                    },
                    "itemStyle": {
                        "normal": {
                            "color": "#48f593",
                        }
                    },
                    "smooth": true
                }
            ]
        };
    
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echarts_5() {  
        // 基于准备好的dom，初始化echarts实例  
        var myChart = echarts.init(document.getElementById('echart5'));  
    
        // 随机生成颜色  
        function getRandomColor() {  
            return 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';  
        }  
    
        // 配置项  
        var option = {  
            tooltip: {  
                trigger: 'item',  
                formatter: function (params) {  
                    // 显示词语和它的值  
                    return params.name + ': ' + params.value;  
                }  
            },  
            series: [{  
                type: 'wordCloud',  
                color: '#4f99cf',
                textPadding: 0,
                autoSize: {
                    enable: true,
                    minSize: 10,
                },
                data: [  
                    { name: '轻松', value: 117 },  
                    { name: '正剧', value: 71 },  
                    { name: '强强', value: 55 },  
                    { name: '情有独钟', value: 53 },  
                    { name: '甜文', value: 45 },  
                    { name: '爽文', value: 45 },  
                    { name: '灵异神怪', value: 25 },  
                    { name: '穿书', value: 19 },  
                    { name: '都市', value: 19 },  
                    { name: '无限流', value: 19 },  
                    { name: '仙侠修真', value: 17 },  
                    { name: '天之骄子', value: 16 },  
                    { name: '娱乐圈', value: 16 },  
                    { name: '天作之合', value: 16 },  
                    { name: '欢喜冤家', value: 14 },  
                    { name: '穿越时空', value: 14 },  
                    { name: '幻想空间', value: 13 },  
                    { name: '校园', value: 12 },  
                    { name: '励志', value: 12 },  
                    { name: '系统', value: 11 },  
                    { name: '重生', value: 11 },  
                    { name: '豪门世家', value: 11 },  
                    { name: '升级流', value: 10 },  
                ], 
                itemStyle: {  
                    normal: {  
                        // 鼠标悬停时的放大效果  
                        shadowBlur: 10,  
                        shadowColor: '#333',  
                    },  
                    emphasis: {  
                        // 鼠标悬停时放大  
                        textShadowColor: '#fff',  
                        textShadowBlur: 15,  
                        // 改变字体大小  
                        fontSize: function (params) {  
                            return Math.floor(params.value / 10) + 10; // 增加字号  
                        }  
                    }  
                }  
            }]  
        };  
    
        // 使用刚指定的配置项和数据显示图表  
        myChart.setOption(option);  
    
        // 添加resize事件  
        window.addEventListener("resize", function () {  
            myChart.resize();  
        });  
    }
    
    

    function zb1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb1'));
        var v1 = 200
        var v2 = 0
        option = {
            tooltip: {
                trigger: 'item',
            },
            series: [{

                type: 'pie',
                radius: ['60%', '70%'],
                color: '#37A2DA',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: v2,
                    name: '纯爱',
                    label: {
                        normal: {
                            formatter: v1 + '',
                            textStyle: {
                                fontSize: 20,
                                color: '#fff',
                            }
                        }
                    }
                },{
                    value: v1,
                    name: '总数',
                    
                }]
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }

    function zb2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb2'));
        var v1 = 200 
        var v2 =0
        option = {

            tooltip: {
                trigger: 'item',
            },
            series: [{
                type: 'pie',
                radius: ['60%', '70%'],
                color: '#32C5E9',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                        value: v2,
                        name: '非原创',
                        label: {
                            normal: {
                                formatter: v1 + '',
                                textStyle: {
                                    fontSize: 20,
                                    color: '#fff',
                                }
                            }
                        }
                    },{
                    value: v1,
                    name: '原创',
                    label: {
                        normal: {
                            formatter: function(params) {
                                return '原创'
                            },
                            textStyle: {
                                color: '#aaa',
                                fontSize: 12
                            }
                        }
                    },
                }
                ]
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }

    function zb3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb3'));
        var v1 = 54
        var v2 = 140 
        option = {
            tooltip: {
                trigger: 'item',
            },
            series: [{

                type: 'pie',
                radius: ['60%', '70%'],
                color: '#67E0E3',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: v2,
                    name: '纯爱',
                    label: {
                        normal: {
                            formatter: v2 + '',
                            textStyle: {
                                fontSize: 20,
                                color: '#fff',
                            }
                        }
                    }
                }, {
                    value: v1,
                    name: '言情',
                    label: {
                        normal: {
                            formatter: function(params) {
                                return '纯爱'
                            },
                            textStyle: {
                                color: '#aaa',
                                fontSize: 12
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,.2)'
                        },
                        emphasis: {
                            color: '#fff'
                        }
                    },
                }]
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }

    function zb4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb4'));
        var v1 = 112
        var v2 = 88

        option = {
            tooltip: {
                trigger: 'item',
            },
            series: [{

                type: 'pie',
                radius: ['60%', '70%'],
                color: '#9FE6B8',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: v2,
                    name: '积分过百亿',
                    label: {
                        normal: {
                            formatter: v2 + '',
                            textStyle: {
                                fontSize: 20,
                                color: '#fff',
                            }
                        }
                    }
                }, {
                    value: v1,
                    name: '积分未过百亿',
                    label: {
                        normal: {
                            formatter: function(params) {
                                return '百亿积分'
                            },
                            textStyle: {
                                color: '#aaa',
                                fontSize: 12
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,.2)'
                        },
                        emphasis: {
                            color: '#fff'
                        }
                    },
                }]
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }

    function zb5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb5'));
        var v1 = 193 
        var v2 = 7 
        option = {
            tooltip: {
                trigger: 'item',
            },
            series: [{

                type: 'pie',
                radius: ['60%', '70%'],
                color: '#FFDB5C',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: v1,
                    name: '完结',
                    label: {
                        normal: {
                            formatter: v1 + '',
                            textStyle: {
                                fontSize: 20,
                                color: '#fff',
                            }
                        }
                    }
                }, {
                    value: v2,
                    name: '连载',
                    label: {
                        normal: {
                            formatter: function(params) {
                                return '完结'
                            },
                            textStyle: {
                                color: '#aaa',
                                fontSize: 12
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,.2)'
                        },
                        emphasis: {
                            color: '#fff'
                        }
                    },
                }]
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }

    function zb6() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb6'));
        var v1 = 154 //小于
        var v2 = 46
        option = {
            tooltip: {
                trigger: 'item',
            },
            series: [{

                type: 'pie',
                radius: ['60%', '70%'],
                color: '#FB7293',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: v2,
                    name: '大于百万字',
                    label: {
                        normal: {
                            formatter: v2 + '',
                            textStyle: {
                                fontSize: 20,
                                color: '#fff',
                            }
                        }
                    }
                }, {
                    value: v1,
                    name: '小于百万字',
                    label: {
                        normal: {
                            formatter: function(params) {
                                return '大长篇'
                            },
                            textStyle: {
                                color: '#aaa',
                                fontSize: 12
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,.2)'
                        },
                        emphasis: {
                            color: '#fff'
                        }
                    },
                }]
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }
})