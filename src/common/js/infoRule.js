import stores from "../../store/store";
export default function RULE() {
  const ChineseREG =/^[\u4e00-\u9fa5]{0,}$/; //非中文
  const numberREG =/^[0-9]*$/;
  const phoneREG =/^1[3|4|5|7|8|9]\d{9}$/;
  const idcardREG =/(^\d{15}$)|(^\d{17}(\d|X|x)$)/;
  return {
    validateHeaderUrl: (rule, value, callback) => {   //头像
      if (value === '' || value === stores.state.headerUrl ) {
        callback(new Error('请上传头像'));
      } else {
        callback();
      }
    },
    validateName: (rule, value, callback) => {   //姓名
      if (value === '') {
        callback(new Error('姓名不能为空'));
      } else {
        callback();
      }
    },
    validateWeChat: (rule, value, callback) => {  //微信
      if (value === '') {
        callback(new Error('微信号不能为空'));
      } else if (ChineseREG.test(value)) {
        callback(new Error('微信号有误'));
      } else {
        callback();
      }
    },
    validateEmail: (rule, value, callback) => {  //邮箱
      if (value === '') {
        callback(new Error('邮箱不能为空'));
      } else {
        callback();
      }
    },
    validateQQ: (rule, value, callback) => { //QQ
      if (value === '') {
        callback(new Error('QQ不能为空'));
      } else if (!numberREG.test(value)) {
        callback(new Error('QQ有误'));
      } else {
        callback();
      }
    },
    validatePhone: (rule, value, callback) => {  //电话
      if (value === '') {
        callback(new Error('电话号不能为空'));
      } else if (!phoneREG.test(value)) {
        callback(new Error('电话号有误'));
      } else {
        callback();
      }
    },
    validateEmergencyPhone: (rule, value, callback) => {  //紧急联系人电话
      if (value === '') {
        callback(new Error('紧急联系人电话不能为空'));
      } else if (!phoneREG.test(value)) {
        callback(new Error('电话号有误'));
      } else {
        callback();
      }
    },
    validateRelationship: (rule, value, callback) => {   //紧急联系人关系
      if (value === '') {
        callback(new Error('紧急联系人关系不能为空'));
      } else {
        callback();
      }
    },
    validateMajor: (rule, value, callback) => {   //专业
      if (value === '') {
        callback(new Error('专业不能为空'));
      } else {
        callback();
      }
    },
    validateIdcard: (rule, value, callback) => {   //身份证号
      if (value === '') {
        callback(new Error('身份证号不能为空'));
      } else if (!idcardREG.test(value)) {
        callback(new Error('身份证号有误'));
      } else {
        callback();
      }
    },
    validateIdcardUrl1: (rule, value, callback) => {   //身份证号
      if (value === '') {
        callback(new Error('请上传身份证正面'));
      } else {
        callback();
      }
    },
    validateIdcardUrl2: (rule, value, callback) => {   //身份证号
      if (value === '') {
        callback(new Error('请上传身份证反面'));
      } else {
        callback();
      }
    },
    validateBankNum: (rule, value, callback) => {   //身份证号
      if (value === '') {
        callback(new Error('银行卡号不能为空'));
      }  else if (!numberREG.test(value)) {
        callback(new Error('银行卡号有误'));
      } else {
        callback();
      }
    },
    validateBankAddress: (rule, value, callback) => {   //身份证号
      if (value === '') {
        callback(new Error('开户行不能为空'));
      }  else {
        callback();
      }
    },
    validateBankUrl1: (rule, value, callback) => {   //身份证号
      if (value === '') {
        callback(new Error('请上传银行卡正面'));
      }  else {
        callback();
      }
    },
    validateBankUrl2: (rule, value, callback) => {   //身份证号
      if (value === '') {
        callback(new Error('请上传银行卡反面'));
      }  else {
        callback();
      }
    },
    validateAgreementUrl1: (rule, value, callback) => {   //身份证号
      if (value === '') {
        callback(new Error('请上传兼职协议第一页'));
      }  else {
        callback();
      }
    },
    validateAgreementUrl2: (rule, value, callback) => {   //身份证号
      if (value === '') {
        callback(new Error('请上传兼职协议第二页'));
      }  else {
        callback();
      }
    },
    validateRegisterUrl: (rule, value, callback) => {   //身份证号
      if (value === '') {
        callback(new Error('请上传信息登记表'));
      }  else {
        callback();
      }
    },
    validateStudentCardUrl: (rule, value, callback) => {   //身份证号
      if (value === '') {
        callback(new Error('请上传学生证'));
      }  else {
        callback();
      }
    },
  }
}



