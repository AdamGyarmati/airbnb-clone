export type SearchQuery = {
  country: string;
  checkIn: Date | null;
  checkOut: Date | null;
  guests: number;
  bathrooms: number;
  bedrooms: number;
  category: string;
}