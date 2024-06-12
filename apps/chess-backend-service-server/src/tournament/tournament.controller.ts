import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TournamentService } from "./tournament.service";
import { TournamentControllerBase } from "./base/tournament.controller.base";

@swagger.ApiTags("tournaments")
@common.Controller("tournaments")
export class TournamentController extends TournamentControllerBase {
  constructor(protected readonly service: TournamentService) {
    super(service);
  }
}
