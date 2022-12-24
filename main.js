function inc() {
    document.getElementById('qu.id').stepUp();
}
function dec() {
    document.getElementById('qu.id').stepDown();
}

const scrolltext = document.getElementsByClassName('notification-title')[0];
const nt = document.getElementById('nt');

if (nt) {
    window.addEventListener('scroll', () => {
        const winhei = window.innerHeight;
        const curhei = pageYOffset;

        const result = Math.round(10 * curhei / winhei)

        nt.style.transform = `translateX(-${result}%)`
    })
} else {
    null
}

function changeImage(e) {
    const imgs = document.querySelector('#sec-sc').children;
    document.getElementById('main').src = e.src;

    if (imgs) {
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].classList.remove('active-s')
        }
        e.classList.add('active-s')
    }
    else {
        null
    }
}


const imgs = document.querySelectorAll('.imgs');
let result = Math.ceil(imgs.length / 2);



const allopts = document.querySelectorAll('.isec') || [];
const allsecs = document.querySelectorAll('.prod') || [];
allopts.forEach((opt) => {
    opt.addEventListener('click', () => {
        allopts.forEach((ot) => ot.classList.remove('selected'));
        allsecs.forEach((s) => {
            s.classList.add('hide')
            if(opt.textContent === s.id){
                s.classList.remove('hide')
            }
        });
        opt.classList.add("selected");
    })
})



const cards = document.querySelectorAll('.card');
cards.forEach((card) => {
    const redirect = card.getElementsByClassName('h-btn')[0] || null;
    const pname = card.getElementsByClassName('card-title')[0].textContent || null;
    const price = card.getElementsByClassName('price')[0].textContent || null;
    const img = card.getElementsByClassName('card-img-top')[0].src || null;
    if(redirect != null){
        let msg = encodeURI(`
Hi there, I wanna buy this item 

product name :- ${pname}, 

image :- ${img},

price :- ${price},

`)
        let phone = '917815907836'
        redirect.setAttribute('href', `https://api.whatsapp.com/send?phone=${phone}&text=${msg}`)
    }
})


const more = document.querySelectorAll('.more') || [];

more.forEach((item) => {
    let toggle = false;
    item.addEventListener('click', () => {
        const clamp = item.getElementsByClassName('desc')[0];
        const whitearea = item.getElementsByClassName('whiteshade')[0];
        if(toggle == false){
            toggle = true;
            clamp.style.setProperty('--clamp', 0);
            whitearea.style.display = "none";
        }else{
            toggle = false;
            clamp.style.setProperty('--clamp', 2);
            whitearea.style.display = "flex";
        }
    })
})

const filter = document.getElementsByClassName('filter')[0] || "";
let dist = filter.getBoundingClientRect().top;
document.addEventListener('scroll', () => {
    if(window.scrollY >= dist){
        filter.style.position = "fixed";
    }else{
        filter.style.position = "unset";   
    }
})
