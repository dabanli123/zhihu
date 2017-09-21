<template>
    <div class="right-top">
        <ul class="categoryList">
            <li class="categoryItem liveItem">
                <a class="Button Button--plain" href="/lives" target="_blank" title="Live" type="button">
                    <span class="categoryIcon">
                        <svg width="17" height="23" viewBox="46 20 19 25" version="1.1" xmlns="http://www.w3.org/2000/svg" class="Icon Icon--live" aria-hidden="true" style="height: 23px; width: 17px;">
                            <title></title>
                            <g>
                                <path d="M56.8810215,30.7568815 L58.7723286,21.7731732 C58.9982334,20.7001257 58.5864825,20.4834196 57.8486846,21.3080173 L47.2229603,33.183826 C46.4842592,34.0094332 46.7865222,34.6768922 47.8960663,34.6768923 L54.1189785,34.6768926 L52.2276714,43.6606009 C52.0017666,44.7336483 52.4135175,44.9503545 53.1513154,44.1257568 L63.7770397,32.2499481 C64.5157408,31.4243409 64.2134778,30.7568819 63.1039337,30.7568818 L56.8810215,30.7568815 Z" stroke="none" fill-rule="evenodd"></path>
                            </g>
                        </svg>
                    </span>
                    <span class="categoryLabel">Live</span>
                </a>
            </li>
            <li class="categoryItem pubItem">
                <a class="Button Button--plain" href="/pub/" target="_blank" title="书店" type="button">
                    <span class="categoryIcon">
                        <svg width="16" height="19" viewBox="1027 99 15 19" version="1.1" xmlns="http://www.w3.org/2000/svg" class="Icon Icon--pub" aria-hidden="true" style="height: 19px; width: 16px;">
                            <title></title>
                            <g>
                                <path d="M1027.80947,117.581364 C1028.14017,117.825892 1028.54916,117.970588 1028.99188,117.970588 L1040.00812,117.970588 C1041.1066,117.970588 1042,117.078791 1042,115.978704 L1042,104.962472 C1042,103.940693 1041.2284,103.096361 1040.23529,102.983423 L1040.23529,114.083493 C1040.23529,115.186197 1039.33998,116.199626 1038.25494,116.344462 L1030.30389,117.405804 C1030.06799,117.437292 1029.84173,117.425823 1029.63192,117.37748 L1036.12083,115.345921 C1037.18227,115.013604 1038.02941,113.853108 1038.02941,112.748737 L1038.02941,101.209023 C1038.02941,100.111989 1037.17491,99.4769116 1036.12083,99.8069259 L1028.90859,102.064949 C1027.84715,102.397266 1027,103.557762 1027,104.662133 L1027,116.201847 C1027,116.872978 1027.31981,117.371216 1027.80947,117.581364 Z" stroke="none" fill-rule="evenodd"></path>
                            </g>
                        </svg>
                    </span>
                    <span class="categoryLabel">书店</span>
                </a>
            </li>
            <li class="categoryItem orgItem">
                <a class="Button Button--plain" href="/roundtable" target="_blank" title="圆桌" type="button">
                    <span class="categoryIcon">
                        <svg viewBox="0 0 20 19" class="Icon Icon--org" width="19" height="18" aria-hidden="true" style="height: 18px; width: 19px;">
                            <title></title>
                            <g>
                                <path d="M12.207 12.373c-.758-.434-1.425-.975-1.99-1.615-.045.123-.085.247-.124.37-.17.65-.332 1.706-.095 2.977.293 1.443 1.077 2.738 2.206 3.64.467.277 1.084.446 1.696.446.69 0 1.337-.2 1.873-.58 1.362-.98 1.742-2.82.917-4.26-1.53.138-3.11-.2-4.483-.963zm-1.16-3.817c.134-.027.266-.057.39-.085.98-.26 1.863-.73 2.622-1.41 1.1-.98 1.83-2.31 2.06-3.74.02-1.25-.76-2.51-1.89-3.02-.43-.2-.88-.3-1.34-.3-1.18 0-2.24.62-2.82 1.63.89 1.29 1.38 2.84 1.38 4.4 0 .866-.14 1.73-.41 2.533zm-2.33.402l-.26-.29C7.98 8.17 7.15 7.486 5.937 7.09c-.648-.216-1.322-.325-2.002-.325-.78 0-1.545.142-2.267.423-1.085.616-1.77 1.898-1.656 3.167.18 1.665 1.576 2.924 3.245 2.926.676-1.44 1.737-2.61 3.08-3.4.747-.44 1.545-.75 2.38-.92zM3.983 5.463c1.31 0 2.635.344 3.826.994.76.438 1.44.977 1.98 1.585.03-.112.07-.226.09-.34.25-1.028.274-2.026.077-2.97-.28-1.392-1.067-2.69-2.21-3.652C7.29.815 6.662.65 6.05.65c-.687 0-1.33.2-1.854.58-1.38.994-1.75 2.83-.897 4.264.22-.02.45-.03.68-.03zm12.78.113c-.68 1.45-1.752 2.624-3.11 3.403-.742.44-1.54.75-2.376.92l.24.27c.507.5 1.353 1.18 2.54 1.57.653.22 1.334.32 2.025.32h.002c.77 0 1.526-.14 2.247-.4 1.12-.64 1.79-1.89 1.65-3.16-.15-1.65-1.57-2.938-3.21-2.938zm-7.817 4.672c-.13.027-.26.055-.39.086-.657.196-1.67.614-2.626 1.442-1.098.976-1.83 2.308-2.055 3.745.003 1.26.772 2.49 1.914 3.02.42.2.87.29 1.34.29 1.17 0 2.23-.61 2.82-1.63-.9-1.28-1.38-2.8-1.41-4.41 0-.87.14-1.73.4-2.53z" fill-rule="evenodd"></path>
                            </g>
                        </svg>
                    </span>
                    <span class="categoryLabel">圆桌</span>
                </a>
            </li>
            <li class="categoryItem editItem">
                <a class="Button Button--plain" href="//zhuanlan.zhihu.com" target="_blank" title="专栏" type="button">
                    <span class="categoryIcon">
                        <svg width="18" height="18" viewBox="137 93 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" class="Icon Icon--edit" aria-hidden="true" style="height: 18px; width: 18px;">
                            <title></title>
                            <g>
                                <path d="M138.075539,106.965579 C138.274765,106.301475 138.635899,105.697055 139.126601,105.206448 L147.69431,96.6372993 C147.792523,96.5390716 147.925848,96.483871 148.064884,96.483871 C148.20392,96.483871 148.337246,96.5390716 148.435458,96.6372993 L151.362638,99.5639294 C151.567293,99.7686586 151.567293,100.100102 151.362638,100.304831 L142.795296,108.873561 C142.304393,109.364431 141.699005,109.725891 141.033521,109.925468 L137.506087,110.98345 C137.36755,111.024921 137.217388,110.987119 137.115128,110.88503 C137.012868,110.782941 136.975027,110.633054 137.016606,110.494788 L138.075539,106.965579 Z M154.557712,94.8309894 C155.147429,95.4210944 155.147429,96.3765796 154.557712,96.9666846 L152.865169,98.658988 C152.770858,98.7533952 152.642809,98.8064516 152.509273,98.8064516 C152.375738,98.8064516 152.247689,98.7533952 152.153377,98.658988 L149.341054,95.8466644 C149.14438,95.6499126 149.14438,95.331282 149.341054,95.1345303 L151.033647,93.4422269 C151.316628,93.1590691 151.700783,92.9999621 152.101377,93 C152.501972,93.0000379 152.886096,93.1592176 153.169024,93.4424289 L154.557712,94.8309894 Z" stroke="none" fill-rule="nonzero"></path>
                            </g>
                        </svg>
                    </span>
                    <span class="categoryLabel">专栏</span>
                </a>
            </li>
            <li class="categoryItem infinityItem">
                <a class="Button Button--plain" href="/zhi" target="_blank" title="付费咨询" type="button">
                    <span class="categoryIcon">
                        <svg viewBox="0 0 38 36" xmlns="http://www.w3.org/2000/svg" class="Icon Icon--infinity" width="19" height="18" aria-hidden="true" style="height: 18px; width: 19px;">
                            <title></title>
                            <g>
                                <path d="M17.607 14h-5.11c-.277 0-.497.226-.497.505v.99c0 .29.223.505.498.505H18v3h-5.502c-.278 0-.498.226-.498.505v.99c0 .29.223.505.498.505H18v4.5c0 .27.226.5.505.5h.99c.29 0 .505-.224.505-.5V21h5.502c.278 0 .498-.226.498-.505v-.99c0-.29-.223-.505-.498-.505H20v-3h5.502c.278 0 .498-.226.498-.505v-.99c0-.29-.223-.505-.498-.505h-5.11l4.768-5.134c.192-.207.184-.522-.008-.714l-.804-.804c-.187-.187-.498-.183-.684.02L19 12.5l-4.664-5.13c-.192-.21-.492-.214-.684-.022l-.804.804c-.187.187-.196.512-.008.714L17.607 14zM19 33.057c-2.092 0-4.105-.294-5.988-.837C12 32.57 3 36.46 4 34.515c1-1.944 3-5.347 1.53-6.33C2.11 25.194 0 21.076 0 16.528 0 7.4 8.507 0 19 0s19 7.4 19 16.53c0 9.127-8.507 16.527-19 16.527z" fill-rule="evenodd"></path>
                            </g>
                        </svg>
                    </span>
                    <span class="categoryLabel">付费咨询</span>
                </a>
            </li>
        </ul>
    </div>
</template>
<style lang="less">
.right-top {
    width: 296px;
    height: 175px;
    margin-bottom: 10px;
    background: #fff;
    overflow: hidden;
    border-radius: 2px;
    box-sizing: border-box;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .1);
    .categoryList {
        margin: 20px 0;
        padding: 0 10px;
        display: flex;
        flex-wrap: wrap;
        margin-bottom: -5px;
        font-size: 14px;
        .categoryItem {
            width: 33%;
            display: flex;
            margin-bottom: 25px;
            list-style-type: none;
            a {
                text-decoration: none;
                display: flex;
                flex: 1;
                align-items: center;
                position: relative;
                cursor: pointer;
                flex-direction: column;
                color: #8590a6;
                font-size: 15px;
                .categoryIcon {
                    display: flex;
                    justify-content: center;
                    align-items: flex-end;
                    width: 25px;
                    height: 25px;
                    margin-bottom: 10px;
                }
            }
        }
        .liveItem {
            a {
                &:hover {
                    color: #ffcf00;
                }
                svg {
                    fill: #ffcf00;
                }
            }
        }
        .pubItem {
            a {
                &:hover {
                    color: #43d480;
                }
                svg {
                    fill: #43d480;
                }
            }
        }
        .orgItem {
            a {
                &:hover {
                    color: #0084ff;
                }
                svg {
                    fill: #0084ff;
                }
            }
        }
        .editItem {
            a {
                &:hover {
                    color: #0f88eb;
                }
                svg {
                    fill: #0f88eb;
                }
            }
        }
        .infinityItem {
            a {
                &:hover {
                    color: #5478f0;
                }
                svg {
                    fill: #5478f0;
                }
            }
        }
    }
}
</style>
