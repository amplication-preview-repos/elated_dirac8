import * as graphql from "@nestjs/graphql";
import { TournamentResolverBase } from "./base/tournament.resolver.base";
import { Tournament } from "./base/Tournament";
import { TournamentService } from "./tournament.service";

@graphql.Resolver(() => Tournament)
export class TournamentResolver extends TournamentResolverBase {
  constructor(protected readonly service: TournamentService) {
    super(service);
  }
}
