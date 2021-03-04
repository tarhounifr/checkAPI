import React from 'react'
import "./About.css"
const About = () => {
  const url1="https://www.thecocktaildb.com/images/cocktail_left.png"
  const url2="https://www.thecocktaildb.com/images/cocktail_right.png"
    return (
        <div className="about">
<img src={url1} alt="coktailleft"/>
<div>
          <h1 className="title">Welcome to TheCocktailDB</h1>  
          <p className="pabout">An open, crowd-sourced database of drinks and cocktails from around the world.
We also offer a free JSON API for anyone wanting to use it.
If you like the site, please consider supporting us on Patreon by clicking the link below...</p>
</div>
<img src={url2} alt="coktailright"/>          
        </div>
    )
}

export default About
