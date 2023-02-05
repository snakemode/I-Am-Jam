import { Scoreboard } from "./Scoreboard";
import { IHighScoreRepository } from "./IHighScoreRepository";


export class NullHighScoreRepository implements IHighScoreRepository {
    public async getScoreboard() {
        return new Scoreboard();
    }

    public async subscribe(callback: (scoreboard: Scoreboard) => void) {
    }

    public async updateGlobalScoreboard(name: string, score: number): Promise<Scoreboard> {
        const scoreboard = await this.getScoreboard();
        scoreboard.addRange([{ name, score }]);
        return scoreboard;
    }
}
