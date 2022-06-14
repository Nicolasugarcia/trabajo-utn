
const Lugare = (props) => {
    return (
        <main className="holder">
        <div>
            <h2>AMBA/CABA</h2>
            <table >
                <thead >
                    <tr >
                        <th scope="col" >Localidad</th>
                        <th scope="col" >Tiempo de distancia
                        </th>
                        <th scope="col" >Dias de anticipacion
                            de reserva</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="caja">
                        <td >Mark</td>
                        <td >5hr</td>
                        <td >4 Dias</td>
                    </tr>
                    <tr className="caja" >
                        <td >Jacob</td>
                        <td >3hr</td>
                        <td >2 Dias</td>
                    </tr>
                    <tr className="caja" >
                        <td >Mark</td>
                        <td >6hr</td>
                        <td >7 Dias</td>
                    </tr>
                    <tr className="caja" >
                        <td >Jacob</td>
                        <td >5hr</td>
                        <td >7 Dias</td>
                    </tr>
                    <tr className="caja" >
                        <td >Mark</td>
                        <td >4hr</td>
                        <td >5 Dias</td>
                    </tr>
                    <tr className="caja" >
                        <td >Jacob</td>
                        <td >3hr</td>
                        <td >3 Dias</td>
                    </tr>
                    <tr className="caja" >
                        <td >Mark</td>
                        <td >2hr</td>
                        <td >2 Dias</td>
                    </tr>
                    <tr className="caja" >
                        <td >Jacob</td>
                        <td >1hr</td>
                        <td >1 Dia</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
    );
}
export default Lugare;