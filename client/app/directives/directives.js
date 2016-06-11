var myApp = angular.module('myApp');

myApp.directive('jugadores', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/fields/jugadores.html',
    controller: function($scope, $uibModal, Gol, Tarjeta) {
      $scope.partido = $scope.entry.values;
      $scope.equipos = $scope.datastore._entries['equipos_0_values'];

      $scope.goles = [];
      $scope.sanciones = [];

      console.log($scope.equipos, $scope);

      loadStat();

      function loadStat() {
        Gol.find({
          filter: {
            where: {
              partidoId: $scope.partido.id
            }
          }
        }).$promise
          .then(function(goles) {
            $scope.goles = goles;
          });

        Tarjeta.find({
          filter: {
            where: {
              partidoId: $scope.partido.id
            }
          }
        }).$promise
          .then(function(tarjetas) {
            $scope.sanciones = tarjetas;
          });
      }

      $scope.editarJugador = function(id, nombre, equipoId, partido) {
        $uibModal.open({
          templateUrl: 'app/fields/goal.html',
          resolve: {
            jugador: {
              id: id,
              nombre: nombre,
              partidoId: $scope.entry.values['id'],
              equipoId: equipoId,
              partido: $scope.partido
            }
          },
          controller: function($scope, jugador, Gol, Tarjeta, Partido) {
            console.log($scope, jugador);

            $scope.jugador = jugador;
            $scope.gol = {};

            loadStats();

            $scope.addGol = function() {
              Gol.create({
                minuto: $scope.gol.minuto,
                partidoId: jugador.partidoId,
                jugadorId: jugador.id
              }).$promise
                .then(function(gol) {
                  Partido.find({
                    filter: {
                      where: {
                        id: jugador.partido.id
                      }
                    }
                  }).$promise
                    .then(function(match) {
                      var partido = match[0];

                      if (jugador.equipoId == jugador.partido.localId) {
                        partido.resultadoLocal += 1;
                        partido.$save();
                      } else {
                        partido.resultadoVisitante += 1;
                        partido.$save();
                      }
                    })
                    .catch(function(err) {
                      console.log(err);
                    });

                  loadStats();
                })
                .catch(function(err) {
                  console.log(err)
                });
            }

            $scope.addCard = function() {
              Tarjeta.create({
                tipo: "amarilla",
                partidoId: jugador.partidoId,
                jugadorId: jugador.id
              }).$promise
                .then(function(card) {
                  console.log(card);

                  loadStats();
                })
                .catch(function(err) {
                  console.log(err)
                });
            }

            function loadStats() {
              Gol.find({
                filter: {
                  where: {
                    jugadorId: jugador.id,
                    partidoId: jugador.partidoId
                  }
                }
              }).$promise
                .then(function(goals) {
                  $scope.jugador.goals = goals;
                });
              Tarjeta.find({
                filter: {
                  where: {
                    jugadorId: jugador.id,
                    partidoId: jugador.partidoId
                  }
                }
              }).$promise
                .then(function(cards) {
                  $scope.jugador.cards = cards;
                })
            }

          }
        });
      }
    }
  }
});

myApp.directive('finalizar', function() {
  return {
    restrict: 'E',
    template: '<button ng-click="finalizar()">Finalizar</button>',
    controller: function($scope, Partido, Equipo) {
      var equipos = [
        {
          id: $scope.entry.values['localId'],
          goles: $scope.entry.values['resultadoLocal']
        },
        {
          id: $scope.entry.values['visitanteId'],
          goles: $scope.entry.values['resultadoVisitante']
        }
      ];

      $scope.finalizar = function() {
        Equipo.find({
          filter: {
            where: {
              id: equipos[0].id
            }
          }
        }).$promise
          .then(function(equipo) {
            var equipo = equipo[0];
            equipo.jugados += 1;
            equipo.$save();

            if (
                  equipos[0].goles > equipos[1].goles
               ) {
                  equipo.puntos += 3;
                  equipo.$save();
            } else if (
              equipos[0].goles == equipos[1].goles
            ) {
              equipo.puntos += 1;
              equipo.$save();
            }
          });

          Equipo.find({
            filter: {
              where: {
                id: equipos[1].id
              }
            }
          }).$promise
            .then(function(equipo) {
              var equipo = equipo[0];

              equipo.jugados += 1;
              equipo.$save();

              if (
                    equipos[1].goles > equipos[0].goles
                 ) {
                    equipo.puntos += 3;
                    equipo.$save();
              } else if (
                equipos[1].goles == equipos[0].goles
              ) {
                equipo.puntos += 1;
                equipo.$save();
              }
            });
      }
    }
  }
});
