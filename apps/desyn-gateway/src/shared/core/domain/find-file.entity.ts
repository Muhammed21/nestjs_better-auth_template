export class FindFile {
  constructor(
    public readonly id: string,
    /**
     * Nom du fichier
     */
    public readonly fileName: string,
    /**
     * Date de la dernière modification
     */
    public readonly lastModified: Date,
  ) {}
}
