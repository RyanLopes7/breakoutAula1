var ball, edges, paddle, brick;
function setup() {
  createCanvas(400, 400);
  //comando da bola
  ball = createSprite(300, 300, 20, 20);
  ball.shapeColor = "white";

  //comando da raquete
  paddle = createSprite(300, 350, 120, 10);
  paddle.shapeColor = "white";

  //velocidade da bola
  ball.velocityY = -5;
  ball.velocityX = -7;

  //criando as bordas de tela
  edges = createEdgeSprites();

  brinks = createGroup();

  createRow(0, "red");
  createRow(29, "yellow");
  createRow(29 + 29, "green");
  createRow(29 + 29 + 29, "blue");
}

function draw() {
  background(0);

  for (i = 0; i < 3; i++) {
    ball.bounceOff(edges[i]);
  }

  paddle.collide(edges);
  ball.bounceOff(paddle);
  ball.bounceOff(brinks);

  if (keyDown(LEFT_ARROW)) {
    paddle.velocityX = -6;
  }

  if (keyDown(RIGHT_ARROW)) {
    paddle.velocityX = 6;
  }

  drawSprites();
}

function createRow(y, color) {
  for (i = 0; i < 6; i++) {
    brick = createSprite(65 + 54 * i, y + 50, 50, 25);
    brick.shapeColor = color;
    brinks.add(brick);
  }
}
