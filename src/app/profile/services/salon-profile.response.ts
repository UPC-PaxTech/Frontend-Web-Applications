export interface SalonProfileResponse {
  profileId: string;
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
}
