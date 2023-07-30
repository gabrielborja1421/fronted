import React from "react"
import arakiri from './assets/img/OFERTAS2.png';
import './index.css';

const Navbar =_=>{
    return(
        <div>
            <ul id= "navbar" class="nav justify-content-center">
            <li class="nav-item">
                <button id="button" class="nav-link active" aria-current="page" href="#">Hot sale</button>
            </li>
            <li class="nav-item">
                <button id="button" class="nav-link" href="#">Celulares</button>
            </li>
            <li class="nav-item">
                <button id="button" class="nav-link" href="#">Laptops</button>
            </li>
            <li class="nav-item">
                <button id="button" class="nav-link" href="#">Audio</button>
            </li>
            <li class="nav-item">
                <button id="button" class="nav-link" href="#">Smart TV</button>
            </li>
            <li class="nav-item">
                <button id="button" class="nav-link" href="#">Tablets</button>
            </li>
            <li class="nav-item">
                <button id="button" class="nav-link" href="#">Circuitos</button>
            </li>
            <li class="nav-item">
                <button id="button" class="nav-link" href="#">Alexas</button>
            </li>
            <li class="nav-item">
                <button id="button" class="nav-link" href="#">Link</button>
            </li>
            </ul>
        
        </div>
    )
}

export default Navbar;