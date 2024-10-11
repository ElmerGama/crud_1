import React from 'react'
import './UserTable.css';

const UserTable = () => {
  return (
    <table>
        <tr>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Usuario</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Elmer</td>
                    <td>ElmerGama</td>
                    <td>
                        <button className='mibutton'>boton</button>
                    </td>
                </tr>
            </tbody>
        </tr>
    </table>
  )
}

export default UserTable