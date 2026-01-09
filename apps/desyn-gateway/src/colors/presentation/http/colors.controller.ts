import { Body, Controller, Get, Post, Query, UsePipes } from '@nestjs/common';
import { paginationQuerySchema, createColorTokenSchema } from '@desyn/types';
import { ColorHttpPresenter } from './presenter/color-http.presenter';
import { ColorQuery } from '../../core/domain/value-objects/color-query.vo';
import { FindAllQueryHttpDTO } from './dto/findAll/find-all.query.dto';
import { type FindAllResponseHttpDTO } from './dto/findAll/find-all.response.dto';
import { ColorRepository } from '../../core/application/port/colors.repository';
import { ZodValidationPipe } from '../../../shared/presentation/pipes/zod-validation.pipe';
import { CreateQueryHttpDTO } from './dto/create/create.query.dto';
import { CreateResponseHttpDTO } from './dto/create/create.response.dto';
import { ColorCreateQuery } from '../../core/domain/value-objects/color-create-query.vo';
import { ColorCreateHttpPresenter } from './presenter/color-create-http.presenter';
import { AllowAnonymous } from '@thallesp/nestjs-better-auth';

@Controller('colors')
export class ColorsController {
  constructor(private readonly repository: ColorRepository) {}

  @Get()
  @UsePipes(new ZodValidationPipe(paginationQuerySchema))
  async findAll(
    @Query() query: FindAllQueryHttpDTO,
  ): Promise<FindAllResponseHttpDTO> {
    const domainQuery = ColorQuery.create(query);
    const colors = await this.repository.findAll(domainQuery);

    return ColorHttpPresenter.toPaginatedResponse(colors, domainQuery);
  }

  @Post('create')
  @UsePipes(new ZodValidationPipe(createColorTokenSchema))
  async create(
    @Body() body: CreateQueryHttpDTO,
  ): Promise<CreateResponseHttpDTO> {
    const domainQuery = ColorCreateQuery.create(body);
    const colorCreate = await this.repository.create(domainQuery);

    return ColorCreateHttpPresenter.toResponse(colorCreate);
  }
}
