import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const BuildTools = () => {
    const theme = useTheme();

    return (
        <Box >
            <Box marginBottom={4}>
                <Box marginBottom={2}>
                    <Typography
                        variant="h4"
                        color="text.primary"
                        align={'center'}
                        gutterBottom
                        sx={{
                            fontWeight: 700,
                        }}
                    >
                        Get a clear overview of everything your team is working on – what’s already been done and what’s coming up next.
                    </Typography>
                    <Typography
                        variant="h6"
                        component="p"
                        color="text.secondary"
                        sx={{ fontWeight: 400 }}
                        align={'center'}
                    >
                        Our task management system comes with a set of powerful build tools and comprehensive documentation.
                        These tools help you streamline your project management tasks, and the documentation provides detailed guidance and live examples for easy use and customization.
                    </Typography>
                </Box>
            </Box>
            {/* <Box display="flex" justifyContent="center">
            <Box
                sx={{ width: { xs: '100%', md: '50%' }}}
                width={50}
                component={SyntaxHighlighter}
                language={'javascript'}
                style={vs2015}
                padding={`${theme.spacing(2)} !important`}
                borderRadius={2}
                margin={`${theme.spacing(0)} !important`}
                bgcolor={'#21325b !important'}
            >
                {`
// Install the build tools
> $ yarn install
// Or
> $ npm install

// Everything installed!

// Start your project
> $ yarn start
// Or
> $ npm run start

// Your task management system is live. Access it by opening localhost:3000
        `}
            </Box>
            </Box> */}
        </Box>
    )
}

export default BuildTools;
