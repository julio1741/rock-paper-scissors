# README

App para Octano

# Rock Paper Scissors and More
App desarrollada en Rails usada como api, y react como front. 
  - Rails 4.2.6
  - React 16.9.0

# 

### Algunos endpoints de la api:

| Descripción | Endpoint |
| ------ | ------ |
| Devuelve movimientos configurados en moves.json en la App rails | **/api/v1/moves** |
| Determina el ganador dado los parametros **player1, player2, move1, move2** | **/api/v1/winner** |
| Devuelve la cantidad de victorias para un username | **/api/v1/victory/:username** |

Aunque quedan algunos features pendientes por realizar:
	
	- Guardar en base de datos los jugadores
	- Agregar opcion para ver historico de jugadores y sus victorias
	- Agregar estilos
