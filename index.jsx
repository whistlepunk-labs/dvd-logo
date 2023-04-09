function move() {
  let coords = [0, 0];
  let velocity;

  let elem = document.getElementById("image");
  let width = 100;
  let height = 100;

  const angle = Math.random() * 2 * Math.PI;
  const speed = 0.5;
  velocity = [Math.cos(angle) * speed, Math.sin(angle) * speed];

  window.requestAnimationFrame(frame);

  function frame() {
    if (velocity[0] > 0 && coords[0] > width) {
      velocity[0] = -1 * Math.abs(velocity[0]);
    }
    if (velocity[0] <= 0 && coords[0] <= 0) {
      velocity[0] = Math.abs(velocity[0]);
    }
    if (velocity[1] > 0 && coords[1] > height) {
      velocity[1] = -1 * Math.abs(velocity[1]);
    }
    if (velocity[1] <= 0 && coords[1] <= 0) {
      velocity[1] = Math.abs(velocity[1]);
    }
    coords[0] = coords[0] + velocity[0];
    coords[1] = coords[1] + velocity[1];
    elem.style.left = coords[0] + "vw";
    elem.style.top = coords[1] + "vh";

    window.requestAnimationFrame(frame);
  }
}

move();
