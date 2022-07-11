import React from 'react';

export default function ThingsToDo() {
  return (
    <div className="condiv">
      <div className="nameBox">
        <span className="smallTitleText">Things to do!</span>
        <span className="smallCaseyText">
          <br /><br />
          <h4>Cape Cod Seafood:</h4>
          <a className="pageLink" href="https://www.braxrestaurant.com/">Brax Landing</a>&nbsp;- Harwich<br/>
          <a className="pageLink" href="https://sesuit-harbor-cafe.com/">Sesuit Harbor Cafe</a>&nbsp;- Dennis<br/>
          <a className="pageLink" href="https://www.lobstertrap.net/">The Lobster Trap</a>&nbsp;- Monument Beach<br/>
          <a className="pageLink" href="https://www.freshfastfun.com/">Corner Store</a>&nbsp;- Chatham (best burrito on the Cape. Not lobster rolls, but notable)<br/><br/>
          <h4>Ice Cream - Of Course:</h4><br/>
          Sundae School - Harwich Port and Dennis Port<br/>
          Schoolhouse Ice Cream - Harwich Port<br/>
          Captain Frostys (Soft Serve) - Dennis<br/><br/>
          <h4>Active & Outdoor Activities</h4><br/>
          <a className="pageLink" href="https://www.capecodbikeguide.com/railtrail.asp">Cape Cod Rail Trail</a>&nbsp;- Great for running and biking<br/>
          Walk on the beach: Check out Red River or Bank St. Beaches in Harwich Port, Nauset Beach on the National Seashore, or walk the flats at Mayflower Beach in Brewster<br/><br/>
          <h4>Shopping & Other Restaurants</h4><br/>
          Chatham (for those staying in Harwich Port): Walk around Main St and enjoy the shops<br/>
          Chatham: Check out the <a className="pageLink" href="https://www.atlanticwhiteshark.org/shark-center">Atlantic White Shark Museum</a> in Chatham (Marina suggestion)<br/>
          Hyannis (for those staying in Yarmouth): Walk around Main St and enjoy the shops<br/>
          Mashpee Commons (for those staying in Mashpee)<br/>
          Restaurants (across the cape): Anejo in Falmouth, Chart Room in Cataumet, Mad Minnow / 3 Monkeys / Perks / Hot Stove in Harwich Port 
        </span>
      </div>

    </div>
  )
}