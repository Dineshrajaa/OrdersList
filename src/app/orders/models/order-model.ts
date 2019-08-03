export class OrderModel {
    origin: string;
    destination: string;
    commodity: string;
    quantity: number;
    referenceNumber: string;
    pickupDate: string;
    deliveryDate: string;
    businessUnit: string;
    status = 'placed';

    constructor(orderInstance) {
        this.origin = orderInstance.origin;
        this.destination = orderInstance.destination;
        this.referenceNumber = orderInstance.referenceNumber;
        this.commodity = orderInstance.commodity;
        this.quantity = orderInstance.quantity;
        this.pickupDate = orderInstance.pickupDate;
        this.deliveryDate = orderInstance.deliveryDate;
        this.businessUnit = orderInstance.businessUnit;
        this.status = orderInstance.status ? orderInstance.status : this.status;
    }
}
