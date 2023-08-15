import { useTheme } from '@emotion/react';
import { Typography } from '@mui/material';
import { CustomTheme } from '../types/ThemeTypes';

const Footer = () => {
  const theme = useTheme();
  const primaryColorDark: string = (theme as CustomTheme).palette?.primary?.dark;
  return (
    <footer
      style={{
        boxSizing: 'border-box',
        position: 'absolute',
        left: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        minHeight: '105px',
        width: '100%',
        backgroundColor: primaryColorDark,
        color: '#fff',
        gap: 10,
        fontWeight: '300',
        padding: 15
      }}
    >
      <div>
        <Typography variant="h4" fontWeight="bold" marginBottom={{ xs: '5px', sm: 2 }} textTransform="uppercase">
          test footer
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
