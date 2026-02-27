PMA Gestor de Opiniones:

Este proyecto fue desarrollado con el objetivo de crear un sistema de gestión de opiniones, inspirado en cómo funcionan las publicaciones y comentarios en redes sociales. La idea es que cualquier usuario pueda registrarse, compartir sus ideas y comentar en las publicaciones de los demás, todo bajo un ambiente seguro y bien controlado.

Para lograr esto, utilicé una arquitectura de microservicios, donde cada parte del sistema hace su trabajo por aparte, así si se presenta algún problema, solo se arregla esa parte sin afectar todo lo demás. Cada módulo está bien organizado y validado, garantizando que la experiencia sea fluida, segura y lista para crecer si algún día se quiere ampliar el proyecto.



auth-service:

Este servicio es el encargado de la autenticación y gestión de usuarios. Permite a los usuarios registrarse, iniciar sesión utilizando correo electrónico o nombre de usuario, y editar su perfil (nombre, contraseña, etc.). No se permite la eliminación de perfiles para mantener la integridad de las opiniones y comentarios en el sistema. La autenticación se maneja mediante tokens JWT, asegurando que solo usuarios autenticados puedan acceder a las funcionalidades protegidas de los demás servicios.


publications-service:

Este servicio gestiona las publicaciones de los usuarios. Permite crear publicaciones con título, categoría y contenido principal. Los usuarios pueden listar todas las publicaciones, obtener una publicación específica por su ID, y editar o eliminar únicamente sus propias publicaciones. Se implementan validaciones estrictas en todos los campos para garantizar la calidad de la información y se registra el autor de cada publicación.


comment-service:

Este servicio administra los comentarios en las publicaciones. Los usuarios pueden crear comentarios en cualquier publicación, listar los comentarios asociados a una publicación específica, y editar o eliminar únicamente sus propios comentarios. Todas las rutas cuentan con validaciones y un middleware global para el manejo de errores, asegurando una experiencia robusta y segura.

