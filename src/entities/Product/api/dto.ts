export interface CoffeeApiResponse {
    id: string;
    name: string;
    subTitle: string;
    type: string;
    price: number;
    image: string;
    rating: number;
}

export interface CoffeeApiRequest {
    text?: string;
    type?: string | null;
}

export interface OrderItem {
    id: string;
    name: string;
    subTitle: string;
    size: string;
    quantity: number;
}

export interface OrderCoffeeRequest {
    address: string;
    orderItems: OrderItem[];
}

export interface OrderCoffeeResponse {
    message: string;
    success: boolean;
}
