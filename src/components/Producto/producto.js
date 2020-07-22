$("#txtImagen").on("change", function(){
    alert("h");
    var archivo = document.getElementById("txtImagen").files[0];
    var reader = new FileReader();
    if (archivo) {
        reader.readAsDataURL(archivo);
        reader.onloadend = function () {
            document.getElementById("img").src = reader.result;
            
        }
    }

})