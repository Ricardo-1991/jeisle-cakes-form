import "../Footer/StylesFooter.css";

export function Footer({ total }) {
  function formatPrice(price) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  }
  let totalPrice = formatPrice(total || 0);

  return (
    <footer className="form-footer">
      <div>
        <strong>Preço total: {totalPrice}</strong>
      </div>
    </footer>
  );
}
