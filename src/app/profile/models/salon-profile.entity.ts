
export class SalonProfile {
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

  constructor() {
    this.profileId = '';
    this.userId = '';
    this.salonName = '';
    this.rating = 0;
    this.profileImage = '';
    this.coverImage = '';
    this.socials = { instagram: '', tiktok: '' };
    this.portfolioImages = [];
  }
}
