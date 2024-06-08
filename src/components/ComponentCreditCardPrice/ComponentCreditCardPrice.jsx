import React, { useRef, useState } from "react";
import { SiMastercard } from "react-icons/si";
import { FaCcAmex } from "react-icons/fa";

export function ComponentCreditCardPrice({ states, formHandleInstallment, formHandleCreditFlag }) {
  const [installments, setInstallments] = useState("");
  const selectedCreditFlag = useRef("MasterCard/Visa");

  function handleInstallments(evt) {
    setInstallments(evt.target.value);
    formHandleInstallment(evt.target.value);
  }

  function handleRadioChangeCreditFlag(evt) {
    selectedCreditFlag.current = evt.target.value;
    formHandleCreditFlag(selectedCreditFlag.current);
  };

  function formatPrice(price) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  }

  return (
    <>
      {states.paymentMethod == "Credito" && (

        <>
          <section className="form-section-input-creditCard inputCreditFlag">
            <div>
            <SiMastercard color="#FF6408" size={21}/>
              <label htmlFor="option1">MasterCard/Visa</label>
              <input type="radio" id="option1" value="MasterCard/Visa" defaultChecked onChange={handleRadioChangeCreditFlag} name="paymentcard" />
            </div>
          <div>
          <FaCcAmex color="#0874D1" size={21}/>
            <label htmlFor="option2">Elo/Amex/HiperCard</label>
            <input type="radio"  id="option2" value="Elo/Amex/HiperCard" onChange={handleRadioChangeCreditFlag} name="paymentcard" />
          </div>
          </section>
          <section className="form-section-input-creditCard">
            <h2>Parcelar em quantas vezes?</h2>
            <br />
            <div>
              <select
                name="payment"
                id="payment"
                value={installments}
                onChange={handleInstallments}
              >
  <option>Escolha uma opção</option>
  {selectedCreditFlag.current === "MasterCard/Visa" &&
    <>
    <option value="1x">
      1x de {formatPrice(states.installmentsPrice.installments["1x"])}{" "}
      com juros de 3,49% a.m. total:{" "}
      {formatPrice(states.installmentsPrice.totalPriceCreditCard["1x"])}
    </option>
    <option value="2x">
      2x de {formatPrice(states.installmentsPrice.installments["2x"])}{" "}
      com juros de 8,99% a.m. total:{" "}
      {formatPrice(states.installmentsPrice.totalPriceCreditCard["2x"])}
    </option>
    <option value="3x">
      3x de {formatPrice(states.installmentsPrice.installments["3x"])}{" "}
      com juros de 10,99% a.m. total:{" "}
      {formatPrice(states.installmentsPrice.totalPriceCreditCard["3x"])}
    </option>
    <option value="4x">
      4x de {formatPrice(states.installmentsPrice.installments["4x"])}{" "}
      com juros de 11,99% a.m. total:{" "}
      {formatPrice(states.installmentsPrice.totalPriceCreditCard["4x"])}
    </option>
    <option value="5x">
      5x de {formatPrice(states.installmentsPrice.installments["5x"])}{" "}
      com juros de 12,99% a.m. total:{" "}
      {formatPrice(states.installmentsPrice.totalPriceCreditCard["5x"])}
    </option>
    <option value="6x">
      6x de {formatPrice(states.installmentsPrice.installments["6x"])}{" "}
      com juros de 13,99% a.m. total:{" "}
      {formatPrice(states.installmentsPrice.totalPriceCreditCard["6x"])}
    </option>
    <option value="7x">
      7x de {formatPrice(states.installmentsPrice.installments["7x"])}{" "}
      com juros de 14,99% a.m. total:{" "}
      {formatPrice(states.installmentsPrice.totalPriceCreditCard["7x"])}
    </option>
    <option value="8x">
      8x de {formatPrice(states.installmentsPrice.installments["8x"])}{" "}
      com juros de 15,99% a.m. total:{" "}
      {formatPrice(states.installmentsPrice.totalPriceCreditCard["8x"])}
    </option>
    <option value="9x">
      9x de {formatPrice(states.installmentsPrice.installments["9x"])}{" "}
      com juros de 16,99% a.m. total:{" "}
      {formatPrice(states.installmentsPrice.totalPriceCreditCard["9x"])}
    </option>
    <option value="10x">
      10x de {formatPrice(states.installmentsPrice.installments["10x"])}{" "}
      com juros de 17,99% a.m. total:{" "}
      {formatPrice(states.installmentsPrice.totalPriceCreditCard["10x"])}
    </option>
    <option value="11x">
      11x de {formatPrice(states.installmentsPrice.installments["11x"])}{" "}
      com juros de 17,99% a.m. total:{" "}
      {formatPrice(states.installmentsPrice.totalPriceCreditCard["11x"])}
    </option>
    <option value="12x">
      12x de {formatPrice(states.installmentsPrice.installments["12x"])}{" "}
      com juros de 17,99% a.m. total:{" "}
      {formatPrice(states.installmentsPrice.totalPriceCreditCard["12x"])}
    </option>
    </>
  }


{selectedCreditFlag.current === "Elo/Amex/HiperCard" &&
    <>
    <option value="1x">
      1x de {formatPrice(states.installmentsPrice.installmentsEloAmexHiper["1x"])}{" "}
      com juros de 4,68% a.m. total:{" "}
      {formatPrice(states.installmentsPrice.totalPriceCreditCardEloAmexHiper["1x"])}
    </option>
    <option value="2x">
      2x de {formatPrice(states.installmentsPrice.installmentsEloAmexHiper["2x"])}{" "}
      com juros de 10,38% a.m. total:{" "}
      {formatPrice(states.installmentsPrice.totalPriceCreditCardEloAmexHiper["2x"])}
    </option>
    <option value="3x">
      3x de {formatPrice(states.installmentsPrice.installmentsEloAmexHiper["3x"])}{" "}
      com juros de 12,38% a.m. total:{" "}
      {formatPrice(states.installmentsPrice.totalPriceCreditCardEloAmexHiper["3x"])}
    </option>
    <option value="4x">
      4x de {formatPrice(states.installmentsPrice.installmentsEloAmexHiper["4x"])}{" "}
      com juros de 13,38% a.m. total:{" "}
      {formatPrice(states.installmentsPrice.totalPriceCreditCardEloAmexHiper["4x"])}
    </option>
    <option value="5x">
      5x de {formatPrice(states.installmentsPrice.installmentsEloAmexHiper["5x"])}{" "}
      com juros de 14,38% a.m. total:{" "}
      {formatPrice(states.installmentsPrice.totalPriceCreditCardEloAmexHiper["5x"])}
    </option>
    <option value="6x">
      6x de {formatPrice(states.installmentsPrice.installmentsEloAmexHiper["6x"])}{" "}
      com juros de 15,38% a.m. total:{" "}
      {formatPrice(states.installmentsPrice.totalPriceCreditCardEloAmexHiper["6x"])}
    </option>
    <option value="7x">
      7x de {formatPrice(states.installmentsPrice.installmentsEloAmexHiper["7x"])}{" "}
      com juros de 16,38% a.m. total:{" "}
      {formatPrice(states.installmentsPrice.totalPriceCreditCardEloAmexHiper["7x"])}
    </option>
    <option value="8x">
      8x de {formatPrice(states.installmentsPrice.installmentsEloAmexHiper["8x"])}{" "}
      com juros de 17,38% a.m. total:{" "}
      {formatPrice(states.installmentsPrice.totalPriceCreditCardEloAmexHiper["8x"])}
    </option>
    <option value="9x">
      9x de {formatPrice(states.installmentsPrice.installmentsEloAmexHiper["9x"])}{" "}
      com juros de 18,38% a.m. total:{" "}
      {formatPrice(states.installmentsPrice.totalPriceCreditCardEloAmexHiper["9x"])}
    </option>
    <option value="10x">
      10x de {formatPrice(states.installmentsPrice.installmentsEloAmexHiper["10x"])}{" "}
      com juros de 19,38% a.m. total:{" "}
      {formatPrice(states.installmentsPrice.totalPriceCreditCardEloAmexHiper["10x"])}
    </option>
    <option value="11x">
      11x de {formatPrice(states.installmentsPrice.installmentsEloAmexHiper["11x"])}{" "}
      com juros de 19,38% a.m. total:{" "}
      {formatPrice(states.installmentsPrice.totalPriceCreditCardEloAmexHiper["11x"])}
    </option>
    <option value="12x">
      12x de {formatPrice(states.installmentsPrice.installmentsEloAmexHiper["12x"])}{" "}
      com juros de 19,38% a.m. total:{" "}
      {formatPrice(states.installmentsPrice.totalPriceCreditCardEloAmexHiper["12x"])}
    </option>
    </>
  }
              </select>
            </div>
          </section>
        </>
      )}
    </>
  );
}
