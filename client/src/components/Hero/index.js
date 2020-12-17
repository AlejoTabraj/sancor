import React, { useState} from 'react'
import axios from 'axios'
import Offer from '../img/30_OFF.svg'
import './style.css'



export const Hero = () => {
    const [telephone, setTelephone] = useState(0);


    const handleSubmit = async(e) =>{
        e.preventDefault();
         
        await axios.post(`https://5000-e240e8cf-ac5d-4a13-a998-929559d9f681.ws-us03.gitpod.io`, { telephone })
      

    }
    return (
    <section className="heroWrapper">
		<div>
		<form className="heroFormWrapper" onSubmit={handleSubmit}>            
			<h2>¡Ingresá tu número <br/> y corizá tu plan ideal!</h2>	
			<input onChange={e => setTelephone(e.target.value)} type="tel" name="telefono" placeholder="Ej. 1123563009(sin0)"/>
        <button type='submit'>¡COTIZÁ!</button>	
		</form>	
			<div className="circleWrap">				
				<div className="circle">$0.00</div>				
			</div>	
		</div>
		<div className="heroOfferWrapper">
            <img src={Offer} alt='oferta'/>
			{/*<div className="heroOffer">
				<h2>30<br/>OFF</h2>
				<p>%</p>
			</div>
    <p>EN TODOS<br/>LOS PLANES</p>			*/}
		</div>
		
	</section>
    
    )
}
