export class ColorCreateQuery {
  constructor(
    public readonly tokenId: string,
    public readonly tokenPath: string,
    public readonly parentRelationId: string,
    public readonly hexValue: string,
    public readonly hslValue: string,
    public readonly oklchValue: string,
    public readonly rgbValue: string,
  ) {}

  static create(props: {
    tokenId: string;
    tokenPath: string;
    parentRelationId: string;
    hexValue?: string;
    hslValue?: string;
    oklchValue?: string;
    rgbValue?: string;
  }) {
    return new ColorCreateQuery(
      props.tokenId,
      props.tokenPath,
      props.parentRelationId,
      props.hexValue ?? '',
      props.hslValue ?? '',
      props.oklchValue ?? '',
      props.rgbValue ?? '',
    );
  }
}
