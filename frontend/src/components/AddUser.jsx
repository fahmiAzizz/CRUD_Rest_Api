import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("male");
    const navigate = useNavigate();

    const addUsers = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/users", {
                name,
                email,
                gender
            });
            navigate("/");
        } catch (error) {
            console.log("error euy");
        }
    }


    return (
        <div>
            <div className=' w-1/2 mx-auto mt-20'>
                <form className='mx-auto w-2/3' onSubmit={addUsers}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="Name">
                            Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            id="Name"
                            type="text"
                            placeholder="Name" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="Email">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="Email"
                            type="text"
                            placeholder="Email" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="Gender">
                            Gender
                        </label>
                        <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <button className='p-2 bg-green-400 border border-black rounded-lg'>Add Data</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddUser