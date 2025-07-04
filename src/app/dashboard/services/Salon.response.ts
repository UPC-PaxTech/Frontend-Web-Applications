// Salon.response.ts
export interface ProviderProfileResource {
  id: number
  providerId: number;
  companyName: string;
  location: string;
  email: number;
  profileImageURL: string;// Changed from number to string since your API returns strings
  coverImageURL: string;
  socials: [];
  portfolioImages:[]
}
