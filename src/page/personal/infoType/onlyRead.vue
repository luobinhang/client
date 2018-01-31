<template>
  <div class="info-read-main">
    <div class="info-read-content card">
      <div class="info-left card">
        <div class="info-left-main">
          <div class="info-left-top">
            <div class="info-header">
              <img :src="infoData.photoUrl" src="../../../assets/teacher/headerBase.png">
            </div>
            <div class="info-name">
              <span>{{ infoData.teacherName }}</span>
              <i class="icon iconfont icon-nvsheng" v-if="infoData.sex == 0"></i>
              <i class="icon iconfont icon-nan" v-else-if="infoData.sex == 1"></i>
            </div>
            <div class="info-phone">
              <p>{{ infoData.phone }}</p>
            </div>
          </div>
          <div class="info-left-bottom">
            <router-link to="/personal/changePassword">修改密码</router-link>
          </div>
        </div>
      </div>
      <div class="info-right">
        <div class="info-right-main">
          <div class="info-item">
            <div class="info-item-title">
              <h2>联系方式</h2>
            </div>
            <div class="info-item-detail">
              <table cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>微信：{{ infoData.wechat }}</td>
                  <td>邮箱：{{ infoData.email }}</td>
                  <td>QQ：{{ infoData.qq }}</td>
                </tr>
                <tr>
                  <td>紧急联系人：{{ infoData.schoolName }}</td>
                  <td>紧急联系人关系：{{ infoData.schoolName }}</td>
                </tr>
              </table>
            </div>
          </div>
          <div class="info-item">
            <div class="info-item-title">
              <h2>学历信息</h2>
            </div>
            <div class="info-item-detail">
              <table cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>高考所在地：{{ infoData.examLocation }}</td>
                  <td>文理科：{{ infoData.artsOrScience }}</td>
                </tr>
                <tr>
                  <td>在读院校：{{ infoData.schoolName }}</td>
                  <td>学历：{{ infoData.education }}</td>
                  <td>最高学历：{{ infoData.highestEducation }}</td>
                </tr>
                <tr>
                  <td>专业：{{ infoData.major }}</td>
                  <td>年级：{{ infoData.grade }}</td>
                </tr>
              </table>
            </div>
          </div>
          <div class="info-item">
            <div class="info-item-title">
              <h2>授课偏好</h2>
            </div>
            <div class="info-item-detail">
              <table cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>年级偏好：{{ infoData.gradePreference | gradePreferenceFilter }}</td>
                  <td>第一科目：{{ infoData.teachingSubject }}</td>
                  <td>第二科目：{{ infoData.secondSubject }}</td>
                  <td>第三科目：{{ infoData.thirdSubject }}</td>
                </tr>
              </table>
            </div>
          </div>
          <div class="info-item">
            <div class="info-item-title">
              <h2>支付信息</h2>
              <Switch v-model="switchPay" size="small"></Switch>
            </div>
            <div class="info-item-detail" :class="{'filter':!switchPay}">
              <table cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>身份证号码：{{ replace(infoData.idNumber,3,11) }}</td>
                </tr>
              </table>
              <div class="info-item-pic">
                <div class="info-item-img1">
                  <img :src="infoData.idCardFrontUrl">
                </div>
                <div class="info-item-img1">
                  <img :src="infoData.idCardVersoUrl">
                </div>
              </div>
              <table cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>银行：招商银行</td>
                  <td>银行卡号：{{ replace(infoData.cardNumber,5,14) }}</td>
                  <td>开户行：{{ infoData.schoolName }}</td>
                </tr>
              </table>
              <div class="info-item-pic">
                <div class="info-item-img1">
                  <img :src="infoData.bankFrontUrl">
                </div>
                <div class="info-item-img1">
                  <img :src="infoData.bankVersoUrl">
                </div>
              </div>
            </div>
          </div>
          <div class="info-item">
            <div class="info-item-title">
              <h2>入职材料</h2>
              <Switch v-model="switchData" size="small"></Switch>
            </div>
            <div class="info-item-detail" :class="{'filter':!switchData}">
              <div class="info-item-paper">
                <div class="info-item-img2">
                  <p>兼职协议第一页</p>
                  <div>
                    <img :src="infoData.pactPage1Url">
                  </div>
                </div>
                <div class="info-item-img2">
                  <p>兼职协议第二页</p>
                  <div>
                    <img :src="infoData.pactPage2Url">
                  </div>
                </div>
                <div class="info-item-img2">
                  <p>信息登记表</p>
                  <div>
                    <img :src="infoData.registerPageUrl">
                  </div>
                </div>
                <div class="info-item-img2">
                  <p>学生证</p>
                  <div>
                    <img :src="infoData.credentialUrl">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal v-model="tipWindow" width="460">
      <p slot="header">
        <span>个人信息填写说明</span>
      </p>
      <p slot="close" @click="$router.go(-1)">
        <img src="../../../assets/images/close2.png" alt="关闭">
      </p>
      <div class="infoMoudel">
        <p>由于系统检测您未在客户端填写过个人信息，
          <br>为了不影响您的<span class="orange">工资发放</span>和<span class="orange">等级评定</span>，请尽快填写完善个人信息。</p>
        <div class="rule">
          <p>个人信息完善需<span class="orange">一次性完成</span>，需准备以下材料，
            <br>如材料未准备齐全，可点击“返回”返回上一级界面。</p>
          <ul>
            <li>1.高清身份证正反面照片。</li>
            <li>2.高清银行卡正反面照片。</li>
            <li>3.银行卡开户行。</li>
            <li>4.兼职协议第一、二页高清照片（全职教师可没有）</li>
            <li>5.学生证、教师资格证高清照片（不是学生可没有）</li>
          </ul>
        </div>
        <p><span class="orange">*</span>信息一旦填写，<span class="orange">无法在此客户端更改</span>，请认真填写确保信息准确。</p>
      </div>
      <div slot="footer">
        <Button type="primary" style="margin-right: 30px;" @click="$router.go(-1)">返回</Button>
        <Button type="primary" @click="chageType">开始填写</Button>
      </div>
    </Modal>
  </div>
</template>



<script>
  export default {
    data () {
      return {
        switchPay:false,
        switchData:false,
        tipWindow:false,
        infoUrl:this.$store.state.info,
        infoData:'',
      }
    },
    beforeMount () {
    },
    mounted () {
      this.getInfo()
    },
    created: function () {
    },
    methods: {
      replace(data,start,end) {
        if(data == null) {
          return '';
        } else {
          if(!this.switchPay){
            let r = data.substring(start,end);
            return data.replace(r,'***********');
          } else {
            return data;
          }
        }

      },
      chageType () {
        this.tipWindow = false;
        this.$emit('changeType',false);
      },
      getInfo () {
        this.$axios.get(this.infoUrl)
          .then( res => {
            this.infoData = res.data.data
          })
      }
    },
    filters:{
      gradePreferenceFilter (value) {
        if(value == null) {
          return '';
        } else {
          if(value == 1) {
            return "小学"
          } else if (res == 2) {
            return "小学,初中"
          } else if (res == 3) {
            return "小学,初中,高中"
          } else if (res == 4) {
            return "初中"
          } else if (res == 5) {
            return "初中,高中"
          } else if (res == 6) {
            return "高中"
          } else {
            return "";
          }
        }
      },
    },
    components:{

    }
  }
</script>


