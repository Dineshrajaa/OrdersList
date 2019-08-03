export class OrderModel {
    orderId?: number;
    origin: string;
    destination: string;
    commodity: string;
    quantity: number;
    referenceNumber: string;
    pickupDate: string;
    deliveryDate: string;
    businessUnit: string;
    status = 'Placed';

    constructor(orderInstance) {
        this.orderId = this.generateOrderId();
        this.origin = orderInstance.origin;
        this.destination = orderInstance.destination;
        this.referenceNumber = orderInstance.referenceNumber;
        this.commodity = orderInstance.commodity;
        this.quantity = +orderInstance.quantity;
        this.pickupDate = orderInstance.pickupDate;
        this.deliveryDate = orderInstance.deliveryDate;
        this.businessUnit = orderInstance.businessUnit;
        this.status = orderInstance.status ? orderInstance.status : this.status;
    }

    generateOrderId() {
        let generatedOrderId = '';
        const currentTimeStamp = new Date().getTime();
        const currentTimeStampString = currentTimeStamp.toString();

        while (generatedOrderId.length < 3) {
            generatedOrderId += currentTimeStampString[Math.floor(Math.random() * currentTimeStampString.length)];
        }
        console.log(generatedOrderId);
        return +generatedOrderId;
    }
}
