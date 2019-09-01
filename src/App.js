import React from 'react';
// import logo from './logo.svg';
import './App.css';

 

  function App() {
    const buttons = ['SEA', 'AIR', 'ROAD', 'PROJECTS'];
    const dop_punkts_menu = ['NEWS', 'ABOUT', 'CONTACT'];
    // const punkts_menu = ['SEA', 'AIR', 'ROAD', 'PROJECTS', 'NEWS', 'ABOUT', 'CONTACT'];
    const punkts_menu = buttons.concat(dop_punkts_menu);
    const items_menu = punkts_menu.map((punkt) => <li><a href="#">{punkt}</a></li>); 
    let i = 0;
    const items_buttons = buttons.map((btn) => 
      <div className="middle-image ">
        <img src={`images/content-image-${++i}.jpg`} alt="" className=""/>
        <button className="midle-image-text midle-image-text-button">{btn}</button>
      </div>
    ); 
  


    return (
   
      <main>
        <section className="section">
          <div className="container">
            
            <div className="nav">
              <div className="">
                <img src="images/logo.png" alt="" className=""/>
              </div>
              <div className="menu">           
                  <ul>{items_menu}</ul>                      
              </div>
            </div>
            
            <div className="center">
              
              <div className="big-image">
                <img src="images/banner-image-1.jpg" alt="" className=""/>
                <div className="big-image-text">
                  <h1>Services to</h1>
                  <h1>Shipping since 1797</h1>
                </div>
              </div>

              <div className="center-box center-box-left">
                <h2>HECKSHER SINCE 1797</h2>
                <p>Welcome to Hecksher, Denmark’s oldest shipping company.
                  Founded on June 2nd 1797 by Samuel Siegfried Hecksher we are the oldest shipping company in Denmark. With more than 219 years experience to build upon the company is as young and energetic as ever and thriving in our modern fast changing world at sea, on land and in the air.
                  We are, despite our age a very modern, flexible and professional company that prides itself on delivering optimum shipping solutions to our customers every time.
                </p>
                <p>Welcome aboard Hecksher – Services to shipping since 1797!</p>
              </div>

              <div className="center-box center-box-right">
                <div className="text-box">
                  <h2>NEWS</h2>
                  <h3>31/10-2016</h3>
                  <h4>Ocean Alliance global network revealed</h4>
                  <p>Alliance to deploy 350 containerships with 3.5m teu total carrying capacity. OCEAN Alliance members came together on Thursday to sign a document detailing its planned service coverage in the market. Entitled the Day One Product, the proposed network calls for the deployment of 350 containerships with approximately 3.5m teu total carrying capacity. “The signing of the Day One Product marks an important step forward to show just how committed v
                  </p>
                </div>
                <button className="text-box-button">read more</button>
              </div>
                {items_buttons}
            </div>
          </div>

        </section>
      </main>
 
   );
}



export default App;
