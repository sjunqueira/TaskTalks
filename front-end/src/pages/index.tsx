import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import { Box } from '@mui/material';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ZigZag } from './components/Zigzap';
import { Testimonials } from './components/Testimonials';
import { Newsletter } from './components/Newsletter';
import Header from './components/HomeHeader';


export default function Home() {
  return (
    <Box>
      <Header/>
      <Hero />
      <Features />
      <ZigZag />
      <Testimonials />
      <Newsletter />
    </Box>
  );
}
