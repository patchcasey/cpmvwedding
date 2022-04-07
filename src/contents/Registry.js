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
                    src={'../zola.html'}
                    title={"registry"}
                    // style={{ height: '500px', width:"280px", border:"none", overflow:"hidden"}}
                    ></iframe>
                {/*</div>*/}
            </div>
        )
    }
}

export default Registry