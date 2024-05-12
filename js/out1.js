// 获取左右按钮
const bo3zuo = document.querySelector('.zuoan')
const bo3you = document.querySelector('.youan')
let ul2 = document.querySelectorAll('.box3 .div1 .ul2 li')
let ul2p = document.querySelectorAll('.box3 .div1 .ul2 li p')
//角色元素属性
let huo = ['阿蕾奇诺', '林尼', '迪希雅', '宵宫', '胡桃', '可莉', '迪卢克']
let shui = ['芙宁娜', '那维莱特', '妮露', '神里凌人', '夜兰', '珊瑚宫心海', '莫娜']
let feng = ['闲云', '流浪者', '枫原万叶', '魈', '温迪', '琴']
let lei = ['赛诺', '八重神子', '雷电将军', '刻晴']
let cao = ['白术', '艾尔海森', '纳西妲', '提纳里']
let bing = ['莱欧斯利', '申鹤', '优菈', '甘雨', '七七', '神里凌华']
let yan = ['千织', '娜维娅', '荒泷一斗', '阿贝多', '钟离']
//角色介绍台词
let jsmd = [
    {
        name: '温迪', st: `<p>来路不明的吟游诗人，有时唱一些老掉牙的旧诗，有时又会唱出谁也没听过的新歌。<br>
                        喜欢苹果和热闹的气氛，讨厌奶酪和一切黏糊糊的物质。
                        <br>
    在引导「风」的元素力时，元素的塑形往往外显为羽毛，因为他很中意看上去轻飘飘的东西。</p > `
    },
    {
        name: '琴', st: `<p>身为西风骑士团的代理团长，琴一直忠于职守，为人们带来安宁。虽然并非天赋异禀，但通过刻苦训练，如今的她已然能够独当一面。<br>
当风魔龙的威胁开始临近，这位可靠的代理团长早已做好了准备，誓要守护蒙德。</p>`
    },
    {
        name: '迪卢克', st: `<p>身为蒙德城第一富豪，风度翩翩的迪卢克总是以完美的贵公子形象示人。</p>
        <p>然而他真实的一面，是秉承坚定信念的战士，他那「不惜一切守护蒙德」的意志犹如火焰般炽热，令他能以恐怖的攻势，毫不留情地将一切敌人击溃。</p>`
    },
    {
        name: '可莉', st: `<p>西风骑士团，火花骑士！永远伴随闪光与爆炸出现！<br>
——然后在琴团长严厉的目光注视下默默消失。<br>
虽然新炸药的配方，很多都是在被关禁闭的时候想出来的……<br>
但如果不被关禁闭的话，就更好了。</p>`
    },
    {
        name: '莫娜', st: `<p>神秘的少女占星术士，声称自己是「伟大的占星术士莫娜」，拥有与名号相符的不俗实力，博学而高傲。</p>
        <p>尽管过着拮据、清贫的生活，但她坚决不用占卜来牟利…正是这种坚持，导致莫娜总是在为生计发愁。</p>`
    },
    {
        name: '阿贝多', st: `<p>阿贝多——现定居蒙德的炼金术士，效力于西风骑士团。<br>
「天才」、「白垩之子」或「调查队长」…他不怎么在意称号和名望，只专注于研究课题。<br>
财富和人脉不是他的目标。他渴望驾驭的，是从古到今深藏于人类头脑中的无上知识。</p>`
    },
    {
        name: '优菈', st: `<p>优菈——常年在外作战的「浪花骑士」，反叛的旧贵族末裔。<br>
生于旧日宗室，身负罪恶血脉之人，的确需要独特的处世技巧，才能在偏见的高墙下安然行走。当然，这并不妨碍她与家族决裂，作为卓越的「浪花骑士」，在外游猎蒙德的敌人，完成她那意义独特的「复仇」。</p>`
    }
]
let jsly = [
    {
        name: '魈', st: `<p>守护璃月港的「三眼五显仙人」之一，妙称「护法夜叉大将」。<br>
虽然外表看起来是一个少年人，但一些有关他的传说，已在古卷中流传千年。<br>
对望舒客栈中一道名为「杏仁豆腐」的菜颇为喜爱。<br>
究其原因，是因为「杏仁豆腐」的味道，与他曾经吞噬过的「美梦」十分相似。</p> `
    },
    {
        name: '刻晴', st: `<p>璃月七星之一，玉衡星。对「帝君一言而决的璃月」颇有微词——但实际上，神挺欣赏她这样的人。</p>
        <p>她坚信与人类命运相关的事，应当由人类去做，而且人类一定可以做得更好。为了证明这一点，她比任何人都要努力。</p>`
    },
    {
        name: '七七', st: `<p>药庐「不卜庐」的采药姑娘兼学徒。</p>
        <p>因「仙缘」而拥有不死之身，行动时需要自己给自己下敕令。</p>
        <p>七七的记忆力非常差，为了保证日常生活的顺利，她随身携带着一本笔记，写有各种各样的注意事项。</p>
        <p>但在最不巧的那些日子里，她连「要看笔记」这件事都会忘记……</p>`
    },
    {
        name: '钟离', st: `<p>应「往生堂」邀请而来的神秘客卿。样貌俊美，举止高雅，拥有远超常人的学识。<br>
虽说来历不明，却知礼数、晓规矩。坐镇「往生堂」，能行天地万物之典仪。</p>`
    },
    {
        name: '甘雨', st: `<p>璃月七星的秘书，体内流淌着人类与仙兽的血脉。<br>
天性优雅娴静，但仙兽「麒麟」温柔的性情与坚定毅重的工作态度毫无冲突。<br>
毕竟，甘雨坚信自己所做的一切工作都是为了践行与帝君的契约，谋求璃月众生的最大福祉。</p>`
    },
    {
        name: '胡桃', st: `<p>胡桃——「往生堂」第七十七代堂主，掌控着璃月葬仪事务的重要人物。</p>
        <p>尽心尽力地为人们完成送别之仪，维护着世间阴阳平衡之道。</p>
        <p>除此以外还是个神奇打油诗人，诸多「杰作」被璃月人口口相传。</p>`
    },
    {
        name: '申鹤', st: `<p>虽为人类之身，却是仙家弟子。过去曾生活在远离璃月港的山野之间，以红绳缚魂，修身养性。<br>
气质淡雅如仙人，身上似乎藏有某些秘密。</p>`
    },
    {
        name: '夜兰', st: `<p>自称供职于总务司的神秘人士，却又是总务司名录里的「不存在之人」。<br>
神出鬼没，行踪飘忽，变幻无常，这些都是她的标志。</p>`
    },
    {
        name: '白术', st: `<p>璃月最具盛名的药庐「不卜庐」的主人，肩上常盘着名为「长生」的白蛇。用药手法不拘一格，仁心妙术济助四海。</p>`
    },
    {
        name: '闲云', st: `<p style="white-space: pre-wrap;">新搬入璃月港的神秘女子，声称自己内向文静、不擅交际。</p>`
    }
]
let jsdq = [
    {
        name: '雷电将军', st: `<p>雷电将军——此世最殊胜威怖的雷霆化身，稻妻幕府的最高主宰。<br>
挟威权之鸣雷，逐永恒之孤道的寂灭者。</p>`
    },
    {
        name: '神里凌华', st: `<p>稻妻「社奉行」神里家的大小姐。端庄文雅，聪慧坚韧。<br>
待人接物真诚又得体，深受稻妻民众爱戴，贵有「白鹭公主」之名。</p>`
    },
    {
        name: '枫原万叶', st: `<p>稻妻出身的浪人武士。为人谦和，个性温顺。<br>
年轻潇洒的外表下埋藏着许多往事。看似随性，心中却有独属于自己的行事准则。</p>`
    },
    {
        name: '宵宫', st: `<p>才华横溢的烟花工匠，「长野原烟花店」的现任店主，被誉为「夏祭的女王」。<br>
热情似火的少女。未泯的童心与匠人的执着在她身上交织出了奇妙的焰色反应。</p>`
    },
    {
        name: '珊瑚宫心海', st: `<p>心海是海祇岛的「现人神巫女」，也就是现任海祇岛最高领袖。<br>
她通读兵法、擅长谋略，在军事上有着独特见解，也能将内政、外交等工作处理得井井有条。<br>
不过，这位人们眼中深不可测的领导者，似乎也有不为人知的一面…</p>`
    },
    {
        name: '荒泷一斗', st: `<p>鬼族后裔，性格豪爽热血的快意男儿。<br>
如风一般迅猛，也如雷一般夺目。</p>`
    },
    {
        name: '八重神子', st: `<p>掌管鸣神大社的大巫女、狐之血脉的延续者、「永恒」的眷属与友人，以及，轻小说出版社「八重堂」的恐怖总编…<br>
有着多重身份的神秘宫司，凡人们或许永远无法了解她的真面目与真心。</p>`
    },
    {
        name: '神里凌人', st: `<p>社奉行神里家现任家主。总有办法以周全的手段实现自身目的。不过，鲜少有人知道他如今最在意的「目的」是什么。</p>`
    }
]
let jsxm = [
    {
        name: '纳西妲', st: `<p>「小吉祥草王」深居于净善宫内，向来不受重视，也很少被人提及。<br>
她身负重任，哪怕目睹漆黑，经历孤独，也不曾停下脚步。</p>`
    },
    {
        name: '提纳里', st: `<p>道成林的巡林官，毕业于阿弥利多学院的植物学学者。每天都过着巡查雨林、保护生态、教训笨蛋的充实生活。</p>`
    },
    {
        name: '赛诺', st: `<p>教令院的大风纪官，所有风纪官们的首领。拥有的独特幽默感令人印象深刻。</p>`
    },
    {
        name: '妮露', st: `<p>「祖拜尔剧场」的明星演员，舞姿娉婷，如睡莲初绽，一尘不染。<br>
但她绝非高傲清冷之人，即便只是匆匆的旅者，也会对她纯洁质朴的笑容过目不忘。</p>`
    },
    {
        name: '流浪者', st: `<p>若有心者方为人，他不可称之为人。<br>
若无心者亦有悲喜苦乐，他便是最像人的人偶。</p>`
    },
    {
        name: '艾尔海森', st: `<p style="white-space: pre-wrap;">须弥教令院现任书记官，有过人的智慧与才能。生活得自由自在，一般人基本找不到他。</p>`
    },
    {
        name: '迪希雅', st: `<p>横行须弥沙漠的松散佣兵组织「镀金旅团」的成员。勇敢而又强大，在佣兵们内部名声不小。</p>`
    }
]
let jsfd = [
    {
        name: '芙宁娜', st: `<p>「众水、众方、众民与众律法的女王」，深受民众喜爱。<br>
热衷于欧庇克莱歌剧院上演的每一场审判，也总是在意着「观众」的眼光。</p>`
    },
    {
        name: '林尼', st: `<p>闻名枫丹的天才魔术师，以精妙的手法和言语牵动着观众的心。伶牙俐齿，演技精湛，心思如猫一样难以猜透。</p>`
    },
    {
        name: '那维莱特', st: `<p>枫丹的最高审判官，看起来难以亲近，或许是天性使然，或者是为了掩盖秘密。</p>`
    },
    {
        name: '莱欧斯利', st: `<p>梅洛彼得堡的管理人，荣获枫丹最高荣誉市民称号「公爵」。处世低调，沉稳可靠。</p>`
    },
    {
        name: '娜维娅', st: `<p>总是露出灿烂笑容的刺玫会会长，致力于为枫丹人解决各类难题。</p>`
    },
    {
        name: '千织', st: `<p>一位直来直去的服装设计师，以其独有的风格引领着枫丹时尚。</p>`
    },
    {
        name: '阿蕾奇诺', st: `<p>愚人众执行官第四席「仆人」，壁炉之家的孩子们敬畏的「父亲」。</p>`
    }
]
// 切换li函数
function li(n, m) {
    for (let i = 0; i < ul2.length; i++) {
        ul2[i].style.display = 'none'
    }
    for (let i = n; i <= m; i++) {
        ul2[i].style.display = 'block'
    }
}
let mn = 0
//人物头像点击切换图片
function rwtupian(str, k) {
    ul2 = document.querySelectorAll('.box3 .div1 .ul2 li')
    ul2p = document.querySelectorAll('.box3 .div1 .ul2 li p')
    for (let i = 0; i < ul2.length; i++) {
        ul2[i].addEventListener('click', function () {
            mn = i
            for (let m = 0; m < ul2.length; m++) {
                ul2[m].style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
                ul2p[m].style.backgroundColor = 'rgba(0, 0, 0, 0.6)'
                ul2p[m].style.color = '#fff'
            }
            ul2[i].style.backgroundColor = 'rgba(0, 0, 0, 0.7)'
            ul2p[i].style.backgroundColor = 'rgb(255, 255, 255)'
            ul2p[i].style.color = '#000000'
            const p = document.querySelector('.div2 .jieshao')
            let st = ul2p[i].innerHTML
            for (let y = 0; y < jsmd.length; y++) {
                if (st === jsmd[y].name) {
                    p.innerHTML = jsmd[y].st
                }
            }
            for (let y = 0; y < jsly.length; y++) {
                if (st === jsly[y].name) {
                    p.innerHTML = jsly[y].st
                }
            }
            for (let y = 0; y < jsdq.length; y++) {
                if (st === jsdq[y].name) {
                    p.innerHTML = jsdq[y].st
                }
            }
            for (let y = 0; y < jsxm.length; y++) {
                if (st === jsxm[y].name) {
                    p.innerHTML = jsxm[y].st
                }
            }
            for (let y = 0; y < jsfd.length; y++) {
                if (st === jsfd[y].name) {
                    p.innerHTML = jsfd[y].st
                }
            }
            let m
            for (let n = 0; n < huo.length; n++) {
                if (st === huo[n]) {
                    m = 6
                }
            }
            for (let n = 0; n < shui.length; n++) {
                if (st === shui[n]) {
                    m = 5
                }
            }
            for (let n = 0; n < feng.length; n++) {
                if (st === feng[n]) {
                    m = 1
                }
            }
            for (let n = 0; n < lei.length; n++) {
                if (st === lei[n]) {
                    m = 3
                }
            }
            for (let n = 0; n < cao.length; n++) {
                if (st === cao[n]) {
                    m = 4
                }
            }
            for (let n = 0; n < bing.length; n++) {
                if (st === bing[n]) {
                    m = 7
                }
            }
            for (let n = 0; n < yan.length; n++) {
                if (st === yan[n]) {
                    m = 2
                }
            }
            rwtouxiang(str, st, m)
        })
    }
}
// 人物头像点击函数
function rwtouxiang(str, st, i) {
    const div2img = document.querySelectorAll('.box3 .div2 img')
    div2img[1].src = `图片/角色/人物图/${str}/${st}1.png`
    div2img[2].src = `图片/角色/人物图/${str}/${st}2.png`
    div2img[3].src = `图片/角色/人物图/${str}/${st}3.png`
    if (i === 1) {
        div2img[0].src = `图片/feng.png`
    } else if (i === 2) {
        div2img[0].src = `图片/yan.png`
    } else if (i === 3) {
        div2img[0].src = `图片/lei.png`
    } else if (i === 4) {
        div2img[0].src = `图片/cao.png`
    } else if (i === 5) {
        div2img[0].src = `图片/shui.png`
    } else if (i === 6) {
        div2img[0].src = `图片/huo.png`
    } else if (i === 7) {
        div2img[0].src = `图片/bing.png`
    }
}

// 初始生成前六个li
let q = 0
let h = 5
li(q, h)
rwtupian('蒙德', 1)
ul2[0].style.backgroundColor = 'rgba(0, 0, 0, 0.7)'
ul2p[0].style.backgroundColor = 'rgb(255, 255, 255)'
ul2p[0].style.color = '#000000'
// 左右按钮点击
bo3you.addEventListener('click', function () {
    if (h !== ul2.length - 1) {
        q++
        h++
        li(q, h)
    }
    if (mn != ul2.length - 1) {
        mn += 1
        ul2[mn].click()
    }
})
bo3zuo.addEventListener('click', function () {
    if (q !== 0) {
        q--
        h--
        li(q, h)
    }
    if (mn != 0) {
        mn -= 1
        ul2[mn].click()
    }
})

//左侧导航栏点击
const ul1 = document.querySelectorAll('.box3 .ul1 li')
const ul1div = document.querySelectorAll('.box3 .ul1 li div')
const box3 = document.querySelector('.box3')
let str = '图片/角色/导航栏背景.png'
ul1[0].style.backgroundImage = 'url(' + str + ')'
ul1[0].style.backgroundSize = '320px'
for (let i = 0; i < ul1.length; i++) {
    ul1[i].addEventListener('click', function () {
        //国家名字变化
        for (let j = 0; j < ul1div.length; j++) {
            ul1div[j].style.marginLeft = '72px'
            ul1div[j].style.fontSize = '22px'
        }
        ul1div[i].style.marginLeft = '85px'
        ul1div[i].style.fontSize = '25px'
        //左侧导航栏背景图片
        for (let j = 0; j < ul1div.length; j++) {
            let str = '图片/角色/小点.png'
            ul1[j].style.backgroundImage = 'url(' + str + ')'
            ul1[j].style.backgroundSize = '65px'
        }
        let str = '图片/角色/导航栏背景.png'
        ul1[i].style.backgroundImage = 'url(' + str + ')'
        ul1[i].style.backgroundSize = '320px'
        //背景
        let st1 = '图片/角色/m1.jpg'
        let st2 = '图片/角色/m2.jpg'
        let st3 = '图片/角色/m3.jpg'
        let st4 = '图片/角色/m4.jpg'
        let st5 = '图片/角色/m5.jpg'
        if (i === 0) {
            box3.style.backgroundImage = 'url(' + st1 + ')'
        } else if (i === 1) {
            box3.style.backgroundImage = 'url(' + st2 + ')'
        }
        else if (i === 2) {
            box3.style.backgroundImage = 'url(' + st3 + ')'
        }
        else if (i === 3) {
            box3.style.backgroundImage = 'url(' + st4 + ')'
        }
        else if (i === 4) {
            box3.style.backgroundImage = 'url(' + st5 + ')'
        }

        //点击左侧导航栏切换底部底部人物
        let mengde = `<li><img src="图片/角色/蒙德/wendi1.png" alt="">
                        <p>温迪</p>
                    </li>
                    <li><img src="图片/角色/蒙德/abeiduo1.png" alt="">
                        <p>阿贝多</p>
                    </li>
                    <li><img src="图片/角色/蒙德/diluke1.png" alt="">
                        <p>迪卢克</p>
                    </li>
                    <li><img src="图片/角色/蒙德/keli1.png" alt="">
                        <p>可莉</p>
                    </li>
                    <li><img src="图片/角色/蒙德/mona1.png" alt="">
                        <p>莫娜</p>
                    </li>
                    <li><img src="图片/角色/蒙德/qing1.png" alt="">
                        <p>琴</p>
                    </li>
                    <li><img src="图片/角色/蒙德/youla1.png" alt="">
                        <p>优菈</p>
                    </li>`
        let liyue = `<li><img src="图片/角色/璃月/zhongli1.png" alt="">
                        <p>钟离</p>
                    </li>
                    <li><img src="图片/角色/璃月/baizhu1.png" alt="">
                        <p>白术</p>
                    </li>
                    <li><img src="图片/角色/璃月/ganyu1.png" alt="">
                        <p>甘雨</p>
                    </li>
                    <li><img src="图片/角色/璃月/hutao1.png" alt="">
                        <p>胡桃</p>
                    </li>
                    <li><img src="图片/角色/璃月/keqin1.png" alt="">
                        <p>刻晴</p>
                    </li>
                    <li><img src="图片/角色/璃月/qiqi1.png" alt="">
                        <p>七七</p>
                    </li>
                    <li><img src="图片/角色/璃月/shenhe1.png" alt="">
                        <p>申鹤</p>
                    </li>
                    <li><img src="图片/角色/璃月/xianyun1.png" alt="">
                        <p>闲云</p>
                    </li>
                    <li><img src="图片/角色/璃月/xiao1.png" alt="">
                        <p>魈</p>
                    </li>
                    <li><img src="图片/角色/璃月/yelan1.png" alt="">
                        <p>夜兰</p>
                    </li>`
        let daoqi = `<li><img src="图片/角色/稻妻/leishen1.png" alt="">
                        <p>雷电将军</p>
                    </li>
                    <li><img src="图片/角色/稻妻/linhua1.png" alt="">
                        <p>神里凌华</p>
                    </li>
                    <li><img src="图片/角色/稻妻/shanhugong1.png" alt="">
                        <p>珊瑚宫心海</p>
                    </li>
                    <li><img src="图片/角色/稻妻/shenzi1.png" alt="">
                        <p>八重神子</p>
                    </li>
                    <li><img src="图片/角色/稻妻/linren1.png" alt="">
                        <p>神里凌人</p>
                    </li>
                    <li><img src="图片/角色/稻妻/wanye1.png" alt="">
                        <p>枫原万叶</p>
                    </li>
                    <li><img src="图片/角色/稻妻/xiaogong1.png" alt="">
                        <p>宵宫</p>
                    </li>
                    <li><img src="图片/角色/稻妻/yidou1.png" alt="">
                        <p>荒泷一斗</p>
                    </li>`
        let xumi = `<li><img src="图片/角色/须弥/caoshen1.png" alt="">
                        <p>纳西妲</p>
                    </li>
                    <li><img src="图片/角色/须弥/dixiya1.png" alt="">
                        <p>迪希雅</p>
                    </li>
                    <li><img src="图片/角色/须弥/tinali1.png" alt="">
                        <p>提纳里</p>
                    </li>
                    <li><img src="图片/角色/须弥/haishen1.png" alt="">
                        <p>艾尔海森</p>
                    </li>
                    <li><img src="图片/角色/须弥/nilu1.png" alt="">
                        <p>妮露</p>
                    </li>
                    <li><img src="图片/角色/须弥/sainuo1.png" alt="">
                        <p>赛诺</p>
                    </li>
                    <li><img src="图片/角色/须弥/sanbing1.png" alt="">
                        <p>流浪者</p>
                    </li>`
        let fengdan = `<li><img src="图片/角色/枫丹/shuishen1.png" alt="">
                        <p>芙宁娜</p>
                    </li>
                    <li><img src="图片/角色/枫丹/laiousili1.png" alt="">
                        <p>莱欧斯利</p>
                    </li>
                    <li><img src="图片/角色/枫丹/lingni1.png" alt="">
                        <p>林尼</p>
                    </li>
                    <li><img src="图片/角色/枫丹/naweilaite1.png" alt="">
                        <p>那维莱特</p>
                    </li>
                    <li><img src="图片/角色/枫丹/naweiya1.png" alt="">
                        <p>娜维娅</p>
                    </li>
                    <li><img src="图片/角色/枫丹/puren1.png" alt="">
                        <p>阿蕾奇诺</p>
                    </li>
                    <li><img src="图片/角色/枫丹/qianzhi1.png" alt="">
                        <p>千织</p>
                    </li>`
        //重置函数
        function chongzhi(i) {
            ul2 = document.querySelectorAll('.box3 .div1 .ul2 li')
            ul2p = document.querySelectorAll('.box3 .div1 .ul2 li p')
            ul2[0].style.backgroundColor = 'rgba(0, 0, 0, 0.7)'
            ul2p[0].style.backgroundColor = 'rgb(255, 255, 255)'
            ul2p[0].style.color = '#000000'
            li(0, 5)
            q = 0
            h = 5
            let st = ul2p[0].innerHTML
            if (i === 0) {
                rwtouxiang('蒙德', st, 1)
                rwtupian('蒙德', 1)
                const p1 = document.querySelector('.div2 .jieshao')
                p1.innerHTML = jsmd[0].st
            } else if (i === 1) {
                rwtouxiang('璃月', st, 2)
                rwtupian('璃月', 2)
                const p1 = document.querySelector('.div2 .jieshao')
                p1.innerHTML = jsly[3].st
            } else if (i === 2) {
                rwtouxiang('稻妻', st, 3)
                rwtupian('稻妻', 3)
                const p1 = document.querySelector('.div2 .jieshao')
                p1.innerHTML = jsdq[0].st
            } else if (i === 3) {
                rwtouxiang('须弥', st, 4)
                rwtupian('须弥', 4)
                const p1 = document.querySelector('.div2 .jieshao')
                p1.innerHTML = jsxm[0].st
            } else if (i === 4) {
                rwtouxiang('枫丹', st, 5)
                rwtupian('枫丹', 5)
                const p1 = document.querySelector('.div2 .jieshao')
                p1.innerHTML = jsfd[0].st
            }
        }
        const renwu = document.querySelector('.box3 .ul2')
        if (i === 0) {
            renwu.innerHTML = mengde
            chongzhi(i)
        } else if (i === 1) {
            renwu.innerHTML = liyue
            chongzhi(i)
        } else if (i === 2) {
            renwu.innerHTML = daoqi
            chongzhi(i)
        } else if (i === 3) {
            renwu.innerHTML = xumi
            chongzhi(i)
        } else if (i === 4) {
            renwu.innerHTML = fengdan
            chongzhi(i)
        }
    })
}

