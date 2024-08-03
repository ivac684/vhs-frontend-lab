interface VHSForm {
    id?: number;
    title: string;
    description: string;
    genre: string;
    duration: number;
    releasedAt: number;
    rentalPrice: number;
    rentalDuration: number;
    quantity: number;
    thumbnail: string | File;
  }