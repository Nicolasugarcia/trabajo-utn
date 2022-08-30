import"../styles/components/pages/Contacto.css"
const Contacto = (props) =>{
    return ( 
<main className="holdera">
        <h2>Informacion del pedido</h2>
        <form action="method" class="contacto">
           <div class="formu">
            <p>
                <input type="text" placeholder="Nombre" name="Nombre" id="nombre"/>
            </p>
            <p>
                <input type="text" placeholder="Apellido" name="Apellido" id="Apellido"/>
            </p>
            <p>
                <input type="email" placeholder="correofalso@gmail.com" name="email" id="email"/>
            </p>
            <p>
                <input type="text" maxlength="12" placeholder="11 22444544" name="telefono" id="telefono"/>
            </p>
            <p>
                <input type="date" name="date" id="date"/>
            </p>
            <p>
                <input type="time" id="time" name="time"/>
            </p>
            <p>
                <input type="submit" name="enviar" id="enviar"/>
            </p>
           </div>
        </form>
    </main>
    )
}
export default Contacto;