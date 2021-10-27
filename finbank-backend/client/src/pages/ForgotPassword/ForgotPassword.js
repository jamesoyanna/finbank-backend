import {useState} from 'react';
import { axiosInstance } from "../../config";

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
     
    const forgotPasshandler =  async(e) => {
        e.preventDefault();

        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        };

        try {
            const { data } = await axiosInstance.post(
              "api/auth/forgotpassword",
              { email },
              config
            );
        } catch (error) {
            
        }
    }

    return (
        <div>
            <h2>I forgot my password</h2>
        </div>
    );
}

export default ForgotPassword;
