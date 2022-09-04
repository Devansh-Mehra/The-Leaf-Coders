import {Form,Button} from 'react-bootstrap';
import React,{useState,useEffect} from "react";
import {Link} from 'react-router-dom'
import {Row,Col} from 'react-bootstrap';
import Swal from 'sweetalert2'
import getWeb3 from "../getWeb3";
import UserMgmt from '../contracts/UserMgmt.json'




const Login =(props)=>{

    const Swal = require('sweetalert2');

    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
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

        // const getStoragevalue=async()=>{
        // await contract.methods.set(69).send({ from: accounts[0] });
        // const response = await contract.methods.get().call();
        // setStorageValue(response);
        // };

    const emailChangeHandler = event =>{
        setEmail(event.target.value);
    }
    const passwordChangeHandler = event =>{
        setPassword(event.target.value);
    }
    const loginFormSubmitHandler = async(event) =>{
        event.preventDefault();
        const loggedin=await contract.methods._login(email,password).call();
        if(loggedin){
            props.loginHandler();
            Swal.fire({
                icon: 'success',
                title: 'Noice',
                text: 'Successfully Logged In'
              })
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You entered wrong credentials.....Try again!!'
              })
        }
        setEmail('');
        setPassword('');
    }

    return(
        <div>
            <Row className="justify-content-md-center">
                <Col md='3'>
                    
                    <h2 style={{textAlign: 'center' ,'padding-bottom': '2rem'}}>Login</h2>
                    <Form onSubmit={loginFormSubmitHandler}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control  
                                placeholder ="Enter your Email"  
                                label ="Email"
                                name ="email"
                                value={email}
                                onChange={emailChangeHandler} />
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
                        <Button type="submit" variant="primary" > Sign in </Button>
                        <p style = {{position: 'relative', top:20}}>
                                New user?
                                <Link to = '/register'>Register</Link>
                            </p>
                    </Form>
               </Col>
            </Row>
        </div>
    )
}

export default Login;