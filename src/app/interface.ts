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
}

export interface NewPlantItem {
    name: string;
    category: string;
}

export interface CommonResult {
    success: boolean;
    message: string;
}
