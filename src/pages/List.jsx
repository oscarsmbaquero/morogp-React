import React, { useState, useEffect }  from 'react';
import './List.scss';

const List = () => {
   //Definimos el array de posts
   let [pilots, setPilots] = React.useState([]);
   let [isLoading, setIsLoading] = useState(false);
 
   useEffect(() => {
     setIsLoading(true);//mostramos loading
     fetch('https://motogp-oscar.herokuapp.com/pilots')
       .then(response => response.json())
       .then(data => setPilots(data))
       .finally(() => setIsLoading(false));//ocultamos el loading
   }, []); //El array vacío es el estado inicial y el effect no se volverá a ejecutar cuando su contenido cambie
   console.log(pilots);
   const loading = (isLoading) ? 'Loading...' : null;
 
   return (
    <fieldset>
       <div class="container">
         { loading }
         { pilots.map((post, key) => (
           <div key={ key } class="flip-container">
                <div class="card">
                    <div class="front">
                        <img class="flex-item-image-detail"src={post.image} alt={post.name}/>
                    </div>  
                    <div class="back">
                        <p>{ post.name }</p> 
                        <p>{ post.dorsal }</p> 
                        <p>{ post.nacionality }</p>
                    </div>                
                </div> 
           </div>))}             
       </div>
     </fieldset>);
 }


export default List