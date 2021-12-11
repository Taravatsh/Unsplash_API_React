// Import useState hook and axios library.
import React, { useState } from "react";
import axios from 'axios'

export default function Gallery() {

    // Define React useState hook and const in the app.

    const [query, setQuery] = useState("");
    // Unsplash API access key.
    const clientId ="XliLlMK35YTQrvVA74UYb5bqOGly1oKKCS-4G9ui2Lw"
    const [result, setResult] = useState([]);

    // Retrieve the input string inputed by the user and call the setQuery function to update the value.
    function handleEvent(event){
        setQuery(event.target.value);
    };

    // Make an Api call using axios.
    function handleSubmit(event){

        const url = "https://api.unsplash.com/search/photos/?client_id="+clientId+"&query="+query+"&per_page=12";
    
        axios.get(url).then(response => {
            console.log(response);
            setResult(response.data.results);
        });
    };
  //Render the output using HTML tags on the web app.
  return (
    <>
    <div className="photo-gallery">
            <input
                type="text"
                placeholder="Kittens"
                value={query}
                className="search"
                onChange={handleEvent}
            />
            <button onClick={handleSubmit} className="search-image">Search</button>
            <div className="gallery">
                {result.map((pic) => 
                <div className="card" key={pic.id}> 
                    <img className="photos"
                    alt={pic.alt_description}
                    src={pic.urls.raw}
                    width="300px"
                    height="200px"
                    // Open the full image in a new page by clicking on the image.
                    onClick={()=> window.open(pic.urls.full, "_blank")}/>
                </div>)}
            </div>  
        
    </div>
  </>
  );
}
