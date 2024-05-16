class Product {
    constructor(title, description, price, thumbnail, code, stock) {
      this.id = Product.creacionId();
      this.title = title;
      this.description = description;
      this.price = price;
      this.thumbnail = thumbnail;
      this.code = code;
      this.stock = stock;
    }

    static firstId = 0;
    static i = 0;
    static creacionId() {
      if (this.i === 0) {
        this.i += 1;
        return (this.firstId = 1);
      } else {
        return (this.firstId += 1);
      }
    }
  }
  
  export { Product };