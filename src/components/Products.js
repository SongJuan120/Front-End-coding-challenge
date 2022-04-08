import React from "react"
import DataList from "./DataList";
import { Container } from "react-bootstrap";
import Searchbar from "./Searchbar";

function Products() {  

  return (
    <Container>
      <Searchbar />           
      <DataList />    
    </Container>
  )
}

export default Products