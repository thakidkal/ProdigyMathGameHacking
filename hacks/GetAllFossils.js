// Gives you all fossils from Dyno Dig Oasis.
PIXI.game.prodigy.player.backpack.data.fossil=[]
x = PIXI.game.state.states.Boot._gameData.fossil
for (i in x) {
    PIXI.game.prodigy.player.backpack.data.fossil[i] = {"ID": x[i].ID, "N": 1}
}
