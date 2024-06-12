import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TournamentPlayerService } from "./tournamentPlayer.service";
import { TournamentPlayerControllerBase } from "./base/tournamentPlayer.controller.base";

@swagger.ApiTags("tournamentPlayers")
@common.Controller("tournamentPlayers")
export class TournamentPlayerController extends TournamentPlayerControllerBase {
  constructor(protected readonly service: TournamentPlayerService) {
    super(service);
  }
}
