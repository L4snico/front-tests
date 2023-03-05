import Component from "@/class/component";
import { AppBar, Box, Button, Container, FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, Link, OutlinedInput, TextField, Toolbar, Typography, useTheme } from "@mui/material";
import { DarkMode, Domain, LightMode, Visibility, VisibilityOff } from "@mui/icons-material";
import ColorModeContext from "@/context/color_mode";
import React from "react";

class SignInPage extends Component {
    element: T.Component = SignInPage

    static build(): JSX.Element {
        const theme = useTheme()
        const colorMode = React.useContext(ColorModeContext)
        const [showPassword, setShowPassword] = React.useState(false)
        
        return <>
            <Grid container sx={{ height: "100vh" }}>
                <Grid item container xs={12} md={6} lg={6} sx={{ height: "100vh" }}>
                    <Grid item xs={12}>
                        <AppBar position="static" variant="outlined" elevation={0} sx={{ border: "none" }} color="transparent">
                            <Toolbar>
                                <Domain sx={{ mr: 1 }} color="primary" />
                                <Typography sx={{ flexGrow: 1 }}>Domain</Typography>
                                <IconButton onClick={colorMode.toggleColorMode}>
                                    {theme.palette.mode === "light" ? <DarkMode /> : <LightMode />}
                                </IconButton>
                            </Toolbar>
                        </AppBar>
                    </Grid>
                    <Grid item xs={12}>
                        <Container maxWidth="xs">
                            <Box 
                                sx={{
                                    padding: 5,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <Typography variant="h5">Customer Central</Typography>
                                <Box component="form" noValidate sx={{ mt: 3, width: "100%" }}>
                                    <TextField label="Email" fullWidth margin="normal" />
                                    <FormControl fullWidth margin="normal">
                                        <InputLabel htmlFor="password">Password</InputLabel>
                                        <OutlinedInput
                                            id="password"
                                            label="Password"
                                            type={showPassword ? "text" : "password"}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={() => setShowPassword(!showPassword)}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                    <Link href="#" variant="body2">Forgot password?</Link>
                                    <Button
                                        variant="contained"
                                        disableElevation
                                        fullWidth
                                        sx={{ mt: 2 }}
                                        size="large"
                                    >
                                        Sign In
                                    </Button>
                                </Box>
                            </Box>
                        </Container>
                    </Grid>
                    <Grid item xs={12} sx={{ position: "relative" }}>
                        <AppBar color="transparent" elevation={0} sx={{ position: "absolute", top: "auto", bottom: 0 }}>
                            <Toolbar>
                                <Typography variant="body2" color="GrayText">Copyright © Domain 2023.</Typography>
                            </Toolbar>
                        </AppBar>
                    </Grid>
                </Grid>
                <Grid
                    item
                    sm={false}
                    md={6}
                    sx={{
                        backgroundImage: "url(/src/assets/images/domain_background.jpg)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}
                />
            </Grid>
        </>
    }
}

export default SignInPage
