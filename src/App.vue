<template>
  <div id="app">
    <div class="wrap clearfix">
      <div class="wrap_l">
        <img src="./assets/logo.png" class="logo">
       <!--  <router-link to="/workbench">
          <i class="icon iconfont icon-xiaoxi"></i></br>
          <span>工作台</span>
        </router-link>
        <router-link to="/managementBackstage">
          <i class="el-icon-setting"></i></br>
          <span>后台管理</span>
        </router-link> -->
        <a class="nav_btn" v-bind:class="{sel: isNavSel}" v-on:click="showTabCon(0)">
          <i class="icon iconfont icon-xiaoxi"></i></br>
          <span>工作台</span>
        </a>
        <a class="nav_btn" v-bind:class="{sels: isNavSels}" v-on:click="showTabCon(1)">
          <i class="el-icon-setting"></i></br>
          <span>后台管理</span>
        </a>    
      </div>
      <div class="wrap_r">
        <div class="wrap_r_top_con">
          <em><i class="icon iconfont icon-wodefill"></i>超級管理員</em>
          <em><i class="icon iconfont icon-yuanxingxuanzhongfill"></i>在线</em>
          <em>
            <el-dropdown>
              <span class="el-dropdown-link">
                <i class="icon iconfont icon-xiangxia1"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item><i class="icon iconfont icon-yuanxingxuanzhongfill"></i>在线</el-dropdown-item>
                <el-dropdown-item><i class="icon iconfont icon-shizhong"></i>离开</el-dropdown-item>
                <el-dropdown-item><i class="icon iconfont icon-manglu"></i>忙碌</el-dropdown-item>
                <el-dropdown-item disabled>我的企业</el-dropdown-item>
                <el-dropdown-item divided>用户中心</el-dropdown-item>
                <el-dropdown-item disabled>问题反馈</el-dropdown-item>
                <el-dropdown-item divided>联系客服</el-dropdown-item>
                <el-dropdown-item divided>系统设置</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </em>
          <em><i class="icon iconfont icon-jianhao"></i></em>
          <em><i class="icon iconfont icon-fangxingweixuanzhong"></i></em>
          <em><i class="icon iconfont icon iconfont icon-guanbi1"></i></em>
        </div>
        <div class="wrap_r_bottom_con clearfix" v-show="showInfo">
          <div>访客数 - <span>0</span>人</div>
          <div>对话中 - <span>0</span>人</div>
          <div>访客数 - <span>0</span>人</div>
          <div>已邀请 - <span>0</span>人</div>
          <div>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
      </div>
    </div>
    <div class="tab_con">
      <div class="tab_con_item" index="0" v-show="navIndex==0">
        <el-table
          :data="tableData3"
          height="180"
          style="width: 100%">
          <el-table-column
            prop="data_type"
            label="类型" 
            width="50">
          </el-table-column>
          <el-table-column
            prop="channel"
            label="渠道" 
            width="50">
          </el-table-column>
          <el-table-column
            prop="visitor_name"
            label="访客姓名" 
            width="90">
          </el-table-column>
          <el-table-column
            prop="visitor_num"
            label="访客次数" 
            width="62">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地域" 
            width="120">
          </el-table-column>
          <el-table-column
            prop="stop_time"
            label="停留时间" 
            width="70">
          </el-table-column>
          <el-table-column
            prop="last_active"
            label="最后活动" 
            width="70">
          </el-table-column>
          <el-table-column
            prop="source"
            label="来源" 
            width="140">
          </el-table-column>
          <el-table-column
            prop="look_page"
            label="正在浏览的页面" 
            width="200">
          </el-table-column>
          <el-table-column
            prop="reception"
            label="上次接待" 
            width="72">
          </el-table-column>
          <el-table-column
            prop="this_reception"
            label="当前接待" 
            width="74">
          </el-table-column>
          <el-table-column
            prop="operation"
            label="操作" 
            width="120">
          </el-table-column>
        </el-table>
        <div class="chat_window">
          <div class="chat_l">
            <div class="tab_btn">
              <span class="sel" index="0" v-on:click="tabShowBox">对话列表</span>
              <span index="1" v-on:click="tabShowBox">客服</span>
            </div>
            <div class="tabs_con">
              <div v-show="chat_index==0">1</div>
              <div v-show="chat_index==1">2</div>
            </div>
          </div>
          <div class="chat_mid">
            <div class="conRight">
              <div class="Righthead">
                <div><span>未知用户</span> 正在浏览页面 <span>无</span></div>
                <div>
                  访问: <span>0</span>次
                  对话: <span>0</span>次
                  IP： <span>未知</span>
                  来源： <span>未知</span>
                </div>
              </div>
              <div class="RightCont">
                <div class="ChatRecord">查看更多消息</div>
                <ul class="newsList">
                </ul>
              </div>
              <div class="RightFoot">
                <div class="emjon" v-show="emjonShow">
                  <ul>
                    <li><img src="./assets/img/1.gif"/></li>
                    <li><img src="./assets/img/2.gif"/></li>
                    <li><img src="./assets/img/3.gif"/></li>
                    <li><img src="./assets/img/4.gif"/></li>
                    <li><img src="./assets/img/5.gif"/></li>
                    <li><img src="./assets/img/6.gif"/></li>
                    <li><img src="./assets/img/7.gif"/></li>
                    <li><img src="./assets/img/8.gif"/></li>
                    <li><img src="./assets/img/9.gif"/></li>
                    <li><img src="./assets/img/10.gif"/></li>
                    <li><img src="./assets/img/11.gif"/></li>
                    <li><img src="./assets/img/12.gif"/></li>
                    <li><img src="./assets/img/13.gif"/></li>
                    <li><img src="./assets/img/14.gif"/></li>
                    <li><img src="./assets/img/15.gif"/></li>
                    <li><img src="./assets/img/16.gif"/></li>
                    <li><img src="./assets/img/17.gif"/></li>
                    <li><img src="./assets/img/18.gif"/></li>
                    <li><img src="./assets/img/19.gif"/></li>
                    <li><img src="./assets/img/20.gif"/></li>
                    <li><img src="./assets/img/21.gif"/></li>
                    <li><img src="./assets/img/22.gif"/></li>
                    <li><img src="./assets/img/23.gif"/></li>
                    <li><img src="./assets/img/24.gif"/></li>
                    <li><img src="./assets/img/25.gif"/></li>
                    <li><img src="./assets/img/26.gif"/></li>
                    <li><img src="./assets/img/27.gif"/></li>
                    <li><img src="./assets/img/28.gif"/></li>
                    <li><img src="./assets/img/29.gif"/></li>
                    <li><img src="./assets/img/30.gif"/></li>
                    <li><img src="./assets/img/31.gif"/></li>
                    <li><img src="./assets/img/32.gif"/></li>
                    <li><img src="./assets/img/33.gif"/></li>
                    <li><img src="./assets/img/34.gif"/></li>
                    <li><img src="./assets/img/35.gif"/></li>
                    <li><img src="./assets/img/36.gif"/></li>
                    <li><img src="./assets/img/37.gif"/></li>
                    <li><img src="./assets/img/38.gif"/></li>
                    <li><img src="./assets/img/39.gif"/></li>
                    <li><img src="./assets/img/40.gif"/></li>
                    <li><img src="./assets/img/41.gif"/></li>
                    <li><img src="./assets/img/42.gif"/></li>
                    <li><img src="./assets/img/43.gif"/></li>
                    <li><img src="./assets/img/44.gif"/></li>
                    <li><img src="./assets/img/45.gif"/></li>
                    <li><img src="./assets/img/46.gif"/></li>
                    <li><img src="./assets/img/47.gif"/></li>
                    <li><img src="./assets/img/48.gif"/></li>
                    <li><img src="./assets/img/49.gif"/></li>
                    <li><img src="./assets/img/50.gif"/></li>
                    <li><img src="./assets/img/51.gif"/></li>
                    <li><img src="./assets/img/52.gif"/></li>
                    <li><img src="./assets/img/53.gif"/></li>
                    <li><img src="./assets/img/54.gif"/></li>
                    <li><img src="./assets/img/55.gif"/></li>
                    <li><img src="./assets/img/56.gif"/></li>
                    <li><img src="./assets/img/57.gif"/></li>
                    <li><img src="./assets/img/58.gif"/></li>
                    <li><img src="./assets/img/59.gif"/></li>
                    <li><img src="./assets/img/60.gif"/></li>
                    <li><img src="./assets/img/50.gif"/></li>
                    <li><img src="./assets/img/51.gif"/></li>
                    <li><img src="./assets/img/52.gif"/></li>
                    <li><img src="./assets/img/53.gif"/></li>
                    <li><img src="./assets/img/54.gif"/></li>
                    <li><img src="./assets/img/55.gif"/></li>
                    <li><img src="./assets/img/56.gif"/></li>
                    <li><img src="./assets/img/57.gif"/></li>
                    <li><img src="./assets/img/58.gif"/></li>
                    <li><img src="./assets/img/59.gif"/></li>
                    <li><img src="./assets/img/60.gif"/></li>
                    <li><img src="./assets/img/61.gif"/></li>
                    <li><img src="./assets/img/62.gif"/></li>
                    <li><img src="./assets/img/63.gif"/></li>
                    <li><img src="./assets/img/64.gif"/></li>
                    <li><img src="./assets/img/65.gif"/></li>
                    <li><img src="./assets/img/66.gif"/></li>
                    <li><img src="./assets/img/67.gif"/></li>
                    <li><img src="./assets/img/68.gif"/></li>
                    <li><img src="./assets/img/69.gif"/></li>
                    <li><img src="./assets/img/70.gif"/></li>
                    <li><img src="./assets/img/71.gif"/></li>
                    <li><img src="./assets/img/72.gif"/></li>
                    <li><img src="./assets/img/73.gif"/></li>
                    <li><img src="./assets/img/74.gif"/></li>
                    <li><img src="./assets/img/75.gif"/></li>
                    <li><img src="./assets/img/76.gif"/></li>
                    <li><img src="./assets/img/77.gif"/></li>
                    <li><img src="./assets/img/78.gif"/></li>
                    <li><img src="./assets/img/79.gif"/></li>
                    <li><img src="./assets/img/80.gif"/></li>
                    <li><img src="./assets/img/81.gif"/></li>
                    <li><img src="./assets/img/82.gif"/></li>
                    <li><img src="./assets/img/83.gif"/></li>
                    <li><img src="./assets/img/84.gif"/></li>
                    <li><img src="./assets/img/85.gif"/></li>
                    <li><img src="./assets/img/86.gif"/></li>
                    <li><img src="./assets/img/87.gif"/></li>
                    <li><img src="./assets/img/88.gif"/></li>
                    <li><img src="./assets/img/89.gif"/></li>
                    <li><img src="./assets/img/90.gif"/></li>
                    <li><img src="./assets/img/91.gif"/></li>
                  </ul>
                </div>
                <div class="footTop">
                  <ul>
                    <li><img src="./assets/img/TIM图片20170926103645_31.jpg"/></li>
                    <li class="ExP" v-on:click="showEmjon"><img src="./assets/img/TIM图片20170926103645_33.jpg"/></li>
                    <li><img src="./assets/img/TIM图片20170926103645_35.jpg"/></li>
                    <li><img src="./assets/img/TIM图片20170926103645_37.jpg"/></li>
                    <li><img src="./assets/img/TIM图片20170926103645_39.jpg"/></li>
                    <li><img src="./assets/img/TIM图片20170926103645_41.jpg" alt="" /></li>
                    <li><img src="./assets/img/TIM图片20170926103645_43.jpg"/></li>
                    <li><img src="./assets/img/TIM图片20170926103645_45.jpg"/></li>
                  </ul>
                </div>
                <div class="inputBox">
                  <textarea id="dope" style="width: 99%;height: 75px; border: none;border-bottom: 1px solid #ccc;outline: none;background:#ebf4f7;" name="" rows="" cols=""></textarea>
                  <button class="sendBtn">发送(s)</button>
                </div>
              </div>
            </div>
          </div>
          <div class="chat_r">
            <div class="tab_btn">
              <span class="sel" index="0" v-on:click="tabShowBox">常用语</span>
              <span index="1" v-on:click="tabShowBox">常用文件</span>
              <span index="2" v-on:click="tabShowBox">访客轨迹</span>
            </div>
            <div class="tabs_con">
              <div v-show="chat_index==0">1</div>
              <div v-show="chat_index==1">2</div>
              <div v-show="chat_index==2">3</div>
            </div>
          </div>
        </div>
      </div>
      <div class="tab_con_item" index="1" v-show="navIndex==1">后台管理</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  
  data() {
    return {
      options: [{
        value: '1',
        label: '全部网站',
        classname:"icon-yuanxingxuanzhongfill"
      },{
        value: '2',
        label: 'www.baidu.com',
        classname:"icon-yuanxingxuanzhongfill"
      }],
      activeName2: 'first',
      value: '',
      navIndex: 0,
      chat_index: 0,
      isNavSel: true,
      isNavSels: false,
      showInfo: true,
      emjonShow: false,
      editableTabsValue: '1',
      editableTabs: [{
        title: '对话列表',
        name: '1',
        content: '<div>第一个</div>'
      }, {
        title: '客服',
        name: '2',
        content: '<div>第二个</div>'
      }],
      tabIndex: 1,
      tableData3: [
        {
          data_type: '2016-05-03',
          channel: '王小虎',
          visitor_name: '上海',
          visitor_num: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          stop_time: 200333,
          last_active: '上海市普陀区金沙江路 1518 弄',
          source: 200333,
          look_page: '上海市普陀区金沙江路 1518 弄',
          reception: 200333,
          this_reception: '上海市普陀区金沙江路 1518 弄',
          operation: 200333
        },
        {
          data_type: '2016-05-03',
          channel: '王小虎',
          visitor_name: '上海',
          visitor_num: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          stop_time: 200333,
          last_active: '上海市普陀区金沙江路 1518 弄',
          source: 200333,
          look_page: '上海市普陀区金沙江路 1518 弄',
          reception: 200333,
          this_reception: '上海市普陀区金沙江路 1518 弄',
          operation: 200333
        },
        {
          data_type: '2016-05-03',
          channel: '王小虎',
          visitor_name: '上海',
          visitor_num: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          stop_time: 200333,
          last_active: '上海市普陀区金沙江路 1518 弄',
          source: 200333,
          look_page: '上海市普陀区金沙江路 1518 弄',
          reception: 200333,
          this_reception: '上海市普陀区金沙江路 1518 弄',
          operation: 200333
        }
      ]
    }
  },
  methods: {
    showTabCon: function (index) {
      console.log(index);
      this.navIndex = index;
      if(index == 0) {
        this.showInfo = true;
        this.isNavSel = true;
        this.isNavSels = false;
      } else {
        this.showInfo = false;
        this.isNavSel = false;
        this.isNavSels = true;
      }
    },
    tabShowBox: function(event){
      console.log(event);
      var ement = event.target;
      var ementIndex = ement.attributes[0].value;
      this.chat_index = ementIndex;

      // 设置样式
      // ement.siblings
      // ement.className = "sel";
      var siblingElem = this.getSiblins(ement);
      for (var i = 0; i < siblingElem.length; i++) {
        siblingElem[i].className = "";      
      }
      // siblingElem.className= "";
      ement.className = "sel";
      console.log(siblingElem);

    },
    getSiblins: function(elem) {
      var r = [];
      var n = elem.parentNode.firstChild;
      for ( ; n; n = n.nextSibling ) {
        if ( n.nodeType === 1 && n !== elem ) {
          r.push( n );
        }
      }

      return r;
    },
    showEmjon: function(){
      this.emjonShow = !this.emjonShow;
    },
    handleClick(tab, event) {
      console.log(tab);
      var elem = tab.$el;
      if(tab.index == 0) {
        elem.innerHTML = "<div>第一个</div>";
      } else {
        elem.innerHTML = "<div>第二个</div>";
      }
    }
  }
}
</script>

<style>
  .wrap {
    padding: 0 10px;
    height: 74px;
    background: rgb(41,154,218);
  }
  .showTabCon {
    cursor: pointer;
  }
  .tab_con {
    position: absolute;
    left: 0;
    top: 74px;
    right: 0;
    bottom: 0;
  }
  .tab_con_item .el-table td, .tab_con_item  .el-table th {
    font-size: 12px;
    padding: 4px 0;
  }
  .chat_window {
    position: absolute;
    left: 0;
    top: 178px;
    right: 0;
    bottom: 0;
    /*overflow-y: auto;*/
    overflow: hidden;
  }
  .tab_con_item .el-table .cell {
    padding-left: 5px;
    padding-right: 5px;
    line-height: 24px;
    white-space:nowrap; 
    overflow:hidden; 
    text-overflow:ellipsis;
    text-align: center;
  }

  .none {
    display: none;
  }
  .wrap_l {
    float: left;
  }
  .wrap_l img,.wrap_l a {
    float: left;
  }
  .chat_window>div {
    float: left;
  }
  .chat_window .el-tabs__content {
    overflow-y: auto;
    padding: 6px;
    height: 100%;
  }
  .chat_window .el-tabs--border-card {
    -webkit-box-shadow: none;
    box-shadow: none;
    height: 99%;
    overflow: hidden;
  }
  .chat_l {
    position: relative;
    width: 22%;
    height: 100%;
    overflow-y: auto;
    border-right: 1px solid #ccc;
  }
  .chat_l .el-tabs__nav {
    width: 100%;
  }
  .chat_l .el-tabs__item {
    width: 51%;
    text-align: center;
  }
  .chat_mid {
    position: relative;
    width: 51%;
    height: 100%;
    overflow-y: auto;
  }
  .chat_r {
    position: relative;
    width: 26%;
    height: 100%;
    overflow-y: auto;
    border-left: 1px solid #ccc;
  }
  .chat_r .el-tabs__item {
    width: 38%;
    text-align: center;
  }
  .wrap_l img {
    width: 166px;
    height: 74px;
    margin-right: 10px;
  }
  .wrap_l a {
    padding: 8px 0;
    width: 92px;
    height: 58px;
    color: #fff;
    font-size: 16px;
    text-align: center; 
    background: url(./assets/img/bg_btn.png) repeat;
    border-left: 1px solid #5cbdf2;
    border-right: 1px solid #5cbdf2;
  }
  .wrap_l a.sel,.wrap_l a.sels {
    background: url(./assets/img/selbtn.png) repeat;
    border-left: 1px solid #0975b2;
    border-right: 1px solid #0975b2;
  }
  .wrap_l a i {
    display: inline-block;
    font-size: 32px;
    margin-bottom: 4px
  }
  .wrap_l a i:nth-child(1) {
    font-size: 31px;
  }
  .wrap_r {
    float: right;
  }
  .wrap_r_top_con  {
    text-align: right;
    height: 20px;
    line-height: 20px;
    padding-top: 2px;
    padding-bottom: 10px;
  }
  .wrap_r_top_con em {
    position: relative;
    display: inline-block;
    line-height: 20px;
    color: #fff;
  }
  .wrap_r_top_con em:nth-child(1) {
    font-size: 12px;
    margin-right: 22px;
  }
   .wrap_r_top_con em i {
    margin-right: 3px;
   }
   .wrap_r_top_con em strong {
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
   }
  .wrap_r_top_con em:nth-child(3) .el-select {
      display: inline-block;
      opacity: 0
  }
  .wrap_r_top_con em:nth-child(5) i {
    font-size: 12px;
  }
  .popper__arrow {
    left: 85%!important;
  }
  .wrap_r_top_con em:nth-child(3) .el-select input {
    width: 20px;
    padding: 0;
    height: auto;
  }
  .wrap_r_bottom_con>div {
    float: left;
    height: 30px;
    line-height: 30px;
    color: #fff;
    margin-right: 8px;
  }
  .wrap_r_bottom_con>div:last-child {
    margin-right: 0
  }
  .wrap_r_bottom_con>div span {
    color: #f8dd48;
  }
  .wrap_r_bottom_con>div .el-select input {
      height: 30px;
  }
  .el-dropdown-menu li i {
    margin-right: 2px;
  }
  .qqBox{
  width: 798px;
  height: 600px;
  border: 1px solid #ccc;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin:auto;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-box;
  display: box;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  -ms-box-orient: vertical;
  box-orient: vertical;
}
.BoxHead{
  width: 100%;
  height: 52px;
  background: url(./assets/img/TIM图片20170926103645_01.jpg) no-repeat;
   display: -webkit-box;
  display: -moz-box;
  display: -ms-box;
  display: box;
  -webkit-box-orient: horizontal;
  -moz-box-orient: horizontal;
  -ms-box-orient: horizontal;
  box-orient: horizontal;
}
.headImg{
  width: 44px;
  height: 44px;
  border-radius: 50%;
  margin:0 10px;
}
.headImg img{
  width: 100%;
  height: 100%;
  border-radius:50%;
}
.internetName{
  width: auto;
  height: 52px;
  line-height: 52px;
  color: white;
}
.context{
  -webkit-box-flex: 1;
  display: -webkit-box;
  -webkit-box-orient: horizontal;
  -moz-box-orient: horizontal;
  -ms-box-orient: horizontal;
  box-orient: horizontal;
}
.conLeft{
  width: 200px;
  overflow: auto;
  background: #fafafa;
}
.conLeft::-webkit-scrollbar{
  width: 0;
}
.conLeft ul{
  list-style: none;
  margin: 0;
  padding: 0;
}
.conLeft li{
  width: 100%;
  height: 62px;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-box;
  display: box;
  -webkit-box-orient: horizontal;
  -moz-box-orient: horizontal;
  -ms-box-orient: horizontal;
  box-orient: horizontal;
}
.conLeft li .liLeft{
  width:30%;
  height: 100%;
}
.liLeft img{
  margin: 10px;
}
.liRight span{
  display:block;
  font-size: 16px;
  height: 31px;
  line-height: 31px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.liRight span:last-child{
  font-size: 14px;
  color: #767676;
  line-height:15px;
  overflow: hidden;
}
.conRight{
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -ms-box-flex: 1;
  box-flex: 1;
  display: -webkit-box;
  display: -ms-box;
  display: -moz-box;
  display: box;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  -ms-box-orient: vertical;
  box-orient: vertical;
  height: 100%;
}
.Righthead{
  width: 100%;
  height: 42px;
  border-bottom: 1px solid #ccc;
  background: #f5f7fa;
}
.Righthead>div {
  height: 21px;
  line-height: 21px;
  padding: 0 20px;
}
.Righthead>div span {
  color: #0d75df;
  padding-right: 5px;
}
.headName{
  width: auto;
  height: 100%;
  line-height: 42px;
  margin-left: 20px;
  font-family: "微软雅黑";
  font-size: 18px;
  float: left;
}
.headConfig{
  width: 20%;
  float: right;
  height: 100%;
  
}
.headConfig ul{
  list-style: none;
  margin: 0;
  padding: 0;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-box;
  display: box;
  -webkit-box-orient: horizontal;
  -moz-box-orient: horizontal;
  -ms-box-orient: horizontal;
  box-orient: horizontal;
}
.headConfig li{
  /*margin:10px 5px;*/
  margin: 0;
  margin-left: 10px;
  margin-top: 5px;
}
.RightCont{
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -ms-box-flex: 1;
  box-flex: 1;
  overflow-y: scroll;
  background: #ebf4f7;
}

.RightCont::-webkit-scrollbar{
  width: 15px;
}
.RightCont ul{
  list-style: none;
  margin: 0;
  padding: 0;
}
.RightCont li{
  width: 100%;
  height: 50px;
  /*display: -webkit-box;*/
  /*-webkit-box-orient: horizontal;*/
  margin-top: 20px;
}
.nesHead{
  width: 44px;
  height: 44px;
  border-radius: 50%;
  margin-left:15px ;
  float: right;
}
.nesHead img{
  width: 44px;
  height: 44px;
  border-radius: 50%;
}
.news{
  width: auto;
  height:auto;
  background: #2683f5;
  padding:10px 20px;
  margin: 4px;
  line-height:20px;
  font-size: 14px;
  border-radius:10px;
  margin-left: 30px;
  position: relative;
  float: right;
  color: white;
}
.news .jiao{
  position: absolute;
  right: -8px;
  top: 10px;
}
 .news .Expr{
  width: 30px;
  height: 30px;
  margin: 5px;
}
.answerHead{
  width: 44px;
  height: 44px;
  border-radius: 50%;
  margin-left:15px ;
  float: left;
}
.answerHead img{
  width: 44px;
  height: 44px;
  border-radius: 50%;
}
.answers{
  width: auto;
  height: 30px;
  background: #eeeeee;
  padding:5px 20px;
  margin: 4px;
  line-height: 30px;
  font-size: 14px;
  border-radius:10px;
  margin-left: 10px;
  position: relative;
  float: left;
}
.answers .jiao{
  position: absolute;
  left: -8px;
  top: 10px;
}
.RightFoot{
  width: 100%;
  height: 150px;
  border-top: 1px solid #ccc;
  position: relative;
}
.emjon{
  width: 300px;
  height: 150px;
  border: 1px solid #ccc;
  position: absolute;
  left: 0;
  top: -165px;
  background: #fff;
  overflow: auto;
  padding: 3px 0 10px;
}
.emjon ul{
  list-style: none;
  margin:0;
  padding: 0;
  
}
.emjon ul li{
  width: 30px;
  height: 30px;
  margin: 5px;
  float: left;
  
}
.emjon ul li:hover{
box-shadow:5px 5px 5px #888888;
transform: scale(1.2);
  
}
.emjon ul li img{
  width: 100%;
  height: 100%;
  
}
.footTop{
  width: 100%;
  height: auto;
}
.footTop ul{
  list-style: none;
  margin: 0;
  padding: 0;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-box;
  display: box;
  -webkit-box-orient: horizontal;
  -moz-box-orient: horizontal;
  -ms-box-orient: horizontal;
  box-orient: horizontal;
}
.footTop li{
  margin: 5px 10px;
  cursor: pointer;
}
.sendBtn{
  width: 68px;
  height: 25px;
  background: #0188fb;
  border: none;
  position: absolute;
  bottom: 4px;
  right: 10px;
  color: white;
}
.bg{
  background: #ebebec;
}
.ChatRecord{
  width: 100%;
  height: 20px;
  text-align: center;
  font-size: 12px;
  color: deepskyblue;
  cursor: pointer;
  display: none;
}


</style>