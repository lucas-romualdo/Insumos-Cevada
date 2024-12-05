import React from 'react';
import {  Link } from "react-router-dom";

const navbar= () =>{
  return (
  <div>
    <li>
      <Link to="/cevada">Cevada</Link>
    </li>
    <li>
      <Link to="/lupulo">Lupúlo</Link>
    </li>
    <li>
      <Link to="/fermentacao">Fermentação</Link>
    </li>
    <li>
      <Link to="/acessorios">Acessórios</Link>
    </li>
  </div>
  );
}

export default navbar;