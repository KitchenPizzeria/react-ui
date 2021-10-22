import React from 'react'

const EditableRow = ( {editFormData, handleEditFormChange} ) => {
    return(
        <tr>
            <td>
                <input 
                type="text" 
                name="make" 
                required="required"
                placeholder="Please enter make .."
                value={editFormData.make}
                onChange= {handleEditFormChange}
                /> 
            </td>
            <td>
                <input 
                type="text" 
                name="model" 
                required="required"
                placeholder="Please enter model .."
                value={editFormData.model}
                onChange= {handleEditFormChange}
                /> 
            </td>

            <td>
                <input 
                type="text" 
                name="colour" 
                required="required"
                placeholder="Please enter colour .."
                value={editFormData.colour}
                onChange= {handleEditFormChange}
                /> 
            </td>

            <td>
                <input 
                type="text" 
                name="year" 
                required="required"
                placeholder="Please enter year .."
                value={editFormData.year}
                onChange= {handleEditFormChange}
                /> 
            </td>

            <td>
                <button type = "submit">Save</button>
            </td>
        </tr>
    )
}

export default EditableRow