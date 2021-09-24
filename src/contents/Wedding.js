import React, { Component } from 'react';

class Wedding extends Component {
render() {
return (
<div className="condiv">
    <div className="nameBox">
        <span className="altCaseyText">We invite you to spend our wedding with us at </span>
        <span className="altMarinaText">Willowbend</span>
        <br />
        <img className="cranPhoto" src='/willowbendcran.jpg' alt='willowbendcran'></img>
        <br />
        <span className="altCaseyText">Located in Mashpee, this beautiful golf course and working cranberry bog. <br/>
        <br/><b>Reasons we picked it:</b></span>
        <span className="bulletText">
        {/* make bullet font smaller and aligned left */}
        <ul>
            <li>The barn reminds us of the mods.</li>
            <li>Casey golfs now!</li>
            <li>We couldn't not be on Cape Cod for our wedding... Harwich was booked.</li>
            <li>Duncan will be at the ceremony.</li>
            <li>We can throw a big ass party.</li>
            <li>The venue has TVs if there is a night game (aka Notre Dame).</li>
        </ul>
        </span>
    </div>

</div>
)
}
}
export default Wedding