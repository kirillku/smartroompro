import React from 'react';

const Conditions = ({ temperature, lighting, co2, pressure }) => (
  <div
    className="Conditions"
  >
    <h3>Room status: Intelligent environment changing</h3>
    <div className="Condition">Temperature: {temperature}°C <span className="glyphicon glyphicon-chevron-up" aria-hidden="true"></span></div>
    <div className="Condition">Lighting: {lighting*100}% <span className="glyphicon glyphicon-chevron-up" aria-hidden="true"></span></div>
    <div className="Condition">CO2 concentration: {co2}PPM <span className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span></div>
    <div className="Condition">Pressure: {pressure} <span className="glyphicon glyphicon-chevron-up" aria-hidden="true"></span></div>
  </div>
)

export default Conditions
