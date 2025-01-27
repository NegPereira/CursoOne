// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

 let listaAmigo = [];

  function agregarAmigo() {
   const amigo = document.getElementById("amigo");  
   let nombreAmigo = document.getElementById('amigo').value;
   let amigos = document.getElementById('listaAmigos');

   if (nombreAmigo == '') {
       alert('Nombre en Blanco');  
   }else if (listaAmigo.includes(nombreAmigo)) {
       alert('Amigo ya Existe')
   }else {
      listaAmigo.push(nombreAmigo);
      console.log(listaAmigo);
   
     amigos.innerHTML = "";
     listaAmigo.forEach(function(ListaAmi) {
      console.log(ListaAmi);
      
         let item = document.createElement("li");
         item.textContent = ListaAmi
         amigos.appendChild(item);
         }
      );
      
   }

   document.getElementById('amigo').value = '';
   amigo.focus();
   return;
   } 


function sortearAmigo() {
   document.getElementById('resultado').value = '';
   let ganador = document.getElementById('resultado');
 
   if (listaAmigo.length <2 ) {
      ganador.innerHTML = 'Ingresar mas de un Amigo'
    }else{
      let indiceDelArray=Math.floor(Math.random()*listaAmigo.length);
      console.log(indiceDelArray);
      console.log(listaAmigo[indiceDelArray]);
      ganador.innerHTML = listaAmigo[indiceDelArray];
      listaAmigo = [];
    }
 
   return;
}