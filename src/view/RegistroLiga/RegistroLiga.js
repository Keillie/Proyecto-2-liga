// //Logica para abritel widget de cloudanary
// 'use stric';
// const boton_foto = document.querySelector('#btn-foto');
//  //para colocar imagen en etiqueta img
// const imagen = document.querySelector('#user-photo');

// let widget_cloudinary=cloudinary.createUploadWidget({
//      cloudName : 'dlesmrgip',
//      uploadPreset : 'njn0k1gc'
// },(err, result)=>{
//     if(!err && result && result.event ==='success'){
//          console.log('Imagen subida con exito',result.info);
//          imagen.src = result.info.secure_url;
//     }
// });

//  //Creando funcion anonima al darle click
// boton_foto.addEventListener('click',()=>{
//     //se abre ventana pero este debe de estar en protocolo http sino no abre la ventana, 
//    widget_cloudinary.open();
//  },false);