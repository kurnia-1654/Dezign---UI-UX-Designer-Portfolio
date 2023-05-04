// 'use strict'
const projects = {
    1: {
        image:"res/work1.jpg", 
        label: "Real estate Template", 
        titleLight: "Lorem ipsum dolor sit amet, consectetur", 
        titleBold: "adipiscing elit. Ultrices lorem non feugiat egestas amet.", 
        tag: "Website Design", 
        link:"#", 
    }, 
    2: {
        image:"res/work2.jpg", 
        label: "Plant identification app", 
        titleLight: "Lorem ipsum dolor sit amet, consectetur", 
        titleBold: "adipiscing elit. Ultrices lorem non feugiat egestas amet.", 
        tag: "Mobile App", 
        link:"#", 
    }, 
    3: {
        image:"res/work3.jpg", 
        label: "Smart Home App",
        titleLight: "Lorem ipsum dolor sit amet, consectetur",
        titleBold: "adipiscing elit. Ultrices lorem non feugiat egestas amet.",
        tag: "Mobile App",
        link: "#",
    }, 
    4: {
        image:"res/work4.jpg", 
        label: "Logo Animation",
        titleLight: "Lorem ipsum dolor sit amet, consectetur",
        titleBold: "adipiscing elit. Ultrices lorem non feugiat egestas amet.",
        tag: "Animation",
        link: "#",
    }
}

var worksSection = document.querySelector('#works')

for (let i in projects) { // let i = 1; i <= Object.keys(projects).length; i++
    var project = document.createElement('div')
    project.classList.add('project')

    var projectContent = `
        <img class="project-image" src="${projects[i].image}" alt="" />
        <div class="project-details">
        <span class="label">${projects[i].label}</span>
        <h3>
            ${projects[i].titleLight}
            <span class="semibold">
                ${projects[i].titleBold}
            </span>
        </h3>
        <span class="body-text">${projects[i].tag}</span>
        <button class="primary-btn" onclick="window.location.href = '${projects[i].link}'">
            View Work <span></span>
        </button>
        </div>
    `
    // with (projects[i]) {
    //     var projectContent = `
    //     <img class="project-image" src="${image}" alt="" />
    //     <div class="project-details">
    //     <span class="label">${label}</span>
    //     <h3>
    //         ${titleLight}
    //         <span class="semibold">
    //             ${titleBold}
    //         </span>
    //     </h3>
    //     <span class="body-text">${tag}</span>
    //     <button class="primary-btn" onclick="window.location.href = '${link}'">
    //         View Work <span></span>
    //     </button>
    //     </div>
    // `
    // }
    project.innerHTML = projectContent

    worksSection.append(project)
}



// Reveal header on scroll
const header = document.querySelector('header')
var scrollPos = window.scrollY
if (scrollPos <= 840) header.classList.add('scale-1'); else header.classList.remove('scale-1')

window.addEventListener('scroll', () => {
    var newScrollPos = window.scrollY
    if (window.scrollY > scrollPos) {
        header.classList.remove('scale-1')
        scrollPos = newScrollPos
    } else {
        scrollPos = newScrollPos
        header.classList.add('scale-1')
    }
    
})



// Styling nav a

var links = document.querySelectorAll("nav a")

// const obs = new IntersectionObserver((entries) => {
//     entries.forEach(en => {
//         if (en.isIntersecting) {
//             var id = en.target.getAttribute('id')
//             links.forEach(link => {
//                 var href = link.getAttribute('href').substring(1)
//                  id == href ? link.classList.add('active') : link.classList.remove('active')
//             });
//         }
//     });
// })

// const section = document.querySelectorAll("section")
// section.forEach(s => {
//     obs.observe(s)
// });

window.addEventListener('scroll', () => {
    var scrollTop = window.scrollY + 1
    var homeOffset = 0 // 0
    var works = document.querySelector('#works')
    var about = document.querySelector('#about')
    
    var worksOffset = works.offsetTop - window.innerHeight / 2
    var aboutOffset = about.offsetTop - window.innerHeight / 2
    if (scrollTop >= worksOffset) {
        checkLink('works')
    }else {
        checkLink('home')
    }
    if (scrollTop >= aboutOffset) {
        checkLink('about')
    }
})

function checkLink(id) {
    links.forEach(link => {
        var href = link.getAttribute('href').substring(1)
        href == id ? link.classList.add('active') : link.classList.remove('active') 
    });
}


var down = document.querySelector('.ic-down')
var works = document.querySelector('#works')

down.addEventListener('click', () => {
    window.scrollBy(0, works.offsetTop) 
})

var btn = document.querySelector('.mobile-menu-btn')
var a = document.querySelectorAll('nav a')
a.forEach(e => {
    e.addEventListener('click', () => {
        for (let e of a) {
            e.classList.toggle('show') 
            btn.classList.toggle('rotate')
        }
    })
});

btn.addEventListener('click', (e) => {
    e.target.classList.toggle('rotate')
    a.forEach(e => {
        e.classList.toggle('show')
    });
})