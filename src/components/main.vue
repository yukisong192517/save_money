<template>
  <div class="calendar-container">
    <div class="calendar-title">
      <div class="calendar-title_text">365存钱计划</div>
      <div class="calendar-title_status">
        <div >已存 {{savedDay}}/365天</div>
        <div >{{changeTotaltoFixed(savedMoney)}}/{{changeTotaltoFixed(totalMoney*mode)}}元</div>
      </div>
      <div class="calendar-title_mode" @change="changeMode">
        模式：
        <input type="radio" name="mode" value="0.1" v-model="mode"> 0.1
        <input type="radio" name="mode" value="0.5" v-model="mode"> 0.5
        <input type="radio" name="mode" value="1" v-model="mode"> 1
      </div>
    </div>

    <div class="calendar">
      <div class="date-container" v-for="i in dateArr" :key="i.key"  @click="onClickHeart(i)">
        <div class="date">
          <div class="date-left-heart" :style="i.saved?redHeartStyle:normalHeartStyle"></div>
          <div class="date-top-heart" :style="i.saved?redHeartStyle:normalHeartStyle"></div>
          <div class="date-square" :style="i.saved?redHeartStyle:normalHeartStyle"> <div class="save-heart_text">{{changeTotaltoFixed(i.index * mode)}}</div></div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  mounted () {
    if (!window.localStorage.getItem('dateArr')) {
      this.initDateArr()
    } else {
      this.dateArr = JSON.parse(window.localStorage.getItem('dateArr'))
      this.totalMoney = window.localStorage.getItem('totalMoney') ? window.localStorage.getItem('totalMoney') : this.calculateTotalMoney()
    }

    if(!window.localStorage.getItem('mode')) {
      this.mode = 1;
    }else{
      this.mode = window.localStorage.getItem('mode');
    }
  },
  data () {
    return {
      dateArr: [],
      normalHeartStyle: {
        backgroundColor: 'white'
      },
      redHeartStyle: {
        backgroundColor: '#7a171c',
        color: 'white'
      },
      borderWidth: '2px',
      totalMoney: 0,
      mode: 1
    }
  },
  computed: {
    savedDay () {
      if (this.dateArr) {
        return this.dateArr.filter(item => item.saved === true).length
      }
      return 0
    },
    savedMoney () {
      let _total = 0
      if (this.dateArr) {
        this.dateArr.filter(item => item.saved === true).forEach(item => {
          _total += item.index
        })
      }
      return _total* this.mode
    }
  },
  methods: {
    initDateArr () {
      for (let i = 1; i <= 365; i++) {
        this.dateArr.push({
          index: i,
          key: `day-${i}`,
          saved: false
        })
        this.totalMoney = this.totalMoney + i
      }
      window.localStorage.setItem('totalMoney', this.totalMoney)
    },
    onClickHeart (e) {
      e.saved = !e.saved
      window.localStorage.setItem('dateArr', JSON.stringify(this.dateArr))
    },
    calculateTotalMoney () {
      let _total = 0
      for (let i = 1; i <= 365; i++) {
        _total += i
      }
      return _total
    },
    changeMode (e) {
      this.mode = e.target.value;
      window.localStorage.setItem('mode', e.target.value);
    },
    changeTotaltoFixed(num){
      if(this.mode !==1){
        return num.toFixed(1)
      }
      return num
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .calendar-container{
    width: 100%;
    display: flex;
    flex: 1;
    justify-content: center;
    flex-wrap: wrap;
    .calendar-title{
      width: 100%;
      background: #7a171c;
      height: 80px;
      color: white;
      border-radius: 5px;
      position: relative;
      .calendar-title_text{
        font-weight: bold;
        font-size: 30px;
        float: left;
        margin: 5px 10px;
      }
      .calendar-title_status{
        float: right;
        text-align: end;
        margin: 5px 10px;
        width: 40%;
      }
      .calendar-title_mode{
        width: 100%;
        float:left;
        text-align: left;
        padding: 0px 10px;
      }
    }
  }
  .calendar{
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 6px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    border-radius: 5px;
    margin:  0px;
    padding: 10px;
    background: white;
    width: 100%;
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    .date-container{
      width: 20%;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .date{
      position: relative;
      transform: rotate(45deg);
    }
    .date-square{
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px #7a171c solid;
      background-color: white;
      border-color: transparent  #7a171c #7a171c transparent;
      .save-heart_text{
        transform: rotate(-45deg);

      }
    }
    .date-top-heart{
      width: 30px;
      height: 30px;
      position: absolute;
      border:2px #7a171c solid;
      border-radius: 50%;
      right: 16px;
      z-index: -1;
    }
    .date-left-heart{
      width: 30px;
      height:30px;
      position: absolute;
      border:2px #7a171c solid;
      border-radius: 50%;
      bottom: 16px;
      z-index: -1;
    }
  }

</style>
