import { Module } from '@nestjs/common';
import { PrismaColorsRepository } from '../colors/infrastructure/repository/prisma-colors.repository';
import { ColorsController } from '../colors/presentation/http/colors.controller';
import { FindAllUseCase } from '../colors/core/application/useCases/find-all.use-case';
import { ColorHttpPresenter } from '../colors/presentation/http/presenter/color-http.presenter';
import { ColorRepository } from '../colors/core/application/port/colors.repository';
import { PrismaModule } from '../../prisma/prisma.module';
import { CreateUseCase } from '../colors/core/application/useCases/create.use-case';
import { FigmaModule } from './figma.module';

@Module({
  imports: [PrismaModule, FigmaModule],
  controllers: [ColorsController],
  providers: [
    FindAllUseCase,
    CreateUseCase,
    {
      provide: ColorRepository,
      useClass: PrismaColorsRepository,
    },
    ColorHttpPresenter,
  ],
})
export class ColorsModule {}
