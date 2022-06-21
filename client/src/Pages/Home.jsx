import React ,{useEffect} from 'react'
import Heading from '../container/Heading/Heading'
import CarouselScreen from '../screens/Caraousel/CaraouselScreen'
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../action/productAction";
import PetList from '../container/ProductList/PetList';

const Home = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  // Whatever We put in useEffect will run as soon as components load
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div>
    <Heading/>
      <PetList products={products} error={error} loading={loading}/>
      <CarouselScreen products={products}/>
      
      
    </div>
  )
}

export default Home