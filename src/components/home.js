import React from "react";
import { DATA } from './data';
import Header from './navHeader'
import Routes from './routes'
import Modal from 'react-bootstrap/Modal'
import {Input} from 'reactstrap'
import '../css/main.css'
class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[],
            showModal:false,
            discriptionfor:''
        }
        this.openForm=this.openForm.bind(this);
        this.handleClose=this.handleClose.bind(this);
        }
    componentDidMount(){
        this.setState({data:DATA})
        }
    openForm(event){
        event.preventDefault();
        this.setState({discriptionfor:event.target.value})
        this.setState({showModal:true});

        }
    handleClose(event){
        this.setState({showModal:false})

        }
    render(){
        console.log(this.state.img)
      return (  
        <React.Fragment>
        <div>
            <Header/>
            </div>
        <div style={{marginTop:'8vh'}}>
            <Routes/> 
            </div>
            
        <Modal show={this.state.showModal} onHide={this.handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body style={{height:'50vh'}}>
                <p style={{fontWeight:'bold',paddingTop:'1vh'}}>{this.state.discriptionfor}</p>
                <span style={{fontWeight:'bold',paddingTop:'1vh'}}>Bucket List Description And Images</span>
                <Input type='textarea'  style={{marginTop:'1vh',height:'35vh'}}/>
                </Modal.Body>
            </Modal>

        <div className="row mt-4 offset-1 ">       
        <h1 style={{fontWeight:'bold',marginLeft:'3vw'}}>Explore. Plan. <span style={{color:'red'}}>Accomplish</span></h1>   
         </div>   
            <div className="row mt-2 offset-1">
                {this.state.data.map((result)=>{
                    return(
                        <div className="binbucket col-2 mr-4 mt-5" style={{height:'55vh'}} key={result.id}>
                            <img src={result.image} style={{height:'45vh',width:'16vw',backgroundSize:'cover',borderRadius:'5px',border:'solid 0px',opacity:'1',marginLeft:'2px',boxShadow:'1px 1px 6px grey'}}/>
                            <span className=" offset-3" style={{position:'absolute',bottom:'15vh',color:'white',fontWeight:'bold',fontSize:'11px'}}>{result.like}</span>
                            <span className="fa fa-heart fa-lg offset-3 symbol" id='heart'></span>
                            <button className="fa fa-plus fa-2x offset-5 btn" id='plus' value={result.description}  onClick={this.openForm} style={{color:'white'}}></button>
                            <span className="fa fa-upload fa-lg offset-9 symbol" id='upload'></span>
                            <span  style={{fontWeight:'bold'}}>{result.description}</span>
                            <br/><span style={{fontWeight:'bold',fontSize:'12px'}}>{result.people}</span>
                        </div>
                        
                    )
                })}
                </div>
               
        </React.Fragment>
      );
    }
  }
  export default Home;
