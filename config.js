// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给你",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "一个奇妙的相遇",  // 同上...
        "这个相遇让我开心，激动",
        "用你那天的话来解释:\"因为我们很像\"",
        "祝你忧愁少一点，开心、幸运多一点",
        "祝友谊长青，最好的朋友永远陪在身边",
        "爱情丰收，与你相配的ta早点出现",
        "生日快乐——zpw",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "一个奇妙的相遇": "./imgs/xiaokeai.png",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "点我! Gyx",
        play: "放首音乐！",
        bannar_coming: "开始啦！",
        balloons_flying: "气球飘起来~",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "快许个愿望! Gyx",
        story: "MESSAGE FOR YOU",
    }
};
