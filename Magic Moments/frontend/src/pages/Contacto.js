import"../styles/components/pages/Contacto.css"
import {useState} from "react";
import axios from "axios";


const Contacto = (props) =>{

    const initialForm = {
        nombre:"",
        apellido:"",
        email:"",
        telefono:"",
        date:"",
        time:"",
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState ("");
    const [formData, setFormData] = useState(initialForm);
    
    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg("");
        setSending(true)
        const response = await axios.post ("http://localhost:3000/api/contacto", formData) ;
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false){
            setFormData(initialForm)
        }
    }

    return ( 
<main className="holdera">
        <h2>Informacion del pedido</h2>
        <form action="/contacto" method="post" class="contacto" onSubmit={handleSubmit}>
           <div class="formu">
            <p>
                <input type="text" placeholder="Nombre" name="nombre" value={formData.nombre} onChange={handleChange} />
            </p>
            <p>
                <input type="text" placeholder="Apellido" name="apellido" value={formData.apellido} onChange={handleChange} />
            </p>
            <p>
                <input type="email" placeholder="correofalso@gmail.com" name="email" value={formData.email} onChange={handleChange} />
            </p>
            <p>
                <input type="text" maxlength="12" placeholder="11 22444544" name="telefono" value={formData.telefono} onChange={handleChange} />
            </p>
            <p>
                <input type="date" name="date" value={formData.date} onChange={handleChange} />
            </p>
            <p>
                <input type="time"  name="time" value={formData.time} onChange={handleChange} />
            </p>
            <p>
                <input type="submit" name="enviar" id="enviar"/>
            </p>
            <p>
            {sending ? <p>Enviando...</p> :null}
            {msg ? <p>{msg}</p> : null}
            </p>
           </div>
        </form>
    </main>
    )
}
export default Contacto;