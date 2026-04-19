import * as Phaser from 'phaser';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    create
  }
};

new Phaser.Game(config);

function create() {
  this.add.text(100, 100, 'Canvas insertado en el html con el framework phaser con éxito.', { color: '#fff' });
}

/*
Sintaxis básica de un juego phaser:
preload(): Se ejecuta primero para cargar recursos como imágenes, sonidos y textos antes de iniciar.

create(): Se utiliza para crear e inicializar los objetos del juego (sprites, grupos, físicas) una vez que los recursos están listos. 

update(): Se repite en cada fotograma (frame) para manejar la lógica continua, como el movimiento, las colisiones y las interacciones del usuario.

*/