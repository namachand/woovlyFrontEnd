import React from "react";
import {Navbar,Nav,NavItem,NavbarBrand, Input,Button} from "reactstrap"
import {NavLink} from 'react-router-dom'
class Header  extends React.Component{
    constructor(props){
        super(props)
        this.state={
    
        }
    }
    render(){
        return(
        <React.Fragment>
        <div className='row'>
            <Navbar dark expand='md' fixed='top' style={{
                    backgroundColor:"darkslategray",
                    height:60,   
                    opacity:'0.9',
                    display:'flex',
                    alignContent:'center'
                }}>
            
                <NavbarBrand className='offset-1' style={{fontWeight:'bold',color:'white'}}>WOOVLY</NavbarBrand>
                <Nav navbar>
                    <NavItem className=' offset-2'
                        style={{
                            top:'0px',
                            left:'2px',
                            position:'fixed',
                            display:'flex',
                            alignItems:'center'
                        }}>
                        <form>
                                <Input type='text' placeholder=" Search"  name='term' id='search'style={{
                                    width:'35vw',
                                    minHeight:'5vh',
                                    marginTop:'1vh',
                                    backgroundColor:'black',
                                    opacity:'0.6',
                                    border:'solid 0px black'
                                    }}/>
                            </form> 
                            
                        </NavItem>
                
                    </Nav>       
                <Nav className="offset-6" navbar>
                    <NavItem>
                        <NavLink className="nav-link" to="#"><span style={{fontSize:'20px'}}> 2020</span></NavLink>
                        </NavItem>
                    <NavItem>
                        <NavLink className="nav-link active" to="#"><span className="fa fa-compass fa-lg m-1" style={{fontSize:'15px',fontWeight:'bold'}}> Bucket List</span></NavLink>
                        </NavItem>
                    <NavItem>
                        <NavLink className="nav-link active" to="/blog"><span className="fa fa-leaf fa-lg m-1" style={{fontSize:'15px',fontWeight:'bold'}}> Blog</span></NavLink>
                        </NavItem>
                    <NavItem>
                        <NavLink className="nav-link active" to="#"><span className="fa fa-user fa-lg m-1" style={{fontSize:'15px',fontWeight:'bold'}}> Sign Up/Login</span></NavLink>
                        </NavItem>
                    <NavItem style={{display:'flex',alignItems:'center'}}>
                        <span className='fa fa-ellipsis-v fa-lg ml-2'></span>
                        </NavItem>
                    </Nav>
          
                </Navbar>   
            </div>

        </React.Fragment>
    );         
    }    
}
export default Header;