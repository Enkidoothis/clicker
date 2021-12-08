let cobb_img = document.querySelector('#s')
let cobb = document.querySelector('#cobb')
let cobb_num = document.querySelector('#jk')
let cobb_img2 = document.querySelector('#a')


let money = document.querySelector('#jkjk')



let ir_num = document.querySelector('#ir')
let t = document.querySelector('#b')
let pic = document.querySelector('#su')
let how_much = document.querySelector('#iron')
let buy = document.querySelector('#susege')
cobb_img.addEventListener('click', function () {
    cobb.innerHTML++
})
cobb_img2.addEventListener('click', function () {

    money.innerHTML = money.innerHTML * 1 + cobb.innerHTML * 2
    cobb.innerHTML = 0
    func()

})

buy.addEventListener('click', function () {
    if (money.innerHTML >= 2000) {
        money.innerHTML = money.innerHTML - 2000
        buy.style.display = "none"
    } else {
        alert("not enought money")
    }


})


pic.addEventListener('click', function () {
    if (buy.style.display == "none") {
        how_much.innerHTML++
    } else {
        how_much.innerHTML = 0
    }
})
t.addEventListener('click', function () {

    money.innerHTML = money.innerHTML * 1 + how_much.innerHTML * 4
    ironhow_much.innerHTML = 0
    func()
})

let go_num = document.querySelector('#go')
let tr = document.querySelector('#c')
let picofgold = document.querySelector('#sus')
let gold_num = document.querySelector('#gold')
let pos = document.querySelector('#g')

pos.addEventListener('click', function () {
    if (money.innerHTML >= 4000) {
        money.innerHTML = money.innerHTML - 4000
        pos.style.display = "none"
    } else {
        alert("not enought money")
    }


})

picofgold.addEventListener('click', function () {
    if (pos.style.display == "none") {
        gold_num.innerHTML++
    } else {
        gold_num.innerHTML = 0
    }
})


tr.addEventListener('click', function () {

    money.innerHTML = money.innerHTML * 1 + gold.innerHTML * 6
    gold.innerHTML = 0;
    func()
})

let net_num = document.querySelector('#nether')
let trad = document.querySelector('#e')
let picofnet = document.querySelector('#jeSUSy')
let howdy_much = document.querySelector('#netherite')
let tum = document.querySelector('#i')

tum.addEventListener('click', function () {
    if (money.innerHTML >= 12000) {
        money.innerHTML = money.innerHTML - 12000
        tum.style.display = "none"
    } else {
        alert("not enought money")
    }
})
picofnet.addEventListener('click', function () {
    if (tum.style.display == "none") {
        howdy_much.innerHTML++
    } else {
        howdy_much.innerHTML = 0
    }
})
trad.addEventListener('click', function () {
  money.innerHTML = money.innerHTML * 1 + howdy_much.innerHTML * 12
 howdy_much.innerHTML = 0
 func()
})
let dim_num = document.querySelector('#dim')
let tra = document.querySelector('#d')
let picofdim = document.querySelector('#jeSUS')
let howd_much = document.querySelector('#dimonds')
let tun = document.querySelector('#h')

tun.addEventListener('click', function () {
    if (money.innerHTML >= 8000) {
        money.innerHTML = money.innerHTML - 8000
        tun.style.display = "none"
    } else {
        alert("not enought money")
    }
})
picofdim.addEventListener('click', function () {
    if (tun.style.display == "none") {
        howd_much.innerHTML++
    } else {
        howd_much.innerHTML = 0
    }
})
tra.addEventListener('click', function () {

    money.innerHTML = money.innerHTML * 1 + howd_much.innerHTML * 10
    howd_much.innerHTML = 0

    func()
})


let bed_num = document.querySelector('#bed')
let trade = document.querySelector('#f')
let picofbed = document.querySelector('#jeSUSe')
let howdo_much = document.querySelector('#bedrock')
let fum = document.querySelector('#j')



fum.addEventListener('click', function () {
    if (money.innerHTML >= 10000) {
        money.innerHTML = money.innerHTML - 100000
        fum.style.display = "none"
    } else {
        alert("not enought money")
    }
})
picofbed.addEventListener('click', function () {
    if (fum.style.display == "none") {
        howdo_much.innerHTML++
    } else {
        howdo_much.innerHTML = 0
    }
})
trade.addEventListener('click', function () {

    money.innerHTML = money.innerHTML * 1 + howdo_much.innerHTML * 25
    howdo_much.innerHTML = 0
    func()

})


let win = document.querySelector('#bb') 
let dancee = document.querySelector('#ooo')
let dance = document.querySelector('#oooo')

win.style.display = "none"
dancee.style.display = "none"
dance.style.display = "none"
function func() {
   if ( money.innerHTML>=1000000){
    win.style.display = "block"
    dancee.style.display = "block"
    dance.style.display = "block" 
} 
}
func()