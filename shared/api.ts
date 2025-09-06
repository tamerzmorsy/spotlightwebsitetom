/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
  timestamp?: string;
}

export type PublisherCategory = "Campus" | "Local" | "National" | "Global";

export interface Publisher {
  id: string;
  name: string;
  domain: string;
  category: PublisherCategory;
  tagline?: string;
}

export interface PublishersResponse {
  items: Publisher[];
  nextCursor: number | null;
  total: number;
}
