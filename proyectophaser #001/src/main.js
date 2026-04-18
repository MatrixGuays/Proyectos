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
// Código de nuestro main