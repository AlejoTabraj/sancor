import React from 'react'
import './style.css'

export const Navbar = () => {
    return (
    <header className="navWrapper">
		<nav className="nav">
			<h1>SancorSalud</h1>		
			<div className="navLinkWrap">
				<ul>
					<li><a href="./">SOY ASOCIADO</a></li>
				</ul>
			</div>
		</nav>
	</header>
    )
}
