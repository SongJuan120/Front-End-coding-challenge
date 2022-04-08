import React from "react";
import { Button } from "react-bootstrap";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.description}</td>
      <td>{contact.title}</td>
      <td><img src={contact.image} alt={contact.image} style={{width : "50px"}}></img></td>
      
      <td>
        <Button style={{marginRight: "10px"}}
          variant="warning"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </Button>
        <Button variant="danger" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
