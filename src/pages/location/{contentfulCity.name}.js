import React from "react";
import { graphql } from "gatsby";


export const query = graphql `
    query ($id: String = "") {
        contentfulCity (id: {eq: $id}){
            name
            description
            location {
                lat
                lon
        }
      }
    }
  

`;


export default function Location ({data}){
	return (<div>
		<h1> Hi, {data.contentfulCity.name} </h1>
		<h2>Alert!!!, {data.contentfulCity.description}</h2>
		<h3>Our Address Cordinate is at , {data.contentfulCity.location.lat} - {data.contentfulCity.location.lon}</h3>
		<button><a href="/">Back to HomePage</a></button>
	</div>
	);
}


