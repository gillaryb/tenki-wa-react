import React from "react";

export default function FormattedDate(props){
let days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = [ "Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
let day = days[props.date.getDay()];
let month = months[props.date.getMonth()];
let date = props.date.getDate();
if (date < 10 ){
    date = `0${date}`;
}
let hours = props.date.getHours();
if (hours < 10 ){
    hours = `0${hours}`;
}
let minutes = props.date.getMinutes();
if ( minutes < 10){
    minutes = `0${minutes}`;
}

    return ( <div> {month} {date} , {day} | {hours}:{minutes}</div> );
}