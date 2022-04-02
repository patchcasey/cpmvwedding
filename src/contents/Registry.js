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

    rawHTML = `<a class="zola-registry-embed" href="www.zola.com/registry/marinaandcasey2022" data-registry-key="marinaandcasey2022">Our Zola Wedding Registry</a><script>!function(e,t,n){var s,a=e.getElementsByTagName(t)[0];e.getElementById(n)||(s=e.createElement(t),s.id=n,s.async=!0,s.src="https://widget.zola.com/js/widget.js",a.parentNode.insertBefore(s,a))}(document,"script","zola-wjs");</script>`
    render() {
        return(
            <div className="condiv">
                <div className="registryBox">
                    <iframe src={'../zola.html'} 
                    title={"registry"}
                    // onLoad={'javascript:(function(o){o.style.height=o.contentWindow.document.body.scrollHeight+"px";}(this));'}
                    style={{ height: '500px', width:"100%", border:"none", overflow:"hidden"}}
                    ></iframe>
                </div>
            </div>
        )
    }
}

export default Registry