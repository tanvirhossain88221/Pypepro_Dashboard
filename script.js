document.getElementById('sidebarCollapse').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('collapsed')
    document.querySelector('.brand-name').classList.toggle('d-none')
    document.querySelector('.sidebar-header').classList.toggle('m-auto')
    document.querySelector('.sidebar-custom').classList.toggle('col-md-2')
    document.querySelector('.sidebar-custom').classList.toggle('col-md-1')
    document.querySelector('.main-content').classList.toggle('col-md-10')
    document.querySelector('.main-content').classList.toggle('col-md-11')

})