import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TournamentPlayerServiceBase } from "./base/tournamentPlayer.service.base";

@Injectable()
export class TournamentPlayerService extends TournamentPlayerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
