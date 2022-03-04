import React from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'
import { AiOutlineSearch } from 'react-icons/ai';

export default function Searchbar() {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1"><AiOutlineSearch /></InputGroup.Text>
      <FormControl
        placeholder="Search"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
  )
}
