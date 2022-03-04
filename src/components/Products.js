import React, { useState, useEffect } from "react"
import DataList from "./DataList";
import { Button, Container } from "react-bootstrap";
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