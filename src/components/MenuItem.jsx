export default function MenuItem({ name, tag, price, desc }) {
  return (
    <article className="item" data-anim>
      <h3>
        {name}
        {tag && <small className="item__tag">{tag}</small>}
      </h3>
      <span className="dots" />
      <b>{price == null ? "—" : `₹${price}`}</b>
      <p>{desc}</p>
    </article>
  );
}
