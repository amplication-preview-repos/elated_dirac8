import { Module } from "@nestjs/common";
import { TournamentPlayerModuleBase } from "./base/tournamentPlayer.module.base";
import { TournamentPlayerService } from "./tournamentPlayer.service";
import { TournamentPlayerController } from "./tournamentPlayer.controller";
import { TournamentPlayerResolver } from "./tournamentPlayer.resolver";

@Module({
  imports: [TournamentPlayerModuleBase],
  controllers: [TournamentPlayerController],
  providers: [TournamentPlayerService, TournamentPlayerResolver],
  exports: [TournamentPlayerService],
})
export class TournamentPlayerModule {}
