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
