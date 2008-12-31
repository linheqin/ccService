<template>
  <div class="recordCenter heightOver flex">
    <div class="navul_left">
      <div class="side_bar_nav_title">对话留言记录</div>
      <ul id="accordion" class="accordion">
        <li class="open">
          <div class="link">
            记录中心
            <i class="el-icon-caret-bottom"></i>
          </div>
          <ul class="submenu" >
            <li class="nav_item sel" data-index="0"><a href="javascript:void(0);">对话记录</a></li>
            <li class="nav_item" data-index="1"><a href="javascript:void(0);">留言记录</a></li>
            <li class="nav_item" data-index="2"><a href="javascript:void(0);">对话分类</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="navul_right">
      <div class="nav_itemco">
        <div class="location">您当前的位置：CC客服 &gt; <span>记录中心</span> &gt; <span>对话记录</span></div>
        <div id="chat_record" class="chat_record mt10"> 
          <form action="index.php?c=ChatRecord&amp;a=getRecordUsers" method="post" id="search"> 
            <div class="fc_3" style="min-width:960px"> 
              <table width="100%" border="0" cellspacing="0" cellpadding="0" class="tab_1130"> 
                <tbody>
                  <tr> 
                    <td width="55">对话分类</td> 
                    <td width="105"><select name="typeid" style="width:92px"> <option value="-2">不限</option> <option value="-1">未分类</option> </select></td> 
                    <td width="55">处理状态</td> 
                    <td width="105"> <select name="deal_status" style="width:92px"> <option value="-1">不限</option> <option value="2">未处理</option><option value="1">已处理</option> </select> </td> 
                    <td width="55">时间：<img src="../../assets/img/img_10.gif" /></td> 
                    <td width="80"><input type="input" name="start_time" readonly="" id="start_date_val" value="2018-01-01" class="date_input hasDatepicker" /></td> 
                    <td width="12">至</td> 
                    <td width="100"><input type="input" name="end_time" readonly="" id="over_date_val" value="2018-01-21" class="date_input hasDatepicker" /></td> 
                    <td width="160"> <input type="hidden" name="visitor_id" value="0" /> <input name="search" type="submit" class="button2" value="搜 索" /> <input name="reset" type="button" class="button2" value="返回" onclick="location.href='index.php?c=ChatRecord'" /> </td> 
                    <td width="100">
                      <div class="search_ss">高级搜索</div>
                    </td> 
                    <td>&nbsp;</td> 
                  </tr> 
                </tbody>
              </table> 
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin:8px 0" class="info_ser"> 
                <tbody>
                  <tr> 
                    <td width="55">&nbsp;客服组</td> 
                    <td width="105"> <select style="width:130px" name="group_id"> <option value="0">不限</option> </select> </td> 
                    <td width="55">&nbsp;客服人员</td> 
                    <td width="105"> <select name="clerk_id" style="width:130px"><option value="0">不限</option><option value="2155861">超级管理员</option></select> </td> 
                    <td width="76">&nbsp;&nbsp;</td> 
                    <td><input type="text" value="" name="visitor_name" id="visitidname" style="width:100px;display:none;" /></td> 
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td> 
                  </tr> 
                </tbody>
              </table> 
              <table border="0" cellspacing="0" cellpadding="0"> 
                <tbody>
                  <tr height="30"> 
                    <td>
                      <div class="info_more_r">
                      共找到记录 
                      <strong id="recordnum">0</strong> 条，其中&nbsp;&nbsp;
                      <a href="2" rel="search" class="fc_20">未处理记录（<strong id="notdone">0</strong>）</a>&nbsp;&nbsp;&nbsp;&nbsp;
                      <a href="1" rel="search" class="fc_21">已处理记录（<strong id="done">0</strong>）</a>
                      </div>
                    </td> 
                  </tr> 
                </tbody>
              </table> 
            </div> 
          </form> 
          <div id="chat_record_v" class="chat_record_v cls"> 
            <div id="chat_record_pres" class="chat_record_pres scroll_color" style="height: 323px;"> 
              <div class="title" style="margin-bottom:4px;">
                访客列表
              </div> 
              <div class="c-visitor-search" style="margin-bottom:6px;"> 
                <div class="sch-ct">
                  <input id="c-visitor-search-ipt" type="text" placeholder="输入关键词搜索" />
                  <a href="javascript:;"></a>
                </div> 
              </div> 
              <div id="ser_tree_view">
                <font color="#aaaaaa">暂无记录</font>
              </div> 
            </div> 
            <div id="cr_pre_switch" class="cr_pre_switch" style="margin-top: 150px;"></div> 
            <div class="ser_wrap_1"> 
              <div class="d_title"> 
                <table border="0" cellspacing="0" cellpadding="0" width="100%" height="25" class="userinfo" style="display: none;"> 
                  <tbody>
                    <tr width="100%"> 
                      <td id="record_title">&nbsp;</td> 
                      <td width="25px">&nbsp;</td> 
                      <td width="60px"><a href="javascript:;" id="visitor_info">访问信息</a></td> 
                      <td width="84px"><a href="" id="" amenu="1" onclick="return false;" rel="inchat">编辑访客名片</a></td> 
                      <!--<td width="60px"><a href="javascript:;" id="action_del">删除记录</a></td>--> 
                      <td width="60px"><a href="javascript:;" id="action_output">导出记录</a></td> 
                      <td width="5px">
                      <!--<span id="show_record_table">处理记录</span>--> <input type="hidden" name="action_id" id="action_id" value="0" /> </td> 
                      <td width="5px">&nbsp;
                      <!--<img src="templates/images/ed_ico23.gif" rel="show_record_table" style="cursor:pointer;margin-top:2px" />--></td> 
                      <td width="95px" title="按客服查看聊天记录"> <select id="belongClerk" style="width:95px;height:20px;line-height:20px;margin-top:2px;_margin-top:1px;"> <option value="-1">全部客服</option> </select> </td> 
                      <td width="10px">&nbsp;</td> 
                      <td width="16px"><img src="../../assets/img/img_10.gif" style="margin-top:4px" /></td> 
                      <td width="75px" title="按日期查看聊天记录"><input style="margin-top:4px" rel="" type="input" name="recordDate" readonly="" id="recordDate" value="" class="date_input" /></td> 
                      <td width="15px">&nbsp;</td> 
                    </tr> 
                  </tbody>
                </table> 
              </div> 
              <div id="chat_record_main" class="chat_record_main scroll_color" style="height: 298px;"> 
                <iframe id="_chat" name="_chat" width="100%" height="100%" src="" frameborder="0"></iframe> 
              </div> 
            </div> 
          </div> 
        </div>
      </div>
      <div class="nav_itemco none">
        <div class="location">您当前的位置：CC客服 &gt; <span>记录中心</span> &gt; <span>留言记录</span></div>
        2
      </div>
      <div class="nav_itemco none">
        <div class="location">您当前的位置：CC客服 &gt; <span>记录中心</span> &gt; <span>对话分类</span></div>
        3
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'recordCenter',
  data () {
    return {
      msg: '客户管理'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .wrap {
    padding: 0 10px;
    height: 74px;
    background: rgb(41,154,218);
  }
  .side_bar_nav_title {
    height: 35px;
    background: url(../../assets/img/back7.jpg) no-repeat;
    width: 100%;
    font-size: 14px;
    color: #c57015;
    text-indent: 38px;
    line-height: 38px;
    font-weight: bold;
  }
  .location { 
    background:url(../../assets/img/bg-only10.gif) no-repeat left center;
  }
  .nav_n_2 {
    padding: 0 15px;
    position: relative;
    height: 36px;
    background: url(../../assets/img/navbg.jpg) repeat-x left;
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
  .tab_con_item {
    height: 100%;
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
    background: url(../../assets/img/bg_btn.png) repeat;
    border-left: 1px solid #5cbdf2;
    border-right: 1px solid #5cbdf2;
  }
  .wrap_l a.sel,.wrap_l a.sels {
    background: url(../../assets/img/selbtn.png) repeat;
    border-left: 1px solid #0975b2;
    border-right: 1px solid #0975b2;
  }
  .search_group_c .search_group_btn { 
      background: transparent url(../../assets/img/search_icon_1.png) no-repeat
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
    background: url(../../assets/img/TIM图片20170926103645_01.jpg) no-repeat;
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
  .kf_index_box {
    border: 1px solid #C7DCEF;
    color: #333;
    background: #fff;
    border-radius: 2px;
  }
  .kf_index_box .tit {
    background: #E6F2FB;
    color: #34659D;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
  }
  .cls {
    zoom: 1;
  }
  .left {
    float: left;
  }
  .right {
    float: right;
  }
  .kf_index_box .tit .left {
    font-size: 14px;
    font-weight: bold;
        color: #346699;
  }
  .mynavi{padding:25px;padding-bottom:10px;padding-top:20px;background:#FAFCFF;}
  .mynavi ul,.mynavi ul li{padding:0px; margin:0px; }
  .mynavi ul{width:751px; height:45px; overflow: hidden; background: url('../../assets/img/hui_1.jpg'); position: relative}
  .mynavi ul li{width:158px; height: 100%; position: absolute; top: 0px; cursor: pointer; }
  .mynavi ul li.nav_1{
    left:0px; 
  }
  .mynavi ul li.nav_2{left:150px;}
  .mynavi ul li.nav_3{left:300px;}
  .mynavi ul li.nav_4{left:450px;}
  .mynavi ul li.nav_5{left:600px;}

  .mynavi ul li:nth-child(1).sel {
    background:url(../../assets/img/an_1.jpg);
  }
  .mynavi ul li:nth-child(2).sel {
    background:url(../../assets/img/an_2.jpg);
  }
  .mynavi ul li:nth-child(3).sel {
    background:url(../../assets/img/an_3.jpg);
  }
  .mynavi ul li:nth-child(4).sel {
    background:url(../../assets/img/an_4.jpg);
  }
  .mynavi ul li:nth-child(5).sel {
    background:url(../../assets/img/an_5.jpg);
  }
  .help_info {display:none;}
</style>