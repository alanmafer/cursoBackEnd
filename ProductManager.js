class ProductManager {
    constructor() {
      this.products = [];
    }
  
    // Método addProduct()
    addProduct(producto) {
      if (
        producto.title &&
        producto.description &&
        producto.price &&
        producto.thumbnail &&
        producto.code &&
        producto.stock
      ) {
        const codigoRepetido = (prod) => prod.code === producto.code;
        if (!this.products.some(codigoRepetido)) {
          this.products.push(producto);
        } else {
          console.log(
            `${producto.title}" tem um código "${producto.code}" ja existente. \n`
          );
        }
      } else {
        console.log(
          `produto "${producto.title}" não tem todos os campos.\n`
        );
      }
    }
    // Método getProducts()
    getProducts() {
      console.log("\ngetProducts()\nLista de produtos: \n", this.products);
    }
  
    // Método getProductsById()
    getProductById(paramId) {
      const prodBuscado = this.products.find((disco) => disco.id === paramId);
      if (!prodBuscado) {
        console.log(
          "\ngetProductsById()\nNenhum produto encontrado com o ID: " +
            paramId +
            "\n"
        );
      } else {
        console.log(
          "\ngetProductsById()\nProduto pesquisado por ID: " + paramId + "\n",
          prodBuscado
        );
      }
    }
  }
  
  export { ProductManager };