/* document.addEventListener('click',()=>{
document.querySelector('.menu').classList.toggle('is-active');
}); */

//con una funcion anonima autoejecutable por q si los quiero usar en otro proyecto copio y pego y listo

/**********MENU********* */
((d)=>{
const $btnMenu = d.querySelector(".menu-btn"),
$menu = d.querySelector(".menu");
$btnMenu.addEventListener('click',(e) =>{
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
});
d.addEventListener('click',e =>{
    if(!e.target.matches(".menu a")) return false;//si no es un enlace no hagas nada
    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
})
})(document);

/************FORM***********/
((d) =>{
    const $form = d.querySelector(".contact-form"),
    $loader = d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contact-form-response");

    $form.addEventListener("submit",e=>{
        e.preventDefault()
        $loader.classList.remove("none");
        fetch("https://formsubmit.co/ajax/gonzalezemanuel0124@gmail.com",{
        method:"POST",
        body: new FormData(e.target)
        }).then(res => res.ok ? res.json() : Promise.reject(res))
        .then(json =>{
        $loader.classList.add("none");
        location.hash = "#gracias";//activar modal
        $form.reset();
        })
        .catch(err =>{
            let message = err.statusText|| "Ocurrió un error al enviar, intenta nuevamente"
            $response.querySelector("h3").innerHTML = `Error ${err.status}: ${message}`;
        })
        .finally(()=>{
            $loader.classList.add("none");
            setTimeout(() => {
                location.hash = "#close";
            }, 3000);
        });
    });
})(document);
