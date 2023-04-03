import Modal from "react-modal";
import "../PriceTableModal/StylesPriceTableModal.css";
import closeImg from "../../images/close.svg";

export function PriceTableModal({ isOpen, onRequestClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay-price"
      className="react-modal-content-price"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Botão de Fechar Modal" />
      </button>

      <div className="container-table">
        <table className="panel-table__group">
          <thead>
            <tr>
              <th>Recheios</th>
              <th>15cm</th>
              <th>20cm</th>
              <th>25cm</th>
              <th>30cm</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Abacaxi</td>
              <td>R$8,00</td>
              <td>R$10,00</td>
              <td>R$14,00</td>
              <td>R$16,00</td>
            </tr>

            <tr>
              <td>Ameixa</td>
              <td>R$8,00</td>
              <td>R$10,00</td>
              <td>R$14,00</td>
              <td>R$16,00</td>
            </tr>

            <tr>
              <td>Limão Siciliano</td>
              <td>R$5,00</td>
              <td>R$8,00</td>
              <td>R$10,00</td>
              <td>R$12,00</td>
            </tr>

            <tr>
              <td>Maracujá</td>
              <td>R$5,00</td>
              <td>R$8,00</td>
              <td>R$10,00</td>
              <td>R$12,00</td>
            </tr>

            <tr>
              <td>Morango</td>
              <td>R$8,00</td>
              <td>R$16,00</td>
              <td>R$24,00</td>
              <td>R$32,00</td>
            </tr>

            <tr>
              <td>Nozes</td>
              <td>R$7,00</td>
              <td>R$14,00</td>
              <td>R$21,00</td>
              <td>R$28,00</td>
            </tr>

            <tr>
              <td>Ovomaltine</td>
              <td>R$7,00</td>
              <td>R$14,00</td>
              <td>R$21,00</td>
              <td>R$28,00</td>
            </tr>

            <tr>
              <td>Oreo</td>
              <td>R$8,00</td>
              <td>R$16,00</td>
              <td>R$24,00</td>
              <td>R$32,00</td>
            </tr>

            <tr>
              <td>Brigadeiro de Castanha</td>
              <td>R$7,00</td>
              <td>R$14,00</td>
              <td>R$21,00</td>
              <td>R$28,00</td>
            </tr>

            <tr>
              <td>Brigadeiro de Nutella</td>
              <td>R$10,00</td>
              <td>R$20,00</td>
              <td>R$30,00</td>
              <td>R$40,00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <footer>
        <h2>Observação:</h2>
        <p>Todos os adicionais serão somados ao valor do bolo.</p>
      </footer>
    </Modal>
  );
}
