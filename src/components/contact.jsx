import React from 'react';
import '../css/contact.css';

function Contact() {
    return(
        <>
<form class="form-contact" action="/index.html" method="post" enctype="multipart/form-data">
        <h1 id="contact" class="title-contact">Contacto</h1>
        <div class="div-contact">
            <div>
                <label class="label-contact">Nombre y apellido</label>
            </div>
            <div>
                <input class="input-contact" type="text" />
            </div>
        </div>
        <div class="div-contact">
            <div>
                <label class="label-contact">Email</label>
            </div>
            <div>
                <input class="input-contact" name="email" id="email" type="email" />
            </div>
        </div>
        <div class="div-contact">
            <div>
                <label class="label-contact">Comentarios</label>
            </div>
            <div>
                <input class="input-comentarios" name="comentario" id="comentario" type="text" />
            </div>
        </div>
        <div class="div-submit">
            <button class="button-submit" type="submit">
                Enviar
            </button>
        </div>
    </form>
        </>
    )
}
export default Contact;
