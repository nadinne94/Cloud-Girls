var tabela = document.querySelector("table");
    
tabela.addEventListener("dblclick", function(event){
    if (event.target.tagName == 'TD'){ // Somente executará nosso código caso o elemento em que clicamos seja um <td>
        
        event.target.parentNode.classList.add("fadeOut");
    
        setTimeout(function(){
            event.target.parentNode.remove();
        }, 500);
    }
});



    
    


/* pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        console.log("Fui clicado com um duplo click");
        this.remove();
    })
}); */