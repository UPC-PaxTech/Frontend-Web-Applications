// Salon.response.ts
export interface SalonsResource {
  id: number
  name: string;
  salonId: string;
  location: string;
  imageURL: string;
  phone: number;  // Changed from number to string since your API returns strings
}
