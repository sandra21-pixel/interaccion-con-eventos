window.onload = function(){
    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');
    let logo=document.querySelector('figure')
    let btn=document.querySelector(".botonAgregar")
    
    logo.addEventListener("mouseover",e=>{
        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList');
    })
    
    btn.addEventListener("mouseover",()=>{
        btn.style.backgroundColor="pink"
    })
    btn.addEventListener("mouseout",()=>{
        btn.style.backgroundColor="green"
    })
    
    
    
    console.log(body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color ='white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px';



}