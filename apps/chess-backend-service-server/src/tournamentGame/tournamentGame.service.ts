import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TournamentGameServiceBase } from "./base/tournamentGame.service.base";

@Injectable()
export class TournamentGameService extends TournamentGameServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
