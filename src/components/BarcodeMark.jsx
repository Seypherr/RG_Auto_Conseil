export default function BarcodeMark({ compact = false, code = 'ID-84992-RGC-01' }) {
  return (
    <div className="barcode-system">
      <div aria-hidden="true" className={`signal-mark${compact ? ' signal-mark--compact' : ''}`}>
        <span className="signal-dot" />
        <span className="signal-line signal-line--lg" />
        <span className="signal-line signal-line--md" />
        <span className="signal-line signal-line--sm" />
        <span className="signal-line signal-line--xs" />
      </div>
      {!compact ? <div className="sys-code">{code}</div> : null}
    </div>
  );
}
