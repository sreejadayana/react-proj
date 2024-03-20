import {useEffect, useState, useLayoutEffect} from 'react';
import axios from 'axios';
import './Products.css';
function Products(){

     const [products, setProducts] = useState([]);

      const displayProducts = () => {
                 var list =  products.map( product =>{
                    
                        return <div className='grid-item' key={product.id}>
                                   <figure>
                                   <img src={product.image}></img> 
                                   <figcaption>{product.title}</figcaption>
                                   </figure>
                                
                        </div>
                    
                   })
                   return list;
      }

      useLayoutEffect(() =>{
             console.log("use effect called");

               const makeAPICall =  async () =>{
                try{
                    var response =  await axios.get("https://fakestoreapi.com/products123");
                    console.log(response.data);
                     setProducts(response.data);

                }catch(error){
                         alert("error occured");
                }
                            
                            //   if(response instanceof Error){
                            //                alert("Error occured");
                            //   }
                            //   else{
                            //     console.log(response.data);
                            //     setProducts(response.data);
                            //   }
                            
               }
               makeAPICall();
      }, [])

    return(
        <div>
              <h1>Products</h1>
                {/* {products.length == 0 ? <div class="spinner-border"></div> : ""} */}

                 {products.length == 0 && <div className="spinner-border"></div>}
                 {products.length > 0 && <div className="grid-container">
                    
                     {displayProducts()}
                          
                    </div>}
        </div>
    )


}
export default Products;