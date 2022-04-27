import { DropzoneConfigInterface } from "ngx-dropzone-wrapper";

export interface PlantItem {
    id: number;
    name: string;
    category: string;
    sowDate: string;
    bloomDate: string;
    harvestDate: string;
    rating: number;
    saveSeed: boolean;
    note: string;
    order: number;
}

export function emptyItem(): PlantItem {
    return {
        id: 0,
        name: "",
        category: "",
        sowDate: "",
        bloomDate: "",
        harvestDate: "",
        rating: 1,
        saveSeed: false,
        note: "",
        order: 0,
    };
}

export interface NewPlantItem {
    name: string;
    category: string;
}

export interface CommonResult {
    success: boolean;
    message: string;
}

export interface NewItemLog {
    plantItemId: number;
    log: string;
    image?: string;
}

export interface ItemLog {
    id: number;
    plantItemId: number;
    log: string;
    image: string;
    createDate: string;
    showMenu?: boolean;
}

export interface ItemOrder {
    id: number;
    order: number;
}