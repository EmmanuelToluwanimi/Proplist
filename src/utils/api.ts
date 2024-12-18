import { baseUrl } from ".";
import { Paging, ResponsePacket } from "./interface";

export async function ApiGetProperties(params: Paging) {
  try {
    const response = await fetch(
      `${baseUrl}/api/properties?limit=${params.limit}&offset=${params.offset}`
    );
    const res = await response.json();
    return res as ResponsePacket;
  } catch (error) {
    throw error;
  }
}

export async function ApiGetPropertyById(id: number) {
  try {
    const response = await fetch(`${baseUrl}/api/properties/${id}`);
    const res = await response.json();
    return res as ResponsePacket;
  } catch (error) {
    throw error;
  }
}
