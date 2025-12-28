export class ColorQuery {
  public constructor(
    public readonly page: number,
    public readonly limit: number,
    public readonly sortBy: string,
    public readonly order: 'asc' | 'desc',
  ) {}

  static create(props: {
    page?: number;
    limit?: number;
    sortBy?: string;
    order?: 'asc' | 'desc';
  }) {
    return new ColorQuery(
      props.page ?? 1,
      props.limit ?? 10,
      props.sortBy ?? 'tokenId',
      props.order ?? 'asc',
    );
  }
}
