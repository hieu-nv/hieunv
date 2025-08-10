#!/usr/bin/env node

/**
 * PDF Generation Script for Software Architect Profile
 * 
 * This script can be used to generate a PDF version of the profile
 * using Puppeteer for more control over the output.
 * 
 * Install: npm install puppeteer
 * Run: node scripts/generate-pdf.js
 */

const fs = require('fs');
const path = require('path');

// Check if Puppeteer is available
let puppeteer;
try {
  puppeteer = require('puppeteer');
} catch (error) {
  console.log('Puppeteer not found. To use this script, install it with: npm install puppeteer');
  console.log('For now, you can use the browser print functionality.');
  process.exit(1);
}

async function generatePDF() {
  console.log('Starting PDF generation...');
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    
    // Set viewport for better rendering
    await page.setViewport({
      width: 1200,
      height: 800,
      deviceScaleFactor: 2
    });
    
    // Navigate to the local dev server
    const url = 'http://localhost:5174';
    console.log(`Navigating to ${url}...`);
    
    await page.goto(url, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });
    
    // Wait for content to load
    await page.waitForSelector('.timeline-project', { timeout: 10000 });
    
    // Add print-specific styles
    await page.addStyleTag({
      content: `
        @media print {
          .print-button { display: none !important; }
          .print-instructions { display: none !important; }
          .animate-bounce, .animate-pulse { animation: none !important; }
          .fixed { position: static !important; }
          .pointer-events-none { display: none !important; }
        }
        body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      `
    });
    
    // Generate PDF
    const outputPath = path.join(process.cwd(), 'Hieu_Nguyen_Software_Architect_Profile.pdf');
    
    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '0.5in',
        bottom: '0.5in',
        left: '0.5in',
        right: '0.5in'
      },
      preferCSSPageSize: true
    });
    
    console.log(`✅ PDF generated successfully: ${outputPath}`);
    
  } catch (error) {
    console.error('❌ Error generating PDF:', error.message);
    console.log('\nTroubleshooting:');
    console.log('1. Make sure the dev server is running on http://localhost:5174');
    console.log('2. Run: npm run dev');
    console.log('3. Alternatively, use the browser print function');
  } finally {
    await browser.close();
  }
}

// Check if dev server is running
async function checkDevServer() {
  try {
    const http = require('http');
    
    return new Promise((resolve) => {
      const req = http.get('http://localhost:5174', (res) => {
        resolve(true);
      });
      
      req.on('error', () => {
        resolve(false);
      });
      
      req.setTimeout(5000, () => {
        req.destroy();
        resolve(false);
      });
    });
  } catch {
    return false;
  }
}

async function main() {
  const serverRunning = await checkDevServer();
  
  if (!serverRunning) {
    console.log('❌ Dev server not detected on http://localhost:5174');
    console.log('\nPlease start the dev server first:');
    console.log('  npm run dev');
    console.log('\nThen run this script again.');
    process.exit(1);
  }
  
  await generatePDF();
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { generatePDF };
