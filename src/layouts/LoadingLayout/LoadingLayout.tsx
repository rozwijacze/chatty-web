import useLabels from '@hooks/useLabels';
import './LoadingLayout.scss';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function LoadingLayout() {
    const labels = useLabels();

    return (
        <main className="loading-layout">
            <div className="loading-layout__wrapper">
                <h1>{labels.appName}</h1>
                <h2>{labels.loadingText}</h2>

                <Box sx={{ width: '100%' }}>
                    <LinearProgress color="inherit" sx={{ height: '10px', borderRadius: '20px' }} />
                </Box>
            </div>
        </main>
    );
}
