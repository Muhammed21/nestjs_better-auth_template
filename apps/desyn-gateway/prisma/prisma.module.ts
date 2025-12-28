import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // ⚠️ Important : rend le service disponible partout
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Permet aux autres modules de l'utiliser
})
export class PrismaModule {}
