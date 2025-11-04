import { createContext, useState, type ReactNode, useContext } from "react";

export type Product = {
    id: number;
    title: string;
    description?: string;
    category?: string;
    price: number;
    imageSrc: string;
  };

export type CartItem = Product & {qty: number}

type CartContextType = {
    items: CartItem[]; //objeto que almacena todos los productos
    addToCar: (p: Product) => void; //añade al carro un item
    removeItem: (id: number) => void; // eliminar un item, disminuye la cantidad en 1
    removeAllItem: (id: number) => void; // elimina el producto del carro
    clearCart: ()=> void; //elimina todo el carro
};

const CartContext = createContext<CartContextType | null>(null);

// Ahora comenzamos a definir las funciones y objetos declarados

export function CartProvider({children}: {children: ReactNode}){
    //Definimos primero el carrito de compras
    // que se inicializa en 0
    const [items, setItems] = useState<CartItem[]>([]);

    //configuramos el addToCar para añadir items al carrito
    const addToCar = (p: Product) => {
        setItems((prev) =>{
            //Primer validar si existe
            const exist = prev.find((e)=> e.id===p.id);
            if(!exist){
                return[...prev, {...p, qty: 1}];
            }
            else{
                return prev.map((e)=> e.id === e.id ? {...e, qty: e.qty + 1} : e);
            }
        });
    }

    // ahora debemos disminuir en 1 el carrito
    const removeItem = (id: number) =>{
        setItems((prev) =>{
            // se busca el carro
            const producto = prev.find((x) => x.id === id);
            // si la id no existe, revolvemos el carrito original  
            if(!producto) return prev;
            //si el producto es encontrado, se resta el valor de 1
            if(producto.qty === 1){
                // Si la cantidad es 1 y restamos. queda en 0,
                // asi que eliminamos el producto
                return prev.filter((x) => x.id !== id);
            }
            return prev.map((x)=> (x.id===id? {...x, qty: x.qty - 1}: x))
        })
    }

    //Ahora una funcion para eliminar todos los productos de un mismo ID

    const removeAllItem = (id: Number) => {
        setItems((prev) => {
            // devolvemos los mismos productos que no sean del ID del parametro
            return prev.filter((x) => x.id !== id);
        })
    };

    //Funcion para eliminar el carrito de compras por completo
    const clearCart = () => setItems([]);

    //En react se debe configurar el como van a entregar los objetos y funciones del contexto creado

    return(
        <CartContext.Provider 
            value={{items, addToCar, removeItem, removeAllItem, clearCart}}
        >
            {children}
        </CartContext.Provider>
    );
        
}

//Esto es necesario para crear y compartir el contexto confirmado
export const useCar = () => {
    const ctx = useContext(CartContext);
    //Debemos manejar si el contexto no existe
    if(!ctx) throw new Error('Error en el useCart/Context');
    return ctx;
}


