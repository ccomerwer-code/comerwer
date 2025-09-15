import * as React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { Button, Form, Input } from "antd";
import { useAuth } from '../hook/use_auth';
import { useLocation } from 'react-router-dom';
import BasicModal from '../components/modal_error';

const AuthPage = () => {
    const location = useLocation();
    const selectedState = location.state?.selectedState || '';
    const { signInComponents, setSignInComponents, form } = useAuth(Form);

    // Estado para controlar el modal
    const [modalOpen, setModalOpen] = React.useState(false);
    const [modalTitle, setModalTitle] = React.useState('');
    const [modalBody, setModalBody] = React.useState('');

    const handleKeySignIn = (event) => {
        if (event.key === 'Enter') handleClickSignIn();
    };

    const handleClickSignIn = () => {
        setSignInComponents(prev => ({
            ...prev,
            confirmLoading: true,
            loading: true,
            emailStatus: 'validating',
            passwordStatus: 'validating',
        }));

        form.validateFields()
            .then(values => {
                setTimeout(() => {
                    setSignInComponents(prev => ({
                        ...prev,
                        confirmLoading: false,
                        loading: false,
                    }));

                    if (selectedState === 'Michoacán de Ocampo') {
                        setModalTitle('Servicio suspendido');
                        setModalBody('El servicio de la nube fue dado de baja por falta de pago.');
                        setModalOpen(true);
                    } else {
                        setModalTitle('Error de autenticación');
                        setModalBody('Usuario o contraseña inválido.');
                        setModalOpen(true);
                    }
                }, 1000);
            })
            .catch(errorInfo => {
                setSignInComponents(prev => ({
                    ...prev,
                    emailStatus: errorInfo.errorFields.some(f => f.name[0] === 'email') ? 'error' : '',
                    passwordStatus: errorInfo.errorFields.some(f => f.name[0] === 'password') ? 'error' : '',
                    loading: false,
                    confirmLoading: false
                }));
            });
    };

    return (
        <Box sx={{
            width: '100%',
            minHeight: '700px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f5f5f5',
        }}>
            <BasicModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                title={modalTitle}
                body={modalBody}
            />

            <Card sx={{
                minWidth: 400,
                maxWidth: 450,
                padding: 2,
                borderRadius: 3,
                boxShadow: '0 4px 15px rgba(0,0,0,0.15)'
            }}>
                <CardContent sx={{ textAlign: 'center' }}>
                    <Typography variant='h5' sx={{ marginBottom: 2 }}>
                        Inicio de sesión
                    </Typography>

                    <Form
                        form={form}
                        layout="vertical"
                        autoComplete='off'
                        name='signin'
                        style={{ width: '100%' }}
                    >
                        <Form.Item
                            label="Correo electrónico"
                            name="email"
                            validateStatus={signInComponents.emailStatus}
                            help={signInComponents.emailStatus === 'error' ? 'Verifica tu correo electrónico' : ''}
                            rules={[
                                { type: 'email', required: true, message: 'Por favor ingrese su correo electrónico.' }
                            ]}
                        >
                            <Input onKeyUp={handleKeySignIn} />
                        </Form.Item>

                        <Form.Item
                            label="Contraseña"
                            name="password"
                            validateStatus={signInComponents.passwordStatus}
                            help={signInComponents.passwordStatus === 'error' ? 'Verifica tu contraseña' : ''}
                            rules={[
                                { type: 'string', required: true, min: 8, max: 16, message: 'Por favor ingrese su contraseña.' }
                            ]}
                        >
                            <Input.Password onKeyUp={handleKeySignIn} />
                        </Form.Item>

                        <Form.Item style={{ textAlign: 'center', marginTop: 16 }}>
                            <Button
                                type="primary"
                                loading={signInComponents.loading}
                                onClick={handleClickSignIn}
                                style={{ width: 200 }}
                            >
                                Iniciar sesión
                            </Button>
                        </Form.Item>
                    </Form>
                </CardContent>
            </Card>
        </Box>
    );
};

export default AuthPage;
