module.exports = function(Jugador) {
  Jugador.observe('before save', function(ctx, next) {
    var Equipo = Jugador.app.models.Equipo;

    Equipo.findById(ctx.instance.equipoId, function(err, equipo) {
      if (err) {
        console.log(err);
        next(err);
      }

      ctx.instance.nombreEquipo = equipo.nombre;
      next();
    });

  });
};
