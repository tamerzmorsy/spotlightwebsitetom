# Vercel Deployment Guide

This project is configured for serverless deployment on Vercel.

## Deployment Configuration

- **Framework**: Vite (React SPA)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **API Functions**: Located in `/api/` directory (serverless functions)

## API Endpoints

The project includes serverless API functions:

- `GET /api/ping` - Health check endpoint
- `GET /api/demo` - Demo endpoint with timestamp

## Environment Variables

Set these environment variables in your Vercel dashboard:

- `PING_MESSAGE` (optional) - Custom ping message
- `NODE_ENV` - Set to "production" (automatically configured)

## Deployment Steps

1. **Connect Repository**: Link your GitHub repository to Vercel
2. **Configure Project**:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
3. **Deploy**: Vercel will automatically deploy on push to main branch

## Local Development vs Production

- **Local**: Full-stack development with Express server (`npm run dev`)
- **Production**: Serverless functions in `/api/` folder + static SPA

## Performance Optimizations

- API functions have 10-second timeout limit
- Caching headers configured for API responses
- Static assets served via Vercel CDN

## Troubleshooting

- If build fails, check the build logs in Vercel dashboard
- Check function logs in Vercel dashboard for API issues
- Verify environment variables are set correctly
- Ensure all routes redirect to `/index.html` for SPA functionality
