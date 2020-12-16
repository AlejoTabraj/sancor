import React from 'react'
import './style.css'

export const Services = () => {
    return (
        <div className="servicesContainer">
		<h2>¡Sí, todos son BIENVENIDOS!</h2>
		<div className="servicesWrapper">

			<div className="serviceElement">
				<div className="imgContainer">					
				</div>
				<h3>Grupo Familiar</h3>
				<a href="./">QUIERO COTIZAR</a>				
			</div>


			<div className="serviceElement">
				<div className="imgContainer">					
				</div>
				<h3>En Relación de <br/>Dependencia</h3>
				<a href="./">QUIERO COTIZAR</a>				
			</div>


			<div className="serviceElement">
				<div className="imgContainer">					
				</div>
				<h3>Monotributistas</h3>
				<a href="./">QUIERO COTIZAR</a>				
			</div>


			<div className="serviceElement">
				<div className="imgContainer">					
				</div>
				<h3>Autónomos</h3>
				<a href="./">QUIERO COTIZAR</a>				
			</div>
			
		</div>
		
	</div>

    )
}
