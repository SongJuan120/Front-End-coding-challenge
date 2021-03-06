
import React, {useState} from "react";
import { Button } from "react-bootstrap";
import { InputGroup, FormControl } from "react-bootstrap";
import ImageUploader from "react-images-upload";


const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
  props
}) => {

  const [pictures, setPictures] = useState([]);

  const onDrop = picture => {
    setPictures([...pictures, picture]);
  };
  return (
    <tr>
      <td>
      <InputGroup>      
          <FormControl
            type="text"
            name="description"
            required="required"
            placeholder="Enter a Description..."
            value={editFormData.description}
            onChange={handleEditFormChange}
          />
        </InputGroup>        
      </td>
      <td>
      <InputGroup>      
          <FormControl
            type="text"
            name="title"
            required="required"
            placeholder="Enter a title..."
            value={editFormData.title}
            onChange={handleEditFormChange}
          />
        </InputGroup>
      </td>
      <td>
        <ImageUploader
          {...props}
          value={editFormData.image}
          withIcon={true}
          onChange={onDrop}
          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
          maxFileSize={5242880}
        />
      </td>
      
      <td>
        <Button variant="success" type="submit">Save</Button>
        <Button variant="danger" onClick={handleCancelClick}>
          Cancel
        </Button>
      </td>
    </tr>
  );
};

export default EditableRow;
