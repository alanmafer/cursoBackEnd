import { ProductManager } from "./ProductManager.js";
import { Product } from "./Product.js";

const produto1 = new Product(
  "SmartWatch Pro",
  "O SmartWatch Pro é o seu parceiro de atividades diárias, com monitoramento de saúde avançado, GPS integrado e resistência à água. Mantenha-se conectado e ativo com este relógio inteligente de última geração.",
  1999.99,
  "./",
  "AA01",
  10
);

const produto2 = new Product(
  "Kit de Ferramentas Profissional",
  "Este kit de ferramentas é essencial para qualquer projeto de bricolagem ou reparo doméstico. Com uma variedade de chaves, alicates e outras ferramentas de alta qualidade, este conjunto tem tudo o que você precisa para lidar com qualquer tarefa.",
  6500,
  "./",
  "AA02",
  15
);

const produto3 = new Product(
  "Câmera DSLR 24MP",
  "Capture momentos preciosos com clareza e detalhes impressionantes com esta câmera DSLR de 24 megapixels. Equipada com recursos avançados de fotografia e gravação de vídeo em alta definição, esta câmera é perfeita para entusiastas e profissionais.",
  2799.99,
  "./",
  "AA03",
  5
);

const produto4 = new Product(
  "Notebook Ultrafino 14",
  " Leve e poderoso, este notebook ultrafino de 14 polegadas é ideal para pessoas em movimento. Com um processador rápido, armazenamento generoso e uma tela vibrante, este laptop oferece desempenho excepcional em um design elegante.",
  4999.99,
  "AA04",
  5
);

const produto5 = new Product(
  "Conjunto de Panelas Antiaderentes",
  "Prepare suas refeições com facilidade e estilo com este conjunto de panelas antiaderentes. Com uma variedade de tamanhos e formas, estas panelas garantem resultados de cozimento uniformes e fáceis de limpar",
  1299.99,
  "./",
  "AA05",
  20
);

const manager1 = new ProductManager();

manager1.addProduct(produto1);
manager1.addProduct(produto2);
manager1.addProduct(produto3); // Produto com dados incompletos.
manager1.addProduct(produto4);
manager1.addProduct(produto5); // Produto com dados incompletos.

manager1.getProducts();

manager1.getProductById(1);
manager1.getProductById(7); // ID não existe 