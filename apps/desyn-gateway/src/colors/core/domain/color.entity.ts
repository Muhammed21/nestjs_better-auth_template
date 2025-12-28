export class ColorToken {
  constructor(
    public readonly id: string,
    /**
     * Identifiant stable et technique
     * ex: "primary-500", "gray-900"
     */
    public readonly tokenId: string,
    /**
     * Chemin sémantique du token
     * ex: "primary.500", "neutral.background"
     */
    public readonly tokenPath: string,
    /**
     * Valeur de la couleur
     */
    public readonly resolvedColor: {
      hexValue: string;
      rgbValue: string;
      hslValue: string;
      oklchValue: string;
    },
  ) {}
}
