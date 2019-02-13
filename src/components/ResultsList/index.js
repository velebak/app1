import React from "react";
import "./style.scss";


function ResultsList() {

return (
    <div className="container-fluid" style={{marginTop: '10px'}}>

  <div className="table-row header">
    <div className="wrapper text-4">
      <div className="wrapper text-2">
        <div className="text">First Name</div>
        <div className="text">Last Name</div>
      </div>
      <div className="wrapper text-2">
        <div className="text">Email</div>
        <div className="text">Birthday</div>
      </div>
    </div>
    <div className="wrapper num-4">
      <div className="wrapper num-2">
        <div className="num">Min</div>
        <div className="num">Max</div>
      </div>
      <div className="wrapper num-2">
        <div className="num">Avg</div>
        <div className="num">Last</div>
      </div>
    </div>
  </div>

  <div className="table-row">
    <div className="wrapper text-4">
      <div className="wrapper text-2">
        <div className="text">Vasan</div>
        <div className="text">Subramanian</div>
      </div>
      <div className="wrapper text-2">
        <div className="text" title="vasan@example.com">vasan@example.com</div>
        <div className="text">January 14, 1996</div>
      </div>
    </div>
    <div className="wrapper num-4">
      <div className="wrapper num-2">
        <div className="num">1,024</div>
        <div className="num">65,536</div>
      </div>
      
      <div className="wrapper num-2">
        <div className="num">5,120</div>
        <div className="num">7,680</div>
      </div>
    </div>
  </div>

  <div className="table-row">
    <div className="wrapper text-4">
      <div className="wrapper text-2">
        <div className="text">Firstname</div>
        <div className="text">Lastname</div>
      </div>
      <div className="wrapper text-2">
        <div className="text" title="ns@example.org">ns@example.org</div>
        <div className="text">February 31, 1948</div>
      </div>
    </div>
    <div className="wrapper num-4">
      <div className="wrapper num-2">
        <div className="num">2,484</div>
        <div className="num">5,536</div>
      </div>
      
      <div className="wrapper num-2">
        <div className="num">87</div>
        <div className="num">785</div>
      </div>
    </div>
  </div>
  
  <div className="table-row">
    <div className="wrapper text-4">
      <div className="wrapper text-2">
        <div className="text">Example</div>
        <div className="text">McDude</div>
      </div>
      <div className="wrapper text-2">
        <div className="text" title="N/A">--</div>
        <div className="text">December 31, 1960</div>
      </div>
    </div>
    <div className="wrapper num-4">
      <div className="wrapper num-2">
        <div className="num">0</div>
        <div className="num">249,846</div>
      </div>
      
      <div className="wrapper num-2">
        <div className="num">45,529</div>
        <div className="num">6,687</div>
      </div>
    </div>
  </div>
  
</div>
);

}

export default ResultsList