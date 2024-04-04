import React from 'react'
import { Link } from 'react-router-dom'
import '../css/ong.css'
function Cong() {
  return (
    <div>
<html lang="en">

<head>
    <meta charset="UTF-8"/>
    <link rel="icon" href="images/dollar.png" type="image/png" sizes="16x16"/>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet"/>
</head>
<style>
    
</style>

<body>
    <div class="container-yt">
        <div class="printer-top"></div>

        <div class="paper-container">
            <div class="printer-bottom"></div>

            <div class="paper">
                <div class="main-contents">
                    <div class="success-icon">&#10004;</div>
                    <div class="success-title">
                        Confirmation Complete
                    </div>
                    <div class="success-description">
                        Thank you for completing the confirmation! We hope a great user experience.
                    </div>
                    <div class="order-details">
                        <div class="order-number-label">Transaction ID</div>
                        <div class="order-number">123456789</div>
                        <div class="complement">Promo code for using!</div>
                        <div class="order-number-label">
                            <Link to='/'>
                              Go back Home
                            </Link>
                        </div>
                    </div>
                </div>
                <div class="jagged-edge"></div>
            </div>
        </div>
    </div>
</body>
</html>
      
    </div>
  )
}

export default Cong
