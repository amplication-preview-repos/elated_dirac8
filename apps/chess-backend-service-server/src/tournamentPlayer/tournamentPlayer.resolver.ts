import * as graphql from "@nestjs/graphql";
import { TournamentPlayerResolverBase } from "./base/tournamentPlayer.resolver.base";
import { TournamentPlayer } from "./base/TournamentPlayer";
import { TournamentPlayerService } from "./tournamentPlayer.service";

@graphql.Resolver(() => TournamentPlayer)
export class TournamentPlayerResolver extends TournamentPlayerResolverBase {
  constructor(protected readonly service: TournamentPlayerService) {
    super(service);
  }
}
