class ApiCep {
  static eventCep() {
    const cepForm = document.getElementById("cep-form");

    cepForm.addEventListener("submit", async function handleSubmit(event) {
      event.preventDefault();

      const input = cepForm[0];
      const inputValue = input.value;

      const response = await fetch(
        `https://viacep.com.br/ws/${inputValue}/json`
      )
        .then((res) => res.json())
        .catch(() => {});
      ApiCep.criarCardCep(response);
    });
  }
  static criarCardCep(cep) {
    const result = document.querySelector("#result");
    const logradouro = document.createElement("p");
    const bairro = document.createElement("p");
    const uf = document.createElement("p");

    logradouro.innerText = `Logradouro: ${cep.logradouro}`;
    bairro.innerText = `Bairro: ${cep.bairro}`;
    uf.innerText = `UF: ${cep.uf}`;

    result.append(logradouro, bairro, uf);
  }
}
ApiCep.eventCep();
