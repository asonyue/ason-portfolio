#!/usr/bin/env python3
"""Generate a placeholder PDF resume for Ason Yue"""

try:
    from reportlab.lib.pagesizes import letter
    from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
    from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
    from reportlab.lib.units import inch
    
    pdf_path = "public/resume.pdf"
    doc = SimpleDocTemplate(pdf_path, pagesize=letter)
    story = []
    styles = getSampleStyleSheet()
    
    # Title
    title_style = ParagraphStyle(
        'CustomTitle',
        parent=styles['Heading1'],
        fontSize=24,
        textColor='#000000',
        spaceAfter=12,
        alignment=1
    )
    
    story.append(Paragraph("Yue Chun Hei (Ason)", title_style))
    story.append(Paragraph("QA Engineer", styles['Heading2']))
    story.append(Spacer(1, 0.2*inch))
    
    # Contact
    story.append(Paragraph("Taipei, Taiwan | ason06057@gmail.com", styles['Normal']))
    story.append(Paragraph("linkedin.com/in/ason-yue-486991200 | github.com/asonyue", styles['Normal']))
    story.append(Spacer(1, 0.3*inch))
    
    # Summary
    story.append(Paragraph("Professional Summary", styles['Heading2']))
    story.append(Paragraph("QA Engineer specializing in FinTech platform testing — web/mobile, API mocking, and backend validation.", styles['Normal']))
    story.append(Spacer(1, 0.2*inch))
    
    # Experience
    story.append(Paragraph("Experience", styles['Heading2']))
    story.append(Paragraph("<b>Quality Assurance Engineer, Hytech</b> (August 2025 - Present)", styles['Normal']))
    story.append(Paragraph("• Function/regression testing on web+mobile payment modules across VFSC2, ASIC, FCA", styles['Normal']))
    story.append(Paragraph("• Integration testing: CRM, SRC, Anti-Fraud, Account, Activity", styles['Normal']))
    story.append(Paragraph("• SQL/OpenSearch backend validation, JaCoCo coverage", styles['Normal']))
    story.append(Spacer(1, 0.1*inch))
    
    story.append(Paragraph("<b>Cyber Security Consultant Intern, SYSTEX</b> (February 2025 - June 2025)", styles['Normal']))
    story.append(Paragraph("• Zero Trust Maturity Model assessments for banking, F&B, manufacturing", styles['Normal']))
    story.append(Paragraph("• Automated Excel ZTMM process into Python scoring system", styles['Normal']))
    story.append(Spacer(1, 0.2*inch))
    
    # Education
    story.append(Paragraph("Education", styles['Heading2']))
    story.append(Paragraph("<b>Tamkang University</b> - B.S. Computer Science, GPA 3.8 (2021-2025)", styles['Normal']))
    story.append(Paragraph("<b>Temple University</b> - Exchange Student (2023-2024, full scholarship)", styles['Normal']))
    story.append(Spacer(1, 0.2*inch))
    
    # Skills
    story.append(Paragraph("Skills", styles['Heading2']))
    story.append(Paragraph("Functional, Regression, Integration, Smoke, Manual, API Testing | Postman, Charles, Selenium | MySQL, OpenSearch, JaCoCo, Jira | Python, JavaScript", styles['Normal']))
    
    doc.build(story)
    print(f"✓ Generated placeholder resume at {pdf_path}")
    print("NOTE: Replace this with your actual resume PDF file.")
    
except ImportError:
    # Fallback: create a minimal text-based PDF without reportlab
    print("reportlab not available, creating minimal PDF...")
    
    # Create a very basic PDF manually
    pdf_content = """%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /Resources 4 0 R /MediaBox [0 0 612 792] /Contents 5 0 R >>
endobj
4 0 obj
<< /Font << /F1 << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> >> >>
endobj
5 0 obj
<< /Length 1100 >>
stream
BT
/F1 18 Tf
200 720 Td
(Yue Chun Hei \(Ason\)) Tj
0 -30 Td
/F1 12 Tf
(QA Engineer specializing in FinTech) Tj
0 -40 Td
/F1 10 Tf
(Taipei, Taiwan | ason06057@gmail.com) Tj
0 -15 Td
(linkedin.com/in/ason-yue-486991200 | github.com/asonyue) Tj
0 -30 Td
/F1 12 Tf
(EXPERIENCE) Tj
0 -20 Td
/F1 10 Tf
(Quality Assurance Engineer, Hytech \(August 2025 - Present\)) Tj
0 -15 Td
(Payment testing across VFSC2, ASIC, FCA) Tj
0 -15 Td
(Integration testing, SQL/OpenSearch validation) Tj
0 -25 Td
(Cyber Security Consultant Intern, SYSTEX \(Feb-Jun 2025\)) Tj
0 -15 Td
(Zero Trust Maturity Model assessments) Tj
0 -15 Td
(Python automation system development) Tj
0 -30 Td
/F1 12 Tf
(EDUCATION) Tj
0 -20 Td
/F1 10 Tf
(Tamkang University - B.S. CS, GPA 3.8 \(2021-2025\)) Tj
0 -15 Td
(Temple University - Exchange \(2023-2024, full scholarship\)) Tj
0 -30 Td
/F1 12 Tf
(SKILLS) Tj
0 -20 Td
/F1 10 Tf
(API, Functional, Regression, Integration Testing) Tj
0 -15 Td
(Postman, Charles, Selenium, MySQL, OpenSearch, JaCoCo) Tj
0 -15 Td
(Python, JavaScript) Tj
0 -40 Td
/F1 8 Tf
(NOTE: This is a placeholder. Replace public/resume.pdf with your actual CV.) Tj
ET
endstream
endobj
xref
0 6
0000000000 65535 f
0000000009 00000 n
0000000058 00000 n
0000000115 00000 n
0000000217 00000 n
0000000313 00000 n
trailer
<< /Size 6 /Root 1 0 R >>
startxref
1465
%%EOF
"""
    
    with open("public/resume.pdf", "w") as f:
        f.write(pdf_content)
    
    print("✓ Generated minimal placeholder resume at public/resume.pdf")
    print("NOTE: Replace this with your actual resume PDF file.")
