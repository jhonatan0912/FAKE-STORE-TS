 import './App.css'
import { useEffect, useState } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getProducts() {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      setProducts(data)
      setLoading(false)
    }
    getProducts()
  }, [])

  if (loading) return <h2>Loading...</h2>

  return (
    <>
      <h1>Products</h1>
      <div className='product-container'>
        {
          products.map(product =>
            <div key={product.id}>
              <img src={product.image} alt="image" width={200} />
              <p>{product.title}</p>
              <p>${product.price}</p>
            </div>
          )
        }
      </div>
    </>
  )
}

export default App