
export class SalonProfile {
  profileId: number;
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
  address: string;
  email: string;

  accounts: {
    accountId: string;
    email: string;
    passwordHash: string;
    isActive: boolean;
  }


  constructor() {
    this.profileId = 0;
    this.userId = '';
    this.salonName = '';
    this.rating = 0;
    this.profileImage = '';
    this.coverImage = '';
    this.socials = { instagram: '', tiktok: '' };
    this.portfolioImages = [];
    this.address = '';
    this.email = '';
    this.accounts = {
      accountId: '', email: '', passwordHash: '', isActive: false
    };
  }
}
