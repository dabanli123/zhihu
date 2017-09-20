<template>
    <div class="ContentItem-actions">
        <span>
            <button class="VoteButton--up" aria-label="赞同" type="button">
                <svg viewBox="0 0 20 18" class="Icon VoteButton-upIcon Icon--triangle" width="9" height="16" aria-hidden="true" style="height: 16px; width: 9px;">
                    <title></title>
                    <g>
                        <path d="M0 15.243c0-.326.088-.533.236-.896l7.98-13.204C8.57.57 9.086 0 10 0s1.43.57 1.784 1.143l7.98 13.204c.15.363.236.57.236.896 0 1.386-.875 1.9-1.955 1.9H1.955c-1.08 0-1.955-.517-1.955-1.9z"></path>
                    </g>
                </svg>
                702
            </button>
            <button class="VoteButton--down" aria-label="反对" type="button">
                <svg viewBox="0 0 20 18" class="Icon VoteButton-downIcon Icon--triangle" width="9" height="16" aria-hidden="true" style="height: 16px; width: 9px;">
                    <title></title>
                    <g>
                        <path d="M0 15.243c0-.326.088-.533.236-.896l7.98-13.204C8.57.57 9.086 0 10 0s1.43.57 1.784 1.143l7.98 13.204c.15.363.236.57.236.896 0 1.386-.875 1.9-1.955 1.9H1.955c-1.08 0-1.955-.517-1.955-1.9z"></path>
                    </g>
                </svg>
            </button>
        </span>
        <button class="comments-action" type="button">
            <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" class="Icon Icon--comment Icon--left" width="12" height="16" aria-hidden="true" style="height: 16px; width: 12px;">
                <title></title>
                <g>
                    <path d="M7.24 16.313c-.272-.047-.553.026-.77.2-1.106.813-2.406 1.324-3.77 1.482-.16.017-.313-.06-.394-.197-.082-.136-.077-.308.012-.44.528-.656.906-1.42 1.11-2.237.04-.222-.046-.45-.226-.588C1.212 13.052.027 10.73 0 8.25 0 3.7 4.03 0 9 0s9 3.7 9 8.25-4.373 9.108-10.76 8.063z"></path>
                </g>
            </svg>
            302 条评论
        </button>
        <button class="ShareMenu" type="button">
            <svg viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg" class="Icon Icon--share Icon--left" width="13" height="16" aria-hidden="true" style="height: 16px; width: 13px;">
                <title></title>
                <g>
                    <path d="M.93 3.89C-.135 4.13-.343 5.56.614 6.098L5.89 9.005l8.168-4.776c.25-.128.477.197.273.388L7.05 10.66l.926 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.243c.584-.892-.212-2.03-1.234-1.796L.93 3.89z"></path>
                </g>
            </svg>
            分享
        </button>
        <button class="collection" type="button">
            <svg viewBox="0 0 20 20" class="Icon Icon--star Icon--left" width="13" height="16" aria-hidden="true" style="height: 16px; width: 13px;">
                <title></title>
                <g>
                    <path d="M3.515 17.64l.918-5.355-3.89-3.792c-.926-.902-.64-1.784.64-1.97L6.56 5.74 8.964.87c.572-1.16 1.5-1.16 2.072 0l2.404 4.87 5.377.783c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.22 1.274-.532 1.82-1.676 1.218L10 16.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z"></path>
                </g>
            </svg>
            收藏
        </button>
        <button class="thank-action" type="button">
            <svg width="14" height="16" viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg" class="Icon Icon--thank Icon--left" aria-hidden="true" style="height: 16px; width: 14px;">
                <title></title>
                <g>
                    <path d="M0 5.437C0 2.505 2.294.094 5.207 0 7.243 0 9.092 1.19 10 3c.823-1.758 2.65-3 4.65-3C17.546 0 20 2.507 20 5.432 20 13.24 11.842 18 10 18 8.158 18 0 13.24 0 5.437z" fill-rule="evenodd"></path>
                </g>
            </svg>
            感谢
        </button>
        <button class="point" type="button" style="padding: 0px 1px;">
            <svg viewBox="0 0 18 4" class="Icon Icon--dots" width="14" height="16" aria-hidden="true" style="height: 16px; width: 14px;">
                <title></title>
                <g>
                    <g>
                        <circle cx="2" cy="2" r="2"></circle>
                        <circle cx="9" cy="2" r="2"></circle>
                        <circle cx="16" cy="2" r="2"></circle>
                    </g>
                </g>
            </svg>
        </button>
        <button class="packup" type="button">
            收起
            <svg viewBox="0 0 10 6" class="Icon ContentItem-arrowIcon Icon--arrow" width="10" height="16" aria-hidden="true" style="height: 16px; width: 10px;">
                <title></title>
                <g>
                    <path d="M8.716.217L5.002 4 1.285.218C.99-.072.514-.072.22.218c-.294.29-.294.76 0 1.052l4.25 4.512c.292.29.77.29 1.063 0L9.78 1.27c.293-.29.293-.76 0-1.052-.295-.29-.77-.29-1.063 0z"></path>
                </g>
            </svg>
        </button>
    </div>
</template>
<style lang="less">
.ContentItem-actions {
    height: 52px;
    line-height: 52px;
    display: flex;
    font-size: 15px;
    color: #555;
    position: relative;
    span,
    .LikeButton {
        height: 32px;
        button {
            line-height: 30px;
            height: 30px;
            color: #2d84cc;
            padding: 0 12px;
            font-size: 14px;
            border-radius: 3px;
            border: 1px solid #ccd8e1;
            background: #ebf3fb;
            border-color: #ebf3fb;
            svg {
                vertical-align: text-bottom;
                fill: #2d84cc;
            }
            .VoteButton-downIcon {
                transform: rotate(180deg);
            }
        }
    }
    .comments-action,
    .ShareMenu,
    .collection,
    .thank-action,
    .point,
    .LikeButton,
    .reportbtn {
        margin-left: 24px;
        font-size: 14px;
        border: none;
        text-align: center;
        background: none;
        color: #8590a6;
        svg {
            vertical-align: text-bottom;
            fill: #9fadc7;
        }
    }
    .packup{
        height: 52px;
        line-height: 52px;
        margin-left: 24px;
        font-size: 14px;
        border: none;
        text-align: center;
        background: none;
        color: #8590a6;
        position: absolute;
        right:0;
        svg {
            vertical-align: text-bottom;
            fill: #9fadc7;
            transform: rotate(180deg);
        }
    }
}
</style>
