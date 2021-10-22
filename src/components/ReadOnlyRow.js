import React from 'react';

const ReadOnlyRow = ({ contact , handleEditClick}) => {
    return(
        <tr>
            <td> { contact.make } </td>
            <td> { contact.model } </td>
            <td> { contact.colour } </td>
            <td> { contact.year } </td>
            <td> 
                <button 
                    type = "button" 
                    onClick = {(event) => handleEditClick(event,contact)}>
                    Edit
                </button>  
            </td>
        </tr>   
    );
};
 
export default ReadOnlyRow