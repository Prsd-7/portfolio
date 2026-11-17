export default function SectionSkeleton() {
  return (
    <section className="section skeleton-section" aria-hidden="true">
      <div className="container">
        <div className="skeleton skeleton-title" />
        <div className="skeleton skeleton-line" />
        <div className="skeleton skeleton-line short" />
      </div>
    </section>
  );
}