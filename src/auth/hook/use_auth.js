import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { message } from "antd";

export const useAuth = ( Form ) => {
    const [ form ] = Form.useForm();
    const navigate = useNavigate();

    const [ signInComponents, setSignInComponents ] = useState({
        open:false,
        confirmLoading: false,
        loading:false,
        emailStatus:'',
        passwordStatus:''
    });

    const signIn = () => {
        form.validateFields().then( async (values) => {
            console.log(values) // Make the callback async
            setSignInComponents(prevState => ({
                ...prevState,
                confirmLoading: true,
                loading: true,
                emailStatus: 'validating',
                passwordStatus: 'validating',
            }));

            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1500));

                const response = { success: true, token: 'fake_token' }; // Simulate a successful response

                if (response && response.success) {

                    setSignInComponents(prevState => ({
                        ...prevState,
                        open: false,
                        emailStatus: 'success',
                        passwordStatus: 'success',
                    }));

                    message.success('Sign in successful!');
                    navigate('/');
                } else {
                    message.error('Error de acceso');
                    setSignInComponents(prevState => ({
                        ...prevState,
                        open: false,
                        emailStatus: 'error',
                        passwordStatus: 'error',
                    }));
                }
            } catch (error) {
                message.error('Error de acceso');
            } finally {
                setSignInComponents(prevState => ({
                    ...prevState,
                    confirmLoading: false,
                    loading: false,
                }));
            }
        }).catch(( errorInfo ) => {
            setSignInComponents(prevState => ({
                ...prevState,
                emailStatus: errorInfo.errorFields.some(f => f.name[0] === 'email') ? 'error' : '',
                passwordStatus: errorInfo.errorFields.some(f => f.name[0] === 'password') ? 'error' : '',
                loading: false,
            }));
        });
    }

    return {
        signIn,
        signInComponents,
        setSignInComponents,
        form,
    };
}