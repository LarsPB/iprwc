export class Product {
    public id: string;
    public name: string;
    public imagePath: string;
    public price: number;
    public description: string;

    constructor(id: string, name: string, imagePath: string, price: number, desc: string){
        this.id = id;
        this.name = name;
        this.imagePath = imagePath;
        this.price = price;
        this.description = desc;
    }
}