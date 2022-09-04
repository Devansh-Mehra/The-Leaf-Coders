import {Form,Button} from 'react-bootstrap';
import React,{useState,useEffect} from "react";
import {Link} from 'react-router-dom'
import {Row,Col} from 'react-bootstrap';
import UserMgmt from '../contracts/UserMgmt.json'
import './Register.css'
import getWeb3 from "../getWeb3";
import pinJsonToIPFS from '../ipfs';

const Register = () =>{
    
    const Swal = require('sweetalert2');


    const[name,setName]=useState('')
    const[age,setAge]=useState(0)
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const [web3, setWeb3] = useState(null)
    const [accounts, setAccounts] = useState(null)
    const [contract, setContract] = useState(null)


    const fetchContract=async()=>{
        try {
        // Get network provider and web3 instance.
        const web3 = await getWeb3();

        // Use web3 to get the user's accounts.
        const accounts = await web3.eth.getAccounts();

        // Get the contract instance.
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = UserMgmt.networks[networkId];
        const instance = new web3.eth.Contract(
            UserMgmt.abi,
            deployedNetwork && deployedNetwork.address,
        );

        // Set web3, accounts, and contract to the state, and then proceed with an
        // example of interacting with the contract's methods.
        setWeb3(web3)
        setAccounts(accounts)
        setContract(instance)
        } catch (error) {
        // Catch any errors for any of the above operations.
        alert(
            `Failed to load web3, accounts, or contract. Check console for details.`,
        );
        console.error(error);
        }
    }

    useEffect(() => {
        fetchContract();
        },[fetchContract])

        // const setNewUser=async()=>{
        // await contract.methods._newUser()).send({ from: accounts[0] });
        // const response = await contract.methods.get().call();
        // setStorageValue(response);
        // };

    const nameChangeHandler = event =>{
        setName(event.target.value); 
    }
    const ageChangeHandler = event =>{
        setAge(event.target.value); 
    }
    const emailChangeHandler = event =>{
        setEmail(event.target.value); 
    }
    const passwordChangeHandler = event =>{
        setPassword(event.target.value); 
    }
    const registerSubmitHandler = async(event) =>{
        event.preventDefault();
        const registration=await contract.methods._newUser(name,email,password,age).send({ from: accounts[0] });
        pinJsonToIPFS({name,email,password,age})
        //call _newuser function of smart contract and register new user;
        if(registration){
            Swal.fire({
                icon: 'success',
                title: 'Noice',
                text: 'Registration Complete'
              })
        }
        setName('');
        setAge(0);
        setEmail('');
        setPassword('');

    }

    return (
        <div className='regis-btn-main'>
            <div>
            <Row className="justify-content-md-center">
                <Col md='3'>
                    <h2 style={{textAlign: 'center' ,'padding-bottom': '2rem'}} className="main-btn-register">Register</h2>
                    {/* <h3>Login</h3> */}
                    <Form onSubmit={registerSubmitHandler}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control  
                                placeholder ="Enter your Name"  
                                label ="name"
                                name ="name"
                                value={name}
                                onChange={nameChangeHandler} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="age">
                            <Form.Label>Age</Form.Label>
                            <Form.Control  
                                type="number" 
                                placeholder ="Enter your age"  
                                label ="age"
                                value={age}
                                onChange={ageChangeHandler}
                                name ="age" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control  
                                placeholder ="Enter your Email"  
                                label ="Email"
                                value={email}
                                onChange={emailChangeHandler}
                                name ="email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control  
                                placeholder ="Enter Password"  
                                label ="Password"
                                type = "password"  
                                name ="password"
                                value={password}
                                onChange={passwordChangeHandler} />
                        </Form.Group>
                        <Button type="submit" variant="primary" > Register </Button>
                        <p style = {{position: 'relative', top:20}} className="para-btn">
                                Already a user?
                                <Link to = '/login'>Login</Link>
                            </p>
                    </Form>
               </Col>
            </Row>
        </div>
        </div>
    )
}

export default Register;