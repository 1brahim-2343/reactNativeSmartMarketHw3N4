
export type Category = "Fruits" | "Meat products" | "Sweets" | "Drinks" | "Custom";

export interface Product {
  id: string;
  name: string;
  price: number;
  image?: string;
  category: Category;
}

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: "f1",
    name: "Red Apple",
    price: 3.50,
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "f2",
    name: "Banana",
    price: 4.20,
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "f3",
    name: "Orange",
    price: 2.80,
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "f4",
    name: "Black Grapes",
    price: 5.00,
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1537089946741-2138a7e02e6d?auto=format&fit=crop&w=400&q=80",
  },

  {
    id: "m1",
    name: "Boneless Beef",
    price: 18.50,
    category: "Meat products",
    image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "m2",
    name: "Chicken Breast",
    price: 8.50,
    category: "Meat products",
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "m3",
    name: "Lamb Leg",
    price: 21.00,
    category: "Meat products",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80",
  },

  {
    id: "s1",
    name: "Butter Croissant",
    price: 1.50,
    category: "Sweets",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "s2",
    name: "Chocolate Cake",
    price: 14.90,
    category: "Sweets",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "s3",
    name: "Glazed Donut",
    price: 2.50,
    category: "Sweets",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=400&q=80",
  },

  {
    id: "d1",
    name: "Apple Juice",
    price: 3.20,
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "d2",
    name: "Still Water (0.5L)",
    price: 0.50,
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1608885898957-a599fb18fc3f?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "d3",
    name: "Peach Iced Tea",
    price: 1.80,
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=400&q=80",
  },
];