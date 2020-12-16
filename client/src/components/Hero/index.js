import React from 'react'
import './style.css'

export const Hero = () => {
    return (
    <section className="heroWrapper">
		<div>
		<div className="heroFormWrapper">
			<h2>¡Ingresá tu número <br/> y corizá tu plan ideal!</h2>	
			<input type="tel" name="telefono" placeholder="Ej. 1123563009(sin0)"/>
			<button>¡COTIZÁ!</button>	
		</div>	
			<div className="circleWrap">				
				<div className="circle">$0.00</div>				
			</div>	
		</div>
		<div className="heroOfferWrapper">
			<div className="heroOffer">
				<h2>30<br/>OFF</h2>
				<p>%</p>
			</div>
			<p>EN TODOS<br/>LOS PLANES</p>			
		</div>
		
	</section>
    
    )
}
