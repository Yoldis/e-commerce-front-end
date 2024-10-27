
export interface ProductInterface {
    id:          string;
    name:        string;
    description: string;
    price:       number;
    inStock:     number;
    sizes:       Size[];
    category:    Category;
    image:       Image[];
}

export interface Category {
    id:   string;
    name: Name;
}

export enum Name {
    Kids = "kids",
    Men = "men",
    Women = "women",
}

export interface Image {
    id:  string;
    url: string;
}

export enum Size {
    Large = "Large",
    Medium = "Medium",
    Small = "Small",
    XLarge = "X-Large",
}
