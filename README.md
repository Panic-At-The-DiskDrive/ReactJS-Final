# React JS - Preentrega 2

## Navega las rutas. Implementa una herramienta de routing, la cual permitirá navegar a través de las diferentes vistas para tu tienda: catálogo principal de productos, catálogo de productos filtrados por categorías, y vista en detalle de un producto. Crea la funcionalidad necesaria para que los usuarios puedan:  

+ Seleccionar desde el menú las distintas categorías disponibles.  
  
+ Visualizar el listado, filtrando según esa elección.  
  
+ Seleccionar un producto del listado y acceder a una vista en detalle del mismo, donde además contarán con una interfaz que posteriormente les permita agregar unidades al carrito.

1. **Clonar el repositorio**  
   ```bash
   git clone https://github.com/Panic-At-The-DiskDrive/ReactJS-Preentrega_II
   ```

2. **Entrar a la carpeta del proyecto**  
   ```bash
   cd ReactJS-Preentrega_II
   ```

3. **Instalar librerias**  
   ```bash
   npm install
   ```   

4. **Correr el proyecto**  
   ```bash
   npm run dev
   ```   

## Objetivos
+ Implementar la funcionalidad de navegación entre las diferentes vistas utilizando enlaces y rutas.

+ Desarrollar la navegabilidad básica de la aplicación, permitiendo navegar desde el catálogo al detalle de cada item.

## Requisitos
+ Implementación de React Router y creación de las distintas rutas necesarias para mostrar las vistas de nuestra app.

+ División entre componentes contenedores encargados de manejar el estado y los efectos (ItemListContainer, ItemDetailContainer) y componentes de presentación, encargados del apartado visual (estructura de elementos, estilos, classNames, etc.)

+ Los componentes contenedores harán un llamado asíncrono a "Promises" que resuelvan luego de un breve retardo los datos solicitados (listado de productos, un producto)  

+ Uso del método Array.map() y la prop "key" para listar todos los productos en el catálogo.

+ Uso del hook useParams() de react router para leer el segmento actual de la URL y mostrar el contenido correspondiente.

## Recomendaciones
+ No olvides utilizar los parámetros URL en el array de dependencias de tu useEffect para generar las actualizaciones necesarias al navegar.

+ No crees diferentes rutas para cada categoría: puede parecer la solución más simple cuando tu aplicación sea pequeña, pero hará más difícil incorporar nuevas categorías y modificar la implementación en el futuro, ya que tendrás tu código duplicado en diversos componentes.

+ Crear una ruta de tipo “404” (path=”*”) es una buena práctica y te ayudará a encontrar errores de navegación y enlaces mal formateados.  

+ Puedes incluir el componente contador ItemCount dentro del componente ItemDetail

## Contenidos adicionales  

### Criterios de evaluación
+ Conveciones: 
1) Respetas las consignas asignadas.
2) Separa según patrones de componentes contenedores/presentación

+ Navegabilidad: 
1) Logra la navegabilidad completa implementando React Router.
2) Genera rutas dinámicas para el detalle y las categorías de productos, utilizando URL params.
3) Utiliza correctamente el componente Link para los enlaces y evitar reloads de la página
4) Usa el hook useParams para leer los parámetros de la URL y el hook useEffect para generar renderizados al
detectar cambios de categoría y/o itemId.

+ Componente NavBar. Js:
1) Presenta enlaces que permiten navegar hacia las diferentes categorías (ej: /category/remeras).
2) Logra que el componente NavBar esté siempre visible en todas las rutas de la aplicación.
3) Los enlaces no deben generar recargas de la página en el navegador.

+ Componente ItemListContainer.js: 
1) Usa una promise para devolver todos los productos, o los de una categoría específica (según la categoría a la
que se navega), utilizando el parámetro de la URL.
2) Implementa el componente ItemList como hijo de ItemListContainer.
3) Utiliza el método map para generar un listado de componentes Item e identifica los elementos generados con la
prop "key".  
  
+ Componente ItemDetailContainer.js:
1) Usa una promise para devolver un único producto específico (según al producto al que se navega), utilizando el
parámetro del a URL.
2) Accede al parámetro "id" de la URL utilizando el hooks useParams.
3) Muestra como presentación el comopnente ItemDetail, y dentro de éste el componente ItemCount.

---

## Tecnologías utilizadas

- **React**
- **Bootstrap**   

---