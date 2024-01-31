import React from 'react'
import { AppBar, Toolbar, Typography, Link } from '@mui/material'

export default function Navbar() {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#FFFFFF' }}>
            <Toolbar>
                <Link href="dashboard/home" underline="none">
                    <Typography>
                        Home - Nguyễn Việt Hoàng
                    </Typography>
                </Link>
            </Toolbar>
        </AppBar>
    )
}
