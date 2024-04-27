
//头部点击
const hli = document.querySelectorAll('header ul li')
for (let i = 0; i < hli.length; i++) {
    hli[i].addEventListener('click', function () {
        for (let n = 0; n < hli.length; n++) {
            hli[n].style.borderBottom = '6px solid white'
        }
        hli[i].style.borderBottom = '6px solid skyblue'
        document.querySelector('article .active').classList.remove('active')
        document.querySelector(`article .box:nth-child(${i + 1})`).classList.add('active')
    })
}

//国家名字放大
const gj = document.querySelectorAll('.box1 .con li')
for (let p = 0; p < gj.length; p++) {
    gj[p].addEventListener('mouseenter', function () {
        const gjli = document.querySelector(`.box1 .con li:nth-child(${p + 1}) p`)
        gjli.style.top = '100px'
        gjli.style.left = '72px'
        gjli.style.fontSize = '40px'
    })
    gj[p].addEventListener('mouseleave', function () {
        const gjli = document.querySelector(`.box1 .con li:nth-child(${p + 1}) p`)
        gjli.style.top = '-40px'
        gjli.style.left = '79px'
        gjli.style.fontSize = '30px'
    })
}


let mengde = ['蒙德城', '酒庄', '废墟', '雪山']
let liyue = ['璃月港', '庆云顶', '沉玉谷', '层岩巨渊']
let daoqi = ['稻妻城', '珊瑚宫', '渊下宫', '清籁岛']
let xumi = ['须弥城', '赤王陵', '甘露花海', '荼泥黑渊']
let fengdan = ['枫丹廷', '歌剧院', '实验室', '水下']
//点击国家
const world = document.querySelectorAll('.box1 .con li')
const con = document.querySelectorAll('.box1 .contry .world')
for (let k = 0; k < world.length; k++) {
    world[k].addEventListener('click', function () {
        for (let j = 0; j < con.length; j++) {
            con[j].style.display = 'none'
        }
        con[k].style.display = 'block'
        document.documentElement.scrollTop = con[k].offsetTop
        if (k === 0) {
            lunbotu('蒙德', mengde, k)
        } else if (k === 1) {
            lunbotu('璃月', liyue, k)
        } else if (k === 2) {
            lunbotu('稻妻', daoqi, k)
        } else if (k === 3) {
            lunbotu('须弥', xumi, k)
        } else if (k === 4) {
            lunbotu('枫丹', fengdan, k)
        }
    })
}


//轮播图函数
function lunbotu(st, l, n) {
    let i = 1
    let str = `图片/区域/${st}/${l[0]}/`
    const lbt = document.querySelector(`.contry${n + 1} .lbt img`)
    const you = document.querySelector(`.contry${n + 1} .you`)
    const zuo = document.querySelector(`.contry${n + 1} .zuo`)
    const wor = document.querySelectorAll(`.contry${n + 1} .wor li`)
    const p1 = document.querySelector(`.contry${n + 1} .p1`)
    const yuandian = document.querySelectorAll(`.box1 .contry${n + 1} aside .bot .bo li`)
    yuandian[i - 1].style.opacity = '1'
    qy(0)
    wor[i - 1].style.color = 'white'
    wor[i - 1].style.fontSize = '29px'
    //更换区域颜色
    function qy(j) {
        for (let m = 0; m < yuandian.length; m++) {
            wor[m].style.color = 'black'
            wor[m].style.fontSize = '23px'
        }
        wor[j].style.color = 'white'
        wor[j].style.fontSize = '29px'
        let a = wor[0].innerHTML
        p1.innerHTML = `<img src="图片/de2.png" alt="">&nbsp;${a}&nbsp;<img src="图片/de2.png" alt="">`
    }
    //国家区域点击事件
    for (let j = 0; j < wor.length; j++) {
        wor[j].addEventListener('click', function () {
            i = 1
            yd()
            qy(j)
            //更换箭头里的区域名
            let a = wor[j].innerHTML
            p1.innerHTML = `<img src="图片/de2.png" alt="">&nbsp;${a}&nbsp;<img src="图片/de2.png" alt="">`

            if (j === 0) {
                str = `图片/区域/${st}/${l[0]}/`
                toggle()
            }
            else if (j === 1) {
                str = `图片/区域/${st}/${l[1]}/`
                toggle()
            }
            else if (j === 2) {
                str = `图片/区域/${st}/${l[2]}/`
                toggle()
            }
            else {
                str = `图片/区域/${st}/${l[3]}/`
                toggle()
            }
        })
    }
    //更换圆点
    function yd() {
        for (let m = 0; m < yuandian.length; m++) {
            yuandian[m].style.opacity = '0.4'
        }
        yuandian[i - 1].style.opacity = '1'
    }

    //更换图片路径函数
    function toggle() {
        lbt.src = str + `no${i}.png`
    }
    //右按钮
    you.addEventListener('click', function () {
        i++
        if (i === 5) {
            i = 1
        }
        yd()
        toggle()
    })
    //左按钮
    zuo.addEventListener('click', function () {
        i--
        if (i === 0) {
            i = 4
        }
        yd()
        toggle()
    })
    //自动播放
    let mn = setInterval(function () {
        //js自动调用点击事件 
        you.click()
    }, 2000)
    //停止定时器
    const aside = document.querySelector(`.contry${n + 1} aside`)
    aside.addEventListener('mouseenter', function () {
        clearInterval(mn)
    })
    aside.addEventListener('mouseleave', function () {
        mn = setInterval(function () {
            //js自动调用点击事件 
            you.click()
        }, 2000)
    })
}
