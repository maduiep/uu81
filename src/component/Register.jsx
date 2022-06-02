import { useRef , useState, useEffect} from 'react'

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [ email,setEmail ] = useState();
  const [ password,setPassword ] = useState();
  const [ confirmpwd,setConfirmPwd] = useState();
  const [ phone_number,setPhone_number ] = useState();
  const [ admin,setAdmin ] = useState(false);
  const [ ishost,setishost ] = useState(false);

  useEffect(()=>{

  },[])

  return (
      <>
         {/* <div>Register</div>
         <form action="">
            <input type="text" value={email} placeholder='email'/> <br />
            <input type="password" value={phone_number} placeholder='phone number'/><br />
            <input type="password" value={password} placeholder='password'/><br />
            <input type="password" value={confirmpwd} placeholder='password'/><br />
            <button type='submit'>Register</button>
         </form> */}
      </>
  )
}

export default Register