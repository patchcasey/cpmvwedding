import React, { Component } from 'react';
// import zola from './zola.html'

// var Iframe = React.createClass({     
//   render: function() {
//     return(         
//       <div>          
//         <iframe src={this.props.src} height={this.props.height} width={this.props.width}/>         
//       </div>
//     )
//   }
// });

class Registry extends Component {
    render() {
        return(
            <div className="condiv">
               {/* <div className="registryBox"> */}
                    <iframe 
                    className={"registryIFrame"}
                    srcDoc={'<!DOCTYPE html><html><head></head><body><a class="zola-registry-embed" href="www.zola.com/registry/marinaandcasey2022" data-registry-key="marinaandcasey2022">Our Zola Wedding Registry</a><script>!function(e,t,n){var s,a=e.getElementsByTagName(t)[0];e.getElementById(n)||(s=e.createElement(t),s.id=n,s.async=!0,s.src="https://widget.zola.com/js/widget.js",a.parentNode.insertBefore(s,a))}(document,"script","zola-wjs");</script></body></html>'}
                    // src={'zola.html'}
                    title={"registry"}
                    // style={{ height: '500px', width:"280px", border:"none", overflow:"hidden"}}
                    ></iframe>
                {/*</div>*/}
            </div>
        )
    }
}

export default Registry