import { useContext, useState } from 'react'
import { createContext } from 'react'

const ProductContext = createContext()

export const useProductContext = () => {
    return useContext(ProductContext)
}

export const ProductProvider =  ({children}) => {
    const url =  'https://win22-webapi.azurewebsites.net/api/products'
    const [product, setProduct] = useState({})
    const [products, setProducts] = useState([])
    const [featuredProducts, setFeaturedProducts] = useState([])
    const [flashsaleProducts, setFlashsaleProducts] = useState([])
    const [saleProducts, setSaleProducts] = useState([])
    const [relatedProducts, setRelatedProducts] = useState([])

    const getProducts = async () => {
        const res = await fetch(url)
        setProducts(await res.json())
    }

    const getFeaturedProducts = async (take = 0) => {
        const res = await fetch(url + `?take=${take}`)
        setFeaturedProducts(await res.json())
    }

    const getFlashsaleProducts = async (take = 0) => {
        const res = await fetch(url + `?take=${take}`)
        setFlashsaleProducts(await res.json())
    }

    const getSaleProducts = async (take = 0) => {
        const res = await fetch(url + `?take=${take}`)
        setSaleProducts(await res.json())
    }

    const getRelatedProducts = async (take = 0) => {
        const res = await fetch(url + `?take=${take}`)
        setRelatedProducts(await res.json())
    }

    const getProduct = async (articleNumber) => {
        const res = await fetch(url + `/${articleNumber}`)
        setProduct(await res.json())
    }

    return <ProductContext.Provider value={{product, products, featuredProducts, flashsaleProducts, saleProducts, relatedProducts, getProducts, getFeaturedProducts, getFlashsaleProducts, getSaleProducts, getRelatedProducts, getProduct}}>
        {children}
    </ProductContext.Provider>
}