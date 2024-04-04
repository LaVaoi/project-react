import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';
import './Add.css'

function Add({ employees, setEmployees, setIsAdding }) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [salary, setSalary] = useState('');
    const [date, setDate] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        if (!firstName || !lastName || !email || !salary || !date) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const id = employees.length + 1;
        const newEmployee = {
            id,
            firstName,
            lastName,
            email,
            salary,
            date
        }
        employees.push(newEmployee);
        setEmployees(employees);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${firstName} ${lastName}'s data has been LogIN on ${date} ,we hope a good experience client.`,
            showConfirmButton: false,
            timer: 2500
        });
    }


    return (
        <div className="login-container">
            <form className='login-form' onSubmit={handleAdd} >
                <h1>Login</h1>
                <div className='form-group'>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    ref={textInput}
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                </div>
                <div className='form-group'>
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                </div>
                <div className='form-group'>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                </div>
                <div className='form-group'>
                <label htmlFor="salary">Salary ($)</label>
                <input
                    id="salary"
                    type="number"
                    name="salary"
                    value={salary}
                    onChange={e => setSalary(e.target.value)}
                />
                </div>
                <div className='form-group'>
                <label htmlFor="date">Date</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
                </div>
                <div style={{ marginTop: '30px' }}>
                    <button type="submit" value="Add">Login</button>
                    <button
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        onClick={() => setIsAdding(false)}
                    >Cancel</button>
                </div>
            </form>
           </div>
    );
}

export default Add