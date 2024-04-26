
//头部点击
const hli = document.querySelectorAll('header ul li')
for (let i = 0; i < hli.length; i++) {
    hli[i].addEventListener('click', function () {
        document.querySelector('article .active').classList.remove('active')
        document.querySelector(`article .box:nth-child(${i + 1})`).classList.add('active')
    })
}

let mengde = ['蒙德城', '酒庄', '废墟', '雪山']
let liyue = ['璃月港', '庆云顶', '沉玉谷', '层岩巨渊']
let daoqi = ['稻妻城', '珊瑚宫', '渊下宫', '清籁岛']
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
        }
    })
}

function lunbotu(st, l, n) {
    let i = 1
    let str = `图片/区域/${st}/${l[0]}/`
    const lbt = document.querySelector(`.contry${n + 1} .lbt img`)
    const you = document.querySelector(`.contry${n + 1} .you`)
    const zuo = document.querySelector(`.contry${n + 1} .zuo`)
    const wor = document.querySelectorAll(`.contry${n + 1} .wor li`)

    for (let j = 0; j < wor.length; j++) {
        wor[j].addEventListener('click', function () {
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

    function toggle() {

        lbt.src = str + `no${i}.png`
    }
    //右按钮
    you.addEventListener('click', function () {
        i++
        if (i === 5) {
            i = 1
        }
        toggle()
    })
    //左按钮
    zuo.addEventListener('click', function () {
        i--
        if (i === 0) {
            i = 4
        }
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
