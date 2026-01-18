import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export async function generateIdCard(userData: {
  registrationId: string;
  firstName: string;
  lastName: string;
  email: string;
  college: string;
  course: string;
}) {
  const cardHtml = `
    <div id="id-card" style="
      width: 3.5in;
      height: 2.15in;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 8px;
      padding: 20px;
      box-sizing: border-box;
      color: white;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      position: relative;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    ">
      <div style="position: absolute; top: 10px; right: 10px; font-size: 10px; opacity: 0.8;">ISTE HIT</div>
      
      <div style="margin-bottom: 8px;">
        <div style="font-weight: bold; font-size: 16px;">${userData.firstName} ${userData.lastName}</div>
        <div style="font-size: 11px; opacity: 0.9;">${userData.course}</div>
      </div>
      
      <div style="border-top: 1px solid rgba(255,255,255,0.3); border-bottom: 1px solid rgba(255,255,255,0.3); padding: 8px 0; margin: 8px 0; font-size: 10px;">
        <div><strong>ID:</strong> ${userData.registrationId}</div>
        <div><strong>College:</strong> ${userData.college}</div>
      </div>
      
      <div style="font-size: 9px; opacity: 0.8; margin-top: 8px;">
        <div>${userData.email}</div>
        <div>Open Source Program Member</div>
      </div>
    </div>
  `;

  const container = document.createElement('div');
  container.innerHTML = cardHtml;
  document.body.appendChild(container);

  try {
    const canvas = await html2canvas(
      document.getElementById('id-card') as HTMLElement,
      {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
      }
    );

    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'in',
      format: [3.5, 2.15],
    });

    const imageData = canvas.toDataURL('image/png');
    pdf.addImage(imageData, 'PNG', 0, 0, 3.5, 2.15);

    const pdfBlob = pdf.output('blob');
    document.body.removeChild(container);

    return pdfBlob;
  } catch (error) {
    document.body.removeChild(container);
    throw error;
  }
}
