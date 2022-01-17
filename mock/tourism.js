export default [
  {
    url: "1111/JSCTO_SCENIC_COMFORT_MS/gateway/ms_scemanage/api/queryScenicScopeDetail",
    method: "get",
    response: () => {
      return {
        msg: "",
        data: {
          togetherDeclareType: "0",
          customerPhone: "025-52209788",
          ticketPrice: "免费",
          scenicScopeName: "南京市夫子庙-秦淮风光带景区",
          scenicBasis:
            "夫子庙-秦淮风光带是一座集自然风光、山水园林、庙宇学堂、街市民居、乡土人情为一体的国家AAAAA级旅游区。景区以夫子庙古建筑群为中心，以十里内秦淮河为轴线，东起东水关公园，西至西水关公园（今水西门）。\n在这“江南锦绣之邦，金陵风雅之薮”，美称“十里珠帘”的夫子庙-秦淮风光带上，点缀着数不尽的名胜佳景，汇集着说不完的轶闻掌故。她蕴涵着南京城市发展两千多年的历史文化积淀，是南京城市最早的重要发祥地之一，也是南京历史上最热闹的文化、商业中心，代表了南京历史上的繁华。沿岸有世界最大保存最完好的瓮城——中华门瓮城；有明代被称为“南都第一园”，在清代与上海豫园、苏州拙政园、留园及无锡寄畅园并称“江南五大名园”，今“金陵第一园”的瞻园，园内坐落着我国唯一的太平天国史专题博物馆；有明代开国功臣中山王徐达的私家花园——白鹭洲公园；有中国古代最大的科举考场——江南贡院等著名景点。在夫子庙-秦淮河风光带上还有东晋豪门贵族王导、谢安故居，明代江南首富沈万三故居，明末清初演绎“桃花扇”的传奇人物李香君的故居，我国最伟大的文学家之一、著有《儒林外史》的吴敬梓的故居，秦大士故居，以及乌衣巷、桃叶渡……这些历史古迹，仿佛镶嵌在夫子庙-秦淮风光带上的颗颗璀璨的明珠。\n如今，泛舟秦淮，游览中国第一历史文化名河——秦淮河已经成南京特色旅游品牌，“夜泊秦淮”更被喻为南京水上游览经典之旅。",
          officialWibsite: "http://www.njfzm.net/",
          time: "00:00至23:59",
          fileList: [
            "http://180.106.82.198:8081/sims_file/rest/v1/file/tempSystem/BasicInfo/600_300_2a2744ef-4e01-41e6-b9e9-9c22be59618f.jpg/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190828100322.jpg",
            "http://180.106.82.198:8081/sims_file/rest/v1/file/tempSystem/BasicInfo/600_300_2814aee8-987f-4b91-b617-2a8bf5a6ec56.jpg/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190828100323.jpg",
            "http://180.106.82.198:8081/sims_file/rest/v1/file/tempSystem/BasicInfo/600_300_c2dac686-46a5-46fb-ae50-708c7d4c13ea.jpg/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_201908281003221.jpg"
          ],
          scenicScopeId: "12336594-5c31-11e9-a2d8-000c297b3bf7",
          scenicAddress: "南京市秦淮区夫子庙贡院西街53号"
        },
        errorCode: 0
      };
    }
  },
  {
    url: "22222/JSCTO_SCENIC_COMFORT_MS/gateway/ms_scepassflow/api/selectCommonDic/multi",
    method: "post",
    response: () => {
      return {
        msg: "",
        data: {
          comfortLevelData: {
            total: 5,
            content: [
              {
                id: "1",
                name: "拥挤"
              },
              {
                id: "2",
                name: "较拥挤"
              },
              {
                id: "3",
                name: "一般"
              },
              {
                id: "4",
                name: "较舒适"
              },
              {
                id: "5",
                name: "舒适"
              }
            ]
          },
          scenicLevelData: {
            total: 2,
            content: [
              {
                id: "4",
                name: "4A级"
              },
              {
                id: "5",
                name: "5A级"
              }
            ]
          },
          cityData: {
            total: 13,
            content: [
              {
                id: "320100",
                name: "南京市"
              },
              {
                id: "320200",
                name: "无锡市"
              },
              {
                id: "320300",
                name: "徐州市"
              },
              {
                id: "320400",
                name: "常州市"
              },
              {
                id: "320500",
                name: "苏州市"
              },
              {
                id: "320600",
                name: "南通市"
              },
              {
                id: "320700",
                name: "连云港市"
              },
              {
                id: "320800",
                name: "淮安市"
              },
              {
                id: "320900",
                name: "盐城市"
              },
              {
                id: "321000",
                name: "扬州市"
              },
              {
                id: "321100",
                name: "镇江市"
              },
              {
                id: "321200",
                name: "泰州市"
              },
              {
                id: "321300",
                name: "宿迁市"
              }
            ]
          }
        },
        errorCode: 0
      };
    }
  },
  {
    url: "33333/JSCTO_SCENIC_COMFORT_MS/gateway/ms_scepassflow/api/queryPCPassFlow",
    method: "get",
    response: () => {
      return {
        recordsFiltered: 18,
        data: [
          {
            declareStatus: "0",
            scenicName: "南京阅江楼风景区",
            city: "南京市",
            scenicScopeList: [
              {
                detailStatus: true,
                file: "http://180.106.82.198:8081/sims_file/rest/v1/file/tempSystem/BasicInfo/600_300_9cc411e6-c464-4ce0-b347-01a57bb81066.jpg/%E9%98%85%E6%B1%9F%E6%A5%BC%E5%AE%A3%E4%BC%A0%E5%9B%BE.jpg",
                scenicId: "ebeaac06-bd68-11e9-a65b-000c297b3bf7",
                scenicScopeName: "南京阅江楼风景区",
                list: [
                  {
                    statisticsName: "阅江楼风景区",
                    closeStatus: "0",
                    color: "#75B140",
                    city: "南京市",
                    updata: "2022-01-06 10:09",
                    headCount: 5000,
                    count: 82,
                    colorRgb: "117,177,64",
                    statisticsRange: "1",
                    sysOrTel: "tel",
                    scenicScopeName: "南京阅江楼风景区",
                    grade: "4A级",
                    colorApp: "#52C41A",
                    time: "07:30-17:30",
                    nameShowStatus: 0
                  }
                ],
                scenicScopeId: "ec6e73ed-bd68-11e9-a65b-000c297b3bf7",
                sysOrTel: "tel"
              }
            ],
            scenicId: "ebeaac06-bd68-11e9-a65b-000c297b3bf7",
            grade: "4A级",
            sysOrTel: "tel"
          },
          {
            declareStatus: "0",
            scenicName: "南京市雨发生态旅游区",
            city: "南京市",
            scenicScopeList: [
              {
                detailStatus: true,
                file: "http://180.106.82.198:8081/sims_file/rest/v1/file/tempSystem/BasicInfo/600_300_0a7b87e4-aa2e-49a0-8c06-9c88c5fb76fb.jpg/1.jpg",
                scenicId: "ebebf37b-bd68-11e9-a65b-000c297b3bf7",
                scenicScopeName: "南京市雨发生态旅游区",
                list: [
                  {
                    statisticsName: "雨发生态旅游区",
                    closeStatus: "0",
                    color: "#75B140",
                    city: "南京市",
                    updata: "2022-01-06 10:09",
                    headCount: 24000,
                    count: 320,
                    colorRgb: "117,177,64",
                    statisticsRange: "1",
                    sysOrTel: "tel",
                    scenicScopeName: "南京市雨发生态旅游区",
                    grade: "4A级",
                    colorApp: "#52C41A",
                    time: "09:00-17:00",
                    nameShowStatus: 1
                  },
                  {
                    statisticsName: "南京市雨发生态旅游区",
                    closeStatus: "0",
                    color: "#75B140",
                    city: "南京市",
                    updata: "2022-01-06 10:07",
                    headCount: 24000,
                    count: 3,
                    colorRgb: "117,177,64",
                    statisticsRange: "2",
                    sysOrTel: "sys",
                    scenicScopeName: "南京市雨发生态旅游区",
                    grade: "4A级",
                    colorApp: "#52C41A",
                    time: "09:00-17:00",
                    nameShowStatus: 1
                  }
                ],
                scenicScopeId: "ec6fa19b-bd68-11e9-a65b-000c297b3bf7",
                sysOrTel: "tel"
              },
              {
                detailStatus: true,
                file: "http://180.106.82.198:8081/sims_file/rest/v1/file/tempSystem/BasicInfo/600_300_0a7b87e4-aa2e-49a0-8c06-9c88c5fb76fb.jpg/1.jpg",
                scenicId: "ebebf37b-bd68-11e9-a65b-000c297b3bf7",
                scenicScopeName: "南京市雨发生态旅游区",
                list: [
                  {
                    statisticsName: "雨发生态旅游区",
                    closeStatus: "0",
                    color: "#75B140",
                    city: "南京市",
                    updata: "2022-01-06 10:09",
                    headCount: 24000,
                    count: 320,
                    colorRgb: "117,177,64",
                    statisticsRange: "1",
                    sysOrTel: "tel",
                    scenicScopeName: "南京市雨发生态旅游区",
                    grade: "4A级",
                    colorApp: "#52C41A",
                    time: "09:00-17:00",
                    nameShowStatus: 1
                  },
                  {
                    statisticsName: "南京市雨发生态旅游区",
                    closeStatus: "0",
                    color: "#75B140",
                    city: "南京市",
                    updata: "2022-01-06 10:07",
                    headCount: 24000,
                    count: 3,
                    colorRgb: "117,177,64",
                    statisticsRange: "2",
                    sysOrTel: "sys",
                    scenicScopeName: "南京市雨发生态旅游区",
                    grade: "4A级",
                    colorApp: "#52C41A",
                    time: "09:00-17:00",
                    nameShowStatus: 1
                  }
                ],
                scenicScopeId: "ec6fa19b-bd68-11e9-a65b-000c297b3bf7",
                sysOrTel: "sys"
              }
            ],
            scenicId: "ebebf37b-bd68-11e9-a65b-000c297b3bf7",
            grade: "4A级",
            sysOrTel: "tel"
          },
          {
            declareStatus: "0",
            scenicName: "南京市栖霞山风景区",
            city: "南京市",
            scenicScopeList: [
              {
                detailStatus: true,
                file: "http://180.106.82.198:8081/sims_file/rest/v1/file/tempSystem/BasicInfo/600_300_4b194b18-8725-4afb-a174-194e748745a5.JPG/IMG_1664.JPG",
                scenicId: "ebed5ce7-bd68-11e9-a65b-000c297b3bf7",
                scenicScopeName: "南京市栖霞山风景区",
                list: [
                  {
                    statisticsName: "栖霞山风景区",
                    closeStatus: "0",
                    color: "#75B140",
                    city: "南京市",
                    updata: "2022-01-06 10:09",
                    headCount: 25000,
                    count: 266,
                    colorRgb: "117,177,64",
                    statisticsRange: "1",
                    sysOrTel: "tel",
                    scenicScopeName: "南京市栖霞山风景区",
                    grade: "4A级",
                    colorApp: "#52C41A",
                    time: "07:00-17:00",
                    nameShowStatus: 0
                  }
                ],
                scenicScopeId: "ec703aad-bd68-11e9-a65b-000c297b3bf7",
                sysOrTel: "tel"
              }
            ],
            scenicId: "ebed5ce7-bd68-11e9-a65b-000c297b3bf7",
            grade: "4A级",
            sysOrTel: "tel"
          },
          {
            declareStatus: "0",
            scenicName: "南京市明文化村（阳山碑材）景区",
            city: "南京市",
            scenicScopeList: [
              {
                detailStatus: true,
                file: "http://180.106.82.198:8081/sims_file/rest/v1/file/tempSystem/BasicInfo/600_300_5bfb23bb-1b7e-44e9-bf12-6db24be4cd21.jpg/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20191128133403.jpg",
                scenicId: "ebef352c-bd68-11e9-a65b-000c297b3bf7",
                scenicScopeName: "南京市明文化村（阳山碑材）景区",
                list: [
                  {
                    statisticsName: "明文化村（阳山碑材）景区",
                    closeStatus: "0",
                    color: "#75B140",
                    city: "南京市",
                    updata: "2022-01-06 10:09",
                    headCount: 3000,
                    count: 4,
                    colorRgb: "117,177,64",
                    statisticsRange: "1",
                    sysOrTel: "tel",
                    scenicScopeName: "南京市明文化村（阳山碑材）景区",
                    grade: "4A级",
                    colorApp: "#52C41A",
                    time: "08:30-16:30",
                    nameShowStatus: 0
                  }
                ],
                scenicScopeId: "ec72167c-bd68-11e9-a65b-000c297b3bf7",
                sysOrTel: "tel"
              }
            ],
            scenicId: "ebef352c-bd68-11e9-a65b-000c297b3bf7",
            grade: "4A级",
            sysOrTel: "tel"
          },
          {
            declareStatus: "0",
            scenicName: "南京市汤山紫清湖旅游区",
            city: "南京市",
            scenicScopeList: [
              {
                detailStatus: true,
                file: "http://180.106.82.198:8081/sims_file/rest/v1/file/tempSystem/BasicInfo/600_300_62b2efc3-6229-4f02-beee-9900f6b2e500.jpg/%E5%A4%9C%E5%A4%96%E5%85%A82.jpg",
                scenicId: "ebefcce8-bd68-11e9-a65b-000c297b3bf7",
                scenicScopeName: "南京市汤山紫清湖旅游区",
                list: [
                  {
                    statisticsName: "汤山紫清湖旅游区",
                    closeStatus: "0",
                    color: "#75B140",
                    city: "南京市",
                    updata: "2022-01-06 10:09",
                    headCount: 8000,
                    count: 445,
                    colorRgb: "117,177,64",
                    statisticsRange: "1",
                    sysOrTel: "tel",
                    scenicScopeName: "南京市汤山紫清湖旅游区",
                    grade: "4A级",
                    colorApp: "#52C41A",
                    time: "00:00-23:55",
                    nameShowStatus: 0
                  }
                ],
                scenicScopeId: "ec72dd68-bd68-11e9-a65b-000c297b3bf7",
                sysOrTel: "tel"
              }
            ],
            scenicId: "ebefcce8-bd68-11e9-a65b-000c297b3bf7",
            grade: "4A级",
            sysOrTel: "tel"
          },
          {
            declareStatus: "0",
            scenicName: "江苏省南京市天生桥景区",
            city: "南京市",
            scenicScopeList: [
              {
                detailStatus: true,
                file: "http://180.106.82.198:8081/sims_file/rest/v1/file/scenic/BasicInfo/600_300_ea1ebb54-cc9a-43b5-a760-256a24abc284.jpg/%E5%9B%BE%E7%89%87+%2833%29.jpg",
                scenicId: "a3647e7e-9674-11ea-895b-fa163e0dfd53",
                scenicScopeName: "江苏省南京市天生桥景区",
                list: [
                  {
                    statisticsName: "天生桥景区",
                    closeStatus: "0",
                    color: "#75B140",
                    city: "南京市",
                    updata: "2022-01-06 10:09",
                    headCount: 30000,
                    count: 12,
                    colorRgb: "117,177,64",
                    statisticsRange: "1",
                    sysOrTel: "tel",
                    scenicScopeName: "江苏省南京市天生桥景区",
                    grade: "4A级",
                    colorApp: "#52C41A",
                    time: "08:00-17:00",
                    nameShowStatus: 0
                  }
                ],
                scenicScopeId: "6ff662f0-9675-11ea-895b-fa163e0dfd53",
                sysOrTel: "tel"
              }
            ],
            scenicId: "a3647e7e-9674-11ea-895b-fa163e0dfd53",
            grade: "4A级",
            sysOrTel: "tel"
          },
          {
            declareStatus: "0",
            scenicName: "南京市高淳国际慢城",
            city: "南京市",
            scenicScopeList: [
              {
                detailStatus: true,
                file: "http://180.106.82.198:8081/sims_file/rest/v1/file/tempSystem/BasicInfo/600_300_f064edc5-dea5-4c84-96da-c20cbc61e5cf.jpg/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20191119104538.jpg",
                scenicId: "ebf30349-bd68-11e9-a65b-000c297b3bf7",
                scenicScopeName: "南京市高淳国际慢城",
                list: [
                  {
                    statisticsName: "高淳国际慢城",
                    closeStatus: "0",
                    color: "#75B140",
                    city: "南京市",
                    updata: "2022-01-06 10:09",
                    headCount: 30000,
                    count: 189,
                    colorRgb: "117,177,64",
                    statisticsRange: "1",
                    sysOrTel: "tel",
                    scenicScopeName: "南京市高淳国际慢城",
                    grade: "4A级",
                    colorApp: "#52C41A",
                    time: "08:30-17:30",
                    nameShowStatus: 0
                  }
                ],
                scenicScopeId: "ec7642a1-bd68-11e9-a65b-000c297b3bf7",
                sysOrTel: "tel"
              }
            ],
            scenicId: "ebf30349-bd68-11e9-a65b-000c297b3bf7",
            grade: "4A级",
            sysOrTel: "tel"
          },
          {
            declareStatus: "0",
            scenicName: "南京市游子山休闲旅游区",
            city: "南京市",
            scenicScopeList: [
              {
                detailStatus: true,
                file: "http://180.106.82.198:8081/sims_file/rest/v1/file/tempSystem/BasicInfo/600_300_453de5b3-e6f1-4e2a-b1ec-1345b5b499ac.jpg/%E6%B8%B8%E5%AD%90%E5%B1%B1%E5%85%A8%E6%99%AF.jpg",
                scenicId: "ebf3d92b-bd68-11e9-a65b-000c297b3bf7",
                scenicScopeName: "南京市游子山休闲旅游区",
                list: [
                  {
                    statisticsName: "游子山休闲旅游区",
                    closeStatus: "0",
                    color: "#75B140",
                    city: "南京市",
                    updata: "2022-01-06 10:09",
                    headCount: 50000,
                    count: 41,
                    colorRgb: "117,177,64",
                    statisticsRange: "1",
                    sysOrTel: "tel",
                    scenicScopeName: "南京市游子山休闲旅游区",
                    grade: "4A级",
                    colorApp: "#52C41A",
                    time: "08:50-17:00",
                    nameShowStatus: 0
                  }
                ],
                scenicScopeId: "ec76ee17-bd68-11e9-a65b-000c297b3bf7",
                sysOrTel: "tel"
              }
            ],
            scenicId: "ebf3d92b-bd68-11e9-a65b-000c297b3bf7",
            grade: "4A级",
            sysOrTel: "tel"
          }
        ],
        recordsTotal: 18
      };
    }
  }
];
