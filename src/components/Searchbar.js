import React from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'

export default function Searchbar() {
  return (
    <InputGroup className="mb-3">
    
    <FormControl
      placeholder="Username"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
    </InputGroup>
  )
}
