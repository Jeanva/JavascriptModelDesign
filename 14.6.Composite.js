// 把新闻模块创建出来
var news1 = new Container('news',document.body);
news1.add(
    new Item('normal').add(
        new IconNews('梅西不拿金秋也伟大','#','video')
    )
).add(
    new Item('normal').add(
        new IconNews('保护强国强队用意明显','#','live')
    )
).add(
    new Item('normal').add(
        new NewsGroup('has-img').add(
            new ImageNews('img/1.jpg','#','small')
        ).add(new EasyNews('从240斤胖子成功变成型男','#'))
        .add( new EasyNews('五大雷人跑步机','#'))
    )
).add(
    new Item('normal').add(
        new TypeNews('猪八戒不愿为费城打球','#','NBA','left')
    )
).add(
    new Item('normal').add(
        new TypeNews('红孩儿','#','CBA','right')
    )
)