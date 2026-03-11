const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Sistema FIA - Microfrontends</h1>

  <h2>Módulo Cursos</h2>
  <iframe 
    src="http://localhost:5173" 
    width="100%" 
    height="200"
    style="border:1px solid black;">
  </iframe>

  <h2>Módulo Usuarios</h2>
  <iframe 
    src="http://localhost:5174" 
    width="100%" 
    height="200"
    style="border:1px solid black;">
  </iframe>
`