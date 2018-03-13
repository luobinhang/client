// 全局loading
export const FETCH_LOADING = 'false';
export const SCHEDULE_TYPE = 'week';
// 帮助
export const HELP_MAIN_STUDENT = [
  {
    'qusetion': '1.课前有没有预习功能？',
    'answer': '答：老师提前设置好课件后，可以在开始上课前半小时进入课堂预习。'
  },
  {
    'qusetion': '2.我能用哪些设备上课？',
    'answer': '答：目前学生可以使用电脑、手机和平板电脑（iOS系统8.0及以上、安卓pad系统4.1及以上）上课'
  },
  {
    'qusetion': '3.语音出现问题如何处理？',
    'answer': '答：检查自己是否佩戴耳机/扬声器，耳机/扬声器功能是否完好；尽量使用有线网络，使用路由器的同学尽量靠近路由器；若还未解决请联系技术支持进行调试或测试哦！'
  },
  {
    'qusetion': '4.课件页面和老师显示的不一致怎么办？',
    'answer': '答：先告知老师课件不一致的情况，然后让老师重新打开课件或重新登录嗨课堂再次打开课件即可解决。'
  },
  {
    'qusetion': '5.课件加载不出来，加载得很慢怎么办？',
    'answer': '答：这是网络问题，上课时离路由器近一些或者插网线上课即可解决。'
  },
  {
    'qusetion': '6.上课过程中，一直掉线怎么办？',
    'answer': '答：这是网络问题，学生可以离路由器近一些，最好能使用网线上课。'
  },
  {
    'qusetion': '7.上课系统里的画笔、橡皮等工具不能使用怎么办？',
    'answer': '答：上课过程中，需要老师授权才能使用这些功能哦。'
  },
];
export const HELP_MAIN_TEACHER = [
  {
    'qusetion': '1.课前有没有预习功能？',
    'answer': '答：老师提前设置好课件后，可以在开始上课前半小时进入课堂预习。'
  },
  {
    'qusetion': '2.我能用哪些设备上课？',
    'answer': '答：目前仅可使用PC客户端上课，系统支持WINDOWS XP SP3和WIN7及更新版本的系统。'
  },
  {
    'qusetion': '3.语音出现问题如何处理？',
    'answer': '答：检查自己是否佩戴耳机/扬声器，耳机/扬声器功能是否完好；尽量使用有线网络，使用路由器的同学尽量靠近路由器；若还未解决请联系技术支持进行调试或测试哦！'
  },
  {
    'qusetion': '4.课件页面和学生显示的不一致怎么办？',
    'answer': '答：告知学生课件不一致的情况，然后老师重新打开课件即可解决。'
  },
  {
    'qusetion': '5.课件加载不出来，加载得很慢怎么办？',
    'answer': '答：这是网络问题，上课时离路由器近一些或者插网线上课即可解决。'
  },
  {
    'qusetion': '6.上课过程中，一直掉线怎么办？',
    'answer': '答：这是网络问题，请离路由器近一些，最好能使用网线上课。'
  },
  {
    'qusetion': '7.上课系统里，学生的画笔、橡皮等工具不能使用怎么办？',
    'answer': '答：上课过程中，需要老师授权才能使用这些功能哦。'
  },
];
//tab栏
export const CLASS_TAB = [
  {value: '一对一'},
  {value: '小班课'},
];
//科目
export const SUBJEXT_LIST = [
  {value: '', label: '全部'},
  {value: '语文', label: '语文'},
  {value: '数学', label: '数学'},
  {value: '英语', label: '英语'},
  {value: '物理', label: '物理'},
  {value: '化学', label: '化学'},
  {value: '生物', label: '生物'},
  {value: '政治', label: '政治'},
  {value: '历史', label: '历史'},
  {value: '地理', label: '地理'},
  {value: '科学', label: '科学'},
];

export const NOTICE_LIST = [
  {
    text: '「必读」课件的基本规范及制作教程课件的基本规范及制作教程课件的基本规范及制作教程课件的基本规范及制作教程课件的基本规范及制作教程课件的基本规范及制作教程课件的基本规范及制作教程课件的基本规范及制作教程课件的基本规范及制作教程，请老师详细解读。',
    date: '12 - 29'
  },
  {
    text: '「必读」课件的基本规范及制作教程课件的基本规范及制作教程课件的基本规范及制作教程课件的基本规范及制作教程课件的基本规范及制作教程课件的基本规范及制作教程课件的基本规范及制作教程课件的基本规范及制作教程课件的基本规范及制作教程，请老师详细解读。',
    date: '12 - 28'
  },
  {
    text: '「必读」课件的基本规范及制作教程课件的基本规范及制作教程课件的基本规范及制作教程课件的基本规范及制作教程课件的基本规范及制作教程课件的基本规范及制作教程课件的基本规范及制作教程课件的基本规范及制作教程课件的基本规范及制作教程，请老师详细解读。',
    date: '12 - 27'
  },
  {
    text: '「必读」课件的基本规范及制作教程课件的基本规范及制作教程课件的基本规范及制作教程课件的基本规范及制作教程课件的基本规范及制作教程课件的基本规范及制作教程课件的基本规范及制作教程课件的基本规范及制作教程课件的基本规范及制作教程，请老师详细解读。',
    date: '12 - 26'
  },
];


export const DATE_LIST = [
  {
    week: 1,
    date: [
      {day: 28, class: 0, month: 12},
      {day: 29, class: 0, month: 12},
      {day: 30, class: 0, month: 12},
      {day: 31, class: 0, month: 12},
      {day: 1, class: 1, month: 1},
      {day: 2, class: 0, month: 1},
      {day: 3, class: 1, month: 1},
    ]
  },
  {
    week: 2,
    date: [
      {day: 4, class: 0, month: 1},
      {day: 5, class: 0, month: 1},
      {day: 6, class: 0, month: 1},
      {day: 7, class: 0, month: 1},
      {day: 8, class: 1, month: 1},
      {day: 9, class: 1, month: 1},
      {day: 10, class: 1, month: 1},
    ]
  },
  {
    week: 3,
    date: [
      {day: 11, class: 1, month: 1},
      {day: 12, class: 1, month: 1},
      {day: 13, class: 0, month: 1},
      {day: 14, class: 0, month: 1},
      {day: 15, class: 0, month: 1},
      {day: 16, class: 1, month: 1},
      {day: 17, class: 1, month: 1},
    ]
  },
  {
    week: 4,
    date: [
      {day: 18, class: 1, month: 1},
      {day: 19, class: 1, month: 1},
      {day: 20, class: 1, month: 1},
      {day: 21, class: 1, month: 1},
      {day: 22, class: 1, month: 1},
      {day: 23, class: 1, month: 1},
      {day: 24, class: 1, month: 1},
    ]
  },
  {
    week: 5,
    date: [
      {day: 25, class: 1, month: 1},
      {day: 26, class: 1, month: 1},
      {day: 27, class: 0, month: 1},
      {day: 28, class: 0, month: 1},
      {day: 29, class: 1, month: 1},
      {day: 30, class: 1, month: 1},
      {day: 31, class: 1, month: 1},
    ]
  },
];
export const CLASS_TIP = [
  {time: '08:00  -  08:45', subject: '数学', student: '薛佳佳'},
  {time: '08:00  -  08:45', subject: '数学', student: '薛佳佳'},
  {time: '08:00  -  08:45', subject: '数学', student: '薛佳佳'},
  {time: '08:00  -  08:45', subject: '数学', student: '薛佳佳'},
  {time: '08:00  -  08:45', subject: '数学', student: '薛佳佳'},
  {time: '08:00  -  08:45', subject: '数学', student: '薛佳佳'},
  {time: '08:00  -  08:45', subject: '数学', student: '薛佳佳'},
  {time: '08:00  -  08:45', subject: '数学', student: '薛佳佳'},
  {time: '08:00  -  08:45', subject: '数学', student: '薛佳佳'},
  {time: '08:00  -  08:45', subject: '数学', student: '薛佳佳'},
  {time: '08:00  -  08:45', subject: '数学', student: '薛佳佳'},
  {time: '08:00  -  08:45', subject: '数学', student: '薛佳佳'},
  {time: '08:00  -  08:45', subject: '数学', student: '薛佳佳'},
  {time: '08:00  -  08:45', subject: '数学', student: '薛佳佳'},
  {time: '08:00  -  08:45', subject: '数学', student: '薛佳佳'},
  {time: '08:00  -  08:45', subject: '数学', student: '薛佳佳'},
  {time: '08:00  -  08:45', subject: '数学', student: '薛佳佳'},
  {time: '08:00  -  08:45', subject: '数学', student: '薛佳佳'},
  {time: '08:00  -  08:45', subject: '数学', student: '薛佳佳'},
  {time: '08:00  -  08:45', subject: '数学', student: '薛佳佳'},
];
export const CLASS_LIST = [
  {time: '08:00  -  08:45', state: 0, subject: '数学', student: '薛佳佳'},
  {time: '08:00  -  08:45', state: 1, subject: '数学', student: '薛佳佳'},
  {time: '08:00  -  08:45', state: 0, subject: '数学', student: '薛佳佳'},
  {time: '08:00  -  08:45', state: 1, subject: '数学', student: '薛佳佳'},
  {time: '08:00  -  08:45', state: 0, subject: '数学', student: '薛佳佳'},
  {time: '08:00  -  08:45', state: 1, subject: '数学', student: '薛佳佳'},
  {time: '08:00  -  08:45', state: 0, subject: '数学', student: '薛佳佳'},
  {time: '08:00  -  08:45', state: 0, subject: '数学', student: '薛佳佳'},
  {time: '08:00  -  08:45', state: 0, subject: '数学', student: '薛佳佳'},
  {time: '08:00  -  08:45', state: 0, subject: '数学', student: '薛佳佳'},
  {time: '08:00  -  08:45', state: 0, subject: '数学', student: '薛佳佳'},
  {time: '08:00  -  08:45', state: 0, subject: '数学', student: '薛佳佳'},
  {time: '08:00  -  08:45', state: 0, subject: '数学', student: '薛佳佳'},
  {time: '08:00  -  08:45', state: 0, subject: '数学', student: '薛佳佳'},
  {time: '08:00  -  08:45', state: 0, subject: '数学', student: '薛佳佳'},
  {time: '08:00  -  08:45', state: 1, subject: '数学', student: '薛佳佳'},
  {time: '08:00  -  08:45', state: 0, subject: '数学', student: '薛佳佳'},
  {time: '08:00  -  08:45', state: 0, subject: '数学', student: '薛佳佳'},
  {time: '08:00  -  08:45', state: 0, subject: '数学', student: '薛佳佳'},
  {time: '08:00  -  08:45', state: 0, subject: '数学', student: '薛佳佳'},
  {time: '08:00  -  08:45', state: 0, subject: '数学', student: '薛佳佳'},
  {time: '08:00  -  08:45', state: 0, subject: '数学', student: '薛佳佳'},
  {time: '08:00  -  08:45', state: 0, subject: '数学', student: '薛佳佳'},
  {time: '08:00  -  08:45', state: 0, subject: '数学', student: '薛佳佳'},
];
//薪资管理
export const WAGES_LIST = [
  {
    date: '2017年12月',
    money: "15000",
    cepin: 50,
    zhengshi: 150,
    money2: "10500",
    reward: "0"
  },
  {
    date: '2018年1月',
    money: "13000",
    cepin: 50,
    zhengshi: 150,
    money2: "10500",
    reward: "0"
  },
  {
    date: '2018年2月',
    money: "12000",
    cepin: 50,
    zhengshi: 150,
    money2: "10500",
    reward: "0"
  },
  {
    date: '2018年3月',
    money: "11000",
    cepin: 50,
    zhengshi: 150,
    money2: "10500",
    reward: "0"
  }
];
export const SALARY_LIST = [
  {
    student: '王小明',
    schooltime: 18,
    money: '10',
    attendance: "正常",
    remarks: "未转化"
  },
  {
    student: '王小明',
    schooltime: 18,
    money: '10',
    attendance: "正常",
    remarks: "未转化"
  }, {
    student: '王小明',
    schooltime: 18,
    money: '10',
    attendance: "正常",
    remarks: "未转化"
  }, {
    student: '王小明',
    schooltime: 18,
    money: '10',
    attendance: "正常",
    remarks: "未转化"
  }, {
    student: '王小明',
    schooltime: 18,
    money: '10',
    attendance: "正常",
    remarks: "未转化"
  }, {
    student: '王小明',
    schooltime: 18,
    money: '10',
    attendance: "正常",
    remarks: "未转化"
  }, {
    student: '王小明',
    schooltime: 18,
    money: '10',
    attendance: "正常",
    remarks: "未转化"
  }, {
    student: '王小明',
    schooltime: 18,
    money: '10',
    attendance: "正常",
    remarks: "未转化"
  }, {
    student: '王小明',
    schooltime: 18,
    money: '10',
    attendance: "正常",
    remarks: "未转化"
  }, {
    student: '王小明',
    schooltime: 18,
    money: '10',
    attendance: "正常",
    remarks: "未转化"
  }, {
    student: '王小明',
    schooltime: 18,
    money: '10',
    attendance: "正常",
    remarks: "未转化"
  }, {
    student: '王小明',
    schooltime: 18,
    money: '10',
    attendance: "正常",
    remarks: "未转化"
  }, {
    student: '王小明',
    schooltime: 18,
    money: '10',
    attendance: "正常",
    remarks: "未转化"
  }, {
    student: '王小明',
    schooltime: 18,
    money: '10',
    attendance: "正常",
    remarks: "未转化"
  }, {
    student: '王小明',
    schooltime: 18,
    money: '10',
    attendance: "正常",
    remarks: "未转化"
  }, {
    student: '王小明',
    schooltime: 18,
    money: '10',
    attendance: "正常",
    remarks: "未转化"
  }, {
    student: '王小明',
    schooltime: 18,
    money: '10',
    attendance: "正常",
    remarks: "未转化"
  },

];
export const REWARD_LIST = [
  {
    student: '元旦课时补贴',
    schooltime: 18,
    money: '银行卡',
    attendance: "未通过"
  },
  {
    student: '元旦课时补贴',
    schooltime: 18,
    money: '银行卡',
    attendance: "未通过"
  }, {
    student: '元旦课时补贴',
    schooltime: 18,
    money: '银行卡',
    attendance: "未通过"
  }, {
    student: '元旦课时补贴',
    schooltime: 18,
    money: '银行卡',
    attendance: "未通过"
  }, {
    student: '元旦课时补贴',
    schooltime: 18,
    money: '银行卡',
    attendance: "未通过"
  }, {
    student: '元旦课时补贴',
    schooltime: 18,
    money: '银行卡',
    attendance: "未通过"
  }, {
    student: '元旦课时补贴',
    schooltime: 18,
    money: '银行卡',
    attendance: "未通过"
  }, {
    student: '元旦课时补贴',
    schooltime: 18,
    money: '银行卡',
    attendance: "未通过"
  }, {
    student: '元旦课时补贴',
    schooltime: 18,
    money: '银行卡',
    attendance: "未通过"
  },

];
//待上课程
export const CW_LIST = [
  {
    "total": 6,
    "list": [
      {
        "courseUuid": "6046718e0b124270a494bfdd59ad6936",
        "courseDate": "2018-03-01",
        "startTime": "18:36",
        "endTime": "18:37",
        "subject": "化学",
        "studentName": "战歌",
        "courseType": 0,
        "studentSex": 1,
        "subjectVersion": "鲁教五四新版",
        "studyStatus": "方法不佳，孩子目标定位很高，对自己要求也很高，给自己压力很大，成绩基本上排在年级前五名，近期几次语文模拟成绩，作为成绩不是很理想，想补习作文。",
        "grade": "小三",
        "monthPoint": null,
        "termPoint": null,
        "otherPoint": null,
        "imgUrl": "./src/assets/images/cBg.png",
        "video": "1"
      },
      {
        "courseUuid": "6046718e0b124270a494bfdd59ad6936",
        "courseDate": "2018-03-01",
        "startTime": "11:30",
        "endTime": "12:30",
        "subject": "化学",
        "studentName": "战歌",
        "courseType": 0,
        "studentSex": 1,
        "subjectVersion": "鲁教五四新版",
        "studyStatus": "方法不佳，孩子目标定位很高，对自己要求也很高，给自己压力很大，成绩基本上排在年级前五名，近期几次语文模拟成绩，作为成绩不是很理想，想补习作文。",
        "grade": "小三",
        "monthPoint": null,
        "termPoint": null,
        "otherPoint": null,
        "imgUrl": "./src/assets/images/cBg.png",
        "video": "1"
      }, {
        "courseUuid": "6046718e0b124270a494bfdd59ad6936",
        "courseDate": "2018-03-01",
        "startTime": "12:40",
        "endTime": "13:30",
        "subject": "化学",
        "studentName": "战歌",
        "courseType": 0,
        "studentSex": 1,
        "subjectVersion": "鲁教五四新版",
        "studyStatus": "方法不佳，孩子目标定位很高，对自己要求也很高，给自己压力很大，成绩基本上排在年级前五名，近期几次语文模拟成绩，作为成绩不是很理想，想补习作文。",
        "grade": "小三",
        "monthPoint": null,
        "termPoint": null,
        "otherPoint": null,
        "imgUrl": "./src/assets/images/cBg.png",
        "video": "1"
      },
       {
        "courseUuid": "6046718e0b124270a494bfdd59ad6936",
        "courseDate": "2018-03-01",
        "startTime": "17:05",
        "endTime": "17:18",
        "subject": "化学",
        "studentName": "战歌",
        "courseType": 0,
        "studentSex": 1,
        "subjectVersion": "鲁教五四新版",
        "studyStatus": "方法不佳，孩子目标定位很高，对自己要求也很高，给自己压力很大，成绩基本上排在年级前五名，近期几次语文模拟成绩，作为成绩不是很理想，想补习作文。",
        "grade": "小三",
        "monthPoint": null,
        "termPoint": null,
        "otherPoint": null,
        "imgUrl": "./src/assets/images/cBg.png",
        "video": "1"
      },
      {
        "courseUuid": "406F54E4-B84A-4F18-97C0-7B987A3C3A7F",
        "courseDate": "2018-03-01",
        "startTime": "17:08",
        "endTime": "20:00",
        "subject": "科学",
        "studentName": "张和诚",
        "courseType": 1,
        "studentSex": 0,
        "subjectVersion": "浙教版",
        "studyStatus": "均衡,拔",
        "grade": "初二",

        "imgUrl": "./src/assets/images/cBg.png",
        "video": ""
      },
      {
        "courseUuid": "6046718e0b124270a494bfdd59ad6936",
        "courseDate": "2018-03-01",
        "startTime": "14:18",
        "endTime": "23:30",
        "subject": "化学",
        "studentName": "测试3",
        "courseType": 0,
        "studentSex": 1,
        "subjectVersion": "鲁教五四新版",
        "studyStatus": "方法不佳，孩子目标定位很高，对自己要求也很高，给自己压力很大，成绩基本上排在年级前五名，近期几次语文模拟成绩，作为成绩不是很理想，想补习作文。",
        "grade": "小三",
        "monthPoint": null,
        "termPoint": null,
        "otherPoint": null
      },
      {
        "courseUuid": "406F54E4-B84A-4F18-97C0-7B987A3C3A7F",
        "courseDate": "2018-03-01",
        "startTime": "14:00",
        "endTime": "20:00",
        "subject": "科学",
        "studentName": "张和诚",
        "courseType": 1,
        "studentSex": 0,
        "subjectVersion": "浙教版",
        "studyStatus": "均衡,拔",
        "grade": "初二"
      }
    ]
  },
  {
    "total": 5,
    "list": [
      {
        "courseUuid": "6046718e0b124270a494bfdd59ad6936",
        "courseDate": "2018-01-23",
        "startTime": "01:30",
        "endTime": "23:30",
        "subject": "化学",
        "studentName": "新天",
        "courseType": 0,
        "studentSex": 1,
        "subjectVersion": "鲁教五四新版",
        "studyStatus": "方法不佳，孩子目标定位很高，对自己要求也很高，给自己压力很大，成绩基本上排在年级前五名，近期几次语文模拟成绩，作为成绩不是很理想，想补习作文。",
        "grade": "小三",
        "monthPoint": null,
        "termPoint": null,
        "otherPoint": null
      },
      {
        "courseUuid": "6046718e0b124270a494bfdd59ad6936",
        "courseDate": "2018-01-19",
        "startTime": "01:30",
        "endTime": "23:30",
        "subject": "化学",
        "studentName": "号1",
        "courseType": 0,
        "studentSex": 1,
        "subjectVersion": "鲁教五四新版",
        "studyStatus": "方法不佳，孩子目标定位很高，对自己要求也很高，给自己压力很大，成绩基本上排在年级前五名，近期几次语文模拟成绩，作为成绩不是很理想，想补习作文。",
        "grade": "小三",
        "monthPoint": null,
        "termPoint": null,
        "otherPoint": null
      },
      {
        "courseUuid": "406F54E4-B84A-4F18-97C0-7B987A3C3A7F",
        "courseDate": "2017-08-01",
        "startTime": "19:00",
        "endTime": "20:00",
        "subject": "科学",
        "studentName": "张和诚",
        "courseType": 1,
        "studentSex": 0,
        "subjectVersion": "浙教版",
        "studyStatus": "均衡,拔",
        "grade": "初二"
      },
      {
        "courseUuid": "6046718e0b124270a494bfdd59ad6936",
        "courseDate": "2018-01-19",
        "startTime": "01:30",
        "endTime": "23:30",
        "subject": "化学",
        "studentName": "学1",
        "courseType": 0,
        "studentSex": 1,
        "subjectVersion": "鲁教五四新版",
        "studyStatus": "方法不佳，孩子目标定位很高，对自己要求也很高，给自己压力很大，成绩基本上排在年级前五名，近期几次语文模拟成绩，作为成绩不是很理想，想补习作文。",
        "grade": "小三",
        "monthPoint": null,
        "termPoint": null,
        "otherPoint": null
      },
      {
        "courseUuid": "406F54E4-B84A-4F18-97C0-7B987A3C3A7F",
        "courseDate": "2017-08-01",
        "startTime": "19:00",
        "endTime": "20:00",
        "subject": "科学",
        "studentName": "张和诚",
        "courseType": 1,
        "studentSex": 0,
        "subjectVersion": "浙教版",
        "studyStatus": "均衡,拔",
        "grade": "初二"
      }
    ]
  },
  {
    "total": 4,
    "list": [
      {
        "courseUuid": "406F54E4-B84A-4F18-97C0-7B987A3C3A7F",
        "courseDate": "2018-01-24",
        "startTime": "19:00",
        "endTime": "20:00",
        "subject": "科学",
        "studentName": "张和诚",
        "courseType": 1,
        "studentSex": 0,
        "subjectVersion": "浙教版",
        "studyStatus": "均衡,拔",
        "grade": "初二"
      },
      {
        "courseUuid": "406F54E4-B84A-4F18-97C0-7B987A3C3A7F",
        "courseDate": "2017-08-01",
        "startTime": "19:00",
        "endTime": "20:00",
        "subject": "科学",
        "studentName": "张和诚",
        "courseType": 1,
        "studentSex": 0,
        "subjectVersion": "浙教版",
        "studyStatus": "均衡,拔",
        "grade": "初二"
      },
      {
        "courseUuid": "6046718e0b124270a494bfdd59ad6936",
        "courseDate": "2018-01-19",
        "startTime": "01:30",
        "endTime": "23:30",
        "subject": "化学",
        "studentName": "测试1",
        "courseType": 0,
        "studentSex": 1,
        "subjectVersion": "鲁教五四新版",
        "studyStatus": "方法不佳，孩子目标定位很高，对自己要求也很高，给自己压力很大，成绩基本上排在年级前五名，近期几次语文模拟成绩，作为成绩不是很理想，想补习作文。",
        "grade": "小三",
        "monthPoint": null,
        "termPoint": null,
        "otherPoint": null
      },
      {
        "courseUuid": "406F54E4-B84A-4F18-97C0-7B987A3C3A7F",
        "courseDate": "2017-08-01",
        "startTime": "19:00",
        "endTime": "20:00",
        "subject": "科学",
        "studentName": "张和诚",
        "courseType": 1,
        "studentSex": 0,
        "subjectVersion": "浙教版",
        "studyStatus": "均衡,拔",
        "grade": "初二"
      }
      ,
      {
        "courseUuid": "406F54E4-B84A-4F18-97C0-7B987A3C3A7F",
        "courseDate": "2017-08-01",
        "startTime": "19:00",
        "endTime": "20:00",
        "subject": "科学",
        "studentName": "张和诚",
        "courseType": 1,
        "studentSex": 0,
        "subjectVersion": "浙教版",
        "studyStatus": "均衡,拔",
        "grade": "初二"
      }
      ,
      {
        "courseUuid": "406F54E4-B84A-4F18-97C0-7B987A3C3A7F",
        "courseDate": "2017-08-01",
        "startTime": "19:00",
        "endTime": "20:00",
        "subject": "科学",
        "studentName": "张和诚",
        "courseType": 1,
        "studentSex": 0,
        "subjectVersion": "浙教版",
        "studyStatus": "均衡,拔",
        "grade": "初二"
      }
      ,
      {
        "courseUuid": "406F54E4-B84A-4F18-97C0-7B987A3C3A7F",
        "courseDate": "2017-08-01",
        "startTime": "19:00",
        "endTime": "20:00",
        "subject": "科学",
        "studentName": "张和诚",
        "courseType": 1,
        "studentSex": 0,
        "subjectVersion": "浙教版",
        "studyStatus": "均衡,拔",
        "grade": "初二"
      }
    ]
  },
  {
    "total": 4,
    "list": [
      {
        "courseUuid": "406F54E4-B84A-4F18-97C0-7B987A3C3A7F",
        "courseDate": "2018-01-25",
        "startTime": "19:00",
        "endTime": "20:00",
        "subject": "科学",
        "studentName": "张和诚",
        "courseType": 1,
        "studentSex": 0,
        "subjectVersion": "浙教版",
        "studyStatus": "均衡,拔",
        "grade": "初二"
      },
      {
        "courseUuid": "406F54E4-B84A-4F18-97C0-7B987A3C3A7F",
        "courseDate": "2017-08-01",
        "startTime": "19:00",
        "endTime": "20:00",
        "subject": "科学",
        "studentName": "张和诚",
        "courseType": 1,
        "studentSex": 0,
        "subjectVersion": "浙教版",
        "studyStatus": "均衡,拔",
        "grade": "初二"
      },
      {
        "courseUuid": "6046718e0b124270a494bfdd59ad6936",
        "courseDate": "2018-01-19",
        "startTime": "01:30",
        "endTime": "23:30",
        "subject": "化学",
        "studentName": "测试1",
        "courseType": 0,
        "studentSex": 1,
        "subjectVersion": "鲁教五四新版",
        "studyStatus": "方法不佳，孩子目标定位很高，对自己要求也很高，给自己压力很大，成绩基本上排在年级前五名，近期几次语文模拟成绩，作为成绩不是很理想，想补习作文。",
        "grade": "小三",
        "monthPoint": null,
        "termPoint": null,
        "otherPoint": null
      },
      {
        "courseUuid": "406F54E4-B84A-4F18-97C0-7B987A3C3A7F",
        "courseDate": "2017-08-01",
        "startTime": "19:00",
        "endTime": "20:00",
        "subject": "科学",
        "studentName": "张和诚",
        "courseType": 1,
        "studentSex": 0,
        "subjectVersion": "浙教版",
        "studyStatus": "均衡,拔",
        "grade": "初二"
      }
      ,
      {
        "courseUuid": "406F54E4-B84A-4F18-97C0-7B987A3C3A7F",
        "courseDate": "2017-08-01",
        "startTime": "19:00",
        "endTime": "20:00",
        "subject": "科学",
        "studentName": "张和诚",
        "courseType": 1,
        "studentSex": 0,
        "subjectVersion": "浙教版",
        "studyStatus": "均衡,拔",
        "grade": "初二"
      }
      ,
      {
        "courseUuid": "406F54E4-B84A-4F18-97C0-7B987A3C3A7F",
        "courseDate": "2017-08-01",
        "startTime": "19:00",
        "endTime": "20:00",
        "subject": "科学",
        "studentName": "张和诚",
        "courseType": 1,
        "studentSex": 0,
        "subjectVersion": "浙教版",
        "studyStatus": "均衡,拔",
        "grade": "初二"
      }
      ,
      {
        "courseUuid": "406F54E4-B84A-4F18-97C0-7B987A3C3A7F",
        "courseDate": "2017-08-01",
        "startTime": "19:00",
        "endTime": "20:00",
        "subject": "科学",
        "studentName": "张和诚",
        "courseType": 1,
        "studentSex": 0,
        "subjectVersion": "浙教版",
        "studyStatus": "均衡,拔",
        "grade": "初二"
      }
    ]
  },
  {
    "total": 4,
    "list": [
      {
        "courseUuid": "406F54E4-B84A-4F18-97C0-7B987A3C3A7F",
        "courseDate": "2018-01-26",
        "startTime": "19:00",
        "endTime": "20:00",
        "subject": "科学",
        "studentName": "张和诚",
        "courseType": 1,
        "studentSex": 0,
        "subjectVersion": "浙教版",
        "studyStatus": "均衡,拔",
        "grade": "初二"
      },
      {
        "courseUuid": "406F54E4-B84A-4F18-97C0-7B987A3C3A7F",
        "courseDate": "2017-08-01",
        "startTime": "19:00",
        "endTime": "20:00",
        "subject": "科学",
        "studentName": "张和诚",
        "courseType": 1,
        "studentSex": 0,
        "subjectVersion": "浙教版",
        "studyStatus": "均衡,拔",
        "grade": "初二"
      },
      {
        "courseUuid": "6046718e0b124270a494bfdd59ad6936",
        "courseDate": "2018-01-19",
        "startTime": "01:30",
        "endTime": "23:30",
        "subject": "化学",
        "studentName": "测试1",
        "courseType": 0,
        "studentSex": 1,
        "subjectVersion": "鲁教五四新版",
        "studyStatus": "方法不佳，孩子目标定位很高，对自己要求也很高，给自己压力很大，成绩基本上排在年级前五名，近期几次语文模拟成绩，作为成绩不是很理想，想补习作文。",
        "grade": "小三",
        "monthPoint": null,
        "termPoint": null,
        "otherPoint": null
      },
      {
        "courseUuid": "406F54E4-B84A-4F18-97C0-7B987A3C3A7F",
        "courseDate": "2017-08-01",
        "startTime": "19:00",
        "endTime": "20:00",
        "subject": "科学",
        "studentName": "张和诚",
        "courseType": 1,
        "studentSex": 0,
        "subjectVersion": "浙教版",
        "studyStatus": "均衡,拔",
        "grade": "初二"
      }
      ,
      {
        "courseUuid": "406F54E4-B84A-4F18-97C0-7B987A3C3A7F",
        "courseDate": "2017-08-01",
        "startTime": "19:00",
        "endTime": "20:00",
        "subject": "科学",
        "studentName": "张和诚",
        "courseType": 1,
        "studentSex": 0,
        "subjectVersion": "浙教版",
        "studyStatus": "均衡,拔",
        "grade": "初二"
      }
      ,
      {
        "courseUuid": "406F54E4-B84A-4F18-97C0-7B987A3C3A7F",
        "courseDate": "2017-08-01",
        "startTime": "19:00",
        "endTime": "20:00",
        "subject": "科学",
        "studentName": "张和诚",
        "courseType": 1,
        "studentSex": 0,
        "subjectVersion": "浙教版",
        "studyStatus": "均衡,拔",
        "grade": "初二"
      }
      ,
      {
        "courseUuid": "406F54E4-B84A-4F18-97C0-7B987A3C3A7F",
        "courseDate": "2017-08-01",
        "startTime": "19:00",
        "endTime": "20:00",
        "subject": "科学",
        "studentName": "张和诚",
        "courseType": 1,
        "studentSex": 0,
        "subjectVersion": "浙教版",
        "studyStatus": "均衡,拔",
        "grade": "初二"
      }
    ]
  }
];
//课程记录
export const CR_list = [
  {
    "courseDate": "2018-01-29",
    "list": [
      {
        "courseUuid": "test3",
        "courseDate": "2018-01-29",
        "startTime": "12:00",
        "endTime": "13:00",
        "subject": "测评课",
        "name": "测试",
        "courseType": 0,
        "classTeacherAppraiseUuid": null,
        "grade": null,
        "subjectVersion": null
      }
    ]
  },
  {
    "courseDate": "2018-01-24",
    "list": [
      {
        "courseUuid": "test2",
        "courseDate": "2018-01-24",
        "startTime": "19:00",
        "endTime": "20:00",
        "subject": "测评课",
        "name": "测试",
        "courseType": 0,
        "classTeacherAppraiseUuid": null,
        "grade": null,
        "subjectVersion": null
      },
      {
        "courseUuid": "test1",
        "courseDate": "2018-01-24",
        "startTime": "08:00",
        "endTime": "09:00",
        "subject": "测评课",
        "name": "测试",
        "courseType": 0,
        "classTeacherAppraiseUuid": null,
        "grade": null,
        "subjectVersion": null
      }
    ]
  },
  {
    "courseDate": "2018-01-15",
    "list": [
      {
        "courseUuid": "7006AED4-6E8D-443D-819E-20B00A916E1F",
        "courseDate": "2018-01-15",
        "startTime": "00:30",
        "endTime": "23:30",
        "subject": "测评课",
        "name": "杜宗轩",
        "courseType": 0,
        "classTeacherAppraiseUuid": null,
        "grade": null,
        "subjectVersion": null
      }
    ]
  },
  {
    "courseDate": "2017-11-19",
    "list": [
      {
        "courseUuid": "31A07FDC-E12F-43AF-8454-0001B370B5E6",
        "courseDate": "2017-11-19",
        "startTime": "16:00",
        "endTime": "17:00",
        "subject": "科学",
        "name": "詹溢宁",
        "courseType": 0,
        "classTeacherAppraiseUuid": null,
        "grade": "初三",
        "subjectVersion": "浙教版"
      },
      {
        "courseUuid": "EF00191C-CA9C-4758-B285-0F0652B38CA0",
        "courseDate": "2017-11-19",
        "startTime": "13:00",
        "endTime": "14:00",
        "subject": "科学",
        "name": "吴昊",
        "courseType": 0,
        "classTeacherAppraiseUuid": null,
        "grade": "初三",
        "subjectVersion": "浙教版"
      }
    ]
  },
  {
    "courseDate": "2017-11-18",
    "list": [
      {
        "courseUuid": "0649D5DA-EFCF-4181-A60F-9C6CD5595FBD",
        "courseDate": "2017-11-18",
        "startTime": "21:00",
        "endTime": "22:00",
        "subject": "科学",
        "name": "章博函",
        "courseType": 0,
        "classTeacherAppraiseUuid": null,
        "grade": "初一",
        "subjectVersion": "华东师大版"
      },
      {
        "courseUuid": "5BF7078D-064E-4B86-8F82-1A01A75827CB",
        "courseDate": "2017-11-18",
        "startTime": "16:00",
        "endTime": "17:00",
        "subject": "科学",
        "name": "潘聪聪",
        "courseType": 0,
        "classTeacherAppraiseUuid": null,
        "grade": "初三",
        "subjectVersion": "人教版"
      }
    ]
  },
  {
    "courseDate": "2017-11-12",
    "list": [
      {
        "courseUuid": "90D36465-1CFB-4D40-9F98-FB852F567A9F",
        "courseDate": "2017-11-12",
        "startTime": "9：00",
        "endTime": "10:00",
        "subject": "正式课",
        "name": "黄子诚",
        "courseType": 1,
        "classTeacherAppraiseUuid": null,
        "grade": null,
        "subjectVersion": null
      },
      {
        "courseUuid": "7B77ADE7-67F7-4F92-9F51-01B015AFDA59",
        "courseDate": "2017-11-12",
        "startTime": "8:30",
        "endTime": "09:00",
        "subject": "正式课",
        "name": "黄子诚",
        "courseType": 1,
        "classTeacherAppraiseUuid": null,
        "grade": null,
        "subjectVersion": null
      },
      {
        "courseUuid": "BDF51D7E-2553-43FE-AEA3-D8D9AF378D42",
        "courseDate": "2017-11-12",
        "startTime": "12:30",
        "endTime": "13:00",
        "subject": "正式课",
        "name": "胡鑫灵",
        "courseType": 1,
        "classTeacherAppraiseUuid": null,
        "grade": null,
        "subjectVersion": null
      },
      {
        "courseUuid": "19A4546C-8EAD-4DE6-8F99-02F2217F279C",
        "courseDate": "2017-11-12",
        "startTime": "11：00",
        "endTime": "12:00",
        "subject": "正式课",
        "name": "胡鑫灵",
        "courseType": 1,
        "classTeacherAppraiseUuid": null,
        "grade": null,
        "subjectVersion": null
      },
      {
        "courseUuid": "2F1B42DA-7456-4A2D-B2B2-86C8B95871F7",
        "courseDate": "2017-11-12",
        "startTime": "10：00",
        "endTime": "11:00",
        "subject": "正式课",
        "name": "邬子昱",
        "courseType": 1,
        "classTeacherAppraiseUuid": null,
        "grade": null,
        "subjectVersion": null
      }
    ]
  }
];
