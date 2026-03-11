import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Enquiry {
    propertyType: string;
    name: string;
    email: string;
    suburb: string;
    message: string;
    timestamp: bigint;
    phone: string;
}
export interface backendInterface {
    getAllEnquiries(): Promise<Array<Enquiry>>;
    submitEnquiry(name: string, phone: string, email: string, suburb: string, propertyType: string, message: string): Promise<void>;
}
