import { Box, Container, Typography } from '@mui/material';


export function Features() {
  return (
    <Box component="section">
      <Container sx={{ maxWidth: '6xl', mx: 'auto', px: { xs: 4, sm: 6 }, py: { xs: 12, md: 20 } }}>
        
        {/* Section header */}
        <Box sx={{ maxWidth: '3xl', mx: 'auto', textAlign: 'center', pb: { xs: 12, md: 20 } }}>
          <Typography variant="h2" mb={4}>The majority our customers do not understand their workflows.</Typography>
          <Typography variant="body1" color="gray.400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
        </Box>

        {/* Items */}
        <Box
          sx={{
            maxWidth: 'sm',
            mx: 'auto',
            display: 'grid',
            gap: 8,
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
            marginBottom: 16,
          }}
          data-aos-id-blocks
        >

          {/* 1st item */}
          <Box sx={{ position: 'relative', alignItems: 'center', textAlign: 'center' }} data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
            <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              {/* SVG paths go here */}
            </svg>
            <Typography variant="h4" mb={2}>Instant Features</Typography>
            <Typography variant="body2" color="gray.400" textAlign="center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</Typography>
          </Box>

          {/* 2nd item */}
          <Box sx={{ position: 'relative', alignItems: 'center', textAlign: 'center' }} data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
            <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              {/* SVG paths go here */}
            </svg>
            <Typography variant="h4" mb={2}>Instant Features</Typography>
            <Typography variant="body2" color="gray.400" textAlign="center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</Typography>
          </Box>
          {/* ... (similar structure for other items) */}
          <Box sx={{ position: 'relative', alignItems: 'center', textAlign: 'center' }} data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
            <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              {/* SVG paths go here */}
            </svg>
            <Typography variant="h4" mb={2}>Instant Features</Typography>
            <Typography variant="body2" color="gray.400" textAlign="center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</Typography>
          </Box>

          <Box sx={{ position: 'relative', alignItems: 'center', textAlign: 'center' }} data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
            <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              {/* SVG paths go here */}
            </svg>
            <Typography variant="h4" mb={2}>Instant Features</Typography>
            <Typography variant="body2" color="gray.400" textAlign="center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</Typography>
          </Box>

          <Box sx={{ position: 'relative', alignItems: 'center', textAlign: 'center' }} data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
            <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              {/* SVG paths go here */}
            </svg>
            <Typography variant="h4" mb={2}>Instant Features</Typography>
            <Typography variant="body2" color="gray.400" textAlign="center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</Typography>
          </Box>

          <Box sx={{ position: 'relative', alignItems: 'center', textAlign: 'center' }} data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
            <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              {/* SVG paths go here */}
            </svg>
            <Typography variant="h4" mb={2}>Instant Features</Typography>
            <Typography variant="body2" color="gray.400" textAlign="center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</Typography>
          </Box>

          

        </Box>

      </Container>
    </Box>
  );
};
