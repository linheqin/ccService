<template>
  <div class="customService flex heightOver">
    <div class="navul_left">
      <div class="side_bar_nav_title">客户管理</div>
      <ul id="accordion" class="accordion">
        <li class="open">
          <div class="link">
            客户管理
            <i class="el-icon-caret-bottom"></i>
          </div>
          <ul class="submenu" >
            <li class="nav_item sel" data-index="0"><a href="javascript:void(0);">网站访客</a></li>
            <li class="nav_item" data-index="1"><a href="javascript:void(0);">访客资料</a></li>
            <li class="nav_item" data-index="2"><a href="javascript:void(0);">访客注册设置</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="navul_right">
      <div class="nav_itemco">
        <div class="location">您当前的位置：CC客服 &gt; <span>客户管理</span> &gt; <span>网站访客</span></div>
        <form action="index.php?c=Visitor" method="post" id="searchform"> 
          <input type="hidden" name="webid" id="web_site" value="133299" /> 
          <table align="right" border="0" cellspacing="0" cellpadding="0"> 
            <tbody>
              <tr> 
                <td><img src="../../assets/img/img_10.gif" /></td> 
                <td><input type="input" readonly="" name="start_date" id="start_date_val" value="2018-01-21" class="date_input hasDatepicker" /></td> 
                <td>&nbsp;&nbsp;&nbsp;访客类型&nbsp;&nbsp;</td> 
                <td> <select name="status"> <option value="-1">不限</option> <option value="1">新访客</option><option value="2">旧访客</option><option value="3">有意向的访客</option><option value="4">会员</option> </select> </td> 
                <td>&nbsp;&nbsp;&nbsp;对话情况&nbsp;&nbsp;</td> 
                <td> <select name="dialogue"> <option value="0" selected="">不限</option> <option value="1">有记录</option> </select> </td> 
                <td>&nbsp;&nbsp;&nbsp;<input type="hidden" name="all" value="" /><input type="hidden" name="orderid" value="" /><input type="submit" value="查询" class="button2" /></td> 
              </tr> 
            </tbody>
          </table> 
        </form>
        <table id="ser_supervise" width="100%" border="0" cellspacing="0" cellpadding="0" class="tab_11 tab_11_5" style="clear:both;border-radius:1px;"> 
          <tbody>
            <tr id="_order"> 
              <th class="spct" scope="col">渠道 类型</th> 
              <th scope="col">状态</th> 
              <th scope="col">访客名称</th> 
              <th scope="col">来源(来源词)</th> 
              <th scope="col">访问时间</th> 
              <th scope="col">IP地址</th> 
              <th scope="col">地域</th> 
              <th class="spct" scope="col">访问总计</th> 
              <th scope="col">对话记录</th> 
              <th scope="col">访问轨迹</th> 
              <th class="spct" scope="col">名片</th> 
            </tr> 
            <tr>
              <td style="text-align:center;" colspan="11">暂无数据</td>
            </tr> 
          </tbody>
        </table>
      </div>
      <div class="nav_itemco none">
        <div class="location">您当前的位置：CC客服 &gt; <span>客户管理</span> &gt; <span>访客资料</span></div>
        <div style="width:100%;height:27px;"> 
          <form id="searchform" method="post" action="index.php?c=VisitorInfo"> 
            <table align="right" border="0" cellspacing="0" cellpadding="0" class="tab_1130"> 
              <tbody>
                <tr> 
                  <td> <img src="../../assets/img/img_10.gif" style=" vertical-align:middle" />&nbsp; </td> 
                  <td> <input type="input" name="select_date" readonly="" id="start_date_val" value="2018-01-21" class="date_input hasDatepicker" />&nbsp;&nbsp; </td> 
                  <td align="center" width="130"><input style="width:110px;height:24px;border-radius:2px;border:1px solid #ccc;padding:0 3px;" name="keyword" type="text" value="" placeholder="" /></td> 
                  <td width="75"> <input id="orderby" name="order" type="hidden" value="id_" /> <input name="search" type="submit" class="button2" value="查询" /> <input type="hidden" name="justshowhc" value="2" /> </td> 
                  <td>&nbsp;&nbsp;<input style="vertical-align:-3px;" type="checkbox" id="justshowfl" name="justshowfl" value="1" />&nbsp;只显示有联系方式的访客&nbsp;&nbsp;</td> 
                </tr> 
              </tbody>
            </table> 
          </form> 
        </div>
        <table id="ser_supervise" width="100%" border="0" cellspacing="0" cellpadding="0" class="tab_11 tab_11_5" style="clear:both;border-radius:1px;"> 
          <tbody>
            <tr id="_order"> 
              <th class="spct" scope="col">渠道 类型</th> 
              <th scope="col">状态</th> 
              <th scope="col">访客名称</th> 
              <th scope="col">来源(来源词)</th> 
              <th scope="col">访问时间</th> 
              <th scope="col">IP地址</th> 
              <th scope="col">地域</th> 
              <th class="spct" scope="col">访问总计</th> 
              <th scope="col">对话记录</th> 
              <th scope="col">访问轨迹</th> 
              <th class="spct" scope="col">名片</th> 
            </tr> 
            <tr>
              <td style="text-align:center;" colspan="11">暂无数据</td>
            </tr> 
          </tbody>
        </table>
      </div>
      <div class="nav_itemco none">
        <div class="location">您当前的位置：CC客服 &gt; <span>客户管理</span> &gt; <span>访客注册设置</span></div>
        <div class="setView clearflex">
          <div class="setView_l">
            <div class="clearflex"> 
              <label for="" class="lable_title">是否启用: </label>
              <div class="lable_div">
                <div>
                  <input type="radio">
                  <span>启用</span>
                  <input type="radio">
                  <span>禁用</span>
                </div>
                <div>2</div>
              </div>
            </div>
            <div class="clearflex"> 
              <label for="" class="lable_title">客户信息: </label>
              <div class="lable_divs"> 
                <div class="lable_div_flex">
                  <span class="lable_div_flex_item">姓名</span>
                  <span class="lable_div_flex_item"><input type="checkbox">显示</span>
                  <span class="lable_div_flex_item"><input type="checkbox">必填</span>
                </div>
                <div class="lable_div_flex">
                  <span class="lable_div_flex_item">电话</span>
                  <span class="lable_div_flex_item"><input type="checkbox">显示</span>
                  <span class="lable_div_flex_item"><input type="checkbox">必填</span>
                </div>
                <div class="lable_div_flex">
                  <span class="lable_div_flex_item">手机</span>
                  <span class="lable_div_flex_item"><input type="checkbox">显示</span>
                  <span class="lable_div_flex_item"><input type="checkbox">必填</span>
                </div>
                <div class="lable_div_flex">
                  <span class="lable_div_flex_item">传真</span>
                  <span class="lable_div_flex_item"><input type="checkbox">显示</span>
                  <span class="lable_div_flex_item"><input type="checkbox">必填</span>
                </div>
                <div class="lable_div_flex">
                  <span class="lable_div_flex_item">QQ</span>
                  <span class="lable_div_flex_item"><input type="checkbox">显示</span>
                  <span class="lable_div_flex_item"><input type="checkbox">必填</span>
                </div>
                <div class="lable_div_flex">
                  <span class="lable_div_flex_item">邮箱</span>
                  <span class="lable_div_flex_item"><input type="checkbox">显示</span>
                  <span class="lable_div_flex_item"><input type="checkbox">必填</span>
                </div>
                <div class="lable_div_flex">
                  <span class="lable_div_flex_item">旺旺</span>
                  <span class="lable_div_flex_item"><input type="checkbox">显示</span>
                  <span class="lable_div_flex_item"><input type="checkbox">必填</span>
                </div>
                <div class="lable_div_flex">
                  <span class="lable_div_flex_item">地址</span>
                  <span class="lable_div_flex_item"><input type="checkbox">显示</span>
                  <span class="lable_div_flex_item"><input type="checkbox">必填</span>
                </div>
                <div class="lable_div_flex">
                  <span class="lable_div_flex_item">公司</span>
                  <span class="lable_div_flex_item"><input type="checkbox">显示</span>
                  <span class="lable_div_flex_item"><input type="checkbox">必填</span>
                </div>
                <div class="lable_div_flex">
                  <span class="lable_div_flex_item">备注</span>
                  <span class="lable_div_flex_item"><input type="checkbox">显示</span>
                  <span class="lable_div_flex_item"><input type="checkbox">必填</span>
                </div>
              </div>
            </div>
            <div class="btns">  
              <input name="submit" type="submit" value="保存设置" class="button2" style="margin-right:25px;margin-left:77px;">
              <input name="cancle" type="button" value="取消" class="reset button2">
            </div>
          </div>
          <div class="setView_r">
            <div style="width:100px;height:22px;line-height:22px;color:#1A5B8D;font-family:&quot;\5FAE\8F6F\96C5\9ED1&quot;,&quot;Microsoft Yahei&quot;,&quot;Hiragino Sans GB&quot;,tahoma,arial,&quot;\5B8B\4F53&quot;;font-weight:bold;font-size:15px;">预览效果</div>
            <div class="zxPage">
              <h3>广东群英网络有限公司<span>在线咨询</span></h3>
              <p> 为了更好地为您服务，请填写下列信息，然后点击“咨询”按钮开始与客服人员进行交谈。</p>
              <div class="zxPage_form_div">  
                  <div class="clearflex">
                    <span>姓名：</span>
                    <input type="">
                    <strong>*</strong>
                  </div>
                  <div class="clearflex">
                    <span>电话：</span>
                    <input type="">
                    <strong>*</strong>
                  </div>
                  <div class="clearflex">
                    <span>手机：</span>
                    <input type="">
                    <strong>*</strong>
                  </div>
                  <div class="clearflex">
                    <span>传真：</span>
                    <input type="">
                    <strong>*</strong>
                  </div>
                  <div class="clearflex">
                    <span>QQ：</span>
                    <input type="">
                    <strong>*</strong>
                  </div>
                  <div class="clearflex">
                    <span>邮箱：</span>
                    <input type="">
                    <strong>*</strong>
                  </div>
                  <div class="clearflex">
                    <span>旺旺：</span>
                    <input type="">
                    <strong>*</strong>
                  </div>
                  <div class="clearflex">
                    <span>地址：</span>
                    <input type="">
                    <strong>*</strong>
                  </div>
                  <div class="clearflex">
                    <span>公司：</span>
                    <input type="">
                    <strong>*</strong>
                  </div>
              </div>
              <div class="zxzs"><span>注：</span>带<span>*</span>号的必填</div>
              <div class="zxbtn"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'customService',
  data () {
    return {
      msg: '客户管理'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .lable_title, .lable_div {
    float: left;
  }
  .zxPage h3 {
      height: 30px;
      line-height: 30px;
      color: #fff;
      background: #f33;
      padding-left: 10px;
      padding-right: 20px;
  }
  .zxzs {
    height: 46px;
    line-height: 46px;
    text-align: center;
  }
  .zxbtn {
    height: 32px;
    background: url(../../assets/img/zx_btn.jpg) no-repeat center center;
  }
  .zxzs span {
    color: #f33;
  }
  .zxPage h3 span {
    float: right;
    height: 25px;
    line-height: 25px;
    padding: 0 10px;
    margin-top: 5px;
    background: #f7f7f7;
    color: #666;
  }
  .zxPage_form_div>div  {
    display: flex;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    padding: 0 40px;
    margin-bottom: 10px;
  }
  .zxPage_form_div>div span, .zxPage_form_div>div strong {

    flex: 0 0 60px;
    -webkit-flex: 0 0 60px;
    -moz-flex: 0 0 60px;
    -ms-flex: 0 0 60px;
    height: 26px;
    line-height: 26px;
  }
  .zxPage_form_div>div span {
    text-align: right;
  }
  .zxPage_form_div>div input {
    flex: 1;
    -webkit-flex: 1;
    -moz-flex: 1;
    -ms-flex: 1;
    margin: 0 5px;
    height: 20px;
    line-height: 20px;
  }
   .zxPage p {
    padding: 16px 25px;
    color: #efa54e;
    line-height: 22px;
   }
  .setView_r {
    padding-left: 20px;
    width: calc(50% - 20px);
    padding-bottom: 50px;
  }
  .lable_div {
    padding-left: 5px
  }
  .btns {
    text-align: center;
  }
  .lable_div_flex {
    display: flex;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
  }
  .lable_div_flex_item {
    flex: 1;
    -webkit-flex: 1;
    -moz-flex: 1;
    -ms-flex: 1;
    height: 26px;
    line-height: 26px;
  }
  .lable_divs {
    float: left;
    width: calc(100% - 157px);
    margin-left: 5px;
    padding: 6px 30px;
    border: 1px solid #eee;
  }
  .lable_title {
    text-align: right;
    height: 40px;
    width: 90px;
    line-height: 40px;
    font-weight: 600;
    font-size: 13px;
  }
  .lable_div>div:nth-child(1) {
    height: 40px;
    line-height: 40px;
  }
  .lable_div>div:nth-child(1) input,.lable_div>div:nth-child(1) span {
    display: inline-block;
    margin: 0
  }
  .setView_l>div {
    margin-bottom: 10px;
  }
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
  #searchform {
    float: right;
    width: 100%;
    margin-bottom: 10px;
  }
</style>