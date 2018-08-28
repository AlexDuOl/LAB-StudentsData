 $('#cancelSkills').click('shown.bs.modal', function(evento) {
     var id = evento.target.id;
     console.log(id);
     document.getElementById("#remove").setAtrribute("skill", id);

     $('#remove').click("removeBtn", function(e) {
         var botonRemove = e.target.dataset.skills
         console.log(botonRemove);
     });

 });






 //  var buttons = document.querySelectorAll('.tetxBtn')
 //  var remove = document.querySelectorAll('#remove')


 //  for (var i = 0; i < buttons.length; i++) {

 //      buttons[i].addEventListener('click', showModal);
 //  }


 //  function removed(evento) {

 //  }







 // $('.btn').click('shown.bs.modal', function(e) {
 //             var elemento = e.target
 //             console.log(elemento)
 //             if (elemento === $('#remove').click(function()) {
 //                     e.target.style.visibility = 'hidden';
 //                 }
 //             })








 // function general() {
 //     $('.btn').click('shown.bs.modal', function(e){
 //         var elemento = e.target
 //        elemento = document.createElementByClassName("remove");
 //        var padre = document.getElementById("cancelSkills");
 //        elemento.appendChild(padre);

 //         var classElement = e.target.className;
 //         console.log(classElement)

 //     return elemento;
 // })
 // }

 // $('#remove').click(function(e){
 //     var removeElement = document.getElementsByClassName("remove");
 //     removeElement.remove();
 //      console.log(removeElement);

 // })
 // $('.btn').click('shown.bs.modal', function(e){
 //     var elemento = e.target

 //     var classElement = e.target.className;
 //     console.log(classElement);
 //     if($('#remove').click(function(e){
 //         return true
 //     }){

 //     }

 // })

 // $('#remove').click(function(e, classElement){
 //     classElement.remove();
 //      console.log(classElement);

 // })



 // //  })

 // $('#cancelSkills').click('shown.bs.modal', function() {
 //     console.log("prueba");
 // })

 // $('#cancelSkills').click(function remove(e) {


 //     var elemento = e.target
 //  console.log(elemento);

 //  })

 //       if (e.srcElement)
 //       tag = e.srcElement.tagName;
 //   else if (e.target)
 //         tag = e.target.tagName;

 //   alert("El elemento selecionado ha sido " + tag);


 // $('#remove').click(function remove(e) {
 //     var id = e.target.id;
 // })

 //recuperar elemento cliqueado y quitarlo de html