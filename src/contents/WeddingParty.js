import React from 'react';

export default function WeddingParty() {
    return(
        <div className="condiv">
            <div className="nameBox">
            <span className="titleText" color="black">Wedding Party</span>
                <br />
                <br />
                <span className="weddingNamesText">Bridesmaids</span>
                <br/>
                <span className="altCaseyText" style={{borderBottom: '1px'}}>
                    Alaina Belanger (co-Maid of Honor)<br/>
                    Beth Lawless (co-Maid of Honor)<br/>
                    Ava Vranos<br/>
                    Caroline Kulig<br/>
                    Kate O'Brien<br/>
                    Michaela Nolan<br/>
                    Duncan Patch-Vranos (last name TBD)<br/>
                </span>
                <br />
                <span className="weddingNamesText">Groomsmen</span>
                <br/>
                <span className="altCaseyText">
                    Taylor Patch (Best Man)<br/>
                    Grant Patch<br/>
                    Ryan Patch<br/>
                    Colin Freer<br/>
                    Garrett McLaughlin<br/>
                    Mark Vranos<br/>
                    Michael Mahan<br/>
                </span>
            </div>
        </div>
    )
}
