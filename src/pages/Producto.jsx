import React, { useState } from 'react';
import ListaProducto from '../components/Producto/ListaProducto';
import FrmProducto from '../components/Producto/FrmProducto';

export const initialState = {
	__typename: 'Producto',
    nombre: '',
    descripcion: '',
    cantidad: '',
    precio: '',
	imagen: 'dish.png',
	estado: true,
	tipoProducto: {id: 0},
	receta: [{
		insumo: {id: 0},
		cantidad: 0,
		unidad: ''
	}]
};

export default function Producto(){
    const [selectedItem, setSelectedItem] = useState(initialState);

	return (
        <div className='col'>
			<div className='row p-3'>
                <FrmProducto
					item={selectedItem}
					key={selectedItem.id}
					update={setSelectedItem}
					initial = {initialState}
				/>

                <ListaProducto
					update={setSelectedItem}
					initial={initialState}
				/>  
			</div>
		</div>
    );
}
