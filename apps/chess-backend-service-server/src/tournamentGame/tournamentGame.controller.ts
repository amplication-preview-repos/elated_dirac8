import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TournamentGameService } from "./tournamentGame.service";
import { TournamentGameControllerBase } from "./base/tournamentGame.controller.base";

@swagger.ApiTags("tournamentGames")
@common.Controller("tournamentGames")
export class TournamentGameController extends TournamentGameControllerBase {
  constructor(protected readonly service: TournamentGameService) {
    super(service);
  }
}
