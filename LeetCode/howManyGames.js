function howManyGames(p, d, m, s) {
  // Return the number of games you can buy
  let gamesBought = 0;
  while (s >= p) {
    s -= p;
    gamesBought++;
    p = Math.max(p - d, m);
  }
  return gamesBought;
}
