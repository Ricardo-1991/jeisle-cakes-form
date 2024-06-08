import "../RenderGlitter/StylesRenderGlitter.css";

export function RenderGlitter({ states, clickCheckBox }) {
  function handleChangeGlitter(evt) {
    const isChecked = evt.target.checked;
    isChecked ? clickCheckBox(Number(evt.target.value)) : clickCheckBox(null);
  }

  return (
    <>
      {states.diameterState === "15" && (
        <>
          <section className="form-section-glitter">
            <h2>Adicionar Glitter?</h2>
            <div className="container-label">
              <label>
                <input
                  type="checkbox"
                  name="glitter"
                  onChange={handleChangeGlitter}
                  value="15"
                />
                <span> - 15cm --------------------------- R$15,00</span>
              </label>
            </div>
          </section>
        </>
      )}

      {states.diameterState === "20" && (
        <>
          <section className="form-section-glitter">
            <h2>Adicionar Glitter?</h2>
            <div className="container-label">
              <label>
                <input
                  type="checkbox"
                  name="glitter"
                  onChange={handleChangeGlitter}
                  value="20"
                />
                <span> - 20cm --------------------------- R$20,00</span>
              </label>
            </div>
          </section>
        </>
      )}

      {states.diameterState === "25" && (
        <>
          <section className="form-section-glitter">
            <h2>Adicionar Glitter?</h2>
            <div className="container-label">
              <label>
                <input
                  type="checkbox"
                  name="glitter"
                  onChange={handleChangeGlitter}
                  value="25"
                />
                <span> - 25cm --------------------------- R$25,00</span>
              </label>
            </div>
          </section>
        </>
      )}

      {states.diameterState === "30" && (
        <>
          <section className="form-section-glitter">
            <h2>Adicionar Glitter?</h2>
            <div className="container-label">
              <label>
                <input
                  type="checkbox"
                  name="glitter"
                  onChange={handleChangeGlitter}
                  value="30"
                />
                <span> - 30cm --------------------------- R$30,00</span>
              </label>
            </div>
          </section>
        </>
      )}
    </>
  );
}
