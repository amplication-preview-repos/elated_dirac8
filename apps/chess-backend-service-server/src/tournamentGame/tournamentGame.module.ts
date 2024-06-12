import { Module } from "@nestjs/common";
import { TournamentGameModuleBase } from "./base/tournamentGame.module.base";
import { TournamentGameService } from "./tournamentGame.service";
import { TournamentGameController } from "./tournamentGame.controller";
import { TournamentGameResolver } from "./tournamentGame.resolver";

@Module({
  imports: [TournamentGameModuleBase],
  controllers: [TournamentGameController],
  providers: [TournamentGameService, TournamentGameResolver],
  exports: [TournamentGameService],
})
export class TournamentGameModule {}
