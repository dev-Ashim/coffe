export default function MenuItem({ name, price, desc }) {
  return (
    <article className="item">
      <h3>{name}</h3>
      <span className="dots" />
      <b>{price == null ? "—" : `₹${price}`}</b>
      <p>{desc}</p>
    </article>
  );
}
