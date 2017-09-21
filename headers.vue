<template>
    <div class="headers-box">
        <div class="headers-small-box">
            <div class="headers-zhihu">
                <img src="../images/logo2.png" alt="">
            </div>
            <div class="appheaders">
                <a href="#" class="active">首页</a>
                <a href="#">发现</a>
                <a href="#">话题</a>
            </div>
            <div class="search-box" role="search">
                <div class="inputbox">
                    <input type="text" placeholder="搜索你感兴趣的内容...">
                </div>
                <div class="problem">提问</div>
            </div>
            <div class="userInfo">
                <div class="notifications"><img src="../images/notifications.png" alt=""></div>
                <div class="messages"><img src="../images/messages.png" alt=""></div>
                <div class="Personal-center"></div>
            </div>
        </div>
    </div>
</template>
<style lang="less">
    .headers-box{
        height: 52px;
        position: fixed;
        z-index: 989;
        top:0;
        left: 0;
        width:100%;
        display: inline-block;
        background:#fff;
        .headers-small-box{
            width:1000px;
            height: 52px;
            position: relative;
            padding:0 16px;
            margin:0 auto;
            display: flex;
            align-items:center;
            .headers-zhihu{
                width:65px;
                height: 30px;
                img{
                    width:100%;
                    height:100%;
                }
            }
            .appheaders{
                margin: 0 18px 0 27px;
                height: 30px;
                line-height:30px;
                font-size:15px;
                display:flex;
                a{
                    flex:1;
                    text-decoration: none;
                    color:#8590a6;
                    padding:0 15px;
                    font-size:15px;
                    white-space:nowrap;
                    &:first-child{
                        padding-left:0;
                    }
                    &.active{
                        color:#333;
                    }
                }
            }
            .search-box{
                width:400px;
                height:34px;
                display:flex;
                font-size:15px;
                .inputbox{
                    width:326px;
                    height: 34px;
                    line-height:34px;
                    border:1px solid #e7eaf1;
                    position: relative;
                    background:#f7f8fa;
                    box-sizing:border-box;
                    border-radius:3px;
                    padding:4px 10px;
                    display: flex;
                    font-size:14px;
                    input{
                        line-height:24px;
                        height: 24px;
                        flex:1;
                        padding:0;
                        font-size:14px;
                        border:none;
                        outline: none;
                        resize:none;
                        overflow:hidden;
                        background:#f7f8fa;
                    }
                }
                .problem{
                    color:#fff;
                    font-size:14px;
                    background: #0f88ed;
                    padding:0 12px;
                    margin-left:16px;
                    line-height:30px;
                    border:1px solid #0f88ed;
                    border-radius:3px;
                    text-align:center;
                }
            }
            .userInfo{
                width:326px;
                height: 31px;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                .notifications{
                    width:20px;
                    height: 20px;
                    margin-right: 40px;
                }
                .messages{
                    width:20px;
                    height: 20px;
                    margin-right: 40px;
                }
                .Personal-center{
                    border:1px solid black;
                    width:30px;
                    height:30px;
                }
            }
        }
    }
</style>
