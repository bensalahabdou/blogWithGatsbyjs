import React from 'react';
import { Link } from 'gatsby';

const PrincipalMenu = () => (
    <div style={{height:'100'}}>
        <ul style={{display: 'flex', justifyContent:'space-evenly', backgroundColor: 'rgb(255, 60, 186)', color:'white',alignItems:'center'}}>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/services"><li>Services</li></Link>
        <Link to="/blog-page"><li>Blog</li></Link>
            
        </ul>
        
    </div>
)

export default PrincipalMenu;