class Car{
    constructor(color, brand){
        this.name=color,
        this.brand=brand
    }

}
class Lorry extends Car{
    constructor(color, brand, name) {
        super(color, brand);
        this.name=name
      }
      show(){
        console.log(`this is the ${this.brand}`);
      }
}