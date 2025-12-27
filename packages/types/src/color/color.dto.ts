import { PaginationQueryDTO } from "../common/pagination.query.dto";

export interface ColorTokenDTO {
  /**
   * Identifiant stable du token
   * ex: "primary-500"
   */
  tokenId: string;

  /**
   * Chemin sémantique
   * ex: "primary.500"
   */
  tokenPath: string;

  /**
   * Valeur brute de la couleur
   */
  resolvedColor: {
    hexValue: string;
    rgbValue: string;
    hslValue: string;
    oklchValue: string;
  };
}

export interface CreateColorTokenDTO {
  /**
   * Identifiant stable du token
   * ex: "primary-500"
   */
  tokenId: string;

  /**
   * Chemin sémantique
   * ex: "primary.500"
   */
  tokenPath: string;

  /**
   * Identifiant de la relation parente
   */
  parentRelationId: string;

  /**
   * Valeur hexadécimale de la couleur
   */
  hexValue?: string;

  /**
   * Valeur HSL de la couleur
   */
  hslValue?: string;

  /**
   * Valeur OKLCH de la couleur
   */
  oklchValue?: string;

  /**
   * Valeur RGB de la couleur
   */
  rgbValue?: string;
}
