<template>
  <div class="setCenter heightOver flex">
    <div class="navul_left">
      <div class="side_bar_nav_title">设置中心</div>
      <ul id="accordion" class="accordion">
        <li class="open">
          <div class="link">
            客服设置
            <i class="el-icon-caret-bottom"></i>
          </div>
          <ul class="submenu" >
            <li class="nav_item sel" data-index="0"><a href="javascript:void(0);">客服分配</a></li>
          </ul>
        </li>
        <li>
          <div class="link">
            PC窗口设置
            <i class="el-icon-caret-bottom"></i>
          </div>
          <ul class="submenu">
            <li class="nav_item"  data-index="1"><a href="javascript:void(0);">咨询图标</a></li>
            <li class="nav_item"  data-index="2"><a href="javascript:void(0);">邀请窗口</a></li>
            <li class="nav_item"  data-index="3"><a href="javascript:void(0);">访客对话窗口</a></li>
            <li class="nav_item"  data-index="4"><a href="javascript:void(0);">直接对话窗口</a></li>
            <li class="nav_item"  data-index="5"><a href="javascript:void(0);">访客留言设置</a></li>
          </ul>
        </li>
        <li>
          <div class="link">
            手机窗口设置
            <i class="el-icon-caret-bottom"></i>
          </div>
          <ul class="submenu">
            <li class="nav_item"  data-index="6"><a href="javascript:void(0);">咨询图标</a></li>
            <li class="nav_item"  data-index="7"><a href="javascript:void(0);">邀请窗口</a></li>
            <li class="nav_item"  data-index="8"><a href="javascript:void(0);">对话窗口</a></li>
          </ul>
        </li>
        <li>
          <div class="link">
            常用设置
            <i class="el-icon-caret-bottom"></i>
          </div>
          <ul class="submenu">
            <li class="nav_item"  data-index="9"><a href="javascript:void(0);">微信互通</a></li>
            <li class="nav_item"  data-index="10"><a href="javascript:void(0);">常用语</a></li>
            <li class="nav_item"  data-index="11"><a href="javascript:void(0);">常用文件</a></li>
            <li class="nav_item"  data-index="12"><a href="javascript:void(0);">产品管理</a></li>
            <li class="nav_item"  data-index="13"><a href="javascript:void(0);">自定义URL</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="navul_right">
      <div class="nav_itemco">
        <div class="location">您当前的位置：CC客服 &gt; <span>设置中心</span> &gt; <span>客服分配</span></div>
        <table border="0" cellspacing="0" cellpadding="0" width="100%">
          <tbody>
          <tr>
            <td valign="top" width="180">
              <input name="" type="button" value="添加客服分组" class="button6" id="add_group">
              <table border="0" cellspacing="0" cellpadding="0" class="tab_11_sz" width="170" id="tab_left_sz" style="margin-top:10px; float:left; ">
                <tbody>
                <tr>
                  <th scope="col" colspan="2" style="height:14px; padding:4px; padding-left:10px">
                    客服分组
                  </th>
                </tr>
                <tr>
                  <td>
                    <span>
                    <a href="index.php?c=ClerkSet&amp;groupid=-1" style="color:#f60">未分组(1人)</a>
                    </span>
                  </td>
                  <td>
                    &nbsp;
                  </td>
                </tr>
                <tr>
                  <td>
                    &nbsp;
                  </td>
                  <td>
                    &nbsp;
                  </td>
                </tr>
                </tbody>
              </table>
            </td>
            <td valign="top">
              <input id="add_clerk" type="button" value="分配站点客服" class="button6">
              <input type="hidden" name="au_account" id="au_account" value="">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" class="tab_11_kfsz_01" style="margin-top:10px;">
                <tbody>
                <tr>
                  <th width="4%" scope="col">
                    <input title="选中/取消选中" name="checkall" type="checkbox" value="">
                  </th>
                  <th width="13%" scope="col">
                    CC账号
                  </th>
                  <th width="12%" scope="col">
                    客服姓名
                  </th>
                  <th width="16%" scope="col">
                    客服昵称
                  </th>
                  <th scope="col">
                    接待权限
                  </th>
                  <th scope="col" width="22%">
                    分流区域
                  </th>
                  <th width="28%" scope="col" style="text-align:center">
                    操作
                  </th>
                </tr>
                <tr>
                  <td>
                    <input name="grpclks[]" type="checkbox" value="2155861">
                  </td>
                  <td>
                    <span title="CC2292391">CC2292391</span>
                  </td>
                  <td class="tdbr">
                    <span title="超级管理员">超级管理员</span>
                  </td>
                  <td class="tdbr">
                    <span title="超级管理员">超级管理员</span>
                  </td>
                  <td>
                    <img class="ico_state" src="../../assets/img/ico_right_2.png">
                  </td>
                  <td>
                    -
                  </td>
                  <td>
                    <img class="updefcursor" src="../../assets/img/kfsz_sup.gif">&nbsp;
                    <img class="downdefcursor" src="../../assets/img/kfsz_sdown.gif">&nbsp;
                    <a href="index.php?c=ClerkSet&amp;a=getAllotSet&amp;wid=133299&amp;uid=1955861&amp;gid=-1&amp;cid=2155861&amp;page=1">
                      <img src="../../assets/img/kfsz_img_01.jpg" title="设置客服分配原则">
                    </a>&nbsp;
                    <img src="../../assets/img/kfsz_del2.jpg" title="解除客服" rel="del_clerk" value="2155861">&nbsp;
                    <img src="../../assets/img/kfsz_code_02.jpg" title="获取客服代码" rel="get_code" value="2155861">
                  </td>
                </tr>
                </tbody>
              </table>
              <div id="d_page_1" class="page_1">
                <div class="page_max" style="padding-left:0">
                  <input id="batchdel" name="batchdel" type="button" value="删除" class="button2">
                  <select id="batchmove" name="batchmove" style="width:130px">
                    <option value="-2">移动到...</option>
                  </select>
                </div>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="nav_itemco none">
        <div class="location">您当前的位置：CC客服 &gt; <span>设置中心</span> &gt; <span>咨询图标</span></div>
        <div class="cls">
          <form action="index.php?c=ConsultationCfg&amp;a=doConsultation" method="post" id="conversation_form">
            <input type="hidden" name="website" value="133299">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tbody>
              <tr>
                <td width="435" valign="top" id="left_height">
                  <div id="kf_left_main" style=" width:435px; background-color: #f9fbff; border:1px solid #c5e0ed;">
                    <table width="100%" border="0" cellspacing="5" cellpadding="0" class="tab_ser_invite">
                      <tbody>
                      <tr>
                        <td colspan="2">
                          <div class="title_kf_cp">
                            基本设置
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <div style="background:url(../../assets/img/kf_bg0701.gif) repeat-x;height:2px">
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th width="68" scope="row" style="height:30px;">
                          显示模式：
                        </th>
                        <td width="347">
                          <input type="hidden" name="themetype" value="1">
                          <input name="ico_style" type="radio" value="5" checked=""><label class="icon_style_lbl"> 高级</label>　
                          <input name="ico_style" type="radio" value="1"><label class="icon_style_lbl"> 图标</label>　
                          <input name="ico_style" type="radio" value="2"><label class="icon_style_lbl"> 列表</label>　
                          <input name="ico_style" type="radio" value="3"><label class="icon_style_lbl"> 隐藏</label>　
                          <input name="ico_style" type="radio" value="4"><label class="icon_style_lbl"> 自定义</label>
                        </td>
                      </tr>
                      <tr id="style_bg">
                        <th width="68" scope="row" class="v_top">
                          主题：
                        </th>
                        <td width="347">
                          <!--图标模式-->
                          <div class="kf_zdy_main" id="kf_zdy_main" style="display:none">
                            <div class="box_kfcp_003">
                              <ul>
                                <li class="this"><img them="beauty_01" src=../../assets/img/beauty_01_lite.png" rel="beauty_01" class="select_img"></li>
                                <li><img them="flower_01" src="../../assets/img/flower_01_lite.png" rel="flower_01" class="select_img"></li>
                                <li><img them="flower_02" src="../../assets/img/flower_02_lite.png" rel="flower_02" class="select_img"></li>
                                <li><img them="flower_03" src="../../assets/img/flower_03_lite.png" rel="flower_03" class="select_img"></li>
                                <li><img them="flower_04" src="../../assets/img/flower_04_lite.png" rel="flower_04" class="select_img"></li>
                                <li><img them="flower_05" src="../../assets/img/flower_05_lite.png" rel="flower_05" class="select_img"></li>
                                <li><img them="flower_06" src="../../assets/img/flower_06_lite.png" rel="flower_06" class="select_img"></li>
                                <li><img them="flower_07" src="../../assets/img/flower_07_lite.png" rel="flower_07" class="select_img"></li>
                                <li><img them="flower_08" src="../../assets/img/flower_08_lite.png" rel="flower_08" class="select_img"></li>
                                <li><img them="default" src="../../assets/img/default_lite.png" rel="default" class="select_img"></li>
                                <li><img them="default" src="../../assets/img/default_1_lite.png" rel="default_1" class="select_img"></li>
                                <li><img them="default" original="../../assets/imgdefault_2_lite.png" rel="default_2" class="select_img" src="../../assets/img/default_2_lite.png"></li>
                                <li><img them="default" original="../../assets/img/default_3_lite.png" rel="default_3" class="select_img" src="../../assets/img/default_3_lite.png"></li>
                                <li><img them="default" original="../../assets/img/default_4_lite.png" rel="default_4" class="select_img" src="../../assets/img/default_4_lite.png"></li>
                                <li><img them="default" original="../../assets/img/default_5_lite.png" rel="default_5" class="select_img" src="../../assets/img/default_5_lite.png"></li>
                                <li><img them="default" original="../../assets/img/default_6_lite.png" rel="default_6" class="select_img" src="../../assets/img/default_6_lite.png"></li>
                                <li><img them="default" original="../../assets/img/default_7_lite.png" rel="default_7" class="select_img" src="../../assets/img/default_7_lite.png"></li>
                                <li><img them="default" original="../../assets/img/default_8_lite.png" rel="default_8" class="select_img" src="../../assets/img/default_8_lite.png"></li>
                                <li><img them="red" src="../../assets/img/red_lite.png" rel="red" class="select_img"></li>
                                <li><img them="red" src="../../assets/img/red_1_lite.png" rel="red_1" class="select_img"></li>
                                <li><img them="red" original="../../assets/img/red_2_lite.png" rel="red_2" class="select_img" src="../../assets/img/red_2_lite.png"></li>
                                <li><img them="red" original="../../assets/img/red_3_lite.png" rel="red_3" class="select_img" src="../../assets/img/red_3_lite.png"></li>
                                <li><img them="red" original="../../assets/img/red_4_lite.png" rel="red_4" class="select_img" src="../../assets/img/red_4_lite.png"></li>
                                <li><img them="red" original="../../assets/img/red_5_lite.png" rel="red_5" class="select_img" src="../../assets/img/red_5_lite.png"></li>
                                <li><img them="red" original="../../assets/img/red_6_lite.png" rel="red_6" class="select_img" src="../../assets/img/red_6_lite.png"></li>
                                <li><img them="red" original="../../assets/img/red_7_lite.png" rel="red_7" class="select_img" src="../../assets/img/red_7_lite.png"></li>
                                <li><img them="red" original="../../assets/img/red_8_lite.png" rel="red_8" class="select_img" src="../../assets/img/red_8_lite.png"></li>
                                <li><img them="green" src="../../assets/img/green_lite.png" rel="green" class="select_img"></li>
                                <li><img them="green" src="../../assets/img/green_1_lite.png" rel="green_1" class="select_img"></li>
                                <li><img them="green" original="../../assets/img/green_2_lite.png" rel="green_2" class="select_img" src="../../assets/img/green_2_lite.png"></li>
                                <li><img them="green" original="../../assets/img/green_3_lite.png" rel="green_3" class="select_img" src="../../assets/img/green_3_lite.png"></li>
                                <li><img them="green" original="../../assets/img/green_4_lite.png" rel="green_4" class="select_img" src="../../assets/img/green_4_lite.png"></li>
                                <li><img them="green" original="../../assets/img/green_5_lite.png" rel="green_5" class="select_img" src="../../assets/img/green_5_lite.png"></li>
                                <li><img them="green" original="../../assets/img/green_6_lite.png" rel="green_6" class="select_img" src="../../assets/img/green_6_lite.png"></li>
                                <li><img them="green" original="../../assets/img/green_7_lite.png" rel="green_7" class="select_img" src="../../assets/img/green_7_lite.png"></li>
                                <li><img them="green" original="../../assets/img/green_8_lite.png" rel="green_8" class="select_img" src="../../assets/img/green_8_lite.png"></li>
                                <li><img them="gray" src="../../assets/img/gray_lite.png" rel="gray" class="select_img"></li>
                                <li><img them="gray" src="../../assets/img/gray_1_lite.png" rel="gray_1" class="select_img"></li>
                                <li><img them="gray" original="../../assets/img/gray_2_lite.png" rel="gray_2" class="select_img" src="../../assets/img/gray_2_lite.png"></li>
                                <li><img them="gray" original="../../assets/img/gray_3_lite.png" rel="gray_3" class="select_img" src="../../assets/img/gray_3_lite.png"></li>
                                <li><img them="gray" original="../../assets/img/gray_4_lite.png" rel="gray_4" class="select_img" src="../../assets/img/gray_4_lite.png"></li>
                                <li><img them="gray" original="../../assets/img/gray_5_lite.png" rel="gray_5" class="select_img" src="../../assets/img/gray_5_lite.png"></li>
                                <li><img them="gray" original="../../assets/img/gray_6_lite.png" rel="gray_6" class="select_img" src="../../assets/img/gray_6_lite.png"></li>
                                <li><img them="gray" original="../../assets/img/gray_7_lite.png" rel="gray_7" class="select_img" src="../../assets/img/gray_7_lite.png"></li>
                                <li><img them="gray" original="../../assets/img/gray_8_lite.png" rel="gray_8" class="select_img" src="../../assets/img/gray_8_lite.png"></li>
                                <li><img them="black" src="../../assets/img/black_lite.png" rel="black" class="select_img"></li>
                                <li><img them="black" src="../../assets/img/black_1_lite.png" rel="black_1" class="select_img"></li>
                                <li><img them="black" original="../../assets/img/black_2_lite.png" rel="black_2" class="select_img" src="../../assets/img/black_2_lite.png"></li>
                                <li><img them="black" original="../../assets/img/black_3_lite.png" rel="black_3" class="select_img" src="../../assets/img/black_3_lite.png"></li>
                                <li><img them="black" original="../../assets/img/black_4_lite.png" rel="black_4" class="select_img" src="../../assets/img/black_4_lite.png"></li>
                                <li><img them="black" original="../../assets/img/black_5_lite.png" rel="black_5" class="select_img" src="../../assets/img/black_5_lite.png"></li>
                                <li><img them="black" original="../../assets/img/black_6_lite.png" rel="black_6" class="select_img" src="../../assets/img/black_6_lite.png"></li>
                                <li><img them="black" original="../../assets/img/black_7_lite.png" rel="black_7" class="select_img" src="../../assets/img/black_7_lite.png"></li>
                                <li><img them="black" original="../../assets/img/black_8_lite.png" rel="black_8" class="select_img" src="../../assets/img/black_8_lite.png"></li>
                                <li><img them="rose" src="../../assets/img/rose_lite.png" rel="rose" class="select_img"></li>
                                <li><img them="rose" src="../../assets/img/rose_1_lite.png" rel="rose_1" class="select_img"></li>
                                <li><img them="rose" original="../../assets/img/rose_2_lite.png" rel="rose_2" class="select_img" src="../../assets/img/rose_2_lite.png"></li>
                                <li><img them="rose" original="../../assets/img/rose_3_lite.png" rel="rose_3" class="select_img" src="../../assets/img/rose_3_lite.png"></li>
                                <li><img them="rose" original="../../assets/img/rose_4_lite.png" rel="rose_4" class="select_img" src="../../assets/img/rose_4_lite.png"></li>
                                <li><img them="rose" original="../../assets/img/rose_5_lite.png" rel="rose_5" class="select_img" src="../../assets/img/rose_5_lite.png"></li>
                                <li><img them="rose" original="../../assets/img/rose_6_lite.png" rel="rose_6" class="select_img" src="../../assets/img/rose_6_lite.png"></li>
                                <li><img them="rose" original="../../assets/img/rose_7_lite.png" rel="rose_7" class="select_img" src="../../assets/img/rose_7_lite.png"></li>
                                <li><img them="rose" original="../../assets/img/rose_8_lite.png" rel="rose_8" class="select_img" src="../../assets/img/rose_8_lite.png"></li>
                                <li><img them="purple" src="../../assets/img/purple_lite.png" rel="purple" class="select_img"></li>
                                <li><img them="purple" src="../../assets/img/purple_1_lite.png" rel="purple_1" class="select_img"></li>
                                <li><img them="purple" original="../../assets/img/purple_2_lite.png" rel="purple_2" class="select_img" src="../../assets/img/purple_2_lite.png"></li>
                                <li><img them="purple" original="../../assets/img/purple_3_lite.png" rel="purple_3" class="select_img" src="../../assets/img/purple_3_lite.png"></li>
                                <li><img them="purple" original="../../assets/img/purple_4_lite.png" rel="purple_4" class="select_img" src="../../assets/img/purple_4_lite.png"></li>
                                <li><img them="purple" original="../../assets/img/purple_5_lite.png" rel="purple_5" class="select_img" src="../../assets/img/purple_5_lite.png"></li>
                                <li><img them="purple" original="../../assets/img/purple_6_lite.png" rel="purple_6" class="select_img" src="../../assets/img/purple_6_lite.png"></li>
                                <li><img them="purple" original="../../assets/img/purple_7_lite.png" rel="purple_7" class="select_img" src="../../assets/img/purple_7_lite.png"></li>
                                <li><img them="purple" original="../../assets/img/purple_8_lite.png" rel="purple_8" class="select_img" src="../../assets/img/purple_8_lite.png"></li>
                                <li><img them="blue" src="../../assets/img/blue_lite.png" rel="blue" class="select_img"></li>
                                <li><img them="blue" src="../../assets/img/blue_1_lite.png" rel="blue_1" class="select_img"></li>
                                <li><img them="blue" original="../../assets/img/blue_2_lite.png" rel="blue_2" class="select_img" src="../../assets/img/blue_2_lite.png"></li>
                                <li><img them="blue" original="../../assets/img/blue_3_lite.png" rel="blue_3" class="select_img" src="../../assets/img/blue_3_lite.png"></li>
                                <li><img them="blue" original="../../assets/img/blue_4_lite.png" rel="blue_4" class="select_img" src="../../assets/img/blue_4_lite.png"></li>
                                <li><img them="blue" original="../../assets/img/blue_5_lite.png" rel="blue_5" class="select_img" src="../../assets/img/blue_5_lite.png"></li>
                                <li><img them="blue" original="../../assets/img/blue_6_lite.png" rel="blue_6" class="select_img" src="../../assets/img/blue_6_lite.png"></li>
                                <li><img them="blue" original="../../assets/img/blue_7_lite.png" rel="blue_7" class="select_img" src="../../assets/img/blue_7_lite.png"></li>
                                <li><img them="blue" original="../../assets/img/blue_8_lite.png" rel="blue_8" class="select_img" src="../../assets/img/blue_8_lite.png"></li>
                                <li><img them="brown" src="../../assets/img/brown_lite.png" rel="brown" class="select_img"></li>
                                <li><img them="brown" src="../../assets/img/brown_1_lite.png" rel="brown_1" class="select_img"></li>
                                <li><img them="brown" original="../../assets/img/brown_2_lite.png" rel="brown_2" class="select_img" src="../../assets/img/brown_2_lite.png"></li>
                                <li><img them="brown" original="../../assets/img/brown_3_lite.png" rel="brown_3" class="select_img" src="../../assets/img/brown_3_lite.png"></li>
                                <li><img them="brown" original="../../assets/img/brown_4_lite.png" rel="brown_4" class="select_img" src="../../assets/img/brown_4_lite.png"></li>
                                <li><img them="brown" original="../../assets/img/brown_5_lite.png" rel="brown_5" class="select_img" src="../../assets/img/brown_5_lite.png"></li>
                                <li><img them="brown" original="../../assets/img/brown_6_lite.png" rel="brown_6" class="select_img" src="../../assets/img/brown_6_lite.png"></li>
                                <li><img them="brown" original="../../assets/img/brown_7_lite.png" rel="brown_7" class="select_img" src="../../assets/img/brown_7_lite.png"></li>
                                <li><img them="brown" original="../../assets/img/brown_8_lite.png" rel="brown_8" class="select_img" src="../../assets/img/brown_8_lite.png"></li>
                                <li><img them="cuilv" src="../../assets/img/cuilv_lite.png" rel="cuilv" class="select_img"></li>
                                <li><img them="cuilv" src="../../assets/img/cuilv_1_lite.png" rel="cuilv_1" class="select_img"></li>
                                <li><img them="cuilv" original="../../assets/img/cuilv_2_lite.png" rel="cuilv_2" class="select_img" src="../../assets/img/cuilv_2_lite.png"></li>
                                <li><img them="cuilv" original="../../assets/img/cuilv_3_lite.png" rel="cuilv_3" class="select_img" src="../../assets/img/cuilv_3_lite.png"></li>
                                <li><img them="cuilv" original="../../assets/img/cuilv_4_lite.png" rel="cuilv_4" class="select_img" src="../../assets/img/cuilv_4_lite.png"></li>
                                <li><img them="cuilv" original="../../assets/img/cuilv_5_lite.png" rel="cuilv_5" class="select_img" src="../../assets/img/cuilv_5_lite.png"></li>
                                <li><img them="cuilv" original="../../assets/img/cuilv_6_lite.png" rel="cuilv_6" class="select_img" src="../../assets/img/cuilv_6_lite.png"></li>
                                <li><img them="cuilv" original="../../assets/img/cuilv_7_lite.png" rel="cuilv_7" class="select_img" src="../../assets/img/cuilv_7_lite.png"></li>
                                <li><img them="cuilv" original="../../assets/img/cuilv_8_lite.png" rel="cuilv_8" class="select_img" src="../../assets/img/cuilv_8_lite.png"></li>
                              </ul>
                            </div>
                            <input type="hidden" name="colorvalue" value="beauty_01">
                          </div>
                          <!--自定义模式-->
                          <div class="kf_zdy_main" id="custom" style="display:none">
                            <div class="kf_zdy_left_img">
                              <img src="../../assets/img/nopic.gif" width="120" height="90" id="custom_img" alt="加载失败">
                              <img src="../../assets/img/nopic.gif" style="display: none;" id="custom_img_temp">
                            </div>
                            <div class="kf_zdy_right" style="margin-left:15px;width:152px;">
                              <input type="hidden" name="imgwidth" value="0">
                              <input type="hidden" name="imgheight" value="0">
                              <div style="margin:10px 0 10px 0px;color:#99989d;text-align: left;">
                                <font color="#f60">·</font> 支持gif、jpg、png等格式<br>
                                <font color="#f60">·</font> 图片大小不超过1M
                              </div>
                              <div style="margin-top: 15px; margin-left: 25px;">
                                <input type="hidden" name="themeurl" value="../../assets/img/nopic.gif">
                                <div class="upload_btn_cls">
                                  <div id="zdyicon_pic_upload_btn" style="float:left;" class="webuploader-container">
                                    <div class="webuploader-pick">
                                      上传图片
                                    </div>
                                    <div id="rt_rt_1c5d9b8ir1nhfgh916f3o82dmsd" style="position: absolute; top: 0px; left: 0px; width: 70px; height: 24px; overflow: hidden; bottom: auto; right: auto;">
                                      <input type="file" name="file" class="webuploader-element-invisible" multiple="multiple" accept="image/*"><label style="opacity: 0; width: 100%; height: 100%; display: block; cursor: pointer; background: rgb(255, 255, 255);"></label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div style="clear:both">
                            </div>
                          </div>
                          <!--列表模式-->
                          <div id="theme_list" class="kf_zdy_main" style="display:none;">
                            <div class="box_kfcp_116">
                              <ul>
                                <li class="thisbg"><img class="listimg_change" src="../../assets/img/main_head.gif" rel="beauty_01"></li>
                                <li><img class="listimg_change" src="../../assets/img/main_head.gif" rel="flower_01"></li>
                                <li><img class="listimg_change" src="../../assets/img/main_head.gif" rel="flower_02"></li>
                                <li><img class="listimg_change" src="../../assets/img/main_head.gif" rel="flower_03"></li>
                                <li><img class="listimg_change" src="../../assets/img/main_head.gif" rel="flower_04"></li>
                                <li><img class="listimg_change" src="../../assets/img/main_head.gif" rel="flower_05"></li>
                                <li><img class="listimg_change" src="../../assets/img/main_head.gif" rel="flower_06"></li>
                                <li><img class="listimg_change" src="../../assets/img/main_head.gif" rel="flower_07"></li>
                                <li><img class="listimg_change" src="../../assets/img/main_head.gif" rel="flower_08"></li>
                                <li><img class="listimg_change" src="../../assets/img/main_head.gif" rel="default"></li>
                                <li><img class="listimg_change" src="../../assets/img/main_head.gif" rel="red"></li>
                                <li><img class="listimg_change" src="../../assets/img/main_head.gif" rel="green"></li>
                                <li><img class="listimg_change" src="../../assets/img/main_head.gif" rel="gray"></li>
                                <li><img class="listimg_change" src="../../assets/img/main_head.gif" rel="black"></li>
                                <li><img class="listimg_change" src="../../assets/img/main_head.gif" rel="rose"></li>
                                <li><img class="listimg_change" src="../../assets/img/main_head.gif" rel="purple"></li>
                                <li><img class="listimg_change" src="../../assets/img/main_head.gif" rel="blue"></li>
                                <li><img class="listimg_change" src="../../assets/img/main_head.gif" rel="brown"></li>
                                <li><img class="listimg_change" src="../../assets/img/main_head.gif" rel="cuilv"></li>
                              </ul>
                            </div>
                            <div style="margin-top:8px;">
                              <input type="checkbox" name="isopen" value="1" checked=""><label style=" vertical-align: middle;">&nbsp;列表展开显示</label>
                            </div>
                          </div>
                          <!-- 高级模式 -->
                          <div class="adv_mode_sh" id="adv_theme_color" style="">
                            <div style="float:left;">
                              <span id="adv_theme_color_show" style="border:1px solid #E0E2E5;display:block;border-radius: 3px;width:35px;height:35px;margin:5px;margin-left:0;background:#00CCCC;"></span>
                            </div>
                            <div style="float:left;width:234px;height:44px;margin-left:10px;border: 1px dashed #ccc;padding-bottom: 2px;">
                              <ul>
                                <li class="adv_slc_t_color" rel="#da434e" style="cursor: pointer;border-radius: 3px;float:left;margin-left:3px;margin-top:2px;width:18px;height:18px;border:1px solid #E0E2E5;background:#da434e"></li>
                                <li class="adv_slc_t_color" rel="#ec6300" style="cursor: pointer;border-radius: 3px;float:left;margin-left:3px;margin-top:2px;width:18px;height:18px;border:1px solid #E0E2E5;background:#ec6300"></li>
                                <li class="adv_slc_t_color" rel="#804d4d" style="cursor: pointer;border-radius: 3px;float:left;margin-left:3px;margin-top:2px;width:18px;height:18px;border:1px solid #E0E2E5;background:#804d4d"></li>
                                <li class="adv_slc_t_color" rel="#e56281" style="cursor: pointer;border-radius: 3px;float:left;margin-left:3px;margin-top:2px;width:18px;height:18px;border:1px solid #E0E2E5;background:#e56281"></li>
                                <li class="adv_slc_t_color" rel="#b1639f" style="cursor: pointer;border-radius: 3px;float:left;margin-left:3px;margin-top:2px;width:18px;height:18px;border:1px solid #E0E2E5;background:#b1639f"></li>
                                <li class="adv_slc_t_color" rel="#6b51c0" style="cursor: pointer;border-radius: 3px;float:left;margin-left:3px;margin-top:2px;width:18px;height:18px;border:1px solid #E0E2E5;background:#6b51c0"></li>
                                <li class="adv_slc_t_color" rel="#595ca0" style="cursor: pointer;border-radius: 3px;float:left;margin-left:3px;margin-top:2px;width:18px;height:18px;border:1px solid #E0E2E5;background:#595ca0"></li>
                                <li class="adv_slc_t_color" rel="#f0bc59" style="cursor: pointer;border-radius: 3px;float:left;margin-left:3px;margin-top:2px;width:18px;height:18px;border:1px solid #E0E2E5;background:#f0bc59"></li>
                                <li class="adv_slc_t_color" rel="#f78750" style="cursor: pointer;border-radius: 3px;float:left;margin-left:3px;margin-top:2px;width:18px;height:18px;border:1px solid #E0E2E5;background:#f78750"></li>
                                <li class="adv_slc_t_color" rel="#3f48cc" style="cursor: pointer;border-radius: 3px;float:left;margin-left:3px;margin-top:2px;width:18px;height:18px;border:1px solid #E0E2E5;background:#3f48cc"></li>
                                <li class="adv_slc_t_color" rel="#169ada" style="cursor: pointer;border-radius: 3px;float:left;margin-left:3px;margin-top:2px;width:18px;height:18px;border:1px solid #E0E2E5;background:#169ada"></li>
                                <li class="adv_slc_t_color" rel="#288add" style="cursor: pointer;border-radius: 3px;float:left;margin-left:3px;margin-top:2px;width:18px;height:18px;border:1px solid #E0E2E5;background:#288add"></li>
                                <li class="adv_slc_t_color" rel="#31a66b" style="cursor: pointer;border-radius: 3px;float:left;margin-left:3px;margin-top:2px;width:18px;height:18px;border:1px solid #E0E2E5;background:#31a66b"></li>
                                <li class="adv_slc_t_color" rel="#3074c1" style="cursor: pointer;border-radius: 3px;float:left;margin-left:3px;margin-top:2px;width:18px;height:18px;border:1px solid #E0E2E5;background:#3074c1"></li>
                                <li class="adv_slc_t_color" rel="#00829a" style="cursor: pointer;border-radius: 3px;float:left;margin-left:3px;margin-top:2px;width:18px;height:18px;border:1px solid #E0E2E5;background:#00829a"></li>
                                <li class="adv_slc_t_color" rel="#159c77" style="cursor: pointer;border-radius: 3px;float:left;margin-left:3px;margin-top:2px;width:18px;height:18px;border:1px solid #E0E2E5;background:#159c77"></li>
                                <li class="adv_slc_t_color" rel="#cfbaaa" style="cursor: pointer;border-radius: 3px;float:left;margin-left:3px;margin-top:2px;width:18px;height:18px;border:1px solid #E0E2E5;background:#cfbaaa"></li>
                                <li class="adv_slc_t_color" rel="#707070" style="cursor: pointer;border-radius: 3px;float:left;margin-left:3px;margin-top:2px;width:18px;height:18px;border:1px solid #E0E2E5;background:#707070"></li>
                                <li class="adv_slc_t_color" rel="#4fb0ac" style="cursor: pointer;border-radius: 3px;float:left;margin-left:3px;margin-top:2px;width:18px;height:18px;border:1px solid #E0E2E5;background:#4fb0ac"></li>
                                <li class="adv_slc_t_color" rel="#b13279" style="cursor: pointer;border-radius: 3px;float:left;margin-left:3px;margin-top:2px;width:18px;height:18px;border:1px solid #E0E2E5;background:#b13279"></li>
                              </ul>
                            </div>
                            <div style="float:left;">
									<span class="bg_select cls" style="display:block;border:none;width:32px;height:46px;margin:4px 0 0 15px;">
									<div class="show_color cls" style="width:32px;height:46px;">
										<div>
											<img src="../../assets/img/adv_m_c.jpg" style="height:32px;width:32px;border-radius:5px;">
										</div>
										<div style="line-height:13px;text-indent:5px;">
											更多
										</div>
									</div>
									<div id="bgcolor_list1" class="bgcolor_list" rel="adv_theme_color" style="display:none;top:32px;">
										<table width="241" border="0" cellspacing="0" cellpadding="0">
										<tbody>
										<tr height="30">
											<td colspan="20">
												<table cellpadding="0" cellspacing="1" border="0">
												<tbody>
												<tr>
													<td>
														<input type="text" class="DisColor" size="6" disabled="" style="border:solid 1px #000000;background-color:#ffff00">
													</td>
													<td width="3">
													</td>
													<td class="HexColor" style="border:inset 1px;font-family:Arial; padding-left:5px;background-color:#FFF" width="60">
														#000000
													</td>
												</tr>
												</tbody>
												</table>
											</td>
										</tr>
										</tbody>
										</table>
										<table class="colortables" width="241" border="1" cellspacing="0" cellpadding="0" style="border-collapse: collapse" bordercolor="#000000">
										<tbody>
										<tr height="12">
											<td class="colortabletd" width="11" style="background-color:#000000" title="#000000">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#000000" title="#000000">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#003300" title="#003300">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#006600" title="#006600">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#009900" title="#009900">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#00cc00" title="#00CC00">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#00ff00" title="#00FF00">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#330000" title="#330000">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#333300" title="#333300">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#336600" title="#336600">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#339900" title="#339900">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#33cc00" title="#33CC00">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#33ff00" title="#33FF00">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#660000" title="#660000">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#663300" title="#663300">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#666600" title="#666600">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#669900" title="#669900">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#66cc00" title="#66CC00">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#66ff00" title="#66FF00">
											</td>
										</tr>
										<tr height="12">
											<td class="colortabletd" width="11" style="background-color:#333333" title="#333333">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#000033" title="#000033">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#003333" title="#003333">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#006633" title="#006633">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#009933" title="#009933">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#00cc33" title="#00CC33">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#00ff33" title="#00FF33">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#330033" title="#330033">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#333333" title="#333333">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#336633" title="#336633">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#339933" title="#339933">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#33cc33" title="#33CC33">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#33ff33" title="#33FF33">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#660033" title="#660033">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#663333" title="#663333">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#666633" title="#666633">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#669933" title="#669933">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#66cc33" title="#66CC33">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#66ff33" title="#66FF33">
											</td>
										</tr>
										<tr height="12">
											<td class="colortabletd" width="11" style="background-color:#666666" title="#666666">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#000066" title="#000066">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#003366" title="#003366">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#006666" title="#006666">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#009966" title="#009966">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#00cc66" title="#00CC66">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#00ff66" title="#00FF66">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#330066" title="#330066">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#333366" title="#333366">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#336666" title="#336666">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#339966" title="#339966">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#33cc66" title="#33CC66">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#33ff66" title="#33FF66">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#660066" title="#660066">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#663366" title="#663366">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#666666" title="#666666">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#669966" title="#669966">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#66cc66" title="#66CC66">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#66ff66" title="#66FF66">
											</td>
										</tr>
										<tr height="12">
											<td class="colortabletd" width="11" style="background-color:#999999" title="#999999">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#000099" title="#000099">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#003399" title="#003399">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#006699" title="#006699">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#009999" title="#009999">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#00cc99" title="#00CC99">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#00ff99" title="#00FF99">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#330099" title="#330099">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#333399" title="#333399">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#336699" title="#336699">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#339999" title="#339999">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#33cc99" title="#33CC99">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#33ff99" title="#33FF99">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#660099" title="#660099">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#663399" title="#663399">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#666699" title="#666699">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#669999" title="#669999">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#66cc99" title="#66CC99">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#66ff99" title="#66FF99">
											</td>
										</tr>
										<tr height="12">
											<td class="colortabletd" width="11" style="background-color:#CCCCCC" title="#CCCCCC">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#0000cc" title="#0000CC">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#0033cc" title="#0033CC">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#0066cc" title="#0066CC">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#0099cc" title="#0099CC">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#00cccc" title="#00CCCC">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#00ffcc" title="#00FFCC">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#3300cc" title="#3300CC">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#3333cc" title="#3333CC">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#3366cc" title="#3366CC">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#3399cc" title="#3399CC">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#33cccc" title="#33CCCC">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#33ffcc" title="#33FFCC">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#6600cc" title="#6600CC">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#6633cc" title="#6633CC">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#6666cc" title="#6666CC">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#6699cc" title="#6699CC">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#66cccc" title="#66CCCC">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#66ffcc" title="#66FFCC">
											</td>
										</tr>
										<tr height="12">
											<td class="colortabletd" width="11" style="background-color:#FFFFFF" title="#FFFFFF">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#0000ff" title="#0000FF">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#0033ff" title="#0033FF">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#0066ff" title="#0066FF">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#0099ff" title="#0099FF">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#00ccff" title="#00CCFF">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#00ffff" title="#00FFFF">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#3300ff" title="#3300FF">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#3333ff" title="#3333FF">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#3366ff" title="#3366FF">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#3399ff" title="#3399FF">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#33ccff" title="#33CCFF">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#33ffff" title="#33FFFF">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#6600ff" title="#6600FF">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#6633ff" title="#6633FF">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#6666ff" title="#6666FF">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#6699ff" title="#6699FF">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#66ccff" title="#66CCFF">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#66ffff" title="#66FFFF">
											</td>
										</tr>
										<tr height="12">
											<td class="colortabletd" width="11" style="background-color:#FF0000" title="#FF0000">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#990000" title="#990000">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#993300" title="#993300">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#996600" title="#996600">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#999900" title="#999900">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#99cc00" title="#99CC00">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#99ff00" title="#99FF00">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#cc0000" title="#CC0000">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#cc3300" title="#CC3300">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#cc6600" title="#CC6600">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#cc9900" title="#CC9900">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#cccc00" title="#CCCC00">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#ccff00" title="#CCFF00">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#ff0000" title="#FF0000">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#ff3300" title="#FF3300">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#ff6600" title="#FF6600">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#ff9900" title="#FF9900">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#ffcc00" title="#FFCC00">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#ffff00" title="#FFFF00">
											</td>
										</tr>
										<tr height="12">
											<td class="colortabletd" width="11" style="background-color:#00FF00" title="#00FF00">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#990033" title="#990033">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#993333" title="#993333">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#996633" title="#996633">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#999933" title="#999933">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#99cc33" title="#99CC33">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#99ff33" title="#99FF33">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#cc0033" title="#CC0033">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#cc3333" title="#CC3333">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#cc6633" title="#CC6633">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#cc9933" title="#CC9933">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#cccc33" title="#CCCC33">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#ccff33" title="#CCFF33">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#ff0033" title="#FF0033">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#ff3333" title="#FF3333">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#ff6633" title="#FF6633">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#ff9933" title="#FF9933">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#ffcc33" title="#FFCC33">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#ffff33" title="#FFFF33">
											</td>
										</tr>
										<tr height="12">
											<td class="colortabletd" width="11" style="background-color:#0000FF" title="#0000FF">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#990066" title="#990066">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#993366" title="#993366">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#996666" title="#996666">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#999966" title="#999966">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#99cc66" title="#99CC66">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#99ff66" title="#99FF66">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#cc0066" title="#CC0066">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#cc3366" title="#CC3366">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#cc6666" title="#CC6666">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#cc9966" title="#CC9966">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#cccc66" title="#CCCC66">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#ccff66" title="#CCFF66">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#ff0066" title="#FF0066">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#ff3366" title="#FF3366">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#ff6666" title="#FF6666">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#ff9966" title="#FF9966">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#ffcc66" title="#FFCC66">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#ffff66" title="#FFFF66">
											</td>
										</tr>
										<tr height="12">
											<td class="colortabletd" width="11" style="background-color:#FFFF00" title="#FFFF00">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#990099" title="#990099">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#993399" title="#993399">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#996699" title="#996699">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#999999" title="#999999">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#99cc99" title="#99CC99">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#99ff99" title="#99FF99">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#cc0099" title="#CC0099">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#cc3399" title="#CC3399">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#cc6699" title="#CC6699">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#cc9999" title="#CC9999">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#cccc99" title="#CCCC99">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#ccff99" title="#CCFF99">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#ff0099" title="#FF0099">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#ff3399" title="#FF3399">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#ff6699" title="#FF6699">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#ff9999" title="#FF9999">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#ffcc99" title="#FFCC99">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#ffff99" title="#FFFF99">
											</td>
										</tr>
										<tr height="12">
											<td class="colortabletd" width="11" style="background-color:#00FFFF" title="#00FFFF">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#9900cc" title="#9900CC">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#9933cc" title="#9933CC">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#9966cc" title="#9966CC">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#9999cc" title="#9999CC">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#99cccc" title="#99CCCC">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#99ffcc" title="#99FFCC">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#cc00cc" title="#CC00CC">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#cc33cc" title="#CC33CC">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#cc66cc" title="#CC66CC">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#cc99cc" title="#CC99CC">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#cccccc" title="#CCCCCC">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#ccffcc" title="#CCFFCC">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#ff00cc" title="#FF00CC">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#ff33cc" title="#FF33CC">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#ff66cc" title="#FF66CC">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#ff99cc" title="#FF99CC">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#ffcccc" title="#FFCCCC">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#ffffcc" title="#FFFFCC">
											</td>
										</tr>
										<tr height="12">
											<td class="colortabletd" width="11" style="background-color:#FF00FF" title="#FF00FF">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#9900ff" title="#9900FF">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#9933ff" title="#9933FF">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#9966ff" title="#9966FF">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#9999ff" title="#9999FF">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#99ccff" title="#99CCFF">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#99ffff" title="#99FFFF">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#cc00ff" title="#CC00FF">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#cc33ff" title="#CC33FF">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#cc66ff" title="#CC66FF">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#cc99ff" title="#CC99FF">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#ccccff" title="#CCCCFF">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#ccffff" title="#CCFFFF">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#ff00ff" title="#FF00FF">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#ff33ff" title="#FF33FF">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#ff66ff" title="#FF66FF">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#ff99ff" title="#FF99FF">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#ffccff" title="#FFCCFF">
											</td>
											<td class="colortabletd" width="11" style=" background-color:#ffffff" title="#FFFFFF">
											</td>
										</tr>
										</tbody>
										</table>
									</div>
									</span>
                            </div>
                            <input type="hidden" name="adv_theme_color" value="#00CCCC">
                          </div>
                        </td>
                      </tr>
                      <tr class="iconnogray_cls" style="display:none;">
                        <th scope="row">
                          图标常亮：
                        </th>
                        <td>
                          <input name="iconnogray" type="checkbox" class="radio" value="1"><label id="iconnogray_label">&nbsp;客服不在线时图标不变灰</label>
                        </td>
                      </tr>
                      <tr class="icon_title_sw_cls" style="display:none;">
                        <th class="v_top" scope="row">
                          标题：
                        </th>
                        <td>
                          <input name="icon_title" class="text2 itext11" type="text" value="CC客服">&nbsp;&nbsp;<img style="vertical-align: middle;" class="ck_helptips" data-html="该标题作用区域如下图红框所示：<div style='margin-left:-6px;margin-top:3px;'><img src='../../assets/img/consult_title_pos_ts.jpg?1'>
						</div>
						" data-offset="1" data-position="bottom right" data-variation="inverted" src="../../assets/img/prompt.gif">
                          <div style="color:#888585;font-family: &quot;Microsoft YaHei&quot;,Arial, &quot;\9ED1\4F53&quot;;margin-bottom:5px;">
                            最多可输入20个字符
                          </div>
                        </td>
                      </tr>
                      <tr class="adv_mode_sh" style="">
                        <th scope="row">
                          字体颜色：
                        </th>
                        <td>
						<span class="bg_select cls" style="width:47px;border:solid 1px #b4b4b4;border-radius: 2px;">
						<div class="show_color cls">
							<div class="checked_bg" style="border:none;border-right: 1px solid #b4b4b4;">
								<div class="checked_bg_show" style="border:none;height:17px;background:#FFFFFF;width:35px;">
								</div>
							</div>
							<div class="open_list" style="border:none;height:17px;width:9px;background:url(../../assets/img/select2.png) no-repeat -5px -4px;">
							</div>
						</div>
						<div id="bgcolor_list2" class="bgcolor_list" rel="adv_font_color" style="display:none;">
							<table width="241" border="0" cellspacing="0" cellpadding="0">
							<tbody>
							<tr height="30">
								<td colspan="20">
									<table cellpadding="0" cellspacing="1" border="0">
									<tbody>
									<tr>
										<td>
											<input type="text" class="DisColor" size="6" disabled="" style="border:solid 1px #000000;background-color:#ffff00">
										</td>
										<td width="3">
										</td>
										<td class="HexColor" style="border:inset 1px;font-family:Arial; padding-left:5px;background-color:#FFF" width="60">
											#000000
										</td>
									</tr>
									</tbody>
									</table>
								</td>
							</tr>
							</tbody>
							</table>
							<table class="colortables" width="241" border="1" cellspacing="0" cellpadding="0" style="border-collapse: collapse" bordercolor="#000000">
							<tbody>
							<tr height="12">
								<td class="colortabletd" width="11" style="background-color:#000000" title="#000000">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#000000" title="#000000">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#003300" title="#003300">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#006600" title="#006600">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#009900" title="#009900">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#00cc00" title="#00CC00">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#00ff00" title="#00FF00">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#330000" title="#330000">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#333300" title="#333300">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#336600" title="#336600">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#339900" title="#339900">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#33cc00" title="#33CC00">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#33ff00" title="#33FF00">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#660000" title="#660000">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#663300" title="#663300">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#666600" title="#666600">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#669900" title="#669900">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#66cc00" title="#66CC00">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#66ff00" title="#66FF00">
								</td>
							</tr>
							<tr height="12">
								<td class="colortabletd" width="11" style="background-color:#333333" title="#333333">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#000033" title="#000033">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#003333" title="#003333">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#006633" title="#006633">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#009933" title="#009933">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#00cc33" title="#00CC33">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#00ff33" title="#00FF33">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#330033" title="#330033">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#333333" title="#333333">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#336633" title="#336633">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#339933" title="#339933">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#33cc33" title="#33CC33">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#33ff33" title="#33FF33">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#660033" title="#660033">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#663333" title="#663333">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#666633" title="#666633">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#669933" title="#669933">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#66cc33" title="#66CC33">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#66ff33" title="#66FF33">
								</td>
							</tr>
							<tr height="12">
								<td class="colortabletd" width="11" style="background-color:#666666" title="#666666">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#000066" title="#000066">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#003366" title="#003366">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#006666" title="#006666">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#009966" title="#009966">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#00cc66" title="#00CC66">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#00ff66" title="#00FF66">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#330066" title="#330066">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#333366" title="#333366">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#336666" title="#336666">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#339966" title="#339966">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#33cc66" title="#33CC66">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#33ff66" title="#33FF66">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#660066" title="#660066">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#663366" title="#663366">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#666666" title="#666666">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#669966" title="#669966">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#66cc66" title="#66CC66">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#66ff66" title="#66FF66">
								</td>
							</tr>
							<tr height="12">
								<td class="colortabletd" width="11" style="background-color:#999999" title="#999999">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#000099" title="#000099">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#003399" title="#003399">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#006699" title="#006699">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#009999" title="#009999">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#00cc99" title="#00CC99">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#00ff99" title="#00FF99">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#330099" title="#330099">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#333399" title="#333399">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#336699" title="#336699">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#339999" title="#339999">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#33cc99" title="#33CC99">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#33ff99" title="#33FF99">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#660099" title="#660099">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#663399" title="#663399">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#666699" title="#666699">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#669999" title="#669999">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#66cc99" title="#66CC99">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#66ff99" title="#66FF99">
								</td>
							</tr>
							<tr height="12">
								<td class="colortabletd" width="11" style="background-color:#CCCCCC" title="#CCCCCC">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#0000cc" title="#0000CC">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#0033cc" title="#0033CC">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#0066cc" title="#0066CC">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#0099cc" title="#0099CC">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#00cccc" title="#00CCCC">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#00ffcc" title="#00FFCC">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#3300cc" title="#3300CC">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#3333cc" title="#3333CC">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#3366cc" title="#3366CC">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#3399cc" title="#3399CC">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#33cccc" title="#33CCCC">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#33ffcc" title="#33FFCC">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#6600cc" title="#6600CC">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#6633cc" title="#6633CC">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#6666cc" title="#6666CC">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#6699cc" title="#6699CC">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#66cccc" title="#66CCCC">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#66ffcc" title="#66FFCC">
								</td>
							</tr>
							<tr height="12">
								<td class="colortabletd" width="11" style="background-color:#FFFFFF" title="#FFFFFF">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#0000ff" title="#0000FF">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#0033ff" title="#0033FF">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#0066ff" title="#0066FF">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#0099ff" title="#0099FF">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#00ccff" title="#00CCFF">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#00ffff" title="#00FFFF">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#3300ff" title="#3300FF">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#3333ff" title="#3333FF">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#3366ff" title="#3366FF">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#3399ff" title="#3399FF">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#33ccff" title="#33CCFF">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#33ffff" title="#33FFFF">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#6600ff" title="#6600FF">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#6633ff" title="#6633FF">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#6666ff" title="#6666FF">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#6699ff" title="#6699FF">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#66ccff" title="#66CCFF">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#66ffff" title="#66FFFF">
								</td>
							</tr>
							<tr height="12">
								<td class="colortabletd" width="11" style="background-color:#FF0000" title="#FF0000">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#990000" title="#990000">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#993300" title="#993300">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#996600" title="#996600">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#999900" title="#999900">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#99cc00" title="#99CC00">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#99ff00" title="#99FF00">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#cc0000" title="#CC0000">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#cc3300" title="#CC3300">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#cc6600" title="#CC6600">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#cc9900" title="#CC9900">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#cccc00" title="#CCCC00">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#ccff00" title="#CCFF00">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#ff0000" title="#FF0000">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#ff3300" title="#FF3300">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#ff6600" title="#FF6600">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#ff9900" title="#FF9900">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#ffcc00" title="#FFCC00">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#ffff00" title="#FFFF00">
								</td>
							</tr>
							<tr height="12">
								<td class="colortabletd" width="11" style="background-color:#00FF00" title="#00FF00">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#990033" title="#990033">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#993333" title="#993333">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#996633" title="#996633">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#999933" title="#999933">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#99cc33" title="#99CC33">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#99ff33" title="#99FF33">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#cc0033" title="#CC0033">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#cc3333" title="#CC3333">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#cc6633" title="#CC6633">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#cc9933" title="#CC9933">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#cccc33" title="#CCCC33">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#ccff33" title="#CCFF33">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#ff0033" title="#FF0033">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#ff3333" title="#FF3333">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#ff6633" title="#FF6633">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#ff9933" title="#FF9933">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#ffcc33" title="#FFCC33">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#ffff33" title="#FFFF33">
								</td>
							</tr>
							<tr height="12">
								<td class="colortabletd" width="11" style="background-color:#0000FF" title="#0000FF">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#990066" title="#990066">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#993366" title="#993366">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#996666" title="#996666">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#999966" title="#999966">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#99cc66" title="#99CC66">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#99ff66" title="#99FF66">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#cc0066" title="#CC0066">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#cc3366" title="#CC3366">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#cc6666" title="#CC6666">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#cc9966" title="#CC9966">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#cccc66" title="#CCCC66">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#ccff66" title="#CCFF66">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#ff0066" title="#FF0066">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#ff3366" title="#FF3366">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#ff6666" title="#FF6666">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#ff9966" title="#FF9966">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#ffcc66" title="#FFCC66">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#ffff66" title="#FFFF66">
								</td>
							</tr>
							<tr height="12">
								<td class="colortabletd" width="11" style="background-color:#FFFF00" title="#FFFF00">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#990099" title="#990099">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#993399" title="#993399">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#996699" title="#996699">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#999999" title="#999999">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#99cc99" title="#99CC99">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#99ff99" title="#99FF99">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#cc0099" title="#CC0099">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#cc3399" title="#CC3399">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#cc6699" title="#CC6699">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#cc9999" title="#CC9999">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#cccc99" title="#CCCC99">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#ccff99" title="#CCFF99">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#ff0099" title="#FF0099">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#ff3399" title="#FF3399">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#ff6699" title="#FF6699">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#ff9999" title="#FF9999">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#ffcc99" title="#FFCC99">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#ffff99" title="#FFFF99">
								</td>
							</tr>
							<tr height="12">
								<td class="colortabletd" width="11" style="background-color:#00FFFF" title="#00FFFF">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#9900cc" title="#9900CC">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#9933cc" title="#9933CC">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#9966cc" title="#9966CC">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#9999cc" title="#9999CC">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#99cccc" title="#99CCCC">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#99ffcc" title="#99FFCC">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#cc00cc" title="#CC00CC">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#cc33cc" title="#CC33CC">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#cc66cc" title="#CC66CC">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#cc99cc" title="#CC99CC">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#cccccc" title="#CCCCCC">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#ccffcc" title="#CCFFCC">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#ff00cc" title="#FF00CC">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#ff33cc" title="#FF33CC">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#ff66cc" title="#FF66CC">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#ff99cc" title="#FF99CC">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#ffcccc" title="#FFCCCC">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#ffffcc" title="#FFFFCC">
								</td>
							</tr>
							<tr height="12">
								<td class="colortabletd" width="11" style="background-color:#FF00FF" title="#FF00FF">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#9900ff" title="#9900FF">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#9933ff" title="#9933FF">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#9966ff" title="#9966FF">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#9999ff" title="#9999FF">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#99ccff" title="#99CCFF">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#99ffff" title="#99FFFF">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#cc00ff" title="#CC00FF">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#cc33ff" title="#CC33FF">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#cc66ff" title="#CC66FF">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#cc99ff" title="#CC99FF">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#ccccff" title="#CCCCFF">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#ccffff" title="#CCFFFF">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#ff00ff" title="#FF00FF">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#ff33ff" title="#FF33FF">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#ff66ff" title="#FF66FF">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#ff99ff" title="#FF99FF">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#ffccff" title="#FFCCFF">
								</td>
								<td class="colortabletd" width="11" style=" background-color:#ffffff" title="#FFFFFF">
								</td>
							</tr>
							</tbody>
							</table>
						</div>
						</span>
                          <input type="hidden" name="adv_font_color" value="#FFFFFF">
                        </td>
                      </tr>
                      <tr class="adv_mode_sh" style="">
                        <th class="v_top" style="padding-top: 3px;" scope="row">
                          展缩图标：
                        </th>
                        <td>
                          <input name="iconOpenType" type="radio" checked="" value="1"><label class="iconOpenType_label">&nbsp;系统样式</label>&nbsp;&nbsp;
                          <input name="iconOpenType" type="radio" value="2"><label class="iconOpenType_label">&nbsp;自定义</label>&nbsp;
                          <div style="margin-top:5px;border: 1px dashed #ccc;margin-bottom:10px;">
                            <div id="iconOpenType_xt" style="margin:5px;height:162px;width:340px;overflow-x: scroll;overflow-y: hidden;">
                              <ul style="width:886px;">
                                <li class="icon_open_color_slc " rel="#da434e"><img src="../../assets/img/da434e.png"></li>
                                <li class="icon_open_color_slc" rel="#ec6300"><img src="../../assets/img/ec6300.png"></li>
                                <li class="icon_open_color_slc" rel="#804d4d"><img src="../../assets/img/804d4d.png"></li>
                                <li class="icon_open_color_slc " rel="#e56281"><img src="../../assets/img/e56281.png"></li>
                                <li class="icon_open_color_slc " rel="#b1639f"><img src="../../assets/img/b1639f.png"></li>
                                <li class="icon_open_color_slc " rel="#6b51c0"><img src="../../assets/img/6b51c0.png"></li>
                                <li class="icon_open_color_slc " rel="#595ca0"><img src="../../assets/img/595ca0.png"></li>
                                <li class="icon_open_color_slc " rel="#f0bc59"><img src="../../assets/img/f0bc59.png"></li>
                                <li class="icon_open_color_slc " rel="#f78750"><img src="../../assets/img/f78750.png"></li>
                                <li class="icon_open_color_slc " rel="#3f48cc"><img src="../../assets/img/3f48cc.png"></li>
                                <li class="icon_open_color_slc icon_open_color_slc_index" rel="#169ada"><img src="../../assets/img/169ada.png"></li>
                                <li class="icon_open_color_slc " rel="#288add"><img src="../../assets/img/288add.png"></li>
                                <li class="icon_open_color_slc " rel="#31a66b"><img src="../../assets/img/31a66b.png"></li>
                                <li class="icon_open_color_slc " rel="#3074c1"><img src="../../assets/img/3074c1.png"></li>
                                <li class="icon_open_color_slc " rel="#00829a"><img src="../../assets/img/00829a.png"></li>
                                <li class="icon_open_color_slc " rel="#159c77"><img src="../../assets/img/159c77.png"></li>
                                <li class="icon_open_color_slc " rel="#cfbaaa"><img src="../../assets/img/cfbaaa.png"></li>
                                <li class="icon_open_color_slc " rel="#707070"><img src="../../assets/img/707070.png"></li>
                                <li class="icon_open_color_slc " rel="#4fb0ac"><img src="../../assets/img/4fb0ac.png"></li>
                                <li class="icon_open_color_slc " rel="#b13279"><img src="../../assets/img/b13279.png"></li>
                              </ul>
                            </div>
                            <div id="iconOpenType_zdy" style="display:none;margin: 11px 5px 5px;height:156px;width:340px;">
                              <div style="float:left;margin-left:20px;border:1px solid #ccc;width:35px;height:135px;background-image:url(../../assets/img/icon_open_on.png)" data-src="../../assets/img/icon_open_on.png" id="iconToggleOnUrl_p">
                              </div>
                              <div style="float:left;margin-left:30px;border:1px solid #ccc;width:35px;height:135px;background-image:url(../../assets/img/icon_open_off.png)" data-src="../../assets/img/icon_open_off.png" id="iconToggleOffUrl_p">
                              </div>
                              <div style="float:left;margin-left:40px;">
                                <div style="margin-top:10px;">
                                  支持gif、jpg、png等格式<br>
                                  尺寸：35px × 135px
                                </div>
                                <div class="upload_btn_cls" style="margin-top:10px;">
                                  <div id="iconOpenType_on_upload" class="webuploader-container">
                                    <div class="webuploader-pick">
                                      上传展开图标
                                    </div>
                                    <div id="rt_rt_1c5d9b8ioarde0j15lcmj4i5m1" style="position: absolute; top: 0px; left: 0px; width: 125px; height: 30px; overflow: hidden; bottom: auto; right: auto;">
                                      <input type="file" name="file" class="webuploader-element-invisible" multiple="multiple" accept="image/*"><label style="opacity: 0; width: 100%; height: 100%; display: block; cursor: pointer; background: rgb(255, 255, 255);"></label>
                                    </div>
                                  </div>
                                  <div id="iconOpenType_off_upload" style="margin-top:15px;" class="webuploader-container">
                                    <div class="webuploader-pick">
                                      上传收起图标
                                    </div>
                                    <div id="rt_rt_1c5d9b8ip11l41i4kshku856ok4" style="position: absolute; top: 0px; left: 0px; width: 125px; height: 30px; overflow: hidden; bottom: auto; right: auto;">
                                      <input type="file" name="file" class="webuploader-element-invisible" multiple="multiple" accept="image/*"><label style="opacity: 0; width: 100%; height: 100%; display: block; cursor: pointer; background: rgb(255, 255, 255);"></label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <input type="hidden" name="iconToggleOnUrl" value="">
                            <input type="hidden" name="iconToggleOffUrl" value="">
                            <input type="hidden" name="icon_open_color_xt" value="#169ada"><!--根据该去#颜色值以及页面左右位置自动确定图片-->
                          </div>
                          <input checked="" name="isIconOpenShow" type="checkbox" class="radio" value="1"><label id="isIconOpenShow_label">&nbsp;咨询图标展开显示</label>
                        </td>
                      </tr>
                      <tr class="adv_mode_sh" style="">
                        <th class="v_top" style="padding-top: 3px;" scope="row">
                          头像：
                        </th>
                        <td>
                          <input name="iconHeadPicType" type="radio" value="1"><label class="iconHeadPicType_label">&nbsp;总是在线</label>&nbsp;&nbsp;
                          <input name="iconHeadPicType" type="radio" checked="" value="2"><label class="iconHeadPicType_label">&nbsp;区别在线/离线</label>&nbsp;
                          <div style="margin-top:5px;border: 1px dashed #ccc;margin-bottom:6px;height:227px;">
                            <div class="upload_btn_cls" id="iconHeadPicType_zs" style="float:left;margin:10px;margin-bottom:0;display:inline;">
                              <div style="border:1px solid #ccc;width:150px;height:150px;background-image:url(../../assets/img/headPicOnline.png)" data-src="../../assets/img/headPicOnline.png" id="headPicOnlineUrl_p">
                              </div>
                              <div style="margin:5px 13px;" id="headPicOnline_upload" class="webuploader-container">
                                <div class="webuploader-pick">
                                  修改在线图片
                                </div>
                                <div id="rt_rt_1c5d9b8ip1i17dt213nq3c4plt7" style="position: absolute; top: 0px; left: 0px; width: 125px; height: 30px; overflow: hidden; bottom: auto; right: auto;">
                                  <input type="file" name="file" class="webuploader-element-invisible" multiple="multiple" accept="image/*"><label style="opacity: 0; width: 100%; height: 100%; display: block; cursor: pointer; background: rgb(255, 255, 255);"></label>
                                </div>
                              </div>
                            </div>
                            <div class="upload_btn_cls" id="iconHeadPicType_qb" style="float:left;margin:10px;margin-bottom:0;display:inline;">
                              <div style="border:1px solid #ccc;width:150px;height:150px;background-image:url(../../assets/img/headPicOffline.png)" data-src="../../assets/img/headPicOffline.png" id="headPicOfflineUrl_p">
                              </div>
                              <div style="margin:5px 13px;" id="headPicOffline_upload" class="webuploader-container">
                                <div class="webuploader-pick">
                                  修改离线图片
                                </div>
                                <div id="rt_rt_1c5d9b8iqhfq170k13m717rk1mana" style="position: absolute; top: 0px; left: 0px; width: 125px; height: 30px; overflow: hidden; bottom: auto; right: auto;">
                                  <input type="file" name="file" class="webuploader-element-invisible" multiple="multiple" accept="image/*"><label style="opacity: 0; width: 100%; height: 100%; display: block; cursor: pointer; background: rgb(255, 255, 255);"></label>
                                </div>
                              </div>
                            </div>
                            <input type="hidden" name="headPicOnlineUrl" value="../../assets/img/headPicOnline.png">
                            <input type="hidden" name="headPicOfflineUrl" value="../../assets/img/headPicOffline.png">
                            <div style="clear:both;padding-left:10px;margin-top:3px;margin-bottom:5px;">
                              支持gif、jpg、png等格式&nbsp;&nbsp;&nbsp;&nbsp;尺寸：150px × 150px
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr class="adv_mode_sh" style="">
                        <td colspan="2">
                          <div class="title_kf_cp" style="float:left;width:91px;">
                            沟通渠道设置
                          </div>
                          <div id="adv_item_add_div" style="float:right;margin-right: 14px;color:#0066ff;cursor:pointer">
                            + 添加元素
                          </div>
                        </td>
                      </tr>
                      <tr class="adv_mode_sh" style="">
                        <td colspan="2">
                          <div style="background:url(../../assets/img/kf_bg0701.gif) repeat-x;height:2px">
                          </div>
                        </td>
                      </tr>
                      <tr class="adv_mode_sh" style="">
                        <td width="425" colspan="2" style="padding:0 2px 6px 6px;">
                          <table style="table-layout:fixed;" id="adv_botlisttable" width="100%" border="0" cellspacing="0" cellpadding="0" class="tab_130109">
                            <tbody>
                            <tr>
                              <td style="text-align:center;" colspan="5">
                                暂无数据，<label id="adv_addbotlabel" style="color:#0066ff;cursor:pointer">立即添加元素</label>
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr id="style_list_2" style="display:none">
                        <th scope="row" class="v_top">
                          客服设置：
                        </th>
                        <td valign="top">
                          <div id="default" style="line-height:25px;">
                            未分组
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <div class="title_kf_cp">
                            位置设置
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <div style="background:url(../../assets/img/kf_bg0701.gif) repeat-x;height:2px">
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" class="v_top">
                          对齐模式：
                        </th>
                        <td>
                          <div class="left">
                            <ul class="dq_li cls" id="ico_position">
                              <li enable="1" rel="lt"></li>
                              <li style="background:#CCCCCC;"></li>
                              <li enable="1" rel="rt" style="margin-right:0" class="index"></li>
                              <li enable="1" rel="lc"></li>
                              <li style="background:#CCCCCC;"></li>
                              <li enable="1" rel="rc" style="margin-right:0"></li>
                              <li enable="1" rel="lb" style="margin-bottom:0"></li>
                              <li style="background:#CCCCCC;margin-bottom:0;"></li>
                              <li enable="1" rel="rb" style="margin:0"></li>
                            </ul>
                            <input name="ico_position" type="hidden" value="rt">
                          </div>
                          <div class="left" style="margin-top:10px;margin-left:15px;">
                            <div style="float:left;margin-bottom:10px;">
                              页面宽度：<input name="pagewidth" type="text" value="1000" class="text1" style="width:40px;">&nbsp;PX&nbsp;
                            </div>
                            <div id="Help" style="margin-top:2px; float:left; cursor:pointer;">
                              <img class="ck_helptips" data-html="请输入您网站页面宽度，方便设置图标与网站之间的距离。" data-offset="1" data-position="bottom right" data-variation="inverted" src="../../assets/img/prompt.gif">
                            </div>
                            <br>
                            <br>
                            <div>
                              X&nbsp;偏移：&nbsp;&nbsp;<input name="offsetx" type="text" value="100" class="text1" style="width:40px;margin-bottom:10px;">&nbsp;PX
                            </div>
                            <div>
                              Y&nbsp;偏移：&nbsp;&nbsp;<input name="offsety" type="text" value="0" class="text1" style="width:40px">&nbsp;PX
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          浮动模式：
                        </th>
                        <td>
                          <input name="position_type" type="radio" value="2"><label class="position_type_label">&nbsp;不漂浮&nbsp;</label>
                          <input name="position_type" type="radio" value="1" checked=""><label class="position_type_label">&nbsp;漂浮&nbsp;</label>
                          <input name="position_type" type="radio" value="3"><label class="position_type_label">&nbsp;动画漂浮&nbsp;</label>
                        </td>
                      </tr>
                      <tr class="botsettr" style="display:none">
                        <td colspan="2">
                          <div class="title_kf_cp" style="float:left;">
                            底部设置
                          </div>
                          <div id="addbotdiv" style="float:right;margin-right: 14px;color:#0066ff;cursor:pointer">
                            + 添加元素
                          </div>
                        </td>
                      </tr>
                      <tr class="botsettr" style="display:none">
                        <td colspan="2">
                          <div style="background:url(../../assets/img/kf_bg0701.gif) repeat-x;height:2px">
                          </div>
                        </td>
                      </tr>
                      <tr class="botsettr" style="display:none">
                        <th style="height:22px;" scope="row">
                          是否启用：
                        </th>
                        <td>
                          <input name="kqbotset" type="radio" checked="" value="1"><label style=" vertical-align: middle">&nbsp;启用&nbsp;</label>
                          <input name="kqbotset" type="radio" value="0"><label style=" vertical-align: middle">&nbsp;禁用&nbsp;</label>
                        </td>
                      </tr>
                      <tr class="botsettr" style="display:none">
                        <td width="425" colspan="2" style="padding:0 2px 6px 6px;">
                          <table style="table-layout:fixed;" id="botlisttable" width="100%" border="0" cellspacing="0" cellpadding="0" class="tab_130109">
                            <tbody>
                            <tr>
                              <td style="text-align:center;" colspan="5">
                                暂无数据，<label id="addbotlabel" style="color:#0066ff;cursor:pointer">立即添加元素</label>
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr class="other_set_sh" style="display:none">
                        <td colspan="2">
                          <div class="title_kf_cp">
                            其他设置
                          </div>
                        </td>
                      </tr>
                      <tr class="other_set_sh" style="display:none">
                        <td colspan="2">
                          <div style="background:url(../../assets/img/kf_bg0701.gif) repeat-x;height:2px">
                          </div>
                        </td>
                      </tr>
                      <tr id="otherim" style="display:none">
                        <td>
                          &nbsp;
                        </td>
                        <td bgcolor="#F7F8FC" height="20">
                          <input name="showotherim" type="checkbox" class="radio" value="1" checked="">
                          <label style=" vertical-align: middle">显示其他通讯工具状态图标</label>
                        </td>
                      </tr>
                      <tr id="showrobot" style="display:none">
                        <td>
                          &nbsp;
                        </td>
                        <td>
                          <input name="showrobot" type="checkbox" class="radio" value="1">
                          <label style=" vertical-align: middle">显示智能机器人客服</label>
                        </td>
                      </tr>
                      <tr>
                        <td style="height:10px;line-height:10px;">
                          &nbsp;
                        </td>
                        <td style="height:10px;line-height:10px;">
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          &nbsp;
                        </th>
                        <td>
                          <input type="hidden" name="bgurl" value="beauty_01">
                          <input id="testhei" name="input" type="submit" value="保存设置" class="button2" style="margin-right:25px;">
                          <input name="input" type="button" value="取消" class="reset button2">
                        </td>
                      </tr>
                      </tbody>
                    </table>
                    <div id="hide_bg_02" style="height:385px;display:none;">
                    </div>
                  </div>
                </td>
                <td width="20">
                  &nbsp;
                </td>
                <td valign="top">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tbody>
                    <tr>
                      <td class="left-rule" rowspan="2" width="18">
                        <div>
                        </div>
                      </td>
                      <td class="tops-rule" height="18">
                      </td>
                    </tr>
                    <tr>
                      <td class="iframe_height" style="height:610px;">
                        <iframe id="preview" name="preview" frameborder="0" src="index.php?c=Preview&amp;info=support" width="100%" height="100%" scrolling="no">
                        </iframe>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              </tbody>
            </table>
          </form>
        </div>

      </div>
      <div class="nav_itemco none">
        <div class="location">您当前的位置：CC客服 &gt; <span>设置中心</span> &gt; <span>邀请窗口</span></div>
          3
      </div>
      <div class="nav_itemco none">
        <div class="location">您当前的位置：CC客服 &gt; <span>设置中心</span> &gt; <span>访客对话窗口</span></div>
        4
      </div>
      <div class="nav_itemco none">
        <div class="location" style="font-size:12px;">您当前的位置：CC客服 &gt; <span>设置中心</span> &gt; <span>直接对话窗口</span></div>
        5
      </div>
      <div class="nav_itemco none">
        <div class="location">您当前的位置：CC客服 &gt; <span>设置中心</span> &gt; <span>访客留言设置</span></div>
        6
      </div>
       <div class="nav_itemco none">
        <div class="location">您当前的位置：CC客服 &gt; <span>设置中心</span> &gt; <span>咨询图标</span></div>
        7
      </div>
      <div class="nav_itemco none">
        <div class="location">您当前的位置：CC客服 &gt; <span>设置中心</span> &gt; <span>邀请窗口</span></div>
         8
      </div>
      <div class="nav_itemco none">
        <div class="location">您当前的位置：CC客服 &gt; <span>设置中心</span> &gt; <span>对话窗口</span></div>
        9
      </div>
      <div class="nav_itemco none">
        <div class="location" style="font-size:12px;">您当前的位置：CC客服 &gt; <span>设置中心</span> &gt; <span>微信互通</span></div>
        10
      </div>
      <div class="nav_itemco none">
        <div class="location">您当前的位置：CC客服 &gt; <span>设置中心</span> &gt; <span>常用语</span></div>
        11
      </div>
      <div class="nav_itemco none">
        <div class="location">您当前的位置：CC客服 &gt; <span>设置中心</span> &gt; <span>常用文件</span></div>
        12
      </div>
      <div class="nav_itemco none">
        <div class="location">您当前的位置：CC客服 &gt; <span>设置中心</span> &gt; <span>产品管理</span></div>
        13
      </div>
      <div class="nav_itemco none">
        <div class="location">您当前的位置：CC客服 &gt; <span>设置中心</span> &gt; <span>自定义URL</span></div>
        14
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'setCenter',
  data () {
    return {
      msg: '设置中心'
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
