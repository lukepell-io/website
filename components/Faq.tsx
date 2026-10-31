type Item = { readonly q: string; readonly a: string };

export function Faq({ title, items }: { title: string; items: readonly Item[] }) {
  return (
    <section className="service">
      <h2 className="heading">{title}</h2>
      <dl className="faq">
        {items.map((item) => (
          <div key={item.q}>
            <dt className="title">{item.q}</dt>
            <dd>{item.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
