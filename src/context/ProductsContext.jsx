import React, { createContext, useState, useEffect, useContext } from 'react';
import initialProducts from '../data/products.json';

const ProductsContext = createContext();

export const useProducts = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Check localStorage for products, otherwise use initial JSON
        const storedProducts = localStorage.getItem('dwarf_products');
        if (storedProducts) {
            setProducts(JSON.parse(storedProducts));
        } else {
            setProducts(initialProducts);
            localStorage.setItem('dwarf_products', JSON.stringify(initialProducts));
        }
    }, []);

    const addProduct = (newProduct) => {
        const updatedProducts = [...products, { ...newProduct, id: Date.now() }];
        setProducts(updatedProducts);
        localStorage.setItem('dwarf_products', JSON.stringify(updatedProducts));
    };

    const removeProduct = (id) => {
        const updatedProducts = products.filter(p => p.id !== id);
        setProducts(updatedProducts);
        localStorage.setItem('dwarf_products', JSON.stringify(updatedProducts));
    };

    return (
        <ProductsContext.Provider value={{ products, addProduct, removeProduct }}>
            {children}
        </ProductsContext.Provider>
    );
};
