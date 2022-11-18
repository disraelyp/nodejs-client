# Comandos para la ejecucion:

Bienvenido a la aplicacion de simulacion de sensores para la practica de ActiveMQ.

Endpoint implementa una trama JSON con la siguiente estructura:

<table class="default">
  <tr>
    <th>Campo</th>
    <th>Tipo</th>
  </tr>

  <tr>
    <td>fechaGeneración</td>
    <td>Number, milisegundos</td>
  </tr>

  <tr>
    <td>fechaGeneración</td>
    <td>Numero</td>
  </tr>

  <tr>
    <td>fechaGeneración</td>
    <td>Numero</td>
  </tr>
  
  <tr>
    <td>fechaGeneración</td>
    <td>Numero</td>
  </tr>

</table>



# Comandos para la ejecucion con Docker


1. Clonar el repositorio con [GitHub SHH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) (recomendado).

```bash
git clone https://github.com/disraelyp/nodejs-client.git
```

2. Crear la imagen.
```bash
docker build -t mi-imagen .
```

2. Ejectuar un contenedor con Dokcer.
```bash
docker run --rm -d mi-imagen
```
