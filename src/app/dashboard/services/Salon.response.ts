// Salon.response.ts
export interface SalonsResource {
  name: string;
  salonId: string;
  location: string;
  phone: number;  // Changed from number to string since your API returns strings
}

// Remove the old SalonsResponse interface and replace with:
export type SalonsResponse = SalonsResource[];
