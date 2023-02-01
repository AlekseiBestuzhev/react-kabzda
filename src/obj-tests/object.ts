type StreetType = {
	title: string,
	area?: string
}

type AddressType = {
	number?: number,
	street: StreetType
}

type HouseType = {
	buildedAt: number,
	repaired: boolean,
	address: AddressType
}

type govBildType = {
	type: string,
	budget: number,
	staffCount: number,
	address: AddressType
}

export type CityType = {
	title: string,
	houses: HouseType[],
	governmentBuildings: govBildType[],
	citizensNumber: number
}