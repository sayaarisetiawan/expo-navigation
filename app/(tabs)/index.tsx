import axios from "axios";
import { Link, useNavigation, useRouter } from "expo-router"
import { useEffect, useState } from "react";



export default function Page(){
  const [data,SetData] = useState<String>()

  useEffect(()=> { 
 axios.get("https://jsonplaceholder.typicode.com/users").then (
  (data)=> {
    SetData(data.data[0].name)
  }) }, [])
  
  const router = useRouter();
  const navigation = useNavigation();

  return(
    <>
   <h1>
    {data}
   </h1>
    
    </>
  )
}












