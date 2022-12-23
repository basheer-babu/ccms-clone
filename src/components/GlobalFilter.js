import React from 'react';
import SearchIcon from "@mui/icons-material/Search";
import { alpha, useTheme } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';


export const GlobalFilter = ({ filter, setFilter }) => {


    return (
        <>
            {/* <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Case ID / Alert ID / CIF No / Customer Name"
                    inputProps={{ "aria-label": "search" }}
                value={filter || ''}
                onChange={(e) => setFilter(e.target.value) }
                />
            </Search> */}
            <Paper
                component="form"
                sx={{ p: '1px 3px', display: 'flex', alignItems: 'center', width: 220 }}
                style={{borderRadius:'15px',boxShadow:'0.7px 0.7px 0.7px #FF5E00,-0.7px -0.7px 0.7px #1A4198' }}
            >
                <IconButton type="submit" sx={{ p: '1px 3px 3px 3px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>

                <InputBase
                    sx={{ ml: 0.5, flex: 0.5 }}
                    
                    placeholder="Search here"
                    inputProps={{ 'aria-label': 'search google maps' }}
                    value={filter || ''}
                    onChange={(e) => setFilter(e.target.value)}
                />



            </Paper>

        </>
    )

}