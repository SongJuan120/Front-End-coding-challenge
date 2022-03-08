import React, { useState, Fragment, useEffect } from "react";
import { nanoid } from "nanoid";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import { Button, Table, Form, InputGroup, FormControl } from "react-bootstrap";
import ImageUploader from "react-images-upload";
import { database } from '../firebase';
import firebase from "firebase";

const DataList = (props) => {
  
  const [contacts, setContacts] = useState([]);
  const [addFormData, setAddFormData] = useState({
    description: "",
    title: "",
    image: "", 
  });

  const [editFormData, setEditFormData] = useState({
    description: "",
    title: "",
    image: "",    
  });

  const [editContactId, setEditContactId] = useState(null);

  useEffect(() => {
    let tbArr = [];
    database.ref("products").on('value', snapshot => {
      snapshot.forEach(el => {
        const temp = {
          description: el.val().description,
          title: el.val().title,
          image: el.val().image,
          id: el.key
        }
        tbArr.push(temp);       
      }); 
      setContacts(tbArr);
    });
  }, []);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();   

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      description: addFormData.description,
      title: addFormData.title,
      image: addFormData.image,      
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      description: editFormData.description,
      title: editFormData.title,
      image: editFormData.image,      
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      description: contact.description,
      title: contact.title,
      image: contact.image,      
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  const [pictures, setPictures] = useState([]);

  const onDrop = picture => {
    setPictures([...pictures, picture]);
  };

  return (
    <div className="app-container">
      
      <form onSubmit={handleEditFormSubmit}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Description</th>
              <th>Title</th>
              <th>Image</th>              
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </Table>
      </form>
      <h2>Add a Contact</h2>
      <ImageUploader
          {...props}
          withIcon={true}
          onChange={onDrop}
          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
          maxFileSize={5242880}
        />
      <Form className="row" onSubmit={handleAddFormSubmit}>
        <InputGroup className="col">      
          <FormControl
            type="text"
            name="description"
            required="required"
            placeholder="Enter a Description..."
            onChange={handleAddFormChange}
          />
        </InputGroup>
        <InputGroup className="col">      
          <FormControl
            type="text"
            name="title"
            required="required"
            placeholder="Enter a Title..."
            onChange={handleAddFormChange}
          />
        </InputGroup>
        
        <Button className="col" variant="primary" type="submit">Add Product</Button>
      </Form>
      
      
    </div>
  );
};

export default DataList;
