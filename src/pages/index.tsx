import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ResponsiveAppBar from './components/AppBar/ResponsiveAppBar';
import { Box } from '@mui/material';


export default function Home() {
  return (
    <Box>
    <ResponsiveAppBar/>
    <div>
      <h1>Hello World</h1>
    </div>
    </Box>
  );
}
