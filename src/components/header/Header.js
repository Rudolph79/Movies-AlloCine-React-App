import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
        /* navbar-expand-lg c'est pour donner le comportement responsive sur petit écran pour voir le menu hamberger */
        /* navbar-light c'est pour donner la couleur de fond d'écriture */
        /* bg-light pour donner un background color un peu gris */
        /* navbar-brand est là où on met le logo ou le nom du site */
        /* navbar-toogler permet de d'afficher le menu burger */
        /* collapse va permettre de faire disparaître le bloc lorsque l'écran sera petite de taille */
        /* ml ie margin left */
        <header className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">AlloMovie</a>
            <button className="navbar-toggler">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Accueil</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Favoris</a>
                    </li>
                </ul>
            </div>
        </header>);
    }
}

export default Header;