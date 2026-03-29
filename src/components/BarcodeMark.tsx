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
        <svg aria-label="QR code RG Auto Conseil" className={`barcode-qr${compact ? ' barcode-qr--compact' : ''}`} viewBox="0 0 64 64">
          <rect width="64" height="64" rx="8" fill="rgba(255,255,255,0.08)" />
          <g fill="white">
            <rect x="8" y="8" width="14" height="14" rx="1.5" />
            <rect x="42" y="8" width="14" height="14" rx="1.5" />
            <rect x="8" y="42" width="14" height="14" rx="1.5" />
            <rect x="12" y="12" width="6" height="6" fill="black" />
            <rect x="46" y="12" width="6" height="6" fill="black" />
            <rect x="12" y="46" width="6" height="6" fill="black" />
            <rect x="28" y="10" width="4" height="4" />
            <rect x="34" y="10" width="4" height="4" />
            <rect x="26" y="18" width="6" height="4" />
            <rect x="34" y="18" width="4" height="4" />
            <rect x="24" y="26" width="4" height="4" />
            <rect x="30" y="26" width="4" height="4" />
            <rect x="36" y="26" width="8" height="4" />
            <rect x="24" y="32" width="8" height="4" />
            <rect x="34" y="32" width="4" height="4" />
            <rect x="40" y="32" width="4" height="4" />
            <rect x="26" y="38" width="4" height="4" />
            <rect x="32" y="38" width="6" height="4" />
            <rect x="40" y="40" width="4" height="4" />
            <rect x="46" y="28" width="4" height="4" />
            <rect x="50" y="34" width="4" height="4" />
            <rect x="28" y="46" width="4" height="4" />
            <rect x="34" y="46" width="4" height="4" />
            <rect x="40" y="46" width="8" height="4" />
            <rect x="28" y="52" width="12" height="4" />
            <rect x="44" y="52" width="4" height="4" />
          </g>
        </svg>
      )}
      {!compact ? <div className="sys-code">{code}</div> : null}
    </div>
  );
}
