import React from 'react';

interface PDFGeneratorProps {
  className?: string;
}

const PDFGenerator: React.FC<PDFGeneratorProps> = ({ className = '' }) => {
  const handlePrint = () => {
    // Add PDF-optimized classes before printing
    document.body.classList.add('pdf-mode');
    
    // Ensure all content is visible
    const scrollIndicator = document.querySelector('.animate-bounce') as HTMLElement;
    if (scrollIndicator) {
      scrollIndicator.style.display = 'none';
    }
    
    // Remove any height restrictions
    document.body.style.height = 'auto';
    document.documentElement.style.height = 'auto';
    
    // Wait a moment for layout to adjust, then print
    setTimeout(() => {
      window.print();
    }, 500);
    
    // Remove PDF mode class after print
    setTimeout(() => {
      document.body.classList.remove('pdf-mode');
      if (scrollIndicator) {
        scrollIndicator.style.display = '';
      }
      document.body.style.height = '';
      document.documentElement.style.height = '';
    }, 2000);
  };

  return (
    <div className={`print-controls ${className}`}>
      {/* Print Button */}
      <button
        onClick={handlePrint}
        className="print-button"
        title="Print/Save as PDF"
      >
        🖨️ Print PDF
      </button>
      
      {/* Instructions for better PDF generation */}
      <div className="print-instructions fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs max-w-sm opacity-0 hover:opacity-100 transition-opacity duration-300">
        <p className="font-semibold mb-2">🎨 Print with Background:</p>
        <ul className="space-y-1 text-xs">
          <li>• <strong>CRITICAL:</strong> Enable "Background graphics" ✓</li>
          <li>• <strong>Chrome:</strong> More settings → Background graphics</li>
          <li>• <strong>Firefox:</strong> Options → Print backgrounds</li>
          <li>• <strong>Edge:</strong> More settings → Background graphics</li>
          <li>• <strong>Paper:</strong> A4 or Letter</li>
          <li>• <strong>Scale:</strong> 100% (don't shrink to fit)</li>
        </ul>
        <p className="text-yellow-200 mt-2 text-xs">
          ⚠️ Without "Background graphics" the dark theme won't print!
        </p>
      </div>
    </div>
  );
};

export default PDFGenerator;
