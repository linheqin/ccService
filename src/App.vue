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
      <div class="tab_con_item" index="1" v-show="navIndex==1">
        <div id="nav_n_2" class="nav_n_2">
          <ul class="navul_n_2">
            <li v-on:click="tabShowBoxs" index="0" class="nav_nindex"> 
              账号中心
            </li>
            <li v-on:click="tabShowBoxs" index="1">
              商家站点 
            </li>                             
            <li v-on:click="tabShowBoxs" index="2">
              客服管理 
            </li>                             
            <li v-on:click="tabShowBoxs" index="3">
              权限管理 
            </li>                             
            <li v-on:click="tabShowBoxs" index="4">
              设置中心
            </li>                             
            <li v-on:click="tabShowBoxs" index="5">
              客服监控 
            </li>                             
            <li v-on:click="tabShowBoxs" index="6">
              客户管理 
            </li>                             
            <li v-on:click="tabShowBoxs" index="7">
              记录中心 
            </li>
            <li v-on:click="tabShowBoxs" index="8">
              数据统计 
            </li>                             
            <li v-on:click="tabShowBoxs" index="9">
              智能机器人
            </li>   
          </ul>
        </div>
        <div class="navul_con">
            <div v-show="navUlIndex==0">
              <div class="navul_left">
                <div class="side_bar_nav_title">账号中心</div>
                <ul id="accordion" class="accordion">
                  <li class="open">
                    <div class="link">
                      账号信息
                      <i class="el-icon-caret-bottom"></i>
                    </div>
                    <ul class="submenu" >
                      <li class="nav_item sel" data-index="0"><a href="javascript:void(0);">账户信息</a></li>
                      <li class="nav_item"  data-index="1"><a href="javascript:void(0);">账户明细</a></li>
                      <li class="nav_item"  data-index="2"><a href="javascript:void(0);">我的订单</a></li>
                      <li class="nav_item"  data-index="3"><a href="javascript:void(0);">修改密码</a></li>
                      <li class="nav_item"  data-index="4"><a href="javascript:void(0);">专属客服顾问</a></li>
                    </ul>
                  </li>
                  <li>
                    <div class="link">
                      账号信息
                      <i class="el-icon-caret-bottom"></i>
                    </div>
                    <ul class="submenu">
                      <li class="nav_item"  data-index="5"><a href="javascript:void(0);">自动应答</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="navul_right">
                <div class="nav_itemco">
                  <div class="location">您当前的位置：CC客服 &gt; <span>账户中心</span> &gt; <span>账户信息</span></div>
                  <div style="height:28px;border-bottom:1px solid #C9D2CB;position: relative;">
                    <div style="height:28px;width:77px;border-bottom:2px solid #44b549;font-size:18px;color:#346699">个人信息</div><div style="height:18px;line-height:18px;padding:1px;position:absolute;bottom:1px;right:20px;cursor:pointer;background-color:#4FB910;color:#fff;border-radius:3px;width:38px;text-align:center;" id="edit_myinfo">编辑</div>
                  </div>
                  <table style="margin-top:15px;" id="tabinfo_ct" border="0" width="100%" cellspacing="0">
                    <tbody>
                      <tr>
                        <td width="140">
                            <div id="clk_hdpic_ct" style="margin-left:30px;">
                                <div><img id="clk_hdpic_ct_hd" style="border-radius:50%;border:none;" src="./assets/img/em_02.jpg" width="80" height="80"></div>
                                <div style="margin-left:10px;margin-top:3px;">
                                    <a id="chghdpicbtn" class="chghdpic" href="javascript:;">更换头像</a>
                                </div>
                            </div>
                        </td>
                        <td>
                            <table border="0" width="100%" cellspacing="0">
                                <tbody><tr><td width="58" align="right">账 号：</td><td class="tabinfo_ct_val">CC2292391</td><td width="92" align="right">姓 名：</td><td class="tabinfo_ct_val" id="mi_s_realname">超级管理员</td><td width="92" align="right">昵 称：</td><td class="tabinfo_ct_val" id="mi_s_nickname">超级管理员</td></tr>
                                <tr><td width="58" align="right">手 机：</td><td class="tabinfo_ct_val" id="mi_s_mobile">13030885155</td><td width="92" align="right">邮 箱：</td><td class="tabinfo_ct_val" id="mi_s_email">592732096@qq.com</td><td width="92" align="right">Q &nbsp;Q：</td><td class="tabinfo_ct_val" id="mi_s_qq"></td></tr>
                                <tr><td width="58" align="right">角 色：</td><td class="tabinfo_ct_val">超级管理员</td><td width="92" align="right">所在企业：</td><td class="tabinfo_ct_val"><label id="cpnamelbl">小计</label><a href="javascript:;" id="edit_cpinfo">修改</a></td><td></td><td></td></tr>
                            </tbody></table>
                        </td>
                      </tr>   
                    </tbody>
                  </table>
                  <div style="margin-left:0;margin-top:18px;" class="help_info01">
                    <div style="background:#fff;border-radius:2px;" class="kf_index_box right_height help_info02">
                      <div class="tit cls" style="height:36px;line-height:36px;"> 
                        <span class="left" style="_margin-top:7px; color:#346699;"> 使用流程</span>
                        <span class="right"><a href="http://cckf.qycn.com" target="_blank" style="color:#5197bf;">更多帮助</a></span>
                      </div>
                      <div class="mynavi">
                        <ul>
                            <li class="nav_1 sel" v-on:click="liuchengTab(1)" bg="./assets/img/an_1_1.jpg"></li>
                            <li class="nav_2" v-on:click="liuchengTab(2)"  bg="./assets/img/an_2.jpg"></li>
                            <li class="nav_3" v-on:click="liuchengTab(3)" bg="./assets/img/an_3.jpg"></li>
                            <li class="nav_4" v-on:click="liuchengTab(4)" bg="./assets/img/an_4.jpg"></li>
                            <li class="nav_5" v-on:click="liuchengTab(5)" bg="./assets/img/an_5.jpg"></li>
                        </ul>
                        <div class="help_info" style="margin: 0px auto; padding-top: 15px; display: block;" id="nav_1">
                          <span style="color:#3176bc; font-size:14px; line-height:35px;"><strong>什么是多商家站点？</strong></span> <br>
                          <span style="color:#5e5e5e; font-size:12px; line-height:24px;">为了满足电商平台是多商家管理或企业多产品网站管理的需求，CC客服支持多商家站点管理，让您既能统一管理规范旗下商家或产品网站，又能任其拥有个性化设置、独立数据分析。</span> <br><br>
                          <span style="color:#3176bc; font-size:14px; line-height:35px;"><strong>在哪里创建商家站点？</strong></span> <br>
                          <span style="color:#5e5e5e; font-size:12px; line-height:24px;">进入“<a href="#" onclick="parent.nav_sidebar_change('web_manage','?c=Urlmanage'); return false;" style="color:#47a2d3; text-decoration:underline;">商家站点</a>”页面，点击【添加站点】按钮，并填写相关商家或产品网站信息即可创建。</span><br>
                          <span style="color:#5e5e5e; font-size:12px; line-height:24px;"><a style="color:#ef823d; ">温馨提醒：</a><a style="color:#7b7a7a;">创建商家站点后，您还需要以下两个步骤才能开始接待访客。1.把客服分配到站点；2.把代码添加到需要挂在线客服的页面中。</a></span> <br><br>
                          <span style="color:#3176bc; font-size:14px; line-height:35px;"><strong>CC客服系统支持多少种语言？</strong></span> <br>
                          <span style="color:#5e5e5e; font-size:12px; line-height:24px;">CC客服系统目前支持简体中文、繁体中文、英文和俄文等4种语言，更多语言版本正在建设中。</span>
                        </div>
                        <div class="help_info" style="margin: 0px auto; padding-top: 15px; display: none;" id="nav_2">
                          <span style="color:#3176bc; font-size:14px; line-height:35px;"><strong>什么是客服坐席？</strong></span> <br>
                          <span style="color:#5e5e5e; font-size:12px; line-height:24px;">坐席是指客服人员的并发，同时登录使用的客服人员不能超过购买的坐席数量。比如某公司有10个客服人员，购买了5个客服坐席，那么同时只能有5个客服人员登录接待访客。</span> <br><br>
                          <span style="color:#3176bc; font-size:14px; line-height:35px;"><strong>在哪里添加/修改客服信息？</strong></span> <br>
                          <span style="color:#5e5e5e; font-size:12px; line-height:24px;">进入“<a href="#" onclick="parent.nav_sidebar_change('clerk_manage','?c=ClerkManage'); return false;" style="color:#47a2d3; text-decoration:underline;">客服管理</a>”页面，点击【添加客服】按钮，并填写相关信息即可添加客服。如需修改某客服人员的角色或其他信息，则点击对应的“修改”链接，即可修改其信息。</span><br>
                          <span style="color:#5e5e5e; font-size:12px; line-height:24px;"><a style="color:#ef823d; ">温馨提醒：</a><a style="color:#7b7a7a;">创建网站后，您还需要以下两个步骤才能开始接待访客。1.把客服分配到网站；2.把代码添加到需要挂在线客服的页面中。</a></span> <br><br>
                          <span style="color:#3176bc; font-size:14px; line-height:35px;"><strong>如何把客服分配到网站？</strong></span> <br>
                          <span style="color:#5e5e5e; font-size:12px; line-height:24px;">进入“<a href="#" style="color:#47a2d3; text-decoration:underline;" onclick="parent.change_to_func('nav_setting_center','item-1-1'); return false;">设置中心-客服分配页面</a>”，选中右上角需要添加客服的网站站点，然后点击【分配网站客服】选取客服人员点击【确定】即可。</span>
                        </div>
                        <div class="help_info" style="margin: 0px auto; padding-top: 15px; display: block;" id="nav_3">
                          <span style="color:#3176bc; font-size:14px; line-height:35px;"><strong>为什么要添加客服代码？</strong></span> <br>
                          <span style="color:#5e5e5e; font-size:12px; line-height:24px;">只有在您的网站页面添加CC在线客服代码，您的客户才能看到您网站的在线咨询图标从而进行在线咨询。</span> <br><br>
                          <span style="color:#3176bc; font-size:14px; line-height:35px;"><strong>如何添加客服代码？</strong></span> <br>
                          <span style="color:#5e5e5e; font-size:12px; line-height:24px;">进入“<a href="#" style="color:#47a2d3; text-decoration:underline;" onclick="parent.nav_sidebar_change('web_manage','?c=Urlmanage'); return false;">商家站点</a>”后，在“代码管理”一列点击“获取代码”打开代码获取窗口，选择所需代码类型，然后复制框内自动生成的代码，黏贴到您网页的&lt;body&gt;&lt;/body&gt;标签之间即可。</span><br>
                          <span style="color:#5e5e5e; font-size:12px; line-height:24px;"><a style="color:#ef823d; ">温馨提醒：</a><a style="color:#7b7a7a;">创建商家站点后，您还需要以下两个步骤才能开始接待访客。1.把客服分配到站点；2.把代码添加到需要挂在线客服的页面中。</a></span> <br><br>
                          <span style="color:#3176bc; font-size:14px; line-height:35px;"><strong>为什么我把客服代码添加到网站以后，右侧显示和你们官网不一样？</strong></span> <br>
                          <span style="color:#5e5e5e; font-size:12px; line-height:24px;">CC客服系统提供图标、列表、隐藏和自定义等四种显示模式。用户设置时选择不同的显示模块，网站上的显示效果也将不一样。我们网站是采用的是“列表”显示模式。 <a target="_blank" href="http://cckf.qycn.com/html/knowledge/fenggezhuangban/2013/1119/62.html" style="color:#47a2d3; text-decoration:underline;">查看详细&gt;&gt;</a></span>
                        </div>
                        <div class="help_info" style="margin: 0px auto; padding-top: 15px; display: block;" id="nav_4">
                          <span style="color:#3176bc; font-size:14px; line-height:35px;"><strong>如何装扮窗口？</strong></span> <br>
                          <span style="color:#5e5e5e; font-size:12px; line-height:24px;">进入“<a href="#" style="color:#47a2d3; text-decoration:underline;" onclick="parent.change_to_func('nav_setting_center','item-3-3'); return false;">设置中心-窗口设置</a>”相关页面，即可设置邀请窗口、对话窗口、留言窗口。详情请
                              <a target="_blank" href="http://cckf.qycn.com/html/knowledge/fenggezhuangban/2013/1119/20.html" style="color:#47a2d3; text-decoration:underline;">点击这里&gt;&gt;</a></span> <br><br>
                          <span style="color:#3176bc; font-size:14px; line-height:35px;"><strong>邀请窗口怎么自定义？</strong></span> <br>
                          <span style="color:#5e5e5e; font-size:12px; line-height:24px;">进入“<a href="#" style="color:#47a2d3; text-decoration:underline;" onclick="parent.change_to_func('nav_setting_center','item-3-2'); return false;">设置中心-邀请窗口</a>”页面，设置访客邀请窗口主题图片、大小、形状、标题、邀请语、拒绝按钮、同意按钮等。<a target="_blank" href="http://cckf.qycn.com/html/knowledge/fenggezhuangban/2013/1119/117.html" style="color:#47a2d3; text-decoration:underline;">查看详细&gt;&gt;</a></span><br>
                          <span style="color:#5e5e5e; font-size:12px; line-height:24px;"><a style="color:#ef823d; ">温馨提醒：</a><a style="color:#7b7a7a;">创建网站后，您还需要以下两个步骤才能开始接待访客。1.把客服分配到网站；2.把代码添加到需要挂在线客服的页面中。</a></span> <br><br>
                          <span style="color:#3176bc; font-size:14px; line-height:35px;"><strong>专门的访客留言窗口是怎么设置的?</strong></span> <br>
                          <span style="color:#5e5e5e; font-size:12px; line-height:24px;">独立的访客留言窗口可以在管理后台“<a href="#" style="color:#47a2d3; text-decoration:underline;" onclick="parent.change_to_func('nav_setting_center','item-3-4'); return false;">设置中心—访客留言设置</a>”里进行选择，选择“留言到新版留言系统”即可得到独立的访客留言窗口。 <a target="_blank" href="http://cckf.qycn.com/html/knowledge/basic/2013/1119/129.html" style="color:#47a2d3; text-decoration:underline;">查看详细&gt;&gt;</a></span>
                        </div>
                        <div class="help_info" style="margin: 0px auto; padding-top: 15px; display: block;" id="nav_5">
                          <span style="color:#3176bc; font-size:14px; line-height:35px;"><strong>CC客服装扮宝典,集成QQ/旺旺/Skype</strong></span> <br>
                          <span style="color:#5e5e5e; font-size:12px; line-height:24px;">CC客服系统的咨询图标中可集成QQ、skype、淘宝旺旺、阿里旺旺等多种第三方通讯软件账号，为客户开拓更多更便捷的沟通渠道。 <a target="_blank" href="http://cckf.qycn.com/html/knowledge/fenggezhuangban/2013/1119/38.html" style="color:#47a2d3; text-decoration:underline;">查看详细&gt;&gt;</a></span> <br><br>

                          <div style="color:#5e5e5e; font-size:12px; line-height:24px; border-bottom:1px dashed #CCCCCC;"></div> <br>

                          <span style="color:#3176bc; font-size:12px; line-height:35px;font-weight: bold">[QQ]</span><span style="color:#3176bc; font-size:12px; line-height:35px;font-weight: bold">　QQ支持临时会话怎么设置？</span> <br>
                          <span style="color:#838080; font-size:12px; line-height:24px; padding-left:35px;">1、登录腾讯官方网站：http://wp.qq.com/</span><br>
                          <span style="color:#838080; font-size:12px; line-height:24px; padding-left:35px;">2、登录后，点“设置”，按下图所示，在“可发送文件”打勾（必须设置，否则不能发起临时会话）。<a target="_blank" href="http://cckf.qycn.com/html/knowledge/fenggezhuangban/2013/1119/87.html" style="color:#47a2d3; text-decoration:underline;">查看详细&gt;&gt;</a></span> <br>

                          <span style="color:#3176bc; font-size:12px; line-height:35px;font-weight: bold">[QQ]</span><span style="color:#3176bc; font-size:12px; line-height:35px;font-weight: bold">　为什么QQ在线状态为“未启用”?</span> <br>
                          <span style="color:#838080; font-size:12px; line-height:24px; padding-left:35px;">如果您网站的QQ在线状态为“未启用”请点击此链接http://wp.qq.com/set.html启用您的QQ在线状态。注意哪个QQ号显示“未启用”登录哪个账号。 <a target="_blank" href="http://cckf.qycn.com/html/knowledge/fenggezhuangban/2013/1119/162.html" style="color:#47a2d3; text-decoration:underline;">查看详细&gt;&gt;</a></span><br>

                          <span style="color:#3176bc; font-size:12px; line-height:35px;font-weight: bold">[旺旺]</span><span style="color:#3176bc; font-size:12px; line-height:35px;font-weight: bold">　旺旺临时会话如何设置？</span> <br>
                          <span style="color:#838080; font-size:12px; line-height:24px; padding-left:45px;">一、点击阿里软件的“系统设置”，再点“安全设置”，按照下图设置。 <a target="_blank" href="http://cckf.qycn.com/html/knowledge/fenggezhuangban/2013/1119/142.html" style="color:#47a2d3; text-decoration:underline;">查看详细&gt;&gt;</a></span><br>

                          <span style="color:#3176bc; font-size:12px; line-height:35px; font-weight: bold">[Skype]</span><span style="color:#3176bc; font-size:12px; line-height:35px;font-weight: bold">　为什么Skype总是显示离线？</span> <br>
                          <span style="color:#838080; font-size:12px; line-height:24px; padding-left:55px;">参考以下说明设置即可：</span><br>
                          <span style="color:#838080; font-size:12px; line-height:24px; padding-left:55px;">1. 在Skype网站下载并安装最新版本</span><br>
                          <span style="color:#838080; font-size:12px; line-height:24px; padding-left:55px;">2. 打开Skype客户端，在“工具” -&gt; “选项”-&gt; “隐私设置”中勾选“允许在网上我的在线状态显示”； <a target="_blank" href="http://cckf.qycn.com/html/knowledge/fenggezhuangban/2013/1119/164.html" style="color:#47a2d3; text-decoration:underline;">查看详细&gt;&gt;</a></span><br>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="nav_itemco none">
                  <div class="location">您当前的位置：CC客服 &gt; <span>账户中心</span> &gt; <span>账户明细</span></div>
                  <div class="tipsbar_default" style="height:42px;line-height:42px;padding:0;">
                    <p style="padding-left:10px;">
                      <span style="color:#f60;">温馨提醒：</span>
                      您正在使用的是“<span style="color:#FF6600;">试用版</span>”套餐，<span style="color:#f30;">已于2018-01-09 11:21过期</span>，继续使用，请续费！如有疑问，请<a href="javascript:;" onclick="window.open('http://kefu.qycn.com/vclient/chat/?websiteid=7987&amp;groupid=24573&amp;originPageTitle=%E8%87%AA%E5%8A%A9%E8%B4%AD%E4%B9%B0-%E8%B4%A6%E6%88%B7%E6%98%8E%E7%BB%86-CC2292391', '_blank', 'toolbar=no,scrollbars=yes,menubar=no,status=no,resizable=yes,location=no')" style="color:#459ae9;"> 联系我们</a>！
                      <a href="?c=AccountCenter&amp;a=userorder&amp;addBackBtn=1" style="display:block;cursor:pointer;height:22px;line-height:22px;margin-top:8px;margin-right:5px;float:right;padding:2px 6px;;background-color:#4FB910;color:white;border-radius:3px;">我的订单</a>
                    </p>
                  </div>
                  <div style="margin-top:20px;">
                    <table class="service_tab" width="100%" border="0" cellspacing="0">
                      <tbody>
                        <tr class="service_tab_th">
                            <td>套餐</td>
                            <td>产品名称</td>
                            <td>数量</td>
                            <td>到期时间</td>
                            <td>剩余时间</td>
                            <td>操作</td>
                        </tr>
                        <tr>
                            <td rowspan="2" style="border-right:1px solid #e8e8e8;font-weight:bold;color:#2f8ebc;">试用版</td>
                            <td>客服坐席</td>
                            <td><span style="color:#006633;">0</span>个</td>
                            <td>2018-01-09 11:21</td>
                            <td><span style="color:red;">0</span>天</td>
                            <td width="186">
                              <a href="?c=AccountCenter&amp;a=purchaseService&amp;act=5">在线购买</a>
                            </td>
                        </tr>
                                        <tr>
                            <td>商家站点</td>
                            <td><span style="color:#006633;">2</span>个</td>
                            <td>-</td>
                            <td>-</td>
                            <td><a href="?c=AccountCenter&amp;a=purchaseService&amp;act=6">增加站点</a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div style="margin-top:20px;color:#444;">
                    <p style="font-size:15px;font-weight:bold;color:#f60;">购买提醒</p>
                    <p style="padding-left:10px;line-height:18px;margin-bottom:5px;padding-bottom: 5px;">
                        <span style="color:#007FF4;line-height:24px;font-weight:bold;">1、CC客服价格？</span><br>
                        CC在线客服系统有<span style="color:#FF3300;">企业版</span>和<span style="color:#FF3300;">高级商务版</span>。<br>企业版，是按客服人数收费的，<span style="color:#FF3300;">599元/年/坐席</span>（含全部功能）；<br>
                        高级商务版，是<span style="color:#FF3300;">3999元/年</span>，无限坐席的（含全部功能），详细你可以在这里了解一下：
                        <a href="http://www.qycn.com/kf/index_35.html?fr=kfbe" target="_blank" style="color:#007FF4;">http://www.qycn.com/kf/index_35.html</a>
                    </p>
                    <p style="padding-left:10px;line-height:18px;margin-bottom:5px;padding-bottom: 5px;">
                        <span style="color:#007FF4;line-height:24px;font-weight:bold;">2、什么是客服坐席？</span><br>
                        客服坐席，是指客服人员的并发，同时登录使用的客服人员不能超过购买的坐席数量。比如某公司有10个客服人员，购买了5个坐席，那么同时只能有5个客服人员登录接待访客。
                    </p>
                    <p style="padding-left:10px;line-height:18px;">
                        <span style="color:#007FF4;line-height:24px;font-weight:bold;">3、使用一段时间后增加坐席，费用如何计算？</span><br>
                        新增坐席的有效期将与原坐席相同。<span style="color:#FF3300;">599元/坐席/年</span>，系统会自动根据使用时间折算费用。例如，现有坐席还有100天到期，需新增2个坐席，则费用计算公式为：100/365*599*2=328.22
                    </p>
                </div>
                </div>
                <div class="nav_itemco none">
                  <div style="margin-top:20px;">
                    <table id="orderinfo_table" class="service_tab" width="100%" border="0" cellspacing="0">
                        <tbody><tr class="service_tab_th">
                            <td>订单编号</td>
                            <td>产品名称</td>
                            <td>创建时间</td>
                            <td>金额（元）</td>
                            <td>状态</td>
                            <td>操作</td>
                        </tr>
                        <tr id="orderinfo_loading">
                          <td align="center" style="font-size:15px;color:#f60;">22232</td>
                          <td align="center" style="font-size:15px;color:#f60;">sdaf</td>
                          <td align="center" style="font-size:15px;color:#f60;">12:44</td>
                          <td align="center" style="font-size:15px;color:#f60;">32</td>
                          <td align="center" style="font-size:15px;color:#f60;">编辑</td>
                          <td align="center" style="font-size:15px;color:#f60;">删除</td>
                        </tr>
                    </tbody>
                  </table>
                </div>
                </div>
                <div class="nav_itemco none">
                  <div class="location">您当前的位置：CC客服 &gt; <span>账号中心</span> &gt; <span>修改密码</span></div>
                  <div class="tipsbar_default" style="padding-left:10px;">
                    <p style="line-height:20px;">
                      <span class="span_dot">●&nbsp;</span>定期更换密码可以让您的账户更加安全，建议密码采用字母和数字混合，并且不短于6位。
                    </p>
                  </div>
                  <div style="width:636px;margin:0 auto;margin-top:25px;">
                    <form id="changepwdform" name="changepwdform" method="post">
                      <table border="0" cellspacing="0" cellpadding="0" class="tab_21">
                        <tbody>
                          <tr>
                              <th scope="row"><span class="fc_red">* </span>请输入原密码：</th>
                              <td>
                                <input type="text" name="stpzdtx1" style="display:none;">
                                <input type="password" name="stpzdtx1" style="display:none;">
                                <input name="oldPassword" id="oldPassword" type="password" class="clktext" style=" width:200px;">
                              </td>
                              <td class="td_hint_str"><div id="oldPasswordTip" style="height: 32px; margin: 0px; padding: 0px; background: transparent;"></div></td>
                          </tr>
                          <tr>
                            <th scope="row"><span class="fc_red">* </span>请输入新密码：</th>
                            <td>
                              <input type="text" name="stpzdtx1" style="display:none;">
                              <input type="password" name="stpzdtx2" style="display:none;">
                              <input name="password1" id="password1" type="password" class="clktext" style=" width:200px;">
                            </td>
                            <td class="td_hint_str"><div id="password1Tip" style="height: 32px; margin: 0px; padding: 0px; background: transparent;"></div></td>
                          </tr>
                          <tr>
                            <th scope="row"><span class="fc_red">* </span>请确认新密码：</th>
                            <td>
                              <input name="password2" id="password2" type="password" class="clktext" style=" width:200px;">
                            </td>
                            <td class="td_hint_str"><div id="password2Tip" style="height: 32px; margin: 0px; padding: 0px; background: transparent;"></div></td>
                          </tr>
                        </tbody>
                      </table>
                      <div style="margin-left:120px;margin-top:20px;">
                        <input type="button" id="submitcppwd" class="button12 button12-save" value="保存">
                        <input type="reset" id="reset" class="button12 button12-cancel" style="margin-left:20px;" value="重置">
                      </div>
                    </form>
                  </div>
                </div>
                <div class="nav_itemco none">
                  <div class="location" style="font-size:12px;">您当前的位置：CC客服 &gt; <span>账户中心</span> &gt; <span>专属客服顾问</span></div>
                  <div style="margin-top:20px;">
                      <table class="service_tab" width="100%" border="0" cellspacing="0">
                          <tbody>
                              <tr>
                                  <td>
                                      <div style="height:143px;">
                                          <div class="zskf_title">售后技术支持（添加代码、问题反馈）</div>
                                          <div class="zskf_cont" style="padding-left:10px;">
                                              <div style="float:left;"><img src="./assets/img/shjszchd_1.png"></div>
                                              <div style="display:inline-block;float:left;text-align:left;line-height:32px;margin-left:25px;">
                                                  <img src="./assets/img/img.png" style="border:none;cursor:pointer">&nbsp;<br>
                                                  Q Q：<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=2355319173&amp;site=qq&amp;menu=yes"><img class="qq" border="0" src="http://wpa.qq.com/pa?p=1:2355319173:4" alt="给我发信息"> 2355319173</a><br>
                                                  电话：020-38888813-8031
                                              </div>
                                          </div>
                                      </div>
                                  </td>
                                  <td>
                                      <div style="border-left:1px solid #DFDEDE;padding-left:25px;height:143px;">
                                          <div class="zskf_title">助理客服顾问（功能操作、产品价格）</div>
                                          <div style="line-height:32px;text-align:left;padding-left:15px;">
                                              <img src="./assets/img/img1.png" style="border:none;cursor:pointer">
                                              <span style="margin-left:18px;">Q Q：<a target="_blank"><img class="qq" border="0"  src="./assets/img/button_old_41.gif" alt="给我发信息"> 2355734802</a> &nbsp;电话：020-38888813-817</span><br>
                                              <img src="./assets/img/img1.png" style="border:none;cursor:pointer">
                                              <span style="margin-left:18px;">Q Q：<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=2355620728&amp;site=qq&amp;menu=yes"><img class="qq" border="0" src="./assets/img/button_old_41.gif" alt="给我发信息"> 2355620728</a> &nbsp;电话：020-38888813-818</span><br>
                                          </div>
                                      </div>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <div style="box-shadow: 0px 0px 12px rgba(6, 6, 6, 0.2);margin-top:30px;border-radius:5px;line-height:26px;padding:10px 25px;color:#555;font-size:16px;">
                          如果您对我们的服务有任何的意见或建议，欢迎联系我们（服务时间：周一至周五 9:30-18:00）！<br>
                          投诉建议热线：020-38888813-818<br>
                          <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=2280633612&amp;site=qq&amp;menu=yes"><img class="qq" border="0" src="http://wpa.qq.com/pa?p=1:2280633612:4" alt="给我发信息"> 2280633612</a>
                      </div>
                  </div>
                </div>
                <div class="nav_itemco none">
                  <div class="location">您当前的位置：CC客服 &gt; <span>我的设置</span> &gt; <span>自动应答</span></div>
                  <div style="height:28px;border-bottom:1px solid #C9D2CB;position: relative;margin-bottom:10px;margin-top:5px;">
                    <div style="height:28px;width:153px;border-bottom:2px solid #44b549;font-size:18px;color:#346699">PC访客端自动应答</div>
                  </div>
                  <div style="padding-left:20px;padding-top:5px">
                    <input checked="" name="pcAutoReplyOn" id="pcAutoReplyOn" type="checkbox" class="radio" value="1"><label style="font-size:13px;cursor:pointer;" for="pcAutoReplyOn">&nbsp;接受对话时自动回复，下面是回复内容</label>
                    <div id="spanTime" class="bjq"></div>
                  </div>
                  <div style="width:770px;text-align:center;margin-top:30px;">
                      <input type="hidden" name="subact" value="1">
                      <input type="submit" class="btn_form_s" value="保存">
                      <input type="reset" class="btn_form_c" style="margin-left:30px;" value="重置">
                  </div>
                  <!-- <div style="height:28px;border-bottom:1px solid #C9D2CB;position: relative;margin-bottom:10px;margin-top:5px;">
                    <div style="height:28px;width:170px;border-bottom:2px solid #44b549;font-size:18px;color:#346699">移动访客端自动应答</div>
                  </div>
                  <div style="padding-left:20px;padding-top:5px">
                    <input checked="" name="pcAutoReplyOn" id="pcAutoReplyOn" type="checkbox" class="radio" value="1"><label style="font-size:13px;cursor:pointer;" for="pcAutoReplyOn">&nbsp;接受对话时自动回复，下面是回复内容</label>
                    <div id="spanTime1" class="bjq"></div>
                     -->
                  </div>
                </div>
              </div>
            </div>
            <div v-show="navUlIndex==1" >2</div>
            <div v-show="navUlIndex==2" >3</div>
            <div v-show="navUlIndex==3" >4</div>
            <div v-show="navUlIndex==4" >5</div>
            <div v-show="navUlIndex==5" >6</div>
            <div v-show="navUlIndex==6" >7</div>
            <div v-show="navUlIndex==7" >8</div>
            <div v-show="navUlIndex==8" >9</div>
            <div v-show="navUlIndex==9" >10</div>
        </div>
      </div>
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
      navUlIndex: 0,
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
      var $editor = $('#spanTime').wangEditor();
      // var $edito1r = $('#spanTime1').wangEditor();
    },
    tabShowBoxs: function(event){
      console.log(event);

      var ement = event.target;
      var ementIndex = ement.attributes[0].value;
      this.navUlIndex = ementIndex;


      var siblingElem = this.getSiblins(ement);
      for (var i = 0; i < siblingElem.length; i++) {
        siblingElem[i].className = "";      
      }

      // siblingElem.className= "";
      ement.className = "nav_nindex";
      console.log(siblingElem);

    },
    getNanIndex: function(ementIndex) {
      this.chat_index = ementIndex;
    },
    liuchengTab: function(index) {
      console.log($(".mynavi li").eq(index-1));
      $(".mynavi li").eq(index-1).addClass('sel').siblings().removeClass('sel');
      $("#nav_"+ index).siblings("div").css("display", "none");
      $("#nav_"+ index).css("display","block");
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
    tabShowBox: function(event){
      console.log(event);
      var ement = event.target;
      var ementIndex = ement.attributes[0].value;
      this.chat_index = ementIndex;


      var siblingElem = this.getSiblins(ement);
      for (var i = 0; i < siblingElem.length; i++) {
        siblingElem[i].className = "";      
      }

      // siblingElem.className= "";
      ement.className = "sel";
      console.log(siblingElem);

    },
    getNanIndex: function(ementIndex) {
      this.chat_index = ementIndex;
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
  .side_bar_nav_title {
    height: 35px;
    background: url(./assets/img/back7.jpg) no-repeat;
    width: 100%;
    font-size: 14px;
    color: #c57015;
    text-indent: 38px;
    line-height: 38px;
    font-weight: bold;
  }
  .location { 
    background:url(./assets/img/bg-only10.gif) no-repeat left center;
  }
  .nav_n_2 {
    padding: 0 15px;
    position: relative;
    height: 36px;
    background: url(./assets/img/navbg.jpg) repeat-x left;
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
.mynavi ul{width:751px; height:45px; overflow: hidden; background: url('./assets/img/hui_1.jpg'); position: relative}
.mynavi ul li{width:158px; height: 100%; position: absolute; top: 0px; cursor: pointer; }
.mynavi ul li.nav_1{
  left:0px; 
}
.mynavi ul li.nav_2{left:150px;}
.mynavi ul li.nav_3{left:300px;}
.mynavi ul li.nav_4{left:450px;}
.mynavi ul li.nav_5{left:600px;}

.mynavi ul li:nth-child(1).sel {
  background:url(./assets/img/an_1.jpg);
}
.mynavi ul li:nth-child(2).sel {
  background:url(./assets/img/an_2.jpg);
}
.mynavi ul li:nth-child(3).sel {
  background:url(./assets/img/an_3.jpg);
}
.mynavi ul li:nth-child(4).sel {
  background:url(./assets/img/an_4.jpg);
}
.mynavi ul li:nth-child(5).sel {
  background:url(./assets/img/an_5.jpg);
}
.help_info {display:none;}

</style>