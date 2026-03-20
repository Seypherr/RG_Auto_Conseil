import qrCode from '../../Photo_rg_auto_conseil/QR_Gaetan_Roblin_RG_Auto_Conseil.png';

export default function BarcodeMark({ compact = false, code = 'ID-84992-RGC-01', variant = 'qr' }) {
  const isClassicBarcode = variant === 'barcode';

  return (
    <div className="barcode-system">
      {isClassicBarcode ? (
        <svg aria-hidden="true" className={`barcode-svg${compact ? ' barcode-svg--compact' : ''}`} preserveAspectRatio="none" viewBox="0 0 100 30">
          <rect x="0" y="0" width="2" height="30" fill="white" />
          <rect x="4" y="0" width="1" height="30" fill="white" />
          <rect x="7" y="0" width="4" height="30" fill="white" />
          <rect x="13" y="0" width="1" height="30" fill="white" />
          <rect x="16" y="0" width="2" height="30" fill="white" />
          <rect x="20" y="0" width="3" height="30" fill="white" />
          <rect x="25" y="0" width="1" height="30" fill="white" />
          <rect x="28" y="0" width="5" height="30" fill="white" />
          <rect x="35" y="0" width="2" height="30" fill="white" />
          <rect x="39" y="0" width="1" height="30" fill="white" />
          <rect x="42" y="0" width="4" height="30" fill="white" />
          <rect x="48" y="0" width="2" height="30" fill="white" />
          <rect x="52" y="0" width="1" height="30" fill="white" />
          <rect x="55" y="0" width="3" height="30" fill="white" />
          <rect x="60" y="0" width="2" height="30" fill="white" />
          <rect x="64" y="0" width="4" height="30" fill="white" />
          <rect x="70" y="0" width="1" height="30" fill="white" />
          <rect x="73" y="0" width="2" height="30" fill="white" />
          <rect x="77" y="0" width="3" height="30" fill="white" />
          <rect x="82" y="0" width="1" height="30" fill="white" />
          <rect x="85" y="0" width="4" height="30" fill="white" />
          <rect x="91" y="0" width="2" height="30" fill="white" />
          <rect x="95" y="0" width="1" height="30" fill="white" />
          <rect x="98" y="0" width="2" height="30" fill="white" />
        </svg>
      ) : (
        <img
          alt="QR code RG Auto Conseil"
          className={`barcode-qr${compact ? ' barcode-qr--compact' : ''}`}
          src={qrCode}
        />
      )}
      {!compact ? <div className="sys-code">{code}</div> : null}
    </div>
  );
}
