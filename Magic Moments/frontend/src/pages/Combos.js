import "../styles/components/pages/Combos.css"
function Combos(props) {
    return (
        <main className="holder">
            <div className="com">
                <img src="/img/bla.jpg" alt="" />
                <img src= "img/ana.jpg" />
                <div className="info">
                    <h4>1er combo</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium aliquid nobis quibusdam,
                        dolorum assumenda fugiat repudiandae, soluta temporibus nesciunt maxime expedita quaerat ducimus
                        nisi cumque recusandae ab optio quia deserunt?</p>
                </div>
            </div>
            <div className="com">
                <div class="laca"><img src="img/4k.jpg" alt="" /></div>
                <img src="img/party.jpg" alt="" />
                <div className="info">
                    <h4>2do combo</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium aliquid nobis quibusdam,
                        dolorum assumenda fugiat repudiandae, soluta temporibus nesciunt maxime expedita quaerat ducimus
                        nisi cumque recusandae ab optio quia deserunt?</p>
                </div>
            </div>
            <div className="com">
                <img src="img/bla.jpg" alt="" />
                <img src="img/party.jpg" alt="" />
                <div className="info">
                    <h4>3er combo</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium aliquid nobis quibusdam,
                        dolorum assumenda fugiat repudiandae, soluta temporibus nesciunt maxime expedita quaerat ducimus
                        nisi cumque recusandae ab optio quia deserunt?</p>
                </div>
            </div>
        </main>
    );
}
export default Combos;