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

for (let i = 1; i <= Object.keys(projects).length; i++) {
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