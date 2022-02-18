import React, { useState } from 'react'

export function ComponentCreditCardPrice({ states, formHandleInstallment }) {
  const [installments, setInstallments] = useState('')

  function handleInstallments(evt) {
    setInstallments(evt.target.value)
    formHandleInstallment(evt.target.value)
  }

  return (
    <>
      {states.paymentMethod == 'Credito' && (
        <section className="form-section-input-creditCard">
          <h2>Parcelar em quantas vezes?</h2>
          <br />
          <div className="container-label">
            <label>
              <select
                name="payment"
                id="payment"
                value={installments}
                onChange={handleInstallments}
              >
                <option>Escolha uma opção</option>
                <option value="1x">
                  1x de R$ {states.installmentsPrice.totalPriceCreditCard['1x']}{' '}
                  com juros de 2,9 % a.m total: R$
                  {states.installmentsPrice.totalPriceCreditCard['1x']}
                </option>
                <option value="2x">
                  2x de R$ {states.installmentsPrice.installments['2x']} com
                  juros de 4,59 % a.m. total: R${' '}
                  {states.installmentsPrice.totalPriceCreditCard['2x']}
                </option>
                <option value="3x">
                  3x de R$ {states.installmentsPrice.installments['3x']} com
                  juros de 5,23 % a.m. total: R${' '}
                  {states.installmentsPrice.totalPriceCreditCard['3x']}
                </option>
                <option value="4x">
                  4x de R$ {states.installmentsPrice.installments['4x']} com
                  juros de 5,87 % a.m. total: R${' '}
                  {states.installmentsPrice.totalPriceCreditCard['4x']}
                </option>
                <option value="5x">
                  5x de R$ {states.installmentsPrice.installments['5x']} com
                  juros de 6,51 % a.m. total: R${' '}
                  {states.installmentsPrice.totalPriceCreditCard['5x']}
                </option>
                <option value="6x">
                  6x de R$ {states.installmentsPrice.installments['6x']} com
                  juros de 7,15 % a.m. total: R${' '}
                  {states.installmentsPrice.totalPriceCreditCard['6x']}
                </option>
              </select>
            </label>
          </div>
        </section>
      )}
    </>
  )
}
