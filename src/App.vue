<template>
  <div id="app">
    <div class="wrap clearfix">
      <div class="wrap_l">
        <img src="./assets/logo.png" class="logo">
        <a href="" class="nav_btn sel">
          <i class="icon iconfont icon-xiaoxi"></i></br>
          <span>工作台</span>
        </a>
        <a href="" class="nav_btn">
          <i class="el-icon-setting"></i></br>
          <span>后台管理</span>
        </a>    
      </div>
      <div class="wrap_r">
        <div class="wrap_r_top_con">
          <em><i class="icon iconfont icon-wodefill"></i>超級管理員</em>
          <em><i class="icon iconfont icon-yuanxingxuanzhongfill"></i>在線</em>
          <em>
            <strong><i class="el-icon-caret-bottom"></i></strong>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </em>
          <em><i class="icon iconfont icon-jianhao"></i></em>
          <em><i class="icon iconfont icon-fangxingweixuanzhong"></i></em>
          <em><i class="icon iconfont icon iconfont icon-guanbi1"></i></em>
        </div>
        <div class="wrap_r_bottom_con"></div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }],
      value: ''
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
    text-align: center;
    height: 20px;
    line-height: 20px;
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
  .popper__arrow {
    left: 61%!important;
  }
  .wrap_r_top_con em:nth-child(3) .el-select input {
    width: 20px;
    padding: 0;
    height: auto;
  }
</style>