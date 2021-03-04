class Product{
    product_name: string
    product_price: number
    discount_amount: number
    
    calculate(): number{       
        return this.product_price - this.discount_amount
    }

    show(): string{
        return `${this.product_name} custa R$ ${this.product_price}
        mas na promoção desta semana está com o preço de R$ ${this.calculate()} `
    }
}

const product = new Product
product.product_name = "Computador"
product.product_price = 4500
product.discount_amount = 350

console.log(product.show())
