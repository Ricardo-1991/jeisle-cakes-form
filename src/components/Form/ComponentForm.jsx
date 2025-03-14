import React, { useState, useRef } from "react";
import "../Form/FormStyle.css";
import avatar from "../../images/avatar-jeisle.jpeg";
import balaoMenu from "../../images/balao-menu.png";
import { BsExclamationTriangleFill, BsFileArrowDown } from "react-icons/bs";
import { GiStrawberry } from "react-icons/gi";
import { ResumeModal } from "../ResumeModal/ResumeModal";
import { PriceTableModal } from "../PriceTableModal/PriceTableModal";
import { RenderGlitter } from "../RenderGlitter/RenderGlitter";
import { ComponentCreditCardPrice } from "../ComponentCreditCardPrice/ComponentCreditCardPrice";
import AOS from "aos";
import "aos/dist/aos.css";
import { Footer } from "../Footer/Footer";

AOS.init();

const cakeSize = {
  15: 160,
  20: 220,
  25: 280,
  30: 340,
};

const aditionalBatterRedVelvet = {
  15: 10,
  20: 20,
  25: 30,
  30: 40,
}

const aditionalFilling = {
  Abacaxi: {
    15: 8,
    20: 10,
    25: 14,
    30: 16,
  },

  Ameixa: {
    15: 8,
    20: 10,
    25: 14,
    30: 16,
  },

  "Limão Siciliano": {
    15: 5,
    20: 8,
    25: 10,
    30: 12,
  },

  Maracujá: {
    15: 5,
    20: 8,
    25: 10,
    30: 12,
  },

  Morango: {
    15: 15,
    20: 30,
    25: 45,
    30: 60,
  },

  Nozes: {
    15: 7,
    20: 14,
    25: 21,
    30: 28,
  },

  Ovomaltine: {
    15: 7,
    20: 14,
    25: 21,
    30: 28,
  },

  Oreo: {
    15: 8,
    20: 16,
    25: 24,
    30: 32,
  },
  "Brigadeiro de Castanha": {
    15: 7,
    20: 14,
    25: 21,
    30: 28,
  },

  "Brigadeiro de Nutella": {
    15: 10,
    20: 20,
    25: 30,
    30: 40,
  },

  "Brigadeiro de Morango": {
    15: 5,
    20: 10,
    25: 15,
    30: 20,
  },

  "Brigadeiro Gourmet": {
    15: 5,
    20: 10,
    25: 15,
    30: 20,
  },
  "Brigadeiro c/ Chocolate Branco": {
    15: 5,
    20: 10,
    25: 15,
    30: 20,
  }
};

export function ComponentForm() {
  const inputName = useRef(false);
  const inputDate = useRef(false);
  const inputTime = useRef(false);
  const inputDiameter = useRef(false);
  const inputBatter = useRef(false);
  const inputFilling = useRef(false);
  const inputTop = useRef(false);

  const [dateForeCast, setDateForecast] = useState(null);

  const [name, setName] = useState("");
  const [theme, setTheme] = useState("");
  const [textArea, setTextArea] = useState("");
  const [top, setTop] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Escolha uma opção");
  const [time, setTime] = useState(null);

  const [diameterState, setDiameter] = useState(null);
  const [batterState, setBatterState] = useState([null, null]);
  const [filling, setFilling] = useState([]);
  const [addFilling, setAddFilling] = useState([]);
  const [installments, setInstallments] = useState("");
  const [creditFlag, setCreditFlag] = useState("MasterCard/Visa");

  const [handleResumeModal, setHandleResumeModal] = useState(false);
  const [handlePriceTableModal, setHandlePriceTableModal] = useState(false);

  const [priceGlitter, setPriceGlitter] = useState(null);

  // Modal Resumo Pedido
  function handleOpenResumeModal() {
    if (name == "") {
      alert("Digite o seu nome antes de prosseguir.");
      inputDiameter.current.focus();
      return false;
    } else if (top == ""){
      alert("Selecione se o bolo acompanhará um topo ou não.");
      inputTop.current.focus();
      return false;
    } else if (dateForeCast == null) {
      alert("Selecione uma data que deseja para a retirada do bolo.");
      inputDate.current.focus();
      return false;
    } else if (time == null) {
      alert("Selecione um horário que deseja para a retirada do bolo.");
      inputTime.current.focus();
      return false;
    } else if (diameterState == null) {
      alert("Selecione pelo menos um diâmetro de bolo.");
      inputDiameter.current.focus();
      return false;
    } else if (batterState[0] == null && batterState[1] == null) {
      alert("Selecione pelo menos uma massa de bolo");
      inputBatter.current.focus();
      return false;
    } else if (filling[0] == null && filling[1] == null) {
      alert("Selecione pelo menos um recheio");
      inputFilling.current.focus();
      return false;
    } else if (paymentMethod == "Escolha uma opção") {
      alert("Selecione pelo menos um método de pagamento");
      return false;
    } else if (
      (paymentMethod == "Credito" && installments == "") ||
      (paymentMethod == "Credito" && installments == "Escolha uma opção")
    ) {
      alert(
        "Caso selecione a opção de pagamento Crédito, selecione ao menos uma parcela ou outro método de pagamento."
      );
      setInstallments("");
      return false;
    }
    setHandleResumeModal(true);
  }

  function handleCloseResumeModal() {
    setFilling([]);
    setAddFilling([]);
    setHandleResumeModal(false);
  }
  //------ //

  function handleOpenPriceTableModal() {
    setHandlePriceTableModal(true);
  }

  function handleClosePriceTableModal() {
    setHandlePriceTableModal(false);
  }

  //Estado diâmetros do bolo
  function changeDiameter(evt) {
    setDiameter(evt.target.value);
  }

  //Estado Massas de Bolo
  function changeBatter(evt) {
    if (batterState.find((val) => val == evt.target.value)) {
      setBatterState(batterState.filter((val) => val != evt.target.value));
    } else {
      setBatterState([batterState[1], evt.target.value]);
    }
  }

  // Estado Recheios + Estado Recheios Adicionais (auxiliar)
  function changeFilling(evt) {
    if (evt.target.name == "recheioAdd") {
      if (addFilling.find((val) => val == evt.target.value)) {
        setAddFilling(addFilling.filter((val) => val != evt.target.value));
      } else {
        setAddFilling([addFilling[1], evt.target.value]);
      }
    }

    if (filling[0] && filling[1] && evt.target.name == "recheio") {
      addFilling.shift();
    }

    //Verifica se o valor já existe nos dois selecionados
    if (filling.find((val) => val == evt.target.value)) {
      // Caso existe, filtra tudo que não seja o valor selecionado ( utilizado para desmarcar )
      setFilling(filling.filter((val) => val != evt.target.value));
    } else {
      // Caso seja um valor novo, move  o ultimo valor para o inicio e adiciona o valor novo no fim da estrutura
      setFilling([filling[1], evt.target.value]);
    }
  }

  function handlePriceGlitter(price) {
    setPriceGlitter(price);
  }

  const allFillings = filling.filter((filling) => filling !== undefined);
  const onlyAddFilling = filling.filter(
    (filling, index) => filling === addFilling[index] && filling !== undefined
  );

  const findOnlyAddFilling = allFillings.find(
    (filling, index) => filling === onlyAddFilling[index]
  );

  function totalPriceOfCake() {
    const cakeValue = Number(cakeSize[diameterState]);
    const valueFillings = filling.reduce((acumulator, currFilling) => {
      const currentValueFillings = aditionalFilling[currFilling]
        ? aditionalFilling[currFilling][diameterState]
        : 0;
      if (allFillings.length === 1 && findOnlyAddFilling) {
        return acumulator + currentValueFillings;
      }

      if (allFillings.length === 2 && currFilling === "Morango") {
        return acumulator + currentValueFillings;
      } else {
        return acumulator + currentValueFillings / 2;
      }
    }, 0);

    const redVelvetExtra = batterState.includes("Massa Red Velvet")
    ? aditionalBatterRedVelvet[diameterState] || 0
    : 0;

  const totalPrice = Number(cakeValue + valueFillings + redVelvetExtra + priceGlitter);
  return totalPrice;
  }

  let total = totalPriceOfCake();

  if (Number.isNaN(total)) {
    total = cakeSize[diameterState] + priceGlitter;
  }

  const installmentsPrice = {
    totalPriceCreditCardEloAmexHiper: {
      "1x": Number(total / (1 - (4.68/100))).toFixed(2),
      "2x": Number(total / (1 - (10.38/100))).toFixed(2),
      "3x": Number(total / (1 - (12.38/100))).toFixed(2),
      "4x": Number(total / (1 - (13.38/100))).toFixed(2),
      "5x": Number(total / (1 - (14.38/100))).toFixed(2),
      "6x": Number(total / (1 - (15.38/100))).toFixed(2),
      "7x": Number(total / (1 - (16.38/100))).toFixed(2),
      "8x": Number(total / (1 - (17.38/100))).toFixed(2),
      "9x": Number(total / (1 - (18.38/100))).toFixed(2),
      "10x": Number(total / (1 - (19.38/100))).toFixed(2),
      "11x": Number(total / (1 - (19.38/100))).toFixed(2), 
      "12x": Number(total / (1 - (19.38/100))).toFixed(2), 
    },

    installmentsEloAmexHiper: {
      "1x": Number(total / (1 - (4.68/100))),
      "2x": Number((total / (1 - (10.38/100))) / 2).toFixed(2),
      "3x": Number((total / (1 - (12.38/100))) / 3).toFixed(2),
      "4x": Number((total / (1 - (13.38/100))) / 4).toFixed(2),
      "5x": Number((total / (1 - (14.38/100))) / 5).toFixed(2),
      "6x": Number((total / (1 - (15.38/100))) / 6).toFixed(2),
      "7x": Number((total / (1 - (16.38/100))) / 7).toFixed(2),
      "8x": Number((total / (1 - (17.38/100))) / 8).toFixed(2),
      "9x": Number((total / (1 - (18.38/100))) / 9).toFixed(2),
      "10x": Number(((total / (1 - (19.38/100))) / 10)).toFixed(2),
      "11x": Number((total / (1 - (19.38/100))) / 11).toFixed(2),
      "12x": Number((total / (1 - (19.38/100))) / 12).toFixed(2)
    },

    totalPriceCreditCard: {
      "1x": Number(total / (1 - (3.49/100))).toFixed(2),
      "2x": Number(total / (1 - (8.99/100))).toFixed(2),
      "3x": Number(total / (1 - (10.99/100))).toFixed(2),
      "4x": Number(total / (1 - (11.99/100))).toFixed(2),
      "5x": Number(total / (1 - (12.99/100))).toFixed(2),
      "6x": Number(total / (1 - (13.99/100))).toFixed(2),
      "7x": Number(total / (1 - (14.99/100))).toFixed(2),
      "8x": Number(total / (1 - (15.99/100))).toFixed(2),
      "9x": Number(total / (1 - (16.99/100))).toFixed(2),
      "10x": Number(total / (1 - (17.99/100))).toFixed(2),
      "11x": Number(total / (1 - (17.99/100))).toFixed(2), 
      "12x": Number(total / (1 - (17.99/100))).toFixed(2), 
    },

    installments: {
      "1x": Number(total / (1 - (3.49/100))),
      "2x": Number((total / (1 - (8.99/100))) / 2).toFixed(2),
      "3x": Number((total / (1 - (10.99/100))) / 3).toFixed(2),
      "4x": Number((total / (1 - (11.99/100))) / 4).toFixed(2),
      "5x": Number((total / (1 - (12.99/100))) / 5).toFixed(2),
      "6x": Number((total / (1 - (13.99/100))) / 6).toFixed(2),
      "7x": Number((total / (1 - (14.99/100))) / 7).toFixed(2),
      "8x": Number((total / (1 - (15.99/100))) / 8).toFixed(2),
      "9x": Number((total / (1 - (16.99/100))) / 9).toFixed(2),
      "10x": Number((total / (1 - (17.99/100))) / 10).toFixed(2),
      "11x": Number((total / (1 - (17.99/100))) / 11).toFixed(2),
      "12x": Number((total / (1 - (17.99/100))) / 12).toFixed(2)
    },
  };

  let oldTotal = total; 

  if(creditFlag === "MasterCard/Visa") {
    installments
      ? (total = installmentsPrice.totalPriceCreditCard[installments])
      : (total = oldTotal);
  } else if(creditFlag === "Elo/Amex/HiperCard") {
    installments
      ? (total = installmentsPrice.totalPriceCreditCardEloAmexHiper[installments])
      : (total = oldTotal);
  }

  if (installments === "Escolha uma opção") {
    total = oldTotal;
  }

  if (paymentMethod !== "Credito") {
    total = oldTotal;
  }

  function formHandleInstallment(handleInstallments) {
    setInstallments(handleInstallments);
  }

  function formHandleCreditFlag (handleCreditFlag){
    setCreditFlag(handleCreditFlag)
  }

  return (
    <>
      <div className="container-img">
        <img src={avatar} className="imagem-avatar" alt="imagem-avatar" />
        <img src={balaoMenu} className="imagem-balao" alt="" />
      </div>

      <form>
        <div className="form-container">
          <section
            className="alert-section"
            data-aos="fade-down"
            data-aos-duration="600"
          >
            <BsExclamationTriangleFill size={40} color="#db1d29" />
            <h3>ATENÇÃO:</h3>
            <h3>
              <u>Não fazemos entregas.</u>
            </h3>
          </section>
          <section className="form-section-input-text">
            <h2>Digite o seu nome</h2>
            <div className="container-label">
              <label>
                <input
                  type="text"
                  name="nome"
                  onChange={(evt) => setName(evt.target.value)}
                  placeholder="Digite seu nome..."
                  ref={inputName}
                />
              </label>
            </div>
          </section>

          <section
            className="form-section-input-text"
            data-aos="fade-down"
            data-aos-duration="600"
          >
            <h2>Deseja tematizar o bolo?</h2>
            <p>(Se sim, digite o tema do bolo)</p>
            <div className="container-label">
              <label>
                <input
                  type="text"
                  name="theme"
                  onChange={(evt) => setTheme(evt.target.value)}
                  placeholder="Digite aqui o tema do bolo..."
                />
              </label>
            </div>
          </section>

          <section
            className="form-section-input-select"
            data-aos="fade-down"
            data-aos-duration="600"
          >
            <h2>Adicionar Topo?</h2>
            <p>(Preço a combinar)</p>
            <br />
            <div className="container-label">
              <label>
                <select
                  name="topo"
                  id="topo"
                  ref={inputTop}
                  onChange={(evt) => setTop(evt.target.value)}
                >
                  <option>Escolha a opção</option>
                  <option>Sim</option>
                  <option>Não</option>
                </select>
              </label>
            </div>
          </section>

          <section
            className="form-section-input-date"
            data-aos="fade-down"
            data-aos-duration="600"
          >
            <h2>Para quando deseja a retirada do bolo?</h2>
            <p>(Escolha data e horário)</p>
            <div className="container-label">
              <label>
                <input
                  type="date"
                  name="date"
                  ref={inputDate}
                  onChange={(evt) => setDateForecast(evt.target.value)}
                />
              </label>
              <label>
                <input
                  type="time"
                  name="time"
                  ref={inputTime}
                  onChange={(evt) => setTime(evt.target.value)}
                />
              </label>
            </div>
          </section>

          <section
            role="group"
            aria-labelledby="checkbox-group"
            className="form-section-one"
            data-aos="fade-down"
            data-aos-duration="600"
          >
            <h2>Diâmetro do bolo</h2>
            <p>(Escolha somente uma opção)</p>
            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="tamanho"
                  onChange={changeDiameter}
                  checked={diameterState == 15}
                  value="15"
                  ref={inputDiameter}
                />
                <span> - 15cm --------------------------- R$160,00</span>
                <p>( 10 a 15 fatias )</p>
              </label>
            </div>

            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="tamanho"
                  onChange={changeDiameter}
                  checked={diameterState == 20}
                  value="20"
                />
                <span> - 20cm --------------------------- R$220,00 </span>
                <p>( 20 a 25 fatias )</p>
              </label>
            </div>

            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="tamanho"
                  onChange={changeDiameter}
                  checked={diameterState == 25}
                  value="25"
                />
                <span> - 25cm --------------------------- R$280,00</span>
                <p>( 35 a 40 fatias )</p>
              </label>
            </div>

            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="tamanho"
                  onChange={changeDiameter}
                  checked={diameterState == 30}
                  value="30"
                />
                <span> - 30cm --------------------------- R$340,00</span>
                <p>( 55 a 60 fatias )</p>
              </label>
            </div>
          </section>

          <RenderGlitter
            states={{ diameterState }}
            clickCheckBox={handlePriceGlitter}
          />

          {/* --- */}
          <div
            className="warning-text"
            data-aos="fade-down"
            data-aos-duration="600"
          >
            <p>Selecione Massas e Recheios </p>
            <br />
            <h2>
              OBS:<u> Máximo dois de cada</u>
            </h2>
            <br />
            <BsFileArrowDown size={30} color="green" />
          </div>
          <section
            role="group"
            className="form-section-two"
            aria-labelledby="checkbox-group"
            data-aos="fade-down"
            data-aos-duration="600"
          >
            <h2>Massas</h2>
            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="massa"
                  value="Massa Branca"
                  ref={inputBatter}
                  className="checkbox"
                  onChange={changeBatter}
                  checked={
                    batterState.find((val) => val == "Massa Branca")
                      ? true
                      : false
                  }
                />
                <span>- Massa Branca</span>
              </label>
            </div>

            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="massa"
                  value="Massa Chocolate"
                  onChange={changeBatter}
                  checked={
                    batterState.find((val) => val == "Massa Chocolate")
                      ? true
                      : false
                  }
                />
                <span>- Massa Chocolate</span>
              </label>
            </div>

            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="massa"
                  value="Massa Baunilha"
                  onChange={changeBatter}
                  checked={
                    batterState.find((val) => val == "Massa Baunilha")
                      ? true
                      : false
                  }
                />
                <span>- Massa Baunilha</span>
              </label>
            </div>

            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="massa"
                  value="Massa Mesclada"
                  onChange={changeBatter}
                  checked={
                    batterState.find((val) => val == "Massa Mesclada")
                      ? true
                      : false
                  }
                />
                <span>- Massa Mesclada</span>
                <p>( Massa branca misturada com chocolate )</p>
              </label>
            </div>

            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="massa"
                  value="Massa Formigueiro"
                  onChange={changeBatter}
                  checked={
                    batterState.find((val) => val == "Massa Formigueiro")
                      ? true
                      : false
                  }
                />
                <span>- Massa Formigueiro</span>
                <p> ( Massa branca misturada com granulado )</p>
              </label>
            </div>

            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="massa"
                  value="Massa Mista"
                  onChange={changeBatter}
                  checked={
                    batterState.find((val) => val == "Massa Mista")
                      ? true
                      : false
                  }
                />
                <span>- Massa Mista</span>
                <p>( Massa branca e massa de chocolate/separadas )</p>
              </label>
            </div>
          </section>

          {/* --- */}

          <section
            role="group"
            className="form-section-two"
            aria-labelledby="checkbox-group"
            data-aos="fade-down"
            data-aos-duration="600"
          >
            <h2>Massas com valor adicional</h2>
             <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="massa"
                  value="Massa Red Velvet"
                  onChange={changeBatter}
                  checked={
                    batterState.find((val) => val == "Massa Red Velvet")
                      ? true
                      : false
                  }
                />
                <span>- Massa Red Velvet</span>
              </label>
            </div>

          </section>

          <section
            role="group"
            className="form-section-three "
            aria-labelledby="checkbox-group"
            data-aos="fade-down"
            data-aos-duration="600"
          >
            <h2>Recheios</h2>
            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="recheio"
                  value="Amendoim"
                  ref={inputFilling}
                  onChange={changeFilling}
                  checked={
                    filling.find((val) => val == "Amendoim") ? true : false
                  }
                />
                <span> - Amendoim</span>
              </label>
            </div>
            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="recheio"
                  value="Brigadeiro"
                  onChange={changeFilling}
                  checked={
                    filling.find((val) => val == "Brigadeiro") ? true : false
                  }
                />
                <span> - Brigadeiro</span>
              </label>
            </div>
            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="recheio"
                  value="Brigadeiro Branco"
                  onChange={changeFilling}
                  checked={
                    filling.find((val) => val == "Brigadeiro Branco")
                      ? true
                      : false
                  }
                />
                <span> - Brigadeiro Branco</span>
              </label>
            </div>
            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="recheio"
                  value="Brigadeiro de Café"
                  onChange={changeFilling}
                  checked={
                    filling.find((val) => val == "Brigadeiro de Café")
                      ? true
                      : false
                  }
                />
                <span> - Brigadeiro de Café</span>
              </label>
            </div>
            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="recheio"
                  value="Brigadeiro de Churros"
                  onChange={changeFilling}
                  checked={
                    filling.find((val) => val == "Brigadeiro de Churros")
                      ? true
                      : false
                  }
                />
                <span> - Brigadeiro de Churros</span>
              </label>
            </div>

            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="recheio"
                  value="Beijinho"
                  onChange={changeFilling}
                  checked={
                    filling.find((val) => val == "Beijinho") ? true : false
                  }
                />
                <span> - Beijinho</span>
              </label>
            </div>
            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="recheio"
                  value="Doce de Leite"
                  onChange={changeFilling}
                  checked={
                    filling.find((val) => val == "Doce de Leite") ? true : false
                  }
                />
                <span> - Doce de Leite</span>
              </label>
            </div>
            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="recheio"
                  value="Ninho"
                  onChange={changeFilling}
                  checked={filling.find((val) => val == "Ninho") ? true : false}
                />
                <span> - Ninho</span>
              </label>
            </div>
            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="recheio"
                  value="4 Leites"
                  onChange={changeFilling}
                  checked={
                    filling.find((val) => val == "4 Leites") ? true : false
                  }
                />
                <span> - 4 Leites</span>
              </label>
            </div>
            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="recheio"
                  value="Caramelo"
                  onChange={changeFilling}
                  checked={
                    filling.find((val) => val == "Caramelo") ? true : false
                  }
                />
                <span> - Caramelo</span>
              </label>
            </div>
            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="recheio"
                  value="Queijo"
                  onChange={changeFilling}
                  checked={
                    filling.find((val) => val == "Queijo") ? true : false
                  }
                />
                <span> - Queijo</span>
              </label>
            </div>
            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="recheio"
                  value="Romeu e Julieta"
                  onChange={changeFilling}
                  checked={
                    filling.find((val) => val == "Romeu e Julieta")
                      ? true
                      : false
                  }
                />
                <span> - Romeu e Julieta</span>
              </label>
            </div>
            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="recheio"
                  value="Goiabada"
                  onChange={changeFilling}
                  checked={
                    filling.find((val) => val == "Goiabada") ? true : false
                  }
                />
                <span> - Goiabada</span>
              </label>
            </div>
          </section>

          {/*---*/}

          <section
            role="group"
            className="form-section-four"
            aria-labelledby="checkbox-group"
            data-aos="fade-down"
            data-aos-duration="600"
          >
            <h2>Recheios com valor adicional</h2>
            <div>
              <button
                type="button"
                className="button-price-modal"
                onClick={handleOpenPriceTableModal}
              >
                Clique aqui para a tabela de preços
              </button>
            </div>
            <div className="fruits-section">
              <div className="fruits-header">
                <h2>C/ Frutas</h2>
                <div>
                  <GiStrawberry size={30} color="#FF0000" />
                </div>
              </div>

              <div className="containerLabel">
                <label>
                  <input
                    type="checkbox"
                    name="recheioAdd"
                    value="Abacaxi"
                    onChange={changeFilling}
                    checked={
                      filling.find((val) => val == "Abacaxi") ? true : false
                    }
                  />
                  <span> - Abacaxi</span>
                </label>
              </div>

              <div className="containerLabel">
                <label>
                  <input
                    type="checkbox"
                    name="recheioAdd"
                    value="Ameixa"
                    onChange={changeFilling}
                    checked={
                      filling.find((val) => val == "Ameixa") ? true : false
                    }
                  />
                  <span> - Ameixa</span>
                </label>
              </div>

              <div className="containerLabel">
                <label>
                  <input
                    type="checkbox"
                    name="recheioAdd"
                    value="Limão Siciliano"
                    onChange={changeFilling}
                    checked={
                      filling.find((val) => val == "Limão Siciliano")
                        ? true
                        : false
                    }
                  />
                  <span> - Limão Siciliano</span>
                </label>
              </div>

              <div className="containerLabel">
                <label>
                  <input
                    type="checkbox"
                    name="recheioAdd"
                    value="Maracujá"
                    onChange={changeFilling}
                    checked={
                      filling.find((val) => val == "Maracujá") ? true : false
                    }
                  />
                  <span> - Maracujá</span>
                </label>
              </div>

              <div className="containerLabel">
                <label>
                  <input
                    type="checkbox"
                    name="recheioAdd"
                    value="Morango"
                    onChange={changeFilling}
                    checked={
                      filling.find((val) => val == "Morango") ? true : false
                    }
                  />
                  <span> - Morango fresco (pedaços)</span>
                </label>
              </div>
            </div>

            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="recheioAdd"
                  value="Brigadeiro de Castanha"
                  onChange={changeFilling}
                  checked={
                    filling.find((val) => val == "Brigadeiro de Castanha")
                      ? true
                      : false
                  }
                />
                <span> - Brigadeiro de Castanha</span>
              </label>
            </div>

            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="recheioAdd"
                  value="Brigadeiro de Nutella"
                  onChange={changeFilling}
                  checked={
                    filling.find((val) => val == "Brigadeiro de Nutella")
                      ? true
                      : false
                  }
                />
                <span> - Brigadeiro de Nutella</span>
              </label>
            </div>

            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="recheioAdd"
                  value="Brigadeiro de Morango"
                  onChange={changeFilling}
                  checked={
                    filling.find((val) => val == "Brigadeiro de Morango")
                      ? true
                      : false
                  }
                />
                <span> - Brigadeiro de Morango</span>
              </label>
            </div>

            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="recheioAdd"
                  value="Brigadeiro Gourmet"
                  onChange={changeFilling}
                  checked={
                    filling.find((val) => val == "Brigadeiro Gourmet")
                      ? true
                      : false
                  }
                />
                <span> - Brigadeiro Gourmet</span>
              </label>
            </div>

            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="recheioAdd"
                  value="Nozes"
                  onChange={changeFilling}
                  checked={filling.find((val) => val == "Nozes") ? true : false}
                />
                <span> - Nozes</span>
              </label>
            </div>

            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="recheioAdd"
                  value="Brigadeiro c/ Chocolate Branco"
                  onChange={changeFilling}
                  checked={
                    filling.find(
                      (val) => val == "Brigadeiro c/ Chocolate Branco"
                    )
                      ? true
                      : false
                  }
                />
                <span> - Brigadeiro c/ Chocolate Branco</span>
              </label>
            </div>

            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="recheioAdd"
                  value="Ovomaltine"
                  onChange={changeFilling}
                  checked={
                    filling.find((val) => val == "Ovomaltine") ? true : false
                  }
                />
                <span> - Ovomaltine</span>
              </label>
            </div>
            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="recheioAdd"
                  value="Oreo"
                  onChange={changeFilling}
                  checked={filling.find((val) => val == "Oreo") ? true : false}
                />
                <span> - Oreo</span>
              </label>
            </div>
          </section>

          <section
            className="form-section-input-select"
            data-aos="fade-down"
            data-aos-duration="600"
          >
            <h2>Método de pagamento</h2>
            <br />
            <div className="container-label">
              <label>
                <select
                  name="payment"
                  id="payment"
                  onChange={(evt) => setPaymentMethod(evt.target.value)}
                >
                  <option>Escolha uma opção</option>
                  <option value="Avista">À vista</option>
                  <option value="Pix">Pix</option>
                  <option value="Debito">Débito</option>
                  <option value="Credito">Cartão de crédito</option>
                </select>
              </label>
            </div>
          </section>

          <ComponentCreditCardPrice
            states={{ paymentMethod, creditFlag, total, installmentsPrice }}
            formHandleInstallment={formHandleInstallment}
            formHandleCreditFlag={formHandleCreditFlag}
          />

          <section
            className="form-section-input-text"
            data-aos="fade-down"
            data-aos-duration="600"
          >
            <h2>Deseja constar alguma observação?</h2>
            <p>(Constará no envio final do pedido)</p>
            <br />
            <div className="container-label">
              <label>
                <textarea
                  value={textArea}
                  onChange={(evt) => setTextArea(evt.target.value)}
                ></textarea>
              </label>
            </div>
          </section>
        </div>
        <div className="form-button">
          <input
            type="button"
            value="Resumo do Pedido"
            className="button-resume-modal"
            onClick={handleOpenResumeModal}
          />
        </div>
      </form>
      <ResumeModal
        isOpen={handleResumeModal}
        onRequestClose={handleCloseResumeModal}
        states={{
          diameterState,
          batterState,
          filling,
          addFilling,
          name,
          theme,
          time,
          top,
          textArea,
          dateForeCast,
          aditionalFilling,
          aditionalBatterRedVelvet,
          cakeSize,
          priceGlitter,
          paymentMethod,
          total,
          installmentsPrice,
          installments,
          creditFlag
        }}
        allFillings={allFillings}
        findOnlyAddFilling={findOnlyAddFilling}
      />
      <PriceTableModal
        isOpen={handlePriceTableModal}
        onRequestClose={handleClosePriceTableModal}
      />
      <Footer total={total} />
    </>
  );
}
