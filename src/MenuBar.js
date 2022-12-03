// // import React, { useState } from "react";
// // import axios from "axios";
// // import "./MenuBar.css"

// // export default function MenuBar(props){
// //     const [city, setCity] = useState (props.defaultCity);

// // function handleSubmit (event){
// //     event.preventDefault();
// //     search()
// // }

// // function handleCityChange(event){
// //     setCity(event.target.value);
// // }

// // function search(){
// //      const apiKey = "f0553e70ab5eb275ae36ae41c6ace9b0";
// //     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
// //     axios.get(apiUrl).then(displayResponse);
// // }
// // return (
// //   <div className="MenuBar pt-4">
// //     <form onChange={handleSubmit}>
// //       <div className="row">
// //         <div className="col-8">
// //           <input
// //             type="search"
// //             placeholder="Search for your city"
// //             size="40"
// //             autoFocus="on"
// //             className="search-field shadow-sm"
// //             onChange={handleCityChange}
// //           />
// //           <input
// //             type="submit"
// //             value="Search"
// //             className="btn btn-primary search-input "
// //           />
// //           <input
// //             type="submit"
// //             value="Current Location"
// //             className="btn btn-outline-primary search-button"
// //           />
// //         </div>
// //       </div>
// //     </form>
// //   </div>
// // );
// }