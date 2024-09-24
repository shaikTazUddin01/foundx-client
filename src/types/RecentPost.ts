export interface IPost {
  _id: string;
  title: string;
  description: string;
  images: string[] | [];
  location: string;
  city: string;
  dateFound: string;
  status: string;
  isReported: boolean;
  reportCount: number;
  category: ICategory;
  user: IUser;
  questions: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ICategory {
  _id: string;
  name: string;
  postCount: number;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IUser {
  _id: |undefined;
  name: string|undefined;
  role: string|undefined;
  email: string|undefined;
  status: string|undefined;
  mobileNumber: string|undefined;
  profilePhoto: string|undefined;
  createdAt?: string|undefined;
  updatedAt?: string|undefined;
  __v?: number|undefined;
}
