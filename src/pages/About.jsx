import React from 'react';
import Styles from "../components/components.module.css";

const About = () => {
  return (
    <div>
     <h1 className={Styles.aboutTitle}> About Us</h1>
   <div style={{width:"60%",margin:"auto"}} className={Styles.AboutContainer}>
    <h3>We Create Thoughtful Products That Are Worth Holding Onto.
</h3>
<p style={{colour:"#7f7a75"}}>The products we use on a daily basis say something about the people we are. We believe many things in life get better with time; it is that spirit we try to infuse in everything we create. In a world where we are overwhelmed by products made to break down, wear out or go out style, we aim to go against that grain.
</p>
<br></br>
<h3 >We Focus on Value, Durability, and a Timeless Aesthetic.
</h3>
<p style={{colour:"#7f7a75"}}>Our goods are based in value-driven design and quality manufacturing. All of us make a statement every time we buy something. We vote with our wallets. It’s our belief that value is more than just saving a few bucks - true value lies at the intersection of something made well for a fair price, created in way that supports those who made it.
</p>
<br></br>
<h3 >Objects In Our Lives Are Part Of Who We Are.
</h3>
<p style={{colour:"#7f7a75"}}>No two people are the same, just like no two wallets or bags look the same over time. Each carries a unique story that is a reflection of our individual lifestyle. When a product improves and patinas with use, it carries the history of its user, of places traveled and memories made.
</p>
<br></br>


<h3 >Our Most Valuable Assets Are The Relationships We’ve Built.
</h3>
<p style={{colour:"#7f7a75"}}>We surround ourselves with incredibly talented, driven creatives that help us bring our products to life. This creative energy reverberates internally, building in amplitude and challenging each of us to do better, to think bigger and allow our own personal potential to flourish.
</p>
<br></br>
<h3 >We Are All Products Of Our Environment. Let’s Cultivate The Best One We Can.
</h3>
<p style={{colour:"#7f7a75"}}>Our company, in many ways, is defined the community we belong to. We are Oregonians through and through. We believe in equality for all. We believe in putting others first. We are a progressive company that echos the values and ideals of our own community in Portland and the greater Northwest.
</p> 
<br></br>  
   </div>
 </div>
  )
}

export default About