<template>
  <div class="authorityManage">
    <div class="location">您当前的位置：CC客服 &gt; <span>权限管理</span></div>
    <table border="0" cellspacing="0" cellpadding="0" width="100%">
      <tbody>
          <tr>
              <td valign="top" width="310">
                  <table border="0" cellspacing="0" cellpadding="0" class="tab_11_sz" width="300" id="tab_left_sz" style="margin-top:10px; float:left; ">
                      <tbody>
                          <tr>
                              <th style="height:14px; padding:4px; padding-left:10px">
                                  角色列表
                              </th>
                              <th>
                                  <div id="openAddRole" style="float:right;color:#0066ff;font-weight:200;cursor:pointer;">
                                      + 添加角色&nbsp;
                                  </div>
                              </th>
                          </tr>
                          <tr class="rolelisttr rgbg">
                              <td width="190">
                                  <span><img src="../../assets/img/role-1.png" style="vertical-align:-3px;">&nbsp;<a onclick="return false;" href="index.php?c=RoleSet&amp;groupid=-1" style="color:#f60">超级管理员</a></span>
                              </td>
                              <td width="90" style="text-align:center">
                                  不可删改
                              </td>
                          </tr>
                          <tr class="rolelisttr">
                              <td width="190">
                                  <span><img src="../../assets/img/role-2.png" style="vertical-align:-3px;">&nbsp;<a onclick="return false;" href="index.php?c=RoleSet&amp;groupid=-2">应用管理员</a></span>
                              </td>
                              <td width="90" style="text-align:center">
                                  不可删改
                              </td>
                          </tr>
                          <tr class="rolelisttr">
                              <td width="190">
                                  <span><img src="../../assets/img/role-3.png" style="vertical-align:-3px;">&nbsp;<a onclick="return false;" href="index.php?c=RoleSet&amp;groupid=-3">普通客服</a></span>
                              </td>
                              <td width="90" style="text-align:center">
                                  不可删改
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </td>
              <td valign="top">
                  <form action="index.php?c=RoleSet&amp;a=editPermission&amp;groupid=-1" method="post" id="role_set_form">
                      <table width="100%" border="0" cellspacing="0" cellpadding="0" class="tab_11_kfsz_01" style="margin-top:10px;">
                          <tbody>
                              <tr>
                                  <th style="text-align:left;">
                                      权限设置
                                  </th>
                              </tr>
                              <tr>
                                  <td style="text-align:left;text-indent:15px">
                                      <input name="qh_acts[]" type="checkbox" disabled=""><label class="qh_acts_label"> 网站管理</label>
                                      <div class="real_actions" style="display:none;">
                                          <input name="rel_acts[11]" type="hidden" value="1">
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td style="text-align:left;text-indent:15px">
                                      <input name="qh_acts[]" type="checkbox" disabled=""><label class="qh_acts_label"> 客服管理</label>
                                      <div class="real_actions" style="display:none;">
                                          <input name="rel_acts[21]" type="hidden" value="1">
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td style="text-align:left;text-indent:15px">
                                      <input name="qh_acts[]" type="checkbox" disabled=""><label class="qh_acts_label"> 权限管理</label>
                                      <div class="real_actions" style="display:none;">
                                          <input name="rel_acts[31]" type="hidden" value="1">
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td style="text-align:left;text-indent:15px">
                                      <input name="qh_acts[]" type="checkbox" disabled=""><label class="qh_acts_label"> 设置中心</label>
                                      <input style="margin-left:30px;" name="xs_slc_web_4[]" type="radio" value="0" disabled=""><label class="webs_label"> 全部网站</label>
                                      <input style="margin-left:30px;" name="xs_slc_web_4[]" type="radio" value="1" disabled=""><label class="self_web_label"> 所在网站</label>
                                      <div class="real_actions" style="display:none;">
                                          <input name="rel_acts[41]" type="hidden" value="1">
                                          <input name="rel_slc_web[41]" type="hidden" value="0"><input name="rel_acts[42]" type="hidden" value="1">
                                          <input name="rel_slc_web[42]" type="hidden" value="0"><input name="rel_acts[43]" type="hidden" value="1">
                                          <input name="rel_slc_web[43]" type="hidden" value="0"><input name="rel_acts[44]" type="hidden" value="1">
                                          <input name="rel_slc_web[44]" type="hidden" value="0"><input name="rel_acts[45]" type="hidden" value="1">
                                          <input name="rel_slc_web[45]" type="hidden" value="0"><input name="rel_acts[46]" type="hidden" value="1">
                                          <input name="rel_slc_web[46]" type="hidden" value="0"><input name="rel_acts[47]" type="hidden" value="1">
                                          <input name="rel_slc_web[47]" type="hidden" value="0"><input name="rel_acts[48]" type="hidden" value="1">
                                          <input name="rel_slc_web[48]" type="hidden" value="0"><input name="rel_acts[49]" type="hidden" value="1">
                                          <input name="rel_slc_web[49]" type="hidden" value="0"><input name="rel_acts[410]" type="hidden" value="1">
                                          <input name="rel_slc_web[410]" type="hidden" value="0"><input name="rel_acts[411]" type="hidden" value="1">
                                          <input name="rel_slc_web[411]" type="hidden" value="0">
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td style="text-align:left;text-indent:15px">
                                      <input name="qh_acts[]" type="checkbox" disabled=""><label class="qh_acts_label"> 客服监控</label>
                                      <input style="margin-left:30px;" name="xs_slc_web_5[]" type="radio" value="0" disabled=""><label class="webs_label"> 全部网站</label>
                                      <input style="margin-left:30px;" name="xs_slc_web_5[]" type="radio" value="1" disabled=""><label class="self_web_label"> 所在网站</label>
                                      <div class="real_actions" style="display:none;">
                                          <input name="rel_acts[51]" type="hidden" value="1">
                                          <input name="rel_slc_web[51]" type="hidden" value="0"><input name="rel_acts[52]" type="hidden" value="1">
                                          <input name="rel_slc_web[52]" type="hidden" value="0"><input name="rel_acts[53]" type="hidden" value="1">
                                          <input name="rel_slc_web[53]" type="hidden" value="0">
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td style="text-align:left;text-indent:15px">
                                      <input name="qh_acts[]" type="checkbox" disabled=""><label class="qh_acts_label"> 客户管理</label>
                                      <input style="margin-left:30px;" name="xs_slc_web_6[]" type="radio" value="0" disabled=""><label class="webs_label"> 全部网站</label>
                                      <input style="margin-left:30px;" name="xs_slc_web_6[]" type="radio" value="1" disabled=""><label class="self_web_label"> 所在网站</label>
                                      <div class="real_actions" style="display:none;">
                                          <input name="rel_acts[61]" type="hidden" value="1">
                                          <input name="rel_slc_web[61]" type="hidden" value="0"><input name="rel_acts[62]" type="hidden" value="1">
                                          <input name="rel_slc_web[62]" type="hidden" value="0">
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td style="text-align:left;text-indent:15px">
                                      <input name="qh_acts[]" type="checkbox" disabled=""><label class="qh_acts_label"> 对话记录</label>
                                      <input style="margin-left:30px;" name="xs_slc_web_7[]" type="radio" value="0" disabled=""><label class="webs_label"> 全部网站</label>
                                      <input style="margin-left:30px;" name="xs_slc_web_7[]" type="radio" value="1" disabled=""><label class="self_web_label"> 所在网站</label>
                                      <input style="margin-left:30px;" name="xs_slc_web_7[]" type="radio" value="2" disabled=""><label class="self_chat_label"> 仅能查看自己的记录</label>
                                      <div class="real_actions" style="display:none;">
                                          <input name="rel_acts[71]" type="hidden" value="1">
                                          <input name="rel_slc_web[71]" type="hidden" value="0">
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td style="text-align:left;text-indent:15px">
                                      <input name="qh_acts[]" type="checkbox" disabled=""><label class="qh_acts_label"> 留言记录</label>
                                      <input style="margin-left:30px;" name="xs_slc_web_8[]" type="radio" value="0" disabled=""><label class="webs_label"> 全部网站</label>
                                      <input style="margin-left:30px;" name="xs_slc_web_8[]" type="radio" value="1" disabled=""><label class="self_web_label"> 所在网站</label>
                                      <div class="real_actions" style="display:none;">
                                          <input name="rel_acts[81]" type="hidden" value="1">
                                          <input name="rel_slc_web[81]" type="hidden" value="0">
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td style="text-align:left;text-indent:15px">
                                      <input name="qh_acts[]" type="checkbox" disabled=""><label class="qh_acts_label"> 统计分析</label>
                                      <input style="margin-left:30px;" name="xs_slc_web_9[]" type="radio" value="0" disabled=""><label class="webs_label"> 全部网站</label>
                                      <input style="margin-left:30px;" name="xs_slc_web_9[]" type="radio" value="1" disabled=""><label class="self_web_label"> 所在网站</label>
                                      <div class="real_actions" style="display:none;">
                                          <input name="rel_acts[91]" type="hidden" value="1">
                                          <input name="rel_slc_web[91]" type="hidden" value="0"><input name="rel_acts[92]" type="hidden" value="1">
                                          <input name="rel_slc_web[92]" type="hidden" value="0"><input name="rel_acts[93]" type="hidden" value="1">
                                          <input name="rel_slc_web[93]" type="hidden" value="0"><input name="rel_acts[94]" type="hidden" value="1">
                                          <input name="rel_slc_web[94]" type="hidden" value="0"><input name="rel_acts[95]" type="hidden" value="1">
                                          <input name="rel_slc_web[95]" type="hidden" value="0"><input name="rel_acts[96]" type="hidden" value="1">
                                          <input name="rel_slc_web[96]" type="hidden" value="0">
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td style="text-align:left;text-indent:15px">
                                      <input name="qh_acts[]" type="checkbox" disabled=""><label class="qh_acts_label"> 智能机器人</label>
                                      <input style="margin-left:30px;" name="xs_slc_web_10[]" type="radio" value="0" disabled=""><label class="webs_label"> 全部网站</label>
                                      <input style="margin-left:30px;" name="xs_slc_web_10[]" type="radio" value="1" disabled=""><label class="self_web_label"> 所在网站</label>
                                      <div class="real_actions" style="display:none;">
                                          <input name="rel_acts[101]" type="hidden" value="1">
                                          <input name="rel_slc_web[101]" type="hidden" value="0"><input name="rel_acts[102]" type="hidden" value="1">
                                          <input name="rel_slc_web[102]" type="hidden" value="0"><input name="rel_acts[103]" type="hidden" value="1">
                                          <input name="rel_slc_web[103]" type="hidden" value="0"><input name="rel_acts[105]" type="hidden" value="1">
                                          <input name="rel_slc_web[105]" type="hidden" value="0"><input name="rel_acts[106]" type="hidden" value="1">
                                          <input name="rel_slc_web[106]" type="hidden" value="0"><input name="rel_acts[107]" type="hidden" value="1">
                                          <input name="rel_slc_web[107]" type="hidden" value="0"><input name="rel_acts[108]" type="hidden" value="1">
                                          <input name="rel_slc_web[108]" type="hidden" value="0">
                                      </div>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </form>
              </td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'authorityManage',
  data () {
    return {
      msg: '权限管理'
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
