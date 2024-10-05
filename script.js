function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
const sr = ScrollReveal ({
    distance:'65px',
    duration:2600,
    delay:450,
    reset:true

});

sr.reveal('.hero-text',{delay:200,origin:'top'});
sr.reveal('.dd',{delay:450,origin:'top'});
sr.reveal('.icon',{delay:500,origin:'left'});
sr.reveal('.scroll-down',{delay:500,origin:'right'});

