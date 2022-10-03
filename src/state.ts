type Play = "piedra" | "papel" | "tijeras";

type Game = {
  miPlay: Play;
  computerPlay: Play;
};
type Gameresult = "win" | "lose" | "tie";

const state = {
  data: {
    game: {
      miPlay: "",
      computerPlay: "",
    },
    scores: {
      win: 0,
      lose: 0,
      tie: 0,
    },
  },
  listeners: [], // los callbacks
  init() {
    const localData = localStorage.getItem("saved-state");
    if (!localData) {
      let data = this.data;
      this.setState(data);
    } else {
      this.setState(JSON.parse(localData));
    }
  },

  getState() {
    return this.data;
  },

  setState(newState: any[]) {
    this.data = newState;
    for (const callback of this.listeners) {
      callback();
    }
    localStorage.setItem("saved-state", JSON.stringify(newState));
  },

  subscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },

  setPlayerPlay(playerPlay: Play) {
    const currentState = this.getState();
    currentState.game.miPlay = playerPlay;
    this.setState(currentState);
  },

  refreshPlayerPlay() {
    const currentState = this.getState();
    currentState.game.miPlay = "";
    this.setState(currentState);
  },

  setComputerPlay() {
    const currentState = this.getState();
    const computerMove = ["tijeras", "papel", "piedra"];
    const randomMove = Math.floor(Math.random() * 3);
    currentState.game.computerPlay = computerMove[randomMove];
    this.setState(currentState);
  },

  whoWins(turn: Game) {
    let result;

    // EMPATO

    if (turn.miPlay === turn.computerPlay) {
      result = "tie";
      return result;
    }

    // JUEGO PIEDRA

    if (turn.miPlay == "piedra" && turn.computerPlay == "tijeras") {
      result = "win";
    } else if (turn.miPlay == "piedra" && turn.computerPlay == "papel") {
      result = "lose";
    }

    // JUEGO PAPEL

    if (turn.miPlay == "papel" && turn.computerPlay == "piedra") {
      result = "win";
    } else if (turn.miPlay == "papel" && turn.computerPlay == "tijeras") {
      result = "lose";
    }

    // JUEGO TIJERAS

    if (turn.miPlay == "tijeras" && turn.computerPlay == "papel") {
      result = "win";
    } else if (turn.miPlay == "tijeras" && turn.computerPlay == "piedra") {
      result = "lose";
    }

    return result;
  },

  scoreModifier(result: Gameresult) {
    const cs = this.getState();

    if (result == "win") {
      cs.scores.win++;
    }
    if (result == "lose") {
      cs.scores.lose++;
    }
    if (result == "tie") {
      cs.scores.tie++;
    }

    this.setState(cs);
  },
};

export { state };
