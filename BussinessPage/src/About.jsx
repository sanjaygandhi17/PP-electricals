import React,{useEffect} from 'react'
import Descriptionpic from './components/Descriptionpic'
import { useGlobalContext } from './context';
const About = () => {
  // const data={
  //   name:"PP Electricals",
  //   image:"./images/ShopImage.png",
  // }
  const {updateHomePage}=useGlobalContext();
  useEffect(()=> updateHomePage(),[]);
  return (
    <Descriptionpic/>
  )
}

export default About