<template>
  <div class="customServiceMonitoring heightOver flex">
    <div class="navul_left">
      <div class="side_bar_nav_title">客服监控</div>
      <ul id="accordion" class="accordion">
        <li class="open">
          <div class="link">
            客服监控
            <i class="el-icon-caret-bottom"></i>
          </div>
          <ul class="submenu" >
            <li class="nav_item sel" data-index="0"><a href="javascript:void(0);">客服团队</a></li>
            <li class="nav_item" data-index="1"><a href="javascript:void(0);">评价设置</a></li>
            <li class="nav_item" data-index="2"><a href="javascript:void(0);">评价记录</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="navul_right">
      <div class="nav_itemco">
        <div class="location">您当前的位置：CC客服 &gt; <span>客服监控</span> &gt; <span>客服团队</span></div>
        <form action="" method="post" id="searchform" style="height:25px;">
          <table align="right" border="0" cellspacing="0" cellpadding="0"> 
            <tbody>
              <tr> 
                <td>时间：<img src="../../assets/img/img_10.gif" /></td> 
                <td><input type="input" readonly="" name="start_date" id="start_date_val" value="2018-01-21" class="date_input hasDatepicker" /></td> 
                <td>至</td> 
                <td><input type="input" readonly="" name="over_date" id="over_date_val" value="2018-01-21" class="date_input hasDatepicker" /></td> 
                <td>&nbsp;客服组&nbsp;</td> 
                <td> <select name="group_id" style="width: 150px"> <option value="0">不限</option> </select> </td> 
                <td>&nbsp;客服人员&nbsp;</td> 
                <td> <select name="clerk_id" style="width:150px"><option value="0">不限</option><option value="2155861">超级管理员</option></select> </td> 
                <td>&nbsp;<input type="hidden" name="all" value="" />&nbsp; <input type="hidden" value="supervise_group" name="info" /> <input type="submit" value="查询" class="button2" /> </td> 
              </tr> 
            </tbody>
          </table>
        </form>
        <table id="ser_supervise" width="100%" border="0" cellspacing="0" cellpadding="0" class="tab_11 tab_11_5" style="clear:both;"> 
          <tbody>
            <tr> 
              <th scope="col">日期</th> 
              <th scope="col">客服人员</th> 
              <th scope="col">现时状态</th> 
              <!--<th scope="col">邀请数</th>--> 
              <th scope="col">已接待访客数</th> 
              <th scope="col">正在接待访客数</th> 
              <th scope="col">沟通总时长</th> 
              <th scope="col">对话情况</th> 
            </tr> 
            <tr> 
              <td> 2018-01-21</td> 
              <td><a href="#" rel="amenu" class="1955861">超级管理员</a></td> 
              <td>离线</td> 
              <!--<td>0</td>--> 
              <td>0</td> 
              <td>0</td> 
              <td>0</td> 
              <td> 无 </td> 
            </tr> 
          </tbody>
        </table>
      </div>
      <div class="nav_itemco none">
        <div class="location">您当前的位置：CC客服 &gt; <span>客服监控</span> &gt; <span>评价设置</span></div>
        <div class="eval_set_box"> 
          <p> 客服评价： <input checked="" name="enable" type="radio" value="1" /> 启用&nbsp;&nbsp;&nbsp; <input name="enable" type="radio" value="0" /> 禁用<br /> </p> 
          <p> 差评通知： <input checked="" name="isnotice" type="radio" value="1" /> 启用&nbsp;&nbsp;&nbsp; <input name="isnotice" type="radio" value="0" /> 禁用 </p> 
          <div class="eval_set_box_s2"> 
            <p> 警示分值： <select name="noticelevel" id="noticelevel"> <option value="1">恶劣(1分)</option> <option value="2" selected="">比较差(2分)</option> <option value="3">一般(3分)</option> <option value="4">比较满意(4分)</option> <option value="5">非常满意(5分)</option> </select> <img class="ck_helptips" data-html="当访客的评价低于或等于设置的警示分值时，系统会及时的通知相关人员。" data-offset="3" data-position="bottom right" data-variation="inverted" style="cursor:pointer" src="../../assets/img/tjyw.gif" /> </p> 
            <p class="mt5"> 通知对象： <label id="noticenums">1</label>人&nbsp;&nbsp;<span id="add_user" style="cursor: pointer;"><img src="../../assets/img/ico_add_user.gif" style="vertical-align:-3px" /> 添加</span> </p> 
            <table border="0" cellspacing="0" cellpadding="0" class="eval_set_box_s2_tab" width="100%" style="table-layout:fixed"> 
            <tbody>
              <tr rel="1"> 
                <td width="45%" class="firsttd"><img src="../../assets/img/sex2_3.gif" /> <input type="hidden" name="userid[]" value="1955861" />超级管理员(CC2292391)</td> 
                <td width="15%"> <input disabled="" type="checkbox" name="sendsms[1955861]" value="1" /> 短信 <img src="../../assets/img/phone_n.gif" title="没有绑定手机或者手机未验证" class="nomobile" /> </td> 
                <td width="15%"> <input type="checkbox" name="sendemail[1955861]" value="1" /> 邮件 <img src="../../assets/img/email_s.gif" /> </td> 
                <td width="15%"><input checked="" type="checkbox" name="sendCC[1955861]" value="1" /> CC消息</td> 
                <td width="10%">&nbsp;<a onclick="return false;" href="?c=ClerkCommentSet&amp;a=del&amp;id=403135&amp;wid=133299" rel="1" id="1" class="deluser">删除</a>&nbsp;</td> 
              </tr> 
            </tbody>
            </table> 
          </div> 
          <p style="padding-left:82px; color:#666; line-height:28px;display:none;"> <span class="fc_red">提示：企业短信模块已停用。</span><a href="javascript:;" onclick="top.location.href='synlogin.php?outer=http%3A%2F%2Fuc.qycn.com%2Fsynlogin.php&amp;mp=sms.php%3Fact=sms_list'" class=" fc_12">启用企业短信模块</a>&nbsp;&nbsp;&nbsp; 可用短信数量：<span class="fc_red"><strong>0</strong></span>　<a href="http://www.qycn.com/synlogin.php?tokenkey=ihqaB%2F8nTNXeGodSJ3T3WOLXOtIqV0VIdsYye%2F3DNsBIXEjaPS415OnJsB5%2FJBU31iDbxPpf%2BBX%2B10XCwwu5sjLc1QxFPOlgElL2M%2F4d1lCQO88SDGb2zQFr0DOIYtRtz94fe%2Fc3fV%2BxXciBc%2BzEmL4brzFoEocZ5aIfDDjzcoNaqqvQsYsMLM3B14MMTtxbPovuCInAP%2BCAeYu7Q51kEe06m0rOJpUOoQQ%2F9rq51OKq8VTqXJCY8VBED%2FrjUV3pRbZDa2tlYSzdzhZS%2F13x&amp;url=http%3A%2F%2Fwww.qycn.com%2Fsms%2Fsms_order_step1.php%3Fp_id%3D33" class="fc_12" target="_blank" style="border-bottom:none">购买&gt;&gt;</a> </p> 
          <div style="padding:5px 82px"> 
            <input type="submit" value="保存设置" class="button2" />&nbsp;&nbsp; 
            <input type="button" value="取消" class="reset button2" /> 
          </div> 
          <div class="helps"> 
            <p>提示：1.开启客服评价后，访客在对话过程中或对话结束后可进行服务评价。</p> 
            <p style="text-indent:36px">2.开启评价通知后，访客对某客服的服务评价低于设置分值时就会通过短信、邮件、CC消息的方式通知指定人员。</p> 
            <!--<p style="text-indent:36px">3.短信不可用，可能是以下原因：(1)企业短信模块已停用 (2)未验证手机。</p>--> 
            <p style="padding-left:36px;width:610px;">3.因国家政策问题，短信运营商暂停了相关服务，导致CC客服系统中短信提醒暂时无法使用。具体恢复时间待运营商方面通知，若对您的使用造成不便，我们深表歉意！</p> 
          </div> 
        </div>
      </div>
      <div class="nav_itemco none">
        <div class="location">您当前的位置：CC客服 &gt; <span>客服监控</span> &gt; <span>评价记录</span></div>
        <div class="pjmsg_ts17">免费开启差评通知功能，给自己多一点机会挽留客户！&nbsp;<a target="_self" href="index.php?c=ClerkCommentSet">立即设置</a></div>
        <div id="statistics_r" style="margin-top:10px;"> 
          <form action="index.php?c=ClerkComment&amp;a=comment" method="post" id="searchform"> 
            <div class="box4"> 
             <table border="0" cellspacing="0" cellpadding="0"> 
              <tbody>
                <tr> 
                  <td> &nbsp;客服组&nbsp; <select style="width:100px;" name="groupid" id="groupid_"> <option value="-1">不限</option> </select> </td> 
                  <td> &nbsp;客服人员&nbsp; <select style="width:100px;" name="clerkid" id="clerkid_"> <option value="0">不限</option> <option value="2155861">超级管理员</option> </select> </td> 
                  <td>&nbsp;<img src="../../assets/img/img_10.gif" style=" vertical-align:middle" /></td> 
                  <td><input type="input" name="start_date" readonly="" id="start_date_val" value="2018-01-01" class="date_input hasDatepicker" />至<input type="input" name="over_date" readonly="" id="over_date_val" value="2018-01-21" class="date_input hasDatepicker" /></td> 
                  <td width="100" align="center"> <input type="submit" value="开始分析" class="button2" /> <input type="hidden" name="level" value="0" /> <input type="hidden" name="remark" value="0" /> </td> 
                  <td class="date_link"> <a href="" rel="today">今天</a>&nbsp;&nbsp; <a href="" rel="yesterday">昨天</a>&nbsp;&nbsp; <a href="" rel="week">最近7天</a>&nbsp;&nbsp; <a href="" rel="month">最近30天</a>&nbsp;&nbsp; </td> 
                </tr> 
              </tbody>
             </table> 
            </div> 
          </form> 
        </div>
        <table width="100%" border="0" cellspacing="0" cellpadding="0" class="tab_11" style="margin-top:10px;table-layout:fixed"> 
          <tbody>
            <tr> 
              <th scope="col" width="12%">访客</th> 
              <th scope="col" width="12%">接待客服</th> 
              <th align="center" scope="col" width="10%"> 
                <select id="level_"> <option value="0">评价等级</option>
                  <option value="1">恶劣</option> <option value="2">比较差</option> 
                  <option value="3">一般</option> <option value="4">比较满意</option> 
                  <option value="5">非常满意</option> 
               </select>  
              </th>
              <th align="center" scope="col" width="45%"> 
                <select id="remark_"> 
                  <option value="0">建议内容</option> 
                  <option value="1">内容非空</option> 
                </select>  
              </th>
              <th scope="col" width="13%">评价时间</th> 
              <th scope="col" width="8%">对话记录</th> 
            </tr> 
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr> 
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'customServiceMonitoring',
  data () {
    return {
      msg: '客服监控'
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
  .tab_11_5 th {
    font-weight: normal;
  }
  .date_link a {
    text-decoration: underline;
  }
  .date_link a:hover {
    color: #f60;
  }
  .box4 {
    border: solid 1px #bdd3e1;
    background: #f7faff;
    padding: 10px 10px;
    line-height: 25px;
  }
  #statistics_r .box4 {
    padding: 10px;
    margin: 0 auto;
  }
  .pjmsg_ts17 {
    font-size: 13px;
    background: #FFF4D3;
    border: 1px solid #FFAD64;
    padding: 0 8px;
    height: 25px;
    line-height: 25px;
  }
  .pjmsg_ts17 a {
    color: #0066ff;
  }
  .tab_11 td {
    padding: 8px 0px 6px;
    background: #f9fdff;
    color: #363636;
    border-top: solid 1px #c7dcef;
  }
  .eval_set_box .helps {
    padding-top: 15px;
    padding-left: 43px;
  }
  .eval_set_box .helps p {
    height: 20px;
    line-height: 20px;
  }
  .eval_set_box_s2 {
    position: relative;
    margin-left: 82px;
    background: #f4f9ff;
    border: 1px solid #e0e2e5;
    padding: 8px 8px 8px 12px;
    margin-top: 15px;
    width: 580px;
  }
  .mt5 {
    margin: 5px 0 0;
  }
  .eval_set_box_s2_tab {
    width: 515px;
    margin-left: 64px;
  }
  .eval_set_box_s2_tab td {
    line-height: 26px;
    color: #2E2E2E;
  }
  .eval_set_box_s2_tab td.firsttd {
    text-align: left;
    word-break: keep-all;
    overflow: hidden;
    white-space: nowrap;
  }
  .eval_set_box_s2_tab td img {
    vertical-align: -3px;
  }
  .eval_set_box_s2 input {
    height: 13px;
    vertical-align: middle;
  }
  .tab_11_5 td {
    color: #474747;
  }
  .date_input {
    width: 75px;
    border: none;
    background: none;
    color: #395B7E;
    cursor: pointer;
    text-decoration: underline;
    text-align: center;
    height: 15px;
  }
  .button1, .button2, .button3, .button4, .button5, .button6, .button7, .button8, .button9 {
    border: none;
    height: 23px;
    cursor: pointer;
    background: url(../../assets/img/bu_bgs.gif) no-repeat;
  }
  .button2 {
    width: 70px;
    color: #1A5094;
    background-position: left -50px;
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