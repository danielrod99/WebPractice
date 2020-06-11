$(document).ready(function(){
    if(window.location.href.indexOf('about')==-1&&window.location.href.indexOf('reloj')==-1&&window.location.href.indexOf('contact')==-1){
        $('.bxslider').bxSlider({
          mode: 'fade',
          captions: true,
          slideWidth: 1200
        });
        var posts=[
            {
                title: 'Prueba de titulo1',
                date: 'Publicado: '+ moment().format("Do MMMM YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim gravida quam, ut lacinia metus pulvinar posuere. Donec sit amet risus tincidunt augue semper mattis. Sed sagittis, odio et auctor imperdiet, quam orci mattis enim, fringilla sollicitudin velit metus eu massa. Donec tortor orci, blandit sit amet lectus sed, consequat malesuada leo. Proin nec congue dolor. Phasellus suscipit viverra tellus a egestas. Phasellus dapibus et magna vel eleifend. Fusce lectus metus, cursus at dui sed, posuere bibendum arcu. Suspendisse semper porta nisl ut laoreet. Maecenas eu tortor ac lacus molestie pulvinar. '
            },{
                title: 'Prueba de titulo2',
                date: 'Publicado: '+ moment().format("Do MMMM YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim gravida quam, ut lacinia metus pulvinar posuere. Donec sit amet risus tincidunt augue semper mattis. Sed sagittis, odio et auctor imperdiet, quam orci mattis enim, fringilla sollicitudin velit metus eu massa. Donec tortor orci, blandit sit amet lectus sed, consequat malesuada leo. Proin nec congue dolor. Phasellus suscipit viverra tellus a egestas. Phasellus dapibus et magna vel eleifend. Fusce lectus metus, cursus at dui sed, posuere bibendum arcu. Suspendisse semper porta nisl ut laoreet. Maecenas eu tortor ac lacus molestie pulvinar. '
            },{
    
                title: 'Prueba de titulo3',
                date: 'Publicado: '+ moment().format("Do MMMM YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim gravida quam, ut lacinia metus pulvinar posuere. Donec sit amet risus tincidunt augue semper mattis. Sed sagittis, odio et auctor imperdiet, quam orci mattis enim, fringilla sollicitudin velit metus eu massa. Donec tortor orci, blandit sit amet lectus sed, consequat malesuada leo. Proin nec congue dolor. Phasellus suscipit viverra tellus a egestas. Phasellus dapibus et magna vel eleifend. Fusce lectus metus, cursus at dui sed, posuere bibendum arcu. Suspendisse semper porta nisl ut laoreet. Maecenas eu tortor ac lacus molestie pulvinar. '
            },{
                title: 'Prueba de titulo4',
                date: 'Publicado: '+ moment().format("Do MMMM YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim gravida quam, ut lacinia metus pulvinar posuere. Donec sit amet risus tincidunt augue semper mattis. Sed sagittis, odio et auctor imperdiet, quam orci mattis enim, fringilla sollicitudin velit metus eu massa. Donec tortor orci, blandit sit amet lectus sed, consequat malesuada leo. Proin nec congue dolor. Phasellus suscipit viverra tellus a egestas. Phasellus dapibus et magna vel eleifend. Fusce lectus metus, cursus at dui sed, posuere bibendum arcu. Suspendisse semper porta nisl ut laoreet. Maecenas eu tortor ac lacus molestie pulvinar. '
            }
        ];
        posts.forEach((item,index)=>{
            var post=`
            <article class="post">
             <h2>${item.title}</h2>
            <p class="date">${item.date}</p>
            <div class="clearfix">${item.content}</div>
            <p class="contenido">${item.content}</p>
            <a href="#" class="boton">Leer Mas</a>
            </article>
            `
            $("#posts").append(post);
        })
    }
        checkTheme();
    
    var tema=$("#theme");
    $("#toGreen").click(function(){
        tema.attr("href","/public/css/green.css");
        localStorage.setItem('color','green');
    })
    $("#toRed").click(function(){
        tema.attr("href","/public/css/red.css");
        localStorage.setItem('color','red');
    })
    $("#toBlue").click(function(){
        tema.attr("href","/public/css/blue.css");
        localStorage.setItem('color','blue');
    })
    $(".subir").click((e)=>{
        e.preventDefault();
        $("html,body").animate({
            scrollTop:0
        },500)
        return false;
    })
    $("#login form").submit(()=>{
        var nombre=$("#name").val();
        localStorage.setItem("nombre",nombre);
    })
    var form_name=localStorage.getItem('nombre');
    if(form_name!=null){
        $("#about p").html("<hr><br><strong>Bienvenido "+form_name+"</strong>"+'<br><a id="logout">Log out</a>');
        $("#login").hide();
    }
    $("#logout").click(function(){
        localStorage.clear();
        location.reload();
    })
    if(window.location.href.indexOf('contact')!=-1){
        $.validate({
            lang:'es'
        });
    }
})

function checkTheme(){
    var color=localStorage.getItem('color');
    var tema=$("#theme");
    switch(color){
        case 'green':
            tema.attr("href","/public/css/green.css");
        break;
        case 'blue':
            tema.attr("href","/public/css/blue.css");
        break;
        case 'red':
            tema.attr("href","/public/css/red.css");
        break;
        default:
            tema.attr("href","/public/css/green.css");
        break;
    }
}