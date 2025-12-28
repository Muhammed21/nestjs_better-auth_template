import { Injectable } from '@nestjs/common';
import { ColorRepository } from '../../core/application/port/colors.repository';
import { ColorToken } from '../../core/domain/color.entity';
import { ColorQuery } from '../../core/domain/value-objects/color-query.vo';
import { PrismaService, Prisma } from '../../../../prisma/prisma.service';
import { ColorCreateQuery } from '../../core/domain/value-objects/color-create-query.vo';
import { ColorCreate } from '../../core/domain/color-create.entity';
import { ColorCreateManyQuery } from '../../core/domain/value-objects/color-create-many-query.vo';
import { ColorCreateMany } from '../../core/domain/color-create-many.entity';
import { FigmaMethodeRepository } from '../../../shared/core/application/port/figma-methode.repository';

@Injectable()
export class PrismaColorsRepository implements ColorRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly figmaRepository: FigmaMethodeRepository,
  ) {}

  async findAll(query: ColorQuery): Promise<ColorToken[]> {
    const records = await this.prisma.colorToken.findMany({
      skip: (query.page - 1) * query.limit,
      take: query.limit,

      orderBy: {
        [query.sortBy]: query.order,
      },
    });

    return records.map(
      (record) =>
        new ColorToken(record.id, record.tokenId, record.tokenPath, {
          hexValue: record.hexValue ?? '',
          rgbValue: record.rgbValue ?? '',
          hslValue: record.hslValue ?? '',
          oklchValue: record.oklchValue ?? '',
        }),
    );
  }

  async create(query: ColorCreateQuery): Promise<ColorCreate> {
    const { parentRelationId, ...colorTokenData } = query;
    try {
      await this.prisma.colorToken.create({
        data: {
          ...colorTokenData,
          designSystemId: parentRelationId,
        },
      });

      return new ColorCreate('201');
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          /**
           * Conflict - contrainte d'unicité
           */
          return new ColorCreate('409');
        }
        /**
         * Not Found - clé étrangère invalide
         */
        if (error.code === 'P2003') {
          return new ColorCreate('404');
        }
      }

      console.error(error);
      return new ColorCreate('500');
    }
  }

  createMany(
    query: ColorCreateManyQuery,
    bearerToken: string,
  ): Promise<ColorCreateMany> {
    throw new Error('Not implemented yet');
  }
}
