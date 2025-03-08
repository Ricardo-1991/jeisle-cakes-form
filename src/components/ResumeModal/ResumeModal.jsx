import Modal from "react-modal";
import "../ResumeModal/StylesResumeModal.css";
import closeImg from "../../images/close.svg";

export function ResumeModal({
  isOpen,
  onRequestClose,
  states,
  allFillings,
  findOnlyAddFilling,
}) {
  function formatPrice(price) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  }

  const valueAddFillings = states.filling.reduce((acumulator, filling) => {
    const currentValueFillings = states.aditionalFilling[filling]
      ? states.aditionalFilling[filling][states.diameterState]
      : 0;
    if (allFillings.length === 1 && findOnlyAddFilling) {
      return acumulator + currentValueFillings;
    }

    if (allFillings.length === 2 && filling === "Morango") {
      return acumulator + currentValueFillings;
    } else {
      return acumulator + currentValueFillings / 2;
    }
    // return Number(acumulator) + Number(currentValueFillings);
  }, 0);

  // function totalPriceOfCake() {
  //   const cakeValue = Number(cakeSize[diameterState]);
  //   const valueFillings = filling.reduce((acumulator, currFilling) => {
  //     const currentValueFillings = aditionalFilling[currFilling]
  //       ? aditionalFilling[currFilling][diameterState]
  //       : 0;
  //     if (allFillings.length === 1 && findOnlyAddFilling) {
  //       return acumulator + currentValueFillings;
  //     }

  //     if (allFillings.length === 2 && currFilling === "Morango") {
  //       return acumulator + currentValueFillings;
  //     } else {
  //       return acumulator + currentValueFillings / 2;
  //     }
  //   }, 0);

  //Data e hora hoje
  const todayDate = new Intl.DateTimeFormat("pt-BR").format(new Date());
  const todayHourDate = new Date();
  /* --- */

  /* Data prevista de retirada*/
  const foreCastDate = new Date(states.dateForeCast);
  foreCastDate.setHours(foreCastDate.getHours() + 3);

  const userForeCastDate = new Intl.DateTimeFormat("pt-BR").format(
    new Date(foreCastDate)
  );
  /* --- */

  /* Formatação de horário de hoje */
  const orderHour = {
    hour: todayHourDate.getHours(),
    minutes: todayHourDate.getMinutes(),
    seconds: todayHourDate.getSeconds(),
  };

  function addZero(time) {
    if (time < 10) {
      time = "0" + time;
    }
    return time;
  }
  /* --- */

  const objectPaymentMethod = {
    Pix: "Pix: 03324768551 - Jeisle Soares Cardoso Pereira",
    Avista: "À vista(espécie)",
    Debito: "Débito",
    Credito: "Cartão de crédito",
  };

  function handleSubmit(evt) {
    evt.preventDefault();

    location.href = `https://api.whatsapp.com/send?phone=5573982507282&text=✅ *NOVO PEDIDO*:
    %0a______________________________
    %0a📄 *RESUMO DO PEDIDO*
    
    %0a%0a_Nome do cliente_: *${states.name.trim()}*
    %0a%0a_Data do pedido_: *${todayDate}*
    %0a%0a_Horário do pedido_: *${
      todayHourDate.getHours() < 10
        ? `0${todayHourDate.getHours()}`
        : `${todayHourDate.getHours()}`
    }:${
      todayHourDate.getMinutes() < 10
        ? `0${todayHourDate.getMinutes()}`
        : `${todayHourDate.getMinutes()}`
    }*
     ${states.theme ? `%0a%0a_Tema do bolo_: *${states.theme.trim()}*` : ""}
    %0a%0a_Diâmetro do bolo_: *${`${states.diameterState} cm`}* 
    %0a%0a_Massa do bolo_: ${
      states.batterState[0] == null
        ? `*${states.batterState.slice(1)}*`
        : `*${states.batterState.join(" e ")}*`
    }
    %0a%0a_Recheios_: *${
      states.filling[0] == null
        ? `${states.filling.slice(1)}`
        : `${states.filling.join(" e ")}`
    }*
    %0a%0a*_Subtotal_*: 
    %0a_Valor do diâmetro do bolo_: *${formatPrice(
      states.cakeSize[states.diameterState]
    )}*
    
    ${
      states.priceGlitter
        ? `%0a_Adicional de Glitter_: *${formatPrice(states.priceGlitter)}*`
        : ""
    }
    ${
      states.top != "Escolha a opção" || states.top == "undefined"
        ? `%0a_Adicional de Topo_: *${states.top}*`
        : ""
    }
    ${states.batterState.includes("Massa Red Velvet") ? `%0a%0a_Massa adicional_: *Red Velvet - ` + formatPrice(states.aditionalBatterRedVelvet[states.diameterState]) + `*` : ""}
    ${
      states.addFilling[0] == undefined && states.addFilling[1]
        ? `%0a_Recheio adicional_: *${states.addFilling.slice(
            1
          )} - ${formatPrice(valueAddFillings)}*`
        : ""
    }

    ${
      states.addFilling[0] && states.addFilling[1]
        ? `%0a_Recheios adicionais_: *${states.addFilling.join(
            " e "
          )} - ${formatPrice(valueAddFillings)}*`
        : ""
    }

    ${
      states.addFilling.length == 1
        ? `%0a_Recheio adicional_: *${states.addFilling.slice(
            0
          )} - ${formatPrice(valueAddFillings)}*`
        : ""
    }
      
    %0a______________________________
    %0a_Data prevista para retirada do bolo_: *${userForeCastDate}*
    %0a_Hora prevista para retirada do bolo_: %0a*${states.time}hrs*
    %0a_Método de pagamento_: ${
      states.paymentMethod == "Credito" ? 
      `*${objectPaymentMethod[states.paymentMethod]}* %0a_Parcelas_: *${
        states.installments
      } de ${formatPrice(
        states.creditFlag === "MasterCard/Visa" 
          ? states.installmentsPrice.installments[states.installments]
          : states.installmentsPrice.installmentsEloAmexHiper[states.installments]
      )}* 
      
      %0a_Total_: *${
        formatPrice(
          states.creditFlag === "MasterCard/Visa" 
            ? states.installmentsPrice.totalPriceCreditCard[states.installments]
            : states.installmentsPrice.totalPriceCreditCardEloAmexHiper[states.installments]
        )
      }*`
      : 
      `*${objectPaymentMethod[states.paymentMethod]}* %0a%0a_Total_: *${formatPrice(states.total)}*`
    }

    ${states.paymentMethod == "Credito" ?  `%0a_Bandeira do cartão_: *${states.creditFlag}*` : ''} 
    ${states.textArea ? ` %0a%0a_Observações_:%0a*${states.textArea}*` : ""}
    `;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Botão de Fechar Modal" />
      </button>
      <div className="data-container">
        <h1>RESUMO DO PEDIDO:</h1>
        <hr />
        <h3>Nome do cliente: {states.name} </h3>
        {states.theme && <h3>Tema do bolo: {states.theme}</h3>}
        <h3>
          Data do pedido:
          {` ${todayDate}`}
        </h3>
        <h3>
          Horário do pedido:
          {` ${addZero(orderHour.hour)}:${addZero(orderHour.minutes)}:${addZero(
            orderHour.seconds
          )}`}
        </h3>
        {states.top != "Escolha a opção" && (
          <h3>Adicional de Topo: {states.top}.</h3>
        )}
        <h3>
          Diâmetro do bolo:
          {states.diameterState == null ? `` : ` ${states.diameterState}cm`}.
        </h3>
        <h3>
          Massas:{" "}
          {states.batterState[0] == null
            ? states.batterState.slice(1)
            : states.batterState.join(" e ")}
          .
        </h3>
        <h3>
          {states.filling[0] == null
            ? ` Recheio: ${states.filling.slice(1)}`
            : ` Recheios: ${states.filling.join(" e ")}`}
        </h3>
        <hr />
        <h3>
          <i>Subtotal:</i>
        </h3>
        <h3>
          Valor do diâmetro do bolo:{" "}
          {formatPrice(states.cakeSize[states.diameterState])}
        </h3>
        {states.addFilling[0] == undefined && states.addFilling[1] && (
          <>
            <h3>Recheio adicional: {states.addFilling.slice(1)}</h3>
          </>
        )}
          {states.batterState.includes("Massa Red Velvet") && (
          <h3>
            Valor adicional da massa:{" "}
            {formatPrice(states.aditionalBatterRedVelvet[states.diameterState])}
          </h3>
        )}
        {states.addFilling[0] && states.addFilling[1] && (
          <>
            <h3>Recheios adicionais: {states.addFilling.join(" e ")}</h3>
          </>
        )}
        {states.addFilling.length === 1 && (
          <>
            <h3>Recheio adicional: {states.addFilling.slice(0)}</h3>
          </>
        )}
        <h3> Valor adicional de recheio: {formatPrice(valueAddFillings)}</h3>
        {states.priceGlitter && (
          <>
            <h3>Adicional de glitter: {formatPrice(states.priceGlitter)}</h3>
          </>
        )}
        <hr />
        <h3>
          Data prevista para retirada: {userForeCastDate} às {states.time}hrs
        </h3>
        <h3>
          Método de pagamento: {objectPaymentMethod[states.paymentMethod]}
        </h3>
        {states.paymentMethod != "Credito" && (
          <h3>Valor Total: {formatPrice(states.total)}</h3>
        )}
        {states.paymentMethod == "Credito" && (
          <>
          {states.creditFlag === "MasterCard/Visa" &&(
            <>
            <h3>
              Parcelas: {states.installments} de{" "}
              {formatPrice(
                states.installmentsPrice.installments[states.installments]
              )}
            </h3>
            <h3>
              Valor Total:{" "}
              {formatPrice(states.installmentsPrice.totalPriceCreditCard[states.installments])}
            </h3>
            </>
          )}

      {states.creditFlag === "Elo/Amex/HiperCard" &&(
            <>
            <h3>
              Parcelas: {states.installments} de{" "}
              {formatPrice(
                states.installmentsPrice.installmentsEloAmexHiper[states.installments]
              )}
            </h3>
            <h3>
              Valor Total:{" "}
              {formatPrice(states.installmentsPrice.totalPriceCreditCardEloAmexHiper[states.installments])}
            </h3>
            </>
          )}
          </>
        )}
      </div>
      <button type="submit" onClick={handleSubmit}>
        Enviar Pedido
      </button>
    </Modal>
  );
}
