export default function SectionLabel({ children, className = '' }) {
  const classes = ['label', className].filter(Boolean).join(' ');

  return <span className={classes}>{children}</span>;
}
