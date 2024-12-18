export interface IProperty {
  id: number;
  name: string;
  address: string;
  price: string;
  propertyType: string;
  imageUrl: string;
}

export interface Paging {
  limit?: number;
  offset?: number;
  sort?: string;
}

export interface IPaginationData {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface ResponsePacket {
  status: boolean;
  message: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

export interface IPropertiesResponse {
  pagination: IPaginationData;
  data: IProperty[];
}
