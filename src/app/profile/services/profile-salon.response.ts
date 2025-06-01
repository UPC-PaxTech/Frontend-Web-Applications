export interface ProfileSalonResponse {
  id: number;
  userId: string;
  salonName: string;
  rating: number;
  profileImage: string;
  coverImage: string;
  socials: {
    instagram: string;
    tiktok: string;
  };
  portfolioImages: string[];
  accounts: {  // Hazlo opcional para actualizaciones parciales
    accountId: string;
    email: string;
    passwordHash: string;
    isActive: boolean;
  };
  Address: string;
  salonemail: string;
}
