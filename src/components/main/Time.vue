<template>
  <div class="time">
    <header>倒计时</header>
    <div id="timeBox"></div>
    <p id="timeText"></p>
    <button id="startBtn" type="button" href="javascript:;">start</button>
  </div>
</template>
<style lang="scss">
  .time{
    position: relative;
    #timeBox{
      width: 100%;
      height:67vh;
    }
    #timeText{
      position: absolute;
      font-size: (60rem/16);
      top:55%;
      left:50%;
    }
    button{
      color: #DDDDDD;
      position: absolute;
      bottom:5vh;
      left:5vh;
      background-color: rgb(0, 100, 0);
      padding:10px 20px;
      border-radius: 5px;
      &:hover{
        color: #FFFFFF;
      }
    }
  }
</style>
<script>
  const WIN = window;
  const DOC = document;

  let startBtn = DOC.querySelector('#timeBtn');
  console.log(startBtn);
  /**
   * 倒计时按钮
   */
  let countdown = ()=>{
//    let timeBox = echarts.init(document.getElementById('timeBox'));
    let time = {
      total: 60,
      used: 0
    };
//    timeBtn.addEventListener('click',()=>{
//      let timeText = DOC.querySelector('#timeText'),
//          btn = DOC.querySelector('.time button');
//
//
//      timeText.innerHTML = time.total - time.used;
//      timeText.style.marginLeft = (-parseInt(WIN.getComputedStyle(timeText,null).width)/2)+'px';
//      timeText.style.marginTop = (-parseInt(WIN.getComputedStyle(timeText,null).height)/2)+'px';
//      let option = {
//        series: [
//          {
//            type:'pie',
//            radius: ['50%', '70%'],
//            label: {
//              normal: {
//                show: false,
//                position: 'center'
//              },
//              emphasis: {
//                show: false
//              }
//            },
//            data:[
//              {value:time.used, name:''},
//              {value:time.total-time.used, name:''}
//            ]
//          }
//        ]
//      };
//      timeBox.setOption(option);
//
//      let timeAnimation = ()=>{
//        if (time.used >= 60) {
//          timeText.innerHTML = '时间到';
//          timeText.style.marginLeft = (-parseInt(WIN.getComputedStyle(timeText,null).width)/2)+'px';
//          timeText.style.marginTop = (-parseInt(WIN.getComputedStyle(timeText,null).height)/2)+'px';
//          btn.removeAttribute('disabled');
//          return true
//        }
//        time.used++;
//        timeText.style.marginLeft = (-parseInt(WIN.getComputedStyle(timeText,null).width)/2)+'px';
//        timeText.style.marginTop = (-parseInt(WIN.getComputedStyle(timeText,null).height)/2)+'px';
//        let option = {
//          series: [
//            {
//              type:'pie',
//              radius: ['50%', '70%'],
//              label: {
//                normal: {
//                  show: false,
//                  position: 'center'
//                },
//                emphasis: {
//                  show: false
//                }
//              },
//              data:[
//                {value:time.used, name:''},
//                {value:time.total-time.used, name:''}
//              ]
//            }
//          ]
//        };
//        timeBox.setOption(option);
//        timeText.innerHTML = time.total - time.used;
//        setTimeout(timeAnimation,1000);
//      };
//      btn.addEventListener('click',()=>{
//        btn.setAttribute('disabled','disabled');
//        timeAnimation();
//      },false);
//    },false);
  };
  countdown();
</script>
