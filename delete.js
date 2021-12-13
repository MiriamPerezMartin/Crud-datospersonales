$(document).ready(function () {
 
    console.log("funciona")

    let toClean =function () { 
        $('#nombre').val('')
        $('#edad').val('')
        $('#calle').val('')
        $('#colonia').val('')
        $('#numero').val('')
        $('#email').val('')
        $('#fechaNacimiento').val('')

     }

    let drawNames = function(){
        $('#AllPersons').html('')
        $('.toput').html('')

        let Myarray = localStorage.getItem('persons')
        Myarray = JSON.parse(Myarray)

        console.log(Myarray)
        
        if(Myarray !=null && Myarray.length >= 1){
            for(let i of Myarray){
                console.log(i)
            $('#AllPersons').append('<p>EL nombre es: '+i.name+'  la edad es: '+i.age+'su direccion es calle: '+i.street+' colonia: '+i.suburb+' numero: '+i.numero+' su email es: '+i.email+' y su fecha de nacimiento es el: '+i.date+'</p> <button type="button" class="btn btn-outline-danger del_element" value="'+i.email+'">DELETE</button><button type="button" class="btn btn-secondary">UPDATE</button>')
            }
        }
    }

 drawNames()
 toClean()
 $('#agregarButton').click(function(){
    
    if($('#nombre').val() == '' || $('#nombre').val() == null || $('#nombre').val().length == 0){
        alert('Tienes que llenar todos los campos solicitados')
        return 0
    }
    if($('#edad').val() == '' || $('#edad').val() == null || $('#edad').val().length == 0 || $('#edad').val() < 18){
        return 0
    }
    const correo = ['@','.',];
    if($('#email').val() == '' || $('#email').val() == null || $('#email').val().includes('@') == false || $('#email').val().includes('.') == false ){
        alert('El formato de el correo electronico no es correcto')
        return 0
    }

    $('#AllPersons').html('')
    $('.toput').html('')
    let Myname = $('#nombre').val()
    let Myage = $('#edad').val()
    let Mystreet = $('#calle').val()
    let Mysuburb = $('#colonia').val()
    let Mynumero = $('#numero').val()
    let Myemail = $('#email').val()
    let Mydate = $('#fechaNacimiento').val()
 
     console.log(Myname,Myage,Mystreet,Mysuburb,Mynumero,Myemail,Mydate)
 
     let NewPerson = {}
     NewPerson.name = Myname
     NewPerson.age = Myage
     NewPerson.street = Mystreet
     NewPerson.suburb = Mysuburb
     NewPerson.numero = Mynumero
     NewPerson.email = Myemail
     NewPerson.date = Mydate
 
     console.log(NewPerson)
 
     let ExistArray = localStorage.getItem('persons')
     ExistArray = JSON.parse(ExistArray)
 
     if(ExistArray == null || ExistArray.length == 0){
         ExistArray = []
     }
     
     ExistArray.push(NewPerson)
     console.log(ExistArray)
     localStorage.setItem('persons',JSON.stringify(ExistArray))
   
     drawNames()
     toClean()
    })

   //eliminar
    $(document.body).on('click','.del_element',function(){
        console.log(this.value)

        let toDel = localStorage.getItem('persons')
        toDel=JSON.parse(toDel)
        console.log(toDel)

        toDel = toDel.filter(e => e.email != this.value)

        console.log(toDel)

        localStorage.setItem('persons',JSON.stringify(toDel))
        drawNames()
    })
 
 //update
$(document.body)
                 
})
