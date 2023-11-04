const imagenes = [
    {titulo:"Imagen 1", label:"Imagen #1", url:"https://picsum.photos/600/300"},
    {titulo:"Imagen 2", label:"Imagen #2", url:"https://picsum.photos/400/300"},
    {titulo:"Imagen 3", label:"Imagen #3", url:"https://picsum.photos/1700/300"},
    {titulo:"Imagen 4", label:"Imagen #4", url:"https://picsum.photos/100/300"},
    {titulo:"Imagen 5", label:"Imagen #5", url:"https://picsum.photos/500/300"},
    {titulo:"Imagen 6", label:"Imagen #6", url:"https://picsum.photos/3000/300"},
    {titulo:"Imagen 7", label:"Imagen #7", url:"https://picsum.photos/1000/300"},
    {titulo:"Imagen 8", label:"Imagen #8", url:"https://picsum.photos/800/300"},
    {titulo:"Imagen 9", label:"Imagen #9", url:"https://picsum.photos/900/300"},
    {titulo:"Imagen 10", label:"Imagen #10", url:"https://picsum.photos/300/300"},
    {titulo:"Imagen 11", label:"Imagen #11", url:"https://picsum.photos/1100/300"},
    {titulo:"Imagen 12", label:"Imagen #12", url:"https://picsum.photos/200/300"},
    {titulo:"Imagen 13", label:"Imagen #13", url:"https://picsum.photos/1300/300"},
    {titulo:"Imagen 14", label:"Imagen #14", url:"https://picsum.photos/1400/300"},
    {titulo:"Imagen 15", label:"Imagen #15", url:"https://picsum.photos/1500/300"},
    {titulo:"Imagen 16", label:"Imagen #16", url:"https://picsum.photos/2000/300"},
]

const handlerBarsContext = {
    "/index.html": {
        "title": "Home",
        "imagenes": imagenes
    }
}

const pageContext = (page)=>{
    const context= {...handlerBarsContext[page]}
    return context;
}
export default pageContext;