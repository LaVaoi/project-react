import React from 'react'
import arrow from '../Dashboard/image/arrow.png';
function Header({ setIsAdding }) {
    return (
        <header >
            <h1>Comptes Management Software</h1>
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                <button onClick={() => setIsAdding(true)} className='round-button'>Click to LOGIN
                <img src={arrow} alt='' style={{width:20}}/>
                </button>
            </div>
        </header>
    )
}

export default Header