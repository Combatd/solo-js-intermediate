var cuboid = {
  length: 25,
  width: 50,
  height: 200
};

function cuboidVolume(length, width, height) {
  return length * width * height;
}

console.log(cuboidVolume(cuboid.length, cuboid.width, cuboid.height));