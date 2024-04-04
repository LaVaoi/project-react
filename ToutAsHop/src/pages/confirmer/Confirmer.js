import { useState ,useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function Confirmer() {

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
                text: 'Complete for confirme the payment.',
                showConfirmButton: true
            });
        } 
    }


    return (
        <div className="login-container">
            <form className='login-form' onSubmit={handleAdd} >
                <h1>Confirmer d'Achat</h1>
                <div className='form-group'>
                <label htmlFor="firstName">Numero CIN</label>
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
                <label htmlFor="lastName">Cart choise</label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                </div>
                <div className='form-group'>
                <label htmlFor="email">Pays</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                </div>
                <div className='form-group'>
                <label htmlFor="salary">Prix du payment</label>
                <input
                    id="salary"
                    type="number"
                    name="salary"
                    value={salary}
                    onChange={e => setSalary(e.target.value)}
                />
                </div>
                <div className='form-group'>
                <label htmlFor="date">Date d'execution</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
                </div>
                <div style={{ marginTop: '30px' }}>
                  <Link to='/con'>
                    <button type="submit" value="Add">Confirmer</button>
                  </Link>
                </div>
            </form>
           </div>
    );
}



export default Confirmer;
