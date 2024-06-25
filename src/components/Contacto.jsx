import '../css/contact.css';

const Contacto = () => {
    return (
        <>
            <form className="form-contact" action="/index.html" method="post" enctype="multipart/form-data">
                <h1 id="contact" className="title-contact">Contacto</h1>
                <div className="div-contact">
                    <div>
                        <label className="label-contact">Nombre y apellido</label>
                    </div>
                    <div>
                        <input className="input-contact" type="text" />
                    </div>
                </div>
                <div className="div-contact">
                    <div>
                        <label className="label-contact">Email</label>
                    </div>
                    <div>
                        <input className="input-contact" name="email" id="email" type="email" />
                    </div>
                </div>
                <div className="div-contact">
                    <div>
                        <label className="label-contact">Comentarios</label>
                    </div>
                    <div>
                        <input className="input-comentarios" name="comentario" id="comentario" type="text" />
                    </div>
                </div>
                <div className="div-submit">
                    <button className="button-submit" type="submit">
                        Enviar
                    </button>
                </div>
            </form>
        </>
    )
}
export default Contacto;
