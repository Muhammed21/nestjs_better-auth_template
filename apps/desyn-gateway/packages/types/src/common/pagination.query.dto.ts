export interface PaginationQueryDTO {
  /**
   * Page number (default: 1)
   */
  page?: number;

  /**
   * Number of items per page (default: 10)
   */
  limit?: number;

  /**
   * Field to sort by (default: "name")
   */
  sortBy?: string;

  /**
   * Sort order (default: "asc")
   */
  order?: "asc" | "desc";
}
