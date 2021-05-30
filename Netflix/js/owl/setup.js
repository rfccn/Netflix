$('.owl-carousel').owlCarousel({
    loop:true, //efeito de looping, ida e volta
    margin:10, //espaço entre o carrosel
    nav:true, //setinha de navegação
    responsive:{ // se adapta ao tamanho da tela
        0:{
            items:1 
        },
        600:{
            items:3 //numero de itens por tamanho
        },
        1000:{
            items:5
        }
    }
})

