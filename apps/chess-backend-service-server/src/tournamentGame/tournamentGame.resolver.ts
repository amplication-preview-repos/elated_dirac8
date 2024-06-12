import * as graphql from "@nestjs/graphql";
import { TournamentGameResolverBase } from "./base/tournamentGame.resolver.base";
import { TournamentGame } from "./base/TournamentGame";
import { TournamentGameService } from "./tournamentGame.service";

@graphql.Resolver(() => TournamentGame)
export class TournamentGameResolver extends TournamentGameResolverBase {
  constructor(protected readonly service: TournamentGameService) {
    super(service);
  }
}
