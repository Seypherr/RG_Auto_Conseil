export default function ServiceCard({ icon, title, copy }) {
  return (
    <article className="surface-card gs-scroll-card">
      <div>
        <div className="service-icon-wrap">{icon}</div>
        <h3 className="service-title">{title}</h3>
        <p className="service-copy">{copy}</p>
      </div>
    </article>
  );
}
