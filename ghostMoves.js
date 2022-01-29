import { DIRECTIONS, OBJECT_TYPE } from "./setup";

//Primitive random movement
export function randomMovement(position, direction, objectExist) {
  //Create an array from the directiosn object keys
  const keys = Object.keys(DIRECTIONS);

  while (
    objectExist(nextMovePos, OBJECT_TYPE.WALL) ||
    objectExist(nextMovePos, OBJECT_TYPE.GHOST)
  ) {
    //Get a random key from the key array
    const key = keys[Math.floor(Math.random() * keys.length)];
    //Set the next move
    dir = DIRECTIONS[key];
    //Set the next move
    nextMovePos = position + dir.movement;
  }
}
