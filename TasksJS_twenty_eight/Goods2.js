class Goods2 extends Goods {
    constructor(name, amount, image, count, sale) {
        super(name, amount, image, count);
        this.sale = sale;
    }
    draw() {
        document.querySelector('.out-6').innerHTML = `<div> 
            <img src="${this.image}"/> 
            <p>${this.name}</p> 
            <p>${this.amount}</p> 
            <p>${this.count}</p>
            <p>Распродажа: ${this.sale}</p> 
        </div>`;
    }
}