export type CreateCategory = {
  name: string;
  image?: string;
  description?: string;
};

export interface Category {
  createdAt: string;
  description?: string | null;
  id: string;
  image?: string | null;
  isActive: boolean;
  orderCount: number;
  slug: string;
  name: string;
  updatedAt: string;
}

//   id          String  @id @default(uuid())
//   name        String  @unique
//   slug        String  @unique
//   isActive    Boolean @default(true)
//   description String? @db.VarChar(255)

//   products ProductDiet[]

//   createdAt DateTime @default(now())
//   updatedAt DateTime @default(now()) @updatedAt

export interface Diets {
  id: string;
  name: string;
  slug: string;
  isActive?: boolean;
  description?: string;
  updatedAt?: string;
  createdAt: string;
}

export type CreateDiets = {
  name: string;
  description?: string | undefined;
};

export interface CreateProducts {
  name: string;
  description?: string;
  price: number;
  categoryId: string;
  stock?: number; // ✅ change here
  discount?: number;
  image?: string;
  diets?: string[];
}
