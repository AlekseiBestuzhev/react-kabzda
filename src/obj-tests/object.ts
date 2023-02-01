type StreetType = {
    title: string,
    area?: string
}

type AddressType = {
    number: number,
    street: StreetType
}

type HouseType = {
    buildedAt: number,
    repaired: boolean,
    address: AddressType
}

export type CityType = {
    title: string,
    houses: HouseType[],
    governmentBuildings: string[],
    citizensNumber: number
}