import { Game } from "../Game";
import { StateMessage } from "./AblySpectatorConnector";

export interface ISpectatorConnector {
    publish(game: Game);
    subscribe(callback: (state: StateMessage) => void);
}
