
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useData, COLOR } from '../../Contexts/DataContext'
import { useOrderContext } from '../../Contexts/OrderContext'
import { BLACK, DARKGREY, device, Padding, RED  } from '../../Styles'





const Grid = styled.div`
padding-top: 2px;
padding-bottom: 2px;
display: grid;
grid-auto-flow: row;
grid-gap: 20px;

@media ${device.laptopSmall}{
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 150px);
}
@media ${device.laptopLarge}{
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 150px);
}

@media ${device.tabletSmallPortrait}{
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 150px);
}


`

const ProductsPage = ({index}) => {
    const {data} = useData()
    const {selectedProducts,setSelectedProducts, nextButtonClick, step, setDisable} = useOrderContext()
    const [error, setError] = React.useState(false)



    useEffect(()=>{
        if(index==step){
            if(selectedProducts.length==0){
                setDisable(true)
            }
            else{
                setDisable(false)
            }
        }
    },[step, selectedProducts])

  


  return (
      <Padding>
          {/* <h2 style={{color: error?RED:"black", fontWeight:600}} className="h4">{translate("Choose your products")}:</h2> */}

    <Grid>
        {data.products.map(product=>
            <Product key={product.id} {...product} setSelectedProducts={setSelectedProducts} selectedProducts={selectedProducts}/>)}
    </Grid>
    </Padding>
  )
}

export default ProductsPage


const Container = styled.div`
width: calc(100% - 4px);
margin:auto;
height: 100%;
border-radius: 10px;
display: grid;
grid-template-columns: 150px 1fr;
align-items: center;
justify-content: flex-start;
height: 150px;
:hover{
    /* border: 1px solid ${BLACK}; */
}
`
const Image = styled.picture`
height: 100%;
padding: 10px;
border-radius: 8px;
width: 100%;
overflow: hidden;
>img{
    border-radius: 8px;
    height: 100%;
    width: 100%;
    object-fit: cover;
}`


const Info = styled.div`
padding: 10px;
text-align: left;
height: 100%;
position: relative;

>h3{
    font-size: 1.2rem;
    font-weight: 500;
}
>p{
    display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;
font-size: 0.9rem;
color:${DARKGREY}
}
>span{
    position:absolute;
    right: 10px;
    bottom: 10px;
}
`
const Product = ({image, description, title, id, setSelectedProducts, selectedProducts, price}) => {
    return (
        <Container 
        style={{boxShadow:selectedProducts.map(el=>el.id).includes(id)?`0px 0px 0px 2px ${COLOR}`:`0px 0px 0px 1px #ccc`}} 
        onClick={()=>selectedProducts.map(el=>el.id).includes(id)?setSelectedProducts(previous=>[...previous.filter(item=>item.id!=id)])
        :
        setSelectedProducts(previous=>[...previous, {id, quantity:1, price}])}>
                {/* <picture src={}></picture>
                <picture src={}></picture> */}
                <Image>
                    <source></source>
                    <img src={image}></img>
                </Image>
            <Info>
                <h3>{title}</h3>
                <p>{description}</p>
                <span><p>{price}$</p></span>
            </Info>
        </Container>
    )
}

