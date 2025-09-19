const anuncios = [
  {
    id: 1,
    tipo: "Carro",
    cidade: "Londrina",
    modelo: "Fiat Argo 2022",
    preco: "R$ 58.900",
    imagem: "imagens/carro1.jpg"
  },
  {
    id: 2,
    tipo: "Carro",
    cidade: "Maringá",
    modelo: "Honda Civic 2020",
    preco: "R$ 89.000",
    imagem: "imagens/carro2.jpg"
  }
];

function renderizar(lista) {
  const container = document.getElementById("anuncios");
  container.innerHTML = "";
  lista.forEach(item => {
    container.innerHTML += `
      <div class="card">
        <img src="${item.imagem}" alt="${item.modelo}" />
        <h3>${item.modelo}</h3>
        <p>${item.preco}</p>
        <span>${item.cidade}</span><br/>
        <a href="anuncio.html?id=${item.id}">Ver detalhes</a>
      </div>
    `;
  });
}

function filtrar() {
  const tipo = document.getElementById("tipoFiltro").value;
  const cidade = document.getElementById("cidadeFiltro").value;
  const busca = document.getElementById("busca").value.toLowerCase();

  const filtrados = anuncios.filter(item => {
    return (
      (tipo === "" || item.tipo === tipo) &&
      (cidade === "" || item.cidade === cidade) &&
      item.modelo.toLowerCase().includes(busca)
    );
  });

  renderizar(filtrados);
}

document.getElementById("busca").addEventListener("input", filtrar);
window.onload = () => renderizar(anuncios);