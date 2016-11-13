import React from 'react';

const chevron = {
    up: <span className="glyphicon glyphicon-chevron-up" aria-hidden="true"></span>,
    down: <span className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>
}

const Conditions = ({ temperature, lighting, co2, humidity }) => (
  <div className="Conditions" >
    <h3>Room status: Intelligent environment changing</h3>
    <table className="table table-bordered table-responsive table-hover">
      <tr>
        <td>Temperature: </td>
        <td>{temperature}°C {chevron.up}</td>
      </tr>
      <tr>
        <td>Lighting: </td>
        <td>{lighting*100}% {chevron.up}</td>
      </tr>
      <tr>
        <td>CO2 concentration: </td>
        <td>{co2}PPM {chevron.up}</td>
      </tr>
      <tr>
        <td>Humidity: </td>
        <td>{humidity*100}% {chevron.down}</td>
      </tr>
    </table>
  </div>
)

export default Conditions
