import React, { useState, Fragment } from 'react';
import ListaProducto from '../components/Producto/ListaProducto';
import FrmProducto from '../components/Producto/FrmProducto';

export const initialState = {
	__typename: 'Producto',
    nombre: '',
    descripcion: '',
    cantidad: '',
    precio: '',
    imagen: '',
    tipoProducto: '',
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
