<template>
  <div class="serviceManage">
    <div style="padding:0 15px;">
      <div class="location">您当前的位置：CC客服 &gt; <span>商家站点</span></div>
      <div class="tipsbar_default" style="padding-left:10px;">
        <p style="line-height:20px;">
          <span class="span_dot">●&nbsp;</span>请注意，状态为“<label style="color:green;">启用</label>”的客服才可以接待访客哦，状态为“<label style="color:#F60;">禁用</label>”的客服将无法接收访客消息。&nbsp;&nbsp;&nbsp;<span style="font-weight:bold;">客服设置指引</span>：<a target="_self" href="javascript:;" class="to_add_clerk">①添加客服账号</a> &nbsp;&gt;&nbsp;
          <a target="_self" href="index.php?c=ClerkSet&amp;opencls=1" onclick="parent.change_to_func('nav_setting_center','item-1-1',$(this).attr('href'));return false">②分配网站客服</a><br>
          <span class="span_dot">●&nbsp;</span>抱歉，您的服务已过期，当前可启用<font color="red">0个</font>客服座席，
          <span style="color:#FB456C;font-family:'Microsoft YaHei','微软雅黑';">如需继续使用，请 <a style="color:#F8F8F8;background-color:#DF4163;border-radius:3px;" onclick="parent.change_to_func('account_center','item-11-2','?c=AccountCenter&amp;a=purchaseService&amp;act=5');return false" href="javascript:;">&nbsp;点击此处购买&nbsp;</a></span>
        </p>  
      </div>
      <div style="margin:6px 0;margin-top:12px;height:30px;">
        <div class="search_group_c" style="float:left;">
            <form action="?c=Urlmanage" method="post">
               <input class="search_group_text" value="" name="keyword" type="text" placeholder="输入站点名称或网址关键字" autocomplete="off">
               <button class="search_group_btn" type="submit"></button>
            </form>
        </div>
        <div style="float:right;">
          <input id="add_webbt" type="button" class="button2 btn_addwebsite" style="width:136px;" value="添加商家/站点">
        </div>
      </div>
      <table width="100%" border="0" cellspacing="0" cellpadding="0" class="tab_11 weblisttab table_default" style="margin-left:0px;">
        <tbody>
          <tr>
            <th style="text-align:left;text-indent:20px;" scope="col" width="20%">商家/站点名称</th>
            <th style="text-align:left;" scope="col" width="19%">商铺地址/网址</th>
            <th scope="col" width="11%">接待客服</th>
            <th scope="col" width="9%">代码管理</th>
            <th scope="col" width="9%">沟通链接</th>
            <th scope="col" width="9%">显示语言</th>
            <th scope="col" width="10%">添加日期</th>
            <th scope="col" width="13%">操作</th>
          </tr>            
          <tr>
            <td style="text-align:left;text-indent:20px;word-wrap: break-word;word-break:break-all;"><label>http://linheqin.com</label></td>
            <td style="text-align:left;word-wrap: break-word;word-break:break-all;">http://linheqin.com</td>
            <td><a class="wfp_219" onclick="parent.changeWebsiteSelectVal(133299);" href="index.php?c=ClerkSet&amp;up_slc=1&amp;webid=133299">已分配</a></td>
            <td class="codestate" rel="133299"><span class="getcodeBtn" onclick="getCodeForm(133299, 'http://linheqin.com', 1)">获取代码</span></td>
            <td rel="133299"><span class="getlinkBtn" onclick="getCodeForm(133299, 'http://linheqin.com', 2)">获取链接</span></td>
            <td rel="zh-cn">简体中文</td>
            <td>2018-01-02</td>
            <td><a onclick="return false;" fin="133299" href="index.php?c=Urlmanage&amp;a=edit&amp;id=133299&amp;page=1" rel="edit" enable="1">修改</a> | <a onclick="return false;" href="index.php?c=Urlmanage&amp;a=del&amp;id=133299&amp;page=1" rel="del">删除</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'serviceManage',
  data () {
    return {
      msg: '客服管理'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
