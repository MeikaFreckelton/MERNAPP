import React, {useState} from 'react'

// use forminput component

const Register = () => {

    const initialState = {
        email: "",
        password: ""
    }

    const [userDetails, setUserDetails] = useState(initialState)


    function handleChange(event){
        const { name, value } = event.target
        setUserDetails({
            ...userDetails,
            [name]: value
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        // functionality ...
    }


    return(
        <div>
            <div>

                <div className="heading">
                    <h1>Register a new account</h1>
                </div>
                <div className="authFormDiv">
                    <form className="authForm" onSubmit={handleSubmit}>
                        <label>Email</label>
                        <input 
                            type="text"
                            name="email"
                            onChange={handleChange}
                        />
                        <label>Password</label>
                        <input 
                            type="text"
                            name="password"
                            onChange={handleChange}
                        />
                        <input
                            type="submit"
                        />
                    </form>
                </div>
            </div>
            
        </div>
    )
}


export default Register