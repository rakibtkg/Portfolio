#!/bin/bash

# Netlify build script
echo "Starting Netlify build..."

# Install dependencies
npm ci

# Build the project
npm run build

# Verify CV file exists in dist
if [ -f "dist/cv/my-cv.pdf" ]; then
    echo "✅ CV file found in dist/cv/my-cv.pdf"
    ls -la dist/cv/
else
    echo "❌ CV file not found in dist/cv/"
    echo "Contents of dist:"
    ls -la dist/
fi

# Set proper permissions for PDF files
find dist -name "*.pdf" -exec chmod 644 {} \;

echo "Build completed!"