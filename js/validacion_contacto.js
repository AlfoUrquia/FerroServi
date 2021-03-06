var validators = 
{
    "text":/^[A-Za-z\s]*$/,
    "telefono": /^(\+?\(?504\)?\s?)?[13456789]\d{3}-?\d{4}$/,
    "correo":  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    "vacio": /^\s*$/,
    "doble_espacio":/\s{2,}/
};

var formInputs = 
{
    txtNombre: null,
    txtTelefono: null,
    txtCorreo: null,
    txtAsunto: null,
    txtMensaje: null
};
  
var formInputsErrors = 
{
    txtNombreErr: null,
    txtTelefonoErr: null,
    txtCorreoErr: null,
    txtAsuntoErr: null,
    txtMensajeErr: null
};
  
document.addEventListener("DOMContentLoaded", function(e)
{
    formInputs.txtNombre = document.getElementById("txtNombre");
    formInputsErrors.txtNombreErr = document.getElementById("txtNombreErr");

    formInputs.txtTelefono = document.getElementById("txtTelefono");
    formInputsErrors.txtTelefonoErr = document.getElementById("txtTelefonoErr");

    formInputs.txtCorreo = document.getElementById("txtCorreo");
    formInputsErrors.txtCorreoErr = document.getElementById("txtCorreoErr");

    formInputs.txtAsunto = document.getElementById("txtAsunto");
    formInputsErrors.txtAsuntoErr = document.getElementById("txtAsuntoErr");

    formInputs.txtMensaje = document.getElementById("txtMensaje");
    formInputsErrors.txtMensajeErr = document.getElementById("txtMensajeErr");

    formInputs.txtNombre.addEventListener("change", inputOnChange);
    formInputs.txtNombre.addEventListener("blur", inputOnChange);
  
    formInputs.txtTelefono.addEventListener("change", inputOnChange);
    formInputs.txtTelefono.addEventListener("blur", inputOnChange);

    formInputs.txtCorreo.addEventListener("change", inputOnChange);
    formInputs.txtCorreo.addEventListener("blur", inputOnChange);
  
    formInputs.txtAsunto.addEventListener("change", inputOnChange);
    formInputs.txtAsunto.addEventListener("blur", inputOnChange);

    formInputs.txtMensaje.addEventListener("change", inputOnChange);
    formInputs.txtMensaje.addEventListener("blur", inputOnChange);
});


function inputOnChange(e)
{
    console.log("Cambio en " + e.target.name);

    switch (e.target.name)
    {
        case "txtNombre":

            if(validators.text.test(e.target.value))
            {
                formInputsErrors.txtNombreErr.innerHTML = "";
            } 
            else 
            {
                formInputsErrors.txtNombreErr.innerHTML = "El nombre contiene caracteres extra??os.";
                formInputs.txtNombre.focus();
            }

            if (validators.doble_espacio.test(e.target.value))
            {
                formInputsErrors.txtNombreErr.innerHTML = "No se pueden ingresar espacios seguidos.";
            }
        
            if (validators.vacio.test(e.target.value)) 
            {
                formInputsErrors.txtNombreErr.innerHTML = "El nombre es requerido.";
                formInputs.txtNombre.focus();
            }

        break;

        case "txtTelefono":

            if (validators.vacio.test(e.target.value)) 
            {
                formInputsErrors.txtTelefonoErr.innerHTML = "";
            } 
            else 
            {
                if(validators.telefono.test(e.target.value))
                {
                    formInputsErrors.txtTelefonoErr.innerHTML = "";
                }
                else
                {
                    formInputsErrors.txtTelefonoErr.innerHTML = "El celular no es valido."
                    formInputs.txtTelefono.focus();
                }
            }

        break;

        case "txtCorreo":

            if (validators.correo.test(e.target.value)) 
            {
                formInputsErrors.txtCorreoErr.innerHTML = "";
            } 
            else 
            {
                formInputsErrors.txtCorreoErr.innerHTML = "El correo no tiene el formato requerido.";
                formInputs.txtCorreo.focus();
            }
          
            if (validators.vacio.test(e.target.value)) 
            {
                formInputsErrors.txtCorreoErr.innerHTML = "El correo es requerido.";
                formInputs.txtCorreo.focus();
            } 
        
        break;

        case "txtAsunto":

            if (validators.vacio.test(e.target.value)) 
            {
                formInputsErrors.txtAsuntoErr.innerHTML = "El asunto es requerido.";
                formInputs.txtAsunto.focus();
            }
            else 
            {
                formInputsErrors.txtAsuntoErr.innerHTML = "";
            }

            if (validators.doble_espacio.test(e.target.value))
            {
                formInputsErrors.txtNombreErr.innerHTML = "No se pueden ingresar espacios seguidos.";
            }

        break;

        case "txtMensaje":
            if (validators.vacio.test(e.target.value)) 
            {
                formInputsErrors.txtMensajeErr.innerHTML = "El mensaje es requerido.";
                formInputs.txtMensaje.focus();
            }
            else 
            {
                formInputsErrors.txtMensajeErr.innerHTML = "";
            }

            if (validators.doble_espacio.test(e.target.value))
            {
                formInputsErrors.txtNombreErr.innerHTML = "No se pueden ingresar espacios seguidos.";
            }

        break;

    }
}
