import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useUserSignup from '../../Hooks/useUserSignup';
import {
    Box,
    Paper,
    Typography,
    TextField,
    Button,
    Link as MuiLink,
    Stack
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Usersignup = () => {
    const { signup } = useUserSignup();
    const navigate = useNavigate();

    const [input, setInput] = useState({
        fullName: '',
        email: '',
        university_rollno: '',
        class_rollno: '',
        password: '',
        confirmPassword: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(input);
    };

    return (
        <Box sx={{ minHeight: '100vh', height: '100vh', width: '100vw', display: 'flex', background: '#F7F8FA', overflow: 'hidden', position: 'relative' }}>
            {/* Top Left Branding */}
            <Box sx={{
                position: 'fixed',
                top: 32,
                left: 40,
                zIndex: 10,
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
            }}>
                        <Typography variant="h4" sx={{ fontWeight: 700, color: '#111', letterSpacing: 0.5, fontSize: { xs: 22, sm: 26 } }}>
          Collaboard
        </Typography>
            </Box>
            {/* Bottom Left Copyright */}
            <Box sx={{
                position: 'fixed',
                bottom: 32,
                left: 40,
                zIndex: 10,
                display: { xs: 'none', md: 'block' }
            }}>
                <Typography variant="body2" sx={{ color: '#888' }}>
                    © Collaboard Smartboard 2025
                </Typography>
            </Box>
            {/* Left Side */}
            <Box sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                px: { xs: 2, md: 8 },
                py: 0,
                background: '#fff',
                minWidth: 0,
                position: 'relative',
                height: '100vh',
            }}>
                {/* Form */}
                <Box sx={{ maxWidth: 400, width: '100%', mx: 'auto', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', my: { xs: 4, sm: 8 }, px: { xs: 0.5, sm: 0 } }}>
                    {/* Header and Toggle Button Row */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                        <Typography variant="h4" sx={{ fontWeight: 700, color: '#111', fontSize: { xs: 22, sm: 26 } }}>
                            Create your account
                        </Typography>
                        <Button
                            variant="outlined"
                            size="small"
                            sx={{
                                borderRadius: 2,
                                fontWeight: 600,
                                textTransform: 'none',
                                borderColor: '#7C3AED',
                                color: '#7C3AED',
                                '&:hover': { borderColor: '#5B21B6', background: '#F3F0FF' }
                            }}
                            onClick={() => navigate('/admin-signup')}
                        >
                            Admin Signup
                        </Button>
                    </Box>
                    <Box component="form" onSubmit={handleSubmit} autoComplete="off">
                        <Stack spacing={0.7}>
                            {/* Full Name */}
                            <Box>
                                <Typography component="label" variant="body2" sx={{ fontWeight: 500, mb: 0.2, color: '#222', fontSize: { xs: 12, sm: 13 } }}>
                                    Full Name
                                </Typography>
                                <TextField
                                    fullWidth
                                    value={input.fullName}
                                    onChange={e => setInput({ ...input, fullName: e.target.value })}
                                    variant="outlined"
                                    size="small"
                                    placeholder="Full name"
                                    sx={{
                                        mt: 0.2,
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: 2,
                                            backgroundColor: '#F9FAFB',
                                            fontSize: { xs: 13, sm: 15 }
                                        }
                                    }}
                                />
                            </Box>
                            {/* Email */}
                            <Box>
                                <Typography component="label" variant="body2" sx={{ fontWeight: 500, mb: 0.2, color: '#222', fontSize: { xs: 12, sm: 13 } }}>
                                    Email
                                </Typography>
                                <TextField
                                    fullWidth
                                    value={input.email}
                                    onChange={e => setInput({ ...input, email: e.target.value })}
                                    variant="outlined"
                                    size="small"
                                    placeholder="Email"
                                    sx={{
                                        mt: 0.2,
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: 2,
                                            backgroundColor: '#F9FAFB',
                                            fontSize: { xs: 13, sm: 15 }
                                        }
                                    }}
                                />
                            </Box>
                            {/* University Roll & Class Roll Row */}
                            <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 0.7, md: 2 }}>
                                <Box sx={{ flex: 1 }}>
                                    <Typography component="label" variant="body2" sx={{ fontWeight: 500, mb: 0.2, color: '#222', fontSize: { xs: 12, sm: 13 } }}>
                                        University Roll Number
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        value={input.university_rollno}
                                        onChange={e => setInput({ ...input, university_rollno: e.target.value })}
                                        variant="outlined"
                                        size="small"
                                        placeholder="University roll no."
                                        sx={{
                                            mt: 0.2,
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: 2,
                                                backgroundColor: '#F9FAFB',
                                                fontSize: { xs: 13, sm: 15 }
                                            }
                                        }}
                                    />
                                </Box>
                                <Box sx={{ flex: 1, ml: { md: 2, xs: 0 } }}>
                                    <Typography component="label" variant="body2" sx={{ fontWeight: 500, mb: 0.2, color: '#222', fontSize: { xs: 12, sm: 13 } }}>
                                        Class Roll Number
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        value={input.class_rollno}
                                        onChange={e => setInput({ ...input, class_rollno: e.target.value })}
                                        variant="outlined"
                                        size="small"
                                        placeholder="Class roll no."
                                        sx={{
                                            mt: 0.2,
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: 2,
                                                backgroundColor: '#F9FAFB',
                                                fontSize: { xs: 13, sm: 15 }
                                            }
                                        }}
                                    />
                                </Box>
                            </Stack>
                            {/* Password */}
                            <Box>
                                <Typography component="label" variant="body2" sx={{ fontWeight: 500, mb: 0.2, color: '#222', fontSize: { xs: 12, sm: 13 } }}>
                                    Password
                                </Typography>
                                <TextField
                                    fullWidth
                                    type="password"
                                    value={input.password}
                                    onChange={e => setInput({ ...input, password: e.target.value })}
                                    variant="outlined"
                                    size="small"
                                    placeholder="Password"
                                    sx={{
                                        mt: 0.2,
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: 2,
                                            backgroundColor: '#F9FAFB',
                                            fontSize: { xs: 13, sm: 15 }
                                        }
                                    }}
                                />
                            </Box>
                            {/* Confirm Password */}
                            <Box>
                                <Typography component="label" variant="body2" sx={{ fontWeight: 500, mb: 0.2, color: '#222', fontSize: { xs: 12, sm: 13 } }}>
                                    Confirm Password
                                </Typography>
                                <TextField
                                    fullWidth
                                    type="password"
                                    value={input.confirmPassword}
                                    onChange={e => setInput({ ...input, confirmPassword: e.target.value })}
                                    variant="outlined"
                                    size="small"
                                    placeholder="Confirm password"
                                    sx={{
                                        mt: 0.2,
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: 2,
                                            backgroundColor: '#F9FAFB',
                                            fontSize: { xs: 13, sm: 15 }
                                        }
                                    }}
                                />
                            </Box>
                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                sx={{
                                    width: '100%',
                                    backgroundColor: '#7C3AED',
                                    color: 'white',
                                    borderRadius: 2,
                                    fontWeight: 600,
                                    fontSize: 15,
                                    textTransform: 'none',
                                    py: 1,
                                    boxShadow: 0,
                                    '&:hover': { backgroundColor: '#5B21B6' }
                                }}
                            >
                                Sign up
                            </Button>
                        </Stack>
                    </Box>
                    <Box sx={{ mt: 1, mb: { xs: 3, sm: 4 }, textAlign: 'center' }}>
                        <Typography variant="body2" sx={{ color: '#888', fontSize: { xs: 12, sm: 14 } }}>
                            Already have an account?{' '}
                            <MuiLink
                                component={Link}
                                to="/user-login"
                                sx={{ color: '#7C3AED', fontWeight: 600, textDecoration: 'none', ml: 0.5, '&:hover': { textDecoration: 'underline' } }}
                            >
                                Log in
                            </MuiLink>
                        </Typography>
                    </Box>
                </Box>
            </Box>
            {/* Right Side - Blurred Square with Collaboard */}
            <Box sx={{
                flex: 1,
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                justifyContent: 'center',
                background: '#F7F8FA',
                position: 'relative',
                overflow: 'hidden',
                height: '100vh',
            }}>
                <Box sx={{
                    width: 320,
                    height: 320,
                    background: 'rgba(124, 58, 237, 0.15)',
                    borderRadius: 3,
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 32px 0 rgba(124,58,237,0.18)',
                    overflow: 'hidden',
                    filter: 'blur(0.5px)'
                }}>
                    <Typography
                        variant="h1"
                        sx={{
                            color: 'rgba(124, 58, 237, 0.5)',
                            fontWeight: 800,
                            fontSize: '3.5rem',
                            zIndex: 2,
                            filter: 'blur(2px)',
                            textAlign: 'center',
                            lineHeight: 1,
                            wordBreak: 'break-word'
                        }}
                    >
                        Collaboard
                    </Typography>
                    {/* Half-blur overlay */}
                    <Box sx={{
                        position: 'absolute',
                        left: 0,
                        top: '50%',
                        width: '100%',
                        height: '50%',
                        background: 'rgba(247,248,250,0.7)',
                        backdropFilter: 'blur(8px)',
                        zIndex: 3
                    }} />
                </Box>
            </Box>
        </Box>
    );
};

export default Usersignup;