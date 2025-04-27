var categoriasPiso1 = {
  "-Selecione-": "",
  Mochilas: "img/pisos/1_1.jpg",
  "Ropa y Art. Deport.": "img/pisos/1_2.jpg",
  "Snack y Bebidas": "img/pisos/1_3.jpg",
};
var categoriasPiso2 = {
  "-Selecione-": "",
  Cafeterias: "img/pisos/2_1.jpg",
  "Hogar y Decoracion": "img/pisos/2_2.jpg",
  "Bazar y Juguetes": "img/pisos/2_3.jpg",
  Librería: "img/pisos/2_4.jpg",
};
var categoriasPiso3 = {
  "-Selecione-": "",
  Financiero: "img/pisos/3_1.jpg",
  "Casa de Cambio": "img/pisos/3_2.jpg",
};

document.getElementById("pisos").addEventListener("change", function () {
  var pisos = document.getElementsByClassName("floor-images");
  for (var i = 0; i < pisos.length; i++) {
    pisos[i].style.display = "none";
  }
  var selectedPiso = this.value;
  document.getElementById(selectedPiso).style.display = "block";

  var categoriasDropdown = document.getElementById("categorias");
  categoriasDropdown.innerHTML = "";
  var categorias = [];
  if (selectedPiso === "piso1") {
    categorias = Object.keys(categoriasPiso1);
  } else if (selectedPiso === "piso2") {
    categorias = Object.keys(categoriasPiso2);
  } else if (selectedPiso === "piso3") {
    categorias = Object.keys(categoriasPiso3);
  }
  categorias.forEach(function (categoria) {
    var option = document.createElement("option");
    option.text = categoria;
    categoriasDropdown.add(option);
  });
});

document.getElementById("categorias").addEventListener("change", function () {
  var selectedCategoria = this.value;
  var selectedPiso = document.getElementById("pisos").value;
  var productoImage;
  if (selectedPiso === "piso1") {
    productoImage = categoriasPiso1[selectedCategoria];
  } else if (selectedPiso === "piso2") {
    productoImage = categoriasPiso2[selectedCategoria];
  } else if (selectedPiso === "piso3") {
    productoImage = categoriasPiso3[selectedCategoria];
  }
  var productImageElement = document.getElementById(selectedPiso + "-producto");
  productImageElement.src = productoImage;
  productImageElement.style.display = "block";
});
