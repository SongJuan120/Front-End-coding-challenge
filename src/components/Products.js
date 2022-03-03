import React, { useState, useEffect } from "react"
import DataList from "./DataList";
import { Button, Container } from "react-bootstrap";
import Searchbar from "./Searchbar";

function Products() {
  const [rowdata, setRowData] = useState([])

  const onAddRowClick = () => {
    setRowData(
      rowdata.concat({ username: "", email: "", gender: "", phone: "" })
    )
  }

  const columns = [
    {
      Header: "Name",
      accessor: "username",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Gender",
      accessor: "gender",
    },
    {
      Header: "Phone",
      accessor: "phone",
    },
  ]

  return (
    <Container>
      <Searchbar />           
      <DataList />      
    </Container>
  )
}

export default Products