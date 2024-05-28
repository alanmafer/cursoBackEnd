const fs = require("fs");

class ProductManager {
    constructor(path) {
        this.path = path;
    }

    async create(data){
        const {title, description, price, thumbnail, code, stock } = data;
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            throw new Error ("Todos os campos são obrigatórios!")
        }

        const produtos = await getJsonFromFile(this.path);
        const newProduto = {
            id: produtos.length + 1,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };

        produtos.push(newProduto);

        await saveJsonInFile(this.path, produtos);
        console.log("Criou o produto corretamente.");

    }
    
    getProdutos(){
        return getJsonFromFile(this.path);
    }

    async getProdutosById(index){
        const arrayProdutos = await getJsonFromFile(this.path);
        const prodBuscar = arrayProdutos.find((disco) => disco.id === index);
        if (!prodBuscar) {
            return (
                index
            );          
        }else {
            return (
                index + "/n", prodBuscar
            );
        }
    }

    async updateProduto(id, data) {
        const {title, description, price, thumbnail, code, stock} = data;
        const produtos = await getJsonFromFile(this.path);
        const index = produtos.findIndex((i) => i.id === id);
        if (index === -1) {
            throw new Error("Produto não encontrado.");
        }

        if (title){
            produtos[index].title = title;
        }

        if(description){
            produtos[index].description = description;
        }

        if(price){
            produtos[index].price = price;
        }

        if(thumbnail){
            produtos[index].thumbnail = thumbnail;
        }

        if(code){
            produtos[index].code = code;
        }

        if(stock){
            produtos[index].stock = stock;
        }

        await saveJsonInFile(this.path, produtos);
        console.log("Produto atualizado.")
    }

    async deleteProduct(id) {
        const produtos = await getJsonFromFile(this.path);
        const index = produtos.findIndex((u) => u.id === id);
        if (index === -1) {
          throw new Error("Produto não encontrado.");
        } else {
            produtos.splice(index, 1);
          await saveJsonInFile(this.path, produtos);
          console.log("Produto deletado.");
        }
    }
}

const getJsonFromFile = async (path) => {
    if (!fs.existsSync(path)) {
      return [];
    }
    const content = await fs.promises.readFile(path, "utf-8");
    return JSON.parse(content);
  };

const saveJsonInFile = (path, data) => {
    const content = JSON.stringify(data, null, "\t");
    return fs.promises.writeFile(path, content, "utf-8");
};

async function test() {
    const productManager = new ProductManager("./Produtos.json");
    const data = {
      title: "Kit de Ferramentas Profissional",
      description:   "Este kit de ferramentas é essencial para qualquer projeto de bricolagem ou reparo doméstico. Com uma variedade de chaves, alicates e outras ferramentas de alta qualidade, este conjunto tem tudo o que você precisa para lidar com qualquer tarefa.",
      price: 6500,
      thumbnail: "./img",
      code: "AA02",
      stock: 10,
    };
    const data2 = {
      title: "Câmera DSLR 24MP",
      description:   "Capture momentos preciosos com clareza e detalhes impressionantes com esta câmera DSLR de 24 megapixels. Equipada com recursos avançados de fotografia e gravação de vídeo em alta definição, esta câmera é perfeita para entusiastas e profissionais.",
      price: 2799.99,
      thumbnail: "./ruta_img2",
      code: "AA03",
      stock: 15,
    };
    const data3 = {
      title: "SmartWatch Pro",
      description:   "O SmartWatch Pro é o seu parceiro de atividades diárias, com monitoramento de saúde avançado, GPS integrado e resistência à água. Mantenha-se conectado e ativo com este relógio inteligente de última geração.",
      price: 1999.99,
      thumbnail: "./ruta_img3",
      code: "AA01",
      stock: 10,
};

await productManager.create(data);
await productManager.create(data2);
await productManager.create(data3);
console.log(await productManager.getProdutos());

// Prueba para cambiar el code
await productManager.updateProduto(1, { code: "BB22" });
console.log(await productManager.getProdutos());

// ProductoById
console.log(await productManager.getProdutosById(2));

// Prueba borrar un producto
await productManager.deleteProduct(1);
console.log(await productManager.getProdutos());
}

test();