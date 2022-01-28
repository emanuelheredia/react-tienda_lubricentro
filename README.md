# E-Commerce de productos para el automotor

Esta aplicación Web fue creado como proyecto durante el curso de React JS brindado por la Institución CODER HOUSE. 

## Resúmen del proyecto

E-Commerce de productos relacionados al rubro automotor, con la opcion de agregar items (o quitarlos luego) al carrito de compras, conocer el detalle de los mismos y filtrar por categorías. Una vez efectuada la compra, en la sección "Mis Ordenes" se puede consultar por id de la misma, el detalle en cualquier momento.   

## Video Demo

![Demonstration web](./assets/app.gif)

## Características

* Filtrado por categorías de Items.
* Almacenamiento de productos en base de datos vía Firebase - Firestore.
* Almacenamiento de datos venta (productos adquirirdos,datos de comprador y actualización de stock automática) vía Firebase - Firestore.
* Carrito e info de compra persistente mediante el almacenamiento en Session Storage del usuario 
* Consulta en cualquier momento mediante ID de compra del detalle de la misma. 
* Uso de componentes independientes en cada sección
* Utilización de Hooks de estados, efectos, rutas y contexto que optimizan la aplicación. 
* Contador dinámico de cada Item adquirido en ícono de Carrito
* Formulario para cargar datos del Comprador y asociar a los datos de la compra

## Tecnologías utilizadas

* HTML-CSS
* Javascript
* React JS
* Bootstrap 
* Firebase-Firestore
* Node JS
* Git & GitHub

## Detalle de Componentes Principales

* ItemListContainer :  Recibe del Firestore de manera Asyncrona la info del listado total del productos con sus características correspondientes. Permite el filtrado según categoría.
* ItemList : Mapea los datos recibidos por contexto y renderiza la info mediante el componente Item
* ItemDetailContainer : Recibe del Firestore de manera Asyncrona la info del producto consultado según ID del mismo. 
* ItemDetail : Renderiza la información del producto en forma de card ampliada, donde muestra ademas mediante el componente "ItemCount" el stock del producto, boton para sumar y  restar cantida a adquirir y botón para redirigirse al Carrito
* CartContext: Establece contexto con estados a manipular y la lógica de la mayoría de las ejecuciones por parte del Usuario en cada componente.   
* firebase: Configuración inicial y keys de Firebase. Establecimiento de variables compartidas por varios componentes.
* Carrito: Renderiza un detalle resumido de los productos almacenados en el estado "Carrito"
* Mis Órdenes: Renderiza el detalle de la compra efectuada y almacenada en coleccion "ventas" del Firestore según ID ingesado por Usuario.


## Ejecutando este Proyecto

1. Abre la terminal de Git
2. Cambia el directorio de trabajo actual a la ubicación en donde quieres clonar el directorio:
``` cd proyecto ```

3. Escribe git clone seguido de la [URL](https://github.com/emanuelheredia/react-tienda_lubricentro) del proyecto:

```git clone https://github.com/emanuelheredia/react-tienda_lubricentro ```

4. Presiona Enter para crear tu clon local:
>$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `Spoon-Knife`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.

5. Instalar todas las dependencias necesarias dentro del directorio del proyecto:
``` npm install ```

6. Por último inicia el proyecto con npm start donde se iniciará el dashboard de expo en el navegador:

``` npm start ```