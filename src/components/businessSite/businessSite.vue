<template>
  <div class="businessSite">
    <div style="padding:0 15px;">
      <div class="location">您当前的位置：CC客服 &gt; <span>商家站点</span></div>
      <div class="tipsbar_default" style="padding-left:10px;">
        <p style="line-height:20px;"><span class="span_dot">●&nbsp;</span>基础使用流程：<a id="lcaddwb" target="_self" href="javascript:;">添加站点</a> &nbsp;&gt;&nbsp;
          <a target="_self" style="cursor: pointer" onclick="parent.change_to_func('nav_setting_center','item-1-1')">分配接待的客服</a>
          <a style="cursor: default" href="javascript:;">添加代码至您希望CC客服出现的页面</a>
         <br>
         <span class="span_dot">●&nbsp;</span>您共拥有商家网站券：<label style="font-weight:bold;">2</label> 张（未使用 <label style="font-weight:bold;color:#0F9301;">1</label> 张），如需添加更多站点，请购买“<label style="color:#0066ff;">商家网站券</label><img style="cursor:pointer;margin-left:2px;" class="ck_helptips" data-offset="3" data-html="1.添加站点将扣除您1张网站券，删除站点将返还1张网站券。<br/>2.网站券无使用限制，可永久使用。" data-position="bottom right" data-variation="inverted" src="templates/images/tjyw.gif">”。<a style="color:#F8F8F8;background-color:#DF4163;border-radius:3px;font-family:'Microsoft YaHei','微软雅黑';" onclick="parent.change_to_func('account_center','item-11-2','?c=AccountCenter&amp;a=purchaseService&amp;act=6');return false" href="javascript:;">&nbsp;点击此处购买&nbsp;</a>
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
  name: 'businessSite',
  data () {
    return {
      msg: '商家站点'
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
