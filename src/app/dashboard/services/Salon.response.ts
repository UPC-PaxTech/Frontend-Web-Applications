export interface SalonsResponse {
  status: string;
  salons: SalonsResource[];
}

export interface SalonsResource {
  name: string;
  salonId: string;
  location: string;
  phone: number;
  imageURL: string;
}
