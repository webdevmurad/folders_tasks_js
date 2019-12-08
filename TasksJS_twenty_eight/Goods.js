class Goods {
    constructor(name, amount, image, count) {
        this.name = name;
        this.amount = amount;
        this.image = image;
        this.count = count;
    }
    draw() {
        document.querySelector('.out-4').innerHTML = `<div> 
            <img src="${this.image}"/> 
            <p>${this.name}</p> 
            <p>${this.amount}</p> 
            <p>${this.count}</p> 
        </div>`;
    }
}

