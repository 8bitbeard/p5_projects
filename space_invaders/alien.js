class Alien {

  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.stop = false;
    this.dead = false;
    this.counter = 0;
    this.center = 0;

    this.w = 2;

    this.xdir = 1;
    this.speed = 1;

    this.type = type;

    this.alien_shapes = {
      0: [
        [
          [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
          [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
          [0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0],
          [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
          [0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0],
          [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
          [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
        ], [
          [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
          [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
          [0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0],
          [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
          [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
          [0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0],
          [0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0],
        ]
      ],
      1: [
        [
          [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
          [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
          [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
          [1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
          [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
          [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        ], [
          [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
          [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
          [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
          [0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
          [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
          [0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0],
        ]
      ],
      2: [
        [
          [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
          [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
          [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
          [0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
          [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
          [0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0],
          [0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0],
          [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        ], [
          [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
          [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
          [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
          [0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
          [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
          [0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0],
          [0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0],
          [0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0],
        ]
      ],
    };

    this.explosion = [
      [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
      [0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0],
      [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0],
      [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
    ];

    this.selectType(type)
    this.value = this.setValue(type);
  }

  selectType(type) {
    this.model = this.alien_shapes[type]
  }

  setValue(type) {
    var value;
    switch (type) {
      case 0:
        value = 30;
        break;
      case 1:
        value = 20;
        break;
      case 2:
        value = 10;
        break;
    }
    return value;
  }

  shiftDown() {
    this.xdir *= -1;
    this.x += this.xdir * this.speed
    this.y += this.model[0].length * this.w;
  }

  setSpeed(speed) {
    this.xdir = speed;
  }

  move() {
    if (!this.stop) {
      this.speed += 0.01
      this.x += this.xdir * this.speed;
      this.center = this.x + (this.model[0].length * this.w / 2)
    }
  }

  getBottom() {
    return (createVector(this.x + (this.model[0][0].length * this.w) / 2, this.y + (this.model[0].length * this.w) + 3))
  }

  edge() {
    if (!this.dead) {
      if (this.x + this.model[0][0].length * this.w > width || this.x < 0) {
        return true;
      }
    }
    return false;
  }

  hits(object) {
    return (this.y + this.model.length * this.w > object.y)
  }

  render(object) {
    for (var i = 0; i < object.length; i++) {
      for (var j = 0; j < object[0].length; j++) {
        if (object[i][j] === 1) {
          fill(255);
          rect(
            this.x + (j * this.w),
            this.y + (i * this.w),
            this.w,
            this.w
          )
        }
      }
    }
  }

  show() {
    fill(255);
    noStroke();
    rectMode(CORNER);
    if (this.dead) {
      if (this.counter < 10) {
        this.render(this.explosion)
        this.counter++;
      }
    } else {
      this.render(this.model[floor(frameCount/50) % 2])
    }
  }
}
