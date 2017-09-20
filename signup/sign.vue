<template>
    <div class="sign-box">
        <div class="sign-body">
            <div class="sign-header">
                <div class="sign-img">
                    <img src="../images/logo.png" alt="">
                </div>
                <h2>与世界分享你的知识、经验和见解</h2>
            </div>
            <div class="sign-content">
                <div class="tabnavs">
                    <a href="javascript:;" :class="{active:flag==1}" @click="onActive(1)">注册</a>
                    <a href="javascript:;" :class="{active:flag==2}" @click="onActive(2)">登录</a>
                </div>
                <!-- 注册 -->
                <div class="signup" v-if="flag==1">
                        <div class="group-inputs">
                            <div class="name">
                                <input type="text" class="input-init" aria-label="姓名" placeholder="姓名">
                            </div>
                            <div class="tel">
                                <input type="text" class="input-init" aria-label="手机号" placeholder="手机号">
                            </div>
                            <div class="pwd">
                                <input type="password" class="input-init" aria-label="密码" placeholder="密码（不少于6位）" autocomplete="off">
                            </div>
                        </div>
                        <div class="button-submit">注册知乎</div>
                    <p class="agreenment-tip">点击「注册」按钮，即代表你同意
                        <a href="#">《知乎协议》</a>
                    </p>
                    <a href="#" class="signup-entry">注册机构号</a>
                    <div class="qrcode">
                        下载知乎App
                    </div>
                </div>
                <!-- 登录 -->
                <div class="signin" v-else>
                        <div class="group-inputs">
                            <div class="name">
                                <input type="text" class="input-init" aria-label="手机号或邮箱" placeholder="手机号或邮箱">
                            </div>
                            <div class="pwd">
                                <input type="password" class="input-init" aria-label="密码" placeholder="密码">
                                
                            </div>
                        </div>
                        <div class="signin-button">
                           登录
                        </div>
                        <div class="signin-other">
                            <a href="#" class="unable-login">无法登录？</a>
                        </div>
                      
                   
                    <div class="qrcode">
                        下载知乎APP
                    </div>
                </div>
            </div>
        </div>
       <!-- <div class="sign-footer">
            <a target="_blank" href="https://zhuanlan.zhihu.com">知乎专栏</a>
            <span class="dot">·</span>
            <a target="_blank" href="/roundtable">知乎圆桌</a>
            <span class="dot">·</span>
            <a target="_blank" href="/explore" data-za-c="explore" data-za-a="visit_explore" data-za-l="home_bottom_explore">发现</a>
            <span class="dot">·</span>
            <a target="_blank" href="/app">移动应用</a>
            <span class="dot">·</span>
            <a href="/contact" class="footer-mobile-show">联系我们</a>
            <span class="dot">·</span>
            <a target="_blank" href="/careers">来知乎工作</a>
            <br>
            <span>© 2017 知乎</span>
            <span class="dot">·</span>
            <a href="http://www.miibeian.gov.cn/" target="_blank">京 ICP 证 110745 号</a>
            <span class="dot">·</span>
            <span>京公网安备 11010802010035 号</span>
            <span class="dot">·</span>
            <a href="http://zhstatic.zhihu.com/assets/zhihu/publish-license.jpg" target="_blank">出版物经营许可证</a>
            <br>
            <a target="_blank" href="https://zhuanlan.zhihu.com/p/28852607">侵权举报</a>
            <span class="dot">·</span>
            <a target="_blank" href="http://www.12377.cn">网上有害信息举报专区</a>
            <span class="dot">·</span>
            <a target="_blank" href="/jubao">儿童色情信息举报专区</a>
            <span class="dot">·</span>
            <span>违法和不良信息举报：010-82716601</span>
            <div class="chengxing">
                
            </div>-->
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                flag:1
            }
        },
        methods:{
            onActive(num){
                this.flag = num;
            }
        }

    }
</script>
<style lang="less">
    *{
        padding:0;
        margin:0;
    }
    a{
        text-decoration: none;
    }
    .sign-box{
        background: #F7FAFC;
        text-align: center;
        .sign-body{
            margin: 0 auto;
            width:300px;
            min-height:590px;
            display: inline-block;
            text-align: left;
            white-space: normal;
            vertical-align: middle;
            .sign-header{
                width:300px;
                text-align: center;
                color: #555;
                display: block;
                .sign-img{
                    width:175px;
                    height: 100px;
                    display: block;
                    margin: 0 auto;
                    img{
                        width:175px;
                        height:100px;
                    }
                }
                h2{
                    font-size: 18px;
                    margin: 25px 0 20px;
                    font-weight: 400;
                    line-height: 1;
                }
            }
            .sign-content{
                width:300px;
                height:360px;
                text-align: center;
                .tabnavs{
                    height:44px;
                    font-size:18px;
                    a{
                        width:72px;
                        height:35px;
                        display:inline-block;
                        line-height: 35px;
                        opacity: .7;
                        color:#555;
                        transition: opacity .15s,color .15s; 
                        &.active{
                            color:#0f88eb;
                            opacity:1;
                            border-bottom:2px solid #0f88eb;
                        }
                    }
                }
                .signup, .signin{
                    .group-inputs{
                        margin:1px;
                        border:1px solid #d5d5d5;
                        border-radius:3px;
                        div {
                            width:100%;
                            border-bottom:1px solid #d5d5d5;

                            &:last-child {
                                border-bottom:none;
                            }
                            .input-init{
                                padding:1em .8em;
                                width:100%;
                                box-sizing: border-box;
                                border:none;
                                height:47px;

                                &::placeholder {
                                    color:#999;
                                }
                            }
                        }
                        
                    }
                    .button-submit, .signin-button{
                        width:300px;
                        height:41px;
                        background:#0f88eb;
                        border:0;
                        border-radius:3px;
                        color:#fff;
                        line-height:41px;
                        margin-top:20px;
                        font-size:15px;
                    }
                    .agreenment-tip{
                        height:22px;
                        line-height:22px;
                        margin-top:21px;
                        color:#999;
                        font-size:13px;
                        a{
                            color:#698ebf;
                        }
                    }
                    .signup-entry{
                        color:#0f88eb;
                        height:25px;
                        line-height:25px;
                        font-size:15px;
                        margin-top:21px;
                        display:block;
                        font-weight:500;
                    }
                    .qrcode{
                        margin-top:21px;
                        height:39px;
                        line-height:39px;
                        color:#5fa6e5;
                        border:1px solid #96c2e9;
                        border-radius:3px;
                        font-size:14px;
                    }
                    .signin-other{
                        height:23px;
                        line-height:23px;
                        margin-top:21px;
                        text-align:right;
                        font-size:14px;
                        a{
                            color:#555;
                        }
                    }
                }
            }
        }
    }
</style>

