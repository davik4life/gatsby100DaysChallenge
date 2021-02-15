import * as React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export const query = graphql `
query MyQuery {
  allContentfulCity {
    edges {
      node {
        name
        description
        location {
          lat
          lon
        }
        gatsbyPath(filePath: "/location/{contentfulCity.name}")
      }
    }
  }
}

`;


export default function Home({data}){
	return (
		<div>
			<h1> Welcome to the Homepage</h1>
			<p> We are open for business </p>
			<h1>Checkout our current location below;</h1>
    
			<ul>
				{
					data.allContentfulCity.edges.map(({node:city}) => (
						<li key={city.name}>
							<Link to= {city.gatsbyPath}>{city.name}</Link> - {city.description} - {city.location.lat} - {city.location.lon}
						</li>
					))
				}

			</ul>
      
		</div>
	);
}



