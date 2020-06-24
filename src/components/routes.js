import React from "react";
import {Link} from 'react-router-dom'
class Routes extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <React.Fragment>
                <div style={{
                        height:'10vh',
                        border:'solid 0px white',
                        boxShadow:'0px 0px 5px grey',
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center'
                    }}>
                    
                    <Link to='/travel' style={{textDecoration:'none',color:'black'}}>
                        <div className='row'>
                            <div className='col-md-12' style={{ 
                                    display:'flex',
                                    justifyContent:'center'
                                    }}>
                                    <span className='fa fa-plane fa-lg '></span>
                                </div>
                            <div className='col-md-12 mt-1' style={{ 
                                    display:'flex',
                                    justifyContent:'center',
                                    fontWeight:'bold',
                                    fontSize:'12px'
                                    }}>
                                    <span>Travel</span>
                                </div>
                            <div className='col-md-12 mt-1' style={{ 
                                    display:'flex',
                                    justifyContent:'center',
                                    fontWeight:'bold',
                                    fontSize:'12px'
                                    }}>
                                   
                                </div>
                            </div>
                        </Link>

                    <Link to='#' style={{textDecoration:'none',color:'black'}}>
                        <div className='row'>
                            <div className='col-md-12' style={{ 
                                    display:'flex',
                                    justifyContent:'center'
                                    }}>
                                    <span className='fa fa-bicycle fa-lg '></span>
                                </div>
                            <div className='col-md-12 mt-1' style={{ 
                                    display:'flex',
                                    justifyContent:'center',
                                    fontWeight:'bold',
                                    fontSize:'12px'
                                    }}>
                                    <span>Adventure Sports</span>
                                </div>
                            </div>   
                        </Link> 

                    <Link to='#' style={{textDecoration:'none',color:'black'}}>
                        <div className='row'>
                            <div className='col-md-12' style={{ 
                                    display:'flex',
                                    justifyContent:'center'
                                    }}>
                                    <span className='fa fa-paint-brush fa-lg '></span>
                                </div>
                            <div className='col-md-12 mt-1' style={{ 
                                    display:'flex',
                                    justifyContent:'center',
                                    fontWeight:'bold',
                                    fontSize:'12px'
                                    }}>
                                    <span>DIY/Hobbies</span>
                                </div>
                            </div>   
                        </Link> 

                    <Link to='#' style={{textDecoration:'none',color:'black'}}>
                        <div className='row'>
                            <div className='col-md-12' style={{ 
                                    display:'flex',
                                    justifyContent:'center'
                                    }}>
                                    <span className='fa fa-cutlery fa-lg '></span>
                                </div>
                            <div className='col-md-12 mt-1' style={{ 
                                    display:'flex',
                                    justifyContent:'center',
                                    fontWeight:'bold',
                                    fontSize:'12px'
                                    }}>
                                    <span>Food & Drinks</span>
                                </div>
                            </div>   
                        </Link> 

                    <Link to='#' style={{textDecoration:'none',color:'black'}}>
                        <div className='row'>
                            <div className='col-md-12' style={{ 
                                    display:'flex',
                                    justifyContent:'center'
                                    }}>
                                    <span className='fa fa-camera fa-lg '></span>
                                </div>
                            <div className='col-md-12 mt-1' style={{ 
                                    display:'flex',
                                    justifyContent:'center',
                                    fontWeight:'bold',
                                    fontSize:'12px'
                                    }}>
                                    <span>Photography</span>
                                </div>
                            </div>   
                        </Link> 

                    <Link to='#' style={{textDecoration:'none',color:'black'}}>
                        <div className='row'>
                            <div className='col-md-12' style={{ 
                                    display:'flex',
                                    justifyContent:'center'
                                    }}>
                                    <span className='fa fa-headphones fa-lg '></span>
                                </div>
                            <div className='col-md-12 mt-1' style={{ 
                                    display:'flex',
                                    justifyContent:'center',
                                    fontWeight:'bold',
                                    fontSize:'12px'
                                    }}>
                                    <span>Fitness</span>
                                </div>
                            </div>   
                        </Link>

                    <Link to='#' style={{textDecoration:'none',color:'black'}}>
                        <div className='row'>
                            <div className='col-md-12' style={{ 
                                    display:'flex',
                                    justifyContent:'center'
                                    }}>
                                    <span className='fa fa-futbol-o fa-lg '></span>
                                </div>
                            <div className='col-md-12 mt-1' style={{ 
                                    display:'flex',
                                    justifyContent:'center',
                                    fontWeight:'bold',
                                    fontSize:'12px'
                                    }}>
                                    <span>Sports & Games</span>
                                </div>
                            </div>   
                        </Link>    
                    </div>
                </React.Fragment>
            )
        }
    }
export default Routes