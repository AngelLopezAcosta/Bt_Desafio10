const form = document.querySelector("form");
let errors = document.getElementById("errors");

form.addEventListener("change", (e) => {
  e.preventDefault();
  let nombre = document.querySelector("#nombre").value;
  let apellido = document.querySelector("#apellido").value;
  let tipoDoc = document.querySelector('input[name="tipoDoc"]:checked');
  let numeroDoc = document.querySelector("#numeroDoc").value;
  let direccion = document.querySelector("#direccion").value;

  //Nombre y Apellido
  let regExpNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{1}[a-záéíóúÁÉÍÓÚñÑ]{2,9}$/;
  let regExpApellido =
    /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{1}[a-zA-ZáéíóúÁÉÍÓÚñÑ\'\s]{1,19}$/;

  let inputNombre = document.querySelector("#nombre");
  inputNombre.style.borderRadius = "5px";
  if (nombre.length > 0) {
    errors.innerHTML = "";
    errors.style.display = "block";
    if (!regExpNombre.test(nombre)) {
      errors.innerHTML = `<p>El nombre no es válido</p>`;
      errors.style.display = "block";
      inputNombre.style.border = "2px solid red";
    } else {
      inputNombre.style.border = "2px solid green";
    }
  } else {
    errors.innerHTML += `<p>No se ingresó nombre</p>`;
    errors.style.display = "block";
    inputNombre.style.border = "2px solid red";
  }

  let inputApellido = document.querySelector("#apellido");
  inputApellido.style.borderRadius = "5px";
  if (apellido.length > 0) {
    if (!regExpApellido.test(apellido)) {
      errors.innerHTML += `<p>El apellido no es válido</p>`;
      errors.style.display = "block";
      inputApellido.style.border = "2px solid red";
    } else {
      inputApellido.style.border = "2px solid green";
      inputApellido.style.borderRadius = "5px";
    }
  } else {
    errors.innerHTML += `<p>El apellido es obligatorio</p>`;
    errors.style.display = "block";
    inputApellido.style.border = "2px solid red";
  }

  // Tipo de Documento
  let regExpDni =
    /^[0-9]{1,2}[\.]{0,1}[0-9]{3}[\.]{0,1}[0-9]{3}[\.]{0,1}[0-9]{1}$/;
  let regExpCuil = /^[0-9]{2}[-]{0,1}[0-9]{8}[-]{0,1}[0-9]{1}$/;

  let doc = tipoDoc ? tipoDoc.value : null;
  let inputNumeroDoc = document.querySelector("#numeroDoc");
  inputNumeroDoc.style.borderRadius = "5px";

  if (doc === "DNI") {
    if (numeroDoc.length > 0) {
      if (!regExpDni.test(numeroDoc)) {
        errors.innerHTML = `<p>El DNI no es válido</p>`;
        errors.style.display = "block";
        inputNumeroDoc.style.border = "2px solid red";
      } else {
        inputNumeroDoc.style.border = "2px solid green";
      }
    } else {
      errors.innerHTML = `<p>Complete Número DNI</p>`;
      errors.style.display = "block";
      inputNumeroDoc.style.border = "2px solid red";
    }
  } else if (doc === "CUIL") {
    if (numeroDoc.length > 0) {
      if (!regExpCuil.test(numeroDoc)) {
        errors.innerHTML += `<p>El CUIL no es válido</p>`;
        errors.style.display = "block";
        inputNumeroDoc.style.border = "2px solid red";
      } else {
        inputNumeroDoc.style.border = "2px solid green";
      }
    } else {
      errors.innerHTML += `<p>Complete Número CUIL</p>`;
      errors.style.display = "block";
      inputNumeroDoc.style.border = "2px solid red";
    }
  } else if (doc === null) {
    errors.innerHTML += `<p>El tipo de documento es obligatorio</p>`;
    errors.style.display = "block";
    inputNumeroDoc.style.border = "2px solid red";
  }

  //Domicilio

  let regExpDireccion = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s\,\.\-\(\)\'\"\/\°]{10,200}$/;
  let inputDireccion = document.querySelector("#direccion");
  inputDireccion.style.borderRadius = "5px";
  if (direccion.length > 0) {
    if (!regExpDireccion.test(direccion)) {
      errors.innerHTML += `<p>La dirección no es válida</p>`;
      errors.style.display = "block";
      inputDireccion.style.border = "2px solid red";
    } else {
      inputDireccion.style.border = "2px solid green";
    }
  } else {
    errors.innerHTML += `<p>No se ingresó dirección</p>`;
    errors.style.display = "block";
    inputDireccion.style.border = "2px solid red";
  }

  if (errors.innerHTML === "") {
    let success = document.getElementById("success");
    success.innerHTML += `<p>Datos validados correctamente</p>`;
    success.style.color = "green";
    success.style.padding = "10px";
    success.style.textAlign = "center";
    success.style.fontSize = "20px";
  }
});
