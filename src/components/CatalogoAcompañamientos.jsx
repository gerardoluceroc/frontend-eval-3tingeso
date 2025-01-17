import { Container, HStack, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { AlitasPollo, CheesyVeggies, ChickenPoppers, PalitosAjo } from "./ItemAcompañamiento";

export function CatalogoAcompañamientos(props){
    //Listado de articulos que tiene el carrito
    const [listadoArticulosCarrito, setListadoArticulosCarrito] = useState([]);


    //Funcion que agrega un articulo al carrito
    function agregarArticuloACarrito(listadoArticulosCarrito,setListadoArticulosCarrito,articuloCatalogo, actualizarCarritoPadre,actualizarLargoCarritoPadre){
        let listadoActualizado = [];
        
        listadoActualizado = listadoArticulosCarrito;
        listadoActualizado.push(articuloCatalogo);
        setListadoArticulosCarrito(listadoActualizado);
        actualizarCarritoPadre(listadoActualizado);
        actualizarLargoCarritoPadre(listadoActualizado.length);
    }
    return(

        <Container maxWidth={"max"} >
            
            <Stack direction={"column"} spacing="5">
            <HStack spacing={10}>
                <PalitosAjo agregarArticulo={(articuloParaAgregar) => agregarArticuloACarrito(listadoArticulosCarrito,setListadoArticulosCarrito,articuloParaAgregar,props.actualizarCarritoPadre,props.actualizarLargoCarritoPadre)} 
                />
                <ChickenPoppers agregarArticulo={(articuloParaAgregar) => agregarArticuloACarrito(listadoArticulosCarrito,setListadoArticulosCarrito,articuloParaAgregar,props.actualizarCarritoPadre,props.actualizarLargoCarritoPadre)} 
                />
                <CheesyVeggies agregarArticulo={(articuloParaAgregar) => agregarArticuloACarrito(listadoArticulosCarrito,setListadoArticulosCarrito,articuloParaAgregar,props.actualizarCarritoPadre,props.actualizarLargoCarritoPadre)} 
                />
                <AlitasPollo agregarArticulo={(articuloParaAgregar) => agregarArticuloACarrito(listadoArticulosCarrito,setListadoArticulosCarrito,articuloParaAgregar,props.actualizarCarritoPadre,props.actualizarLargoCarritoPadre)} 
                />
                
            </HStack>

            </Stack>        

        </Container>



    )
}