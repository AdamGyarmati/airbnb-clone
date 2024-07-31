export type SearchQuery = {
  country: string | undefined;
  checkIn: Date | undefined | null;
  checkOut: Date | undefined | null;
  guests: number;
  bathrooms: number;
  bedrooms: number;
  category: string;
}