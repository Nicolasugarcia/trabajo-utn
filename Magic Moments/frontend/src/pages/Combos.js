import { useState, useEffect } from "react";
import axios from "axios";
import CombosItem from "../components/layout/combos/combosItem";
import "../styles/components/pages/Combos.css"


const CombosPage = (props) => {
    
    const[loading, setLoading]=useState(false);
    const[combos, setCombos]=useState([]);

    useEffect(()=> {
        const cargarCombos = async () => {
            setLoading(true);
            const response = await axios.get("http://localhost:3000/api/combos");
            setCombos(response.data);
            setLoading(false);
        };
        cargarCombos();
    }, []);
    
    return (
        <section className="holder">
            <h2>Combos</h2>
        {loading ? (
            <p>Cargando...</p>
        ) : (
            combos.map(item => <CombosItem key={item.id}
                titulo={item.titulo} imagen={item.imagen}
                body={item.descripcion} />)
        )}
        </section>
    );
}


export default CombosPage;