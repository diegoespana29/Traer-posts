async function fetchPosts() {
    const container = document.getElementById("posts-container");
    container.innerHTML = ""; // Limpiar el contenedor antes de cargar nuevos posts

    try {
        
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        
        if (!response.ok) {
            throw new Error("Error en la respuesta de la API");
        }

        const posts = await response.json();

        const ul = document.createElement("ul");

        
        posts.forEach(post => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${post.title}</strong>: ${post.body}`;
            ul.appendChild(li);
        });

       
        container.appendChild(ul);

    } catch (error) {
        // los errores que puedan ocurrir
        container.innerHTML = `<p>Error al cargar los posts: ${error.message}</p>`;
    }
}
