export class Product {
    public uid = Math.random().toString(36).substr(2, 9);

    public creationDate: Date | number;
    public description: string;
    public id: number;
    public name: string;
    public price: number;
    public thumbnailUrl: string;
    public url: string;
    public deliveryComp: string;
    public type: number;

    constructor(o: { [key: string]: any } = {}) {
        this.creationDate = o.creationDate ? new Date(o.creationDate) : null;
        this.description = o.description || null;
        this.id = o.id || null;
        this.name = o.name || null;
        this.price = o.price || 0;
        this.thumbnailUrl = o.thumbnailUrl || null;
        this.url = o.url || null;
        this.deliveryComp = o.deliveryComp || null;
        this.type = o.type || null;
    }
}
