import { Module } from '@nestjs/common';
import { FigmaMethodeRepository } from '../shared/core/application/port/figma-methode.repository';
import { FigmaRepository } from '../shared/infrastructure/figma/figma.repository';
import { FindFileUseCase } from '../shared/core/application/useCases/find-file.use-case';
import { FindColorTokensUseCase } from '../shared/core/application/useCases/find-color-tokens.use-case';

@Module({
  providers: [
    FindFileUseCase,
    FindColorTokensUseCase,
    {
      provide: FigmaMethodeRepository,
      useClass: FigmaRepository,
    },
  ],
  exports: [FigmaMethodeRepository],
})
export class FigmaModule {}
