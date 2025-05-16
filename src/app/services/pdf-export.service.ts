import { Injectable } from '@angular/core';
import html2pdf from 'html2pdf.js';

@Injectable({
  providedIn: 'root'
})
export class PdfExportService {
  exportToPDF(elementId: string, filename: string, options = {}) {
    const element = document.getElementById(elementId);
    if (!element) return;

    const defaultOpt = {
      margin: 1,
      filename: filename,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    const opt = { ...defaultOpt, ...options };

    html2pdf().set(opt).from(element).save();
  }
}
