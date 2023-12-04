import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserList = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await axios.get('http://localhost:5000/users');
        setUser(response.data);
    }

    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/users/${id}`);
            getUsers();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className=' mx-auto w-full mt-20'>
            <div className='w-3/4 mx-auto '>
                <p className='text-4xl font-semibold text-center m-5'>Data Pegawai</p>
                <Link to={'/add'} className=' mb-5 p-1 rounded-md border border-black bg-green-500'>Tambah Data</Link>
                <table className='w-full table-auto mx-auto  text-center'>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id} className='m-1'>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.gender}</td>
                                <td>
                                    <Link to={`edit/${user.id}`} className='p-1 m-1 bg-blue-500 border border-black rounded-md'>Edit</Link>
                                    <button onClick={() => deleteUser(user.id)} className='p-1 m-1 bg-red-500 border border-black rounded-md'>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default UserList