import "../styles/components/pages/Lugare.css"
const Lugare = (props) => {
    return (
        <main className="holder">
            <h2>AMBA/CABA</h2>
            <div>
                <table >
                    <thead >
                        <tr >
                            <th  >Localidad</th>
                            <th  >Tiempo de distancia
                            </th>
                            <th >Dias de anticipacion de reserva</th>
                        </tr>
                    </thead>
                        <tr >
                            <td >Caballito</td>
                            <td >5hr</td>
                            <td >4 Dias</td>
                        </tr>
                        <tr >
                            <td >Boedo</td>
                            <td >3hr</td>
                            <td >2 Dias</td>
                        </tr>
                        <tr  >
                            <td >Puerto Madero</td>
                            <td >6hr</td>
                            <td >7 Dias</td>
                        </tr>
                        <tr  >
                            <td >Quilmes</td>
                            <td >5hr</td>
                            <td >7 Dias</td>
                        </tr>
                        <tr  >
                            <td >Tigre</td>
                            <td >4hr</td>
                            <td >5 Dias</td>
                        </tr>
                        <tr><td >Parque Patricio</td><td >3hr</td><td >3 Dias</td></tr>
                        <tr><td >Avellaneda</td><td >2hr</td><td >2 Dias</td></tr>
                        <tr><td >Lanus</td><td >1hr</td><td >1 Dia</td></tr>
                </table>
            </div>
        </main >
    );
}
export default Lugare;