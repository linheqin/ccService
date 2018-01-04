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
        <a class="nav_btn sel" v-on:click="showTabCon(0)">
          <i class="icon iconfont icon-xiaoxi"></i></br>
          <span>工作台</span>
        </a>
        <a class="nav_btn" v-on:click="showTabCon(1)">
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
        <div class="wrap_r_bottom_con">
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
      <div class="tab_con_item" index="0" v-show="navIndex==0">工作台</div>
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
      value: '',
      navIndex: 0
    }
  },
  methods: {
    showTabCon: function (index) {
      console.log(index);
      this.navIndex = index;
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
  .none {
    display: none;
  }
  .wrap_l {
    float: left;
  }
  .wrap_l img,.wrap_l a {
    float: left;
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
  .wrap_l a.sel {
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
</style>