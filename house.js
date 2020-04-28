class House {
	constructor(bedrooms, occupants) {
		this.bedrooms = bedrooms;
		this.occupants = occupants;
	}
	
	occupants_per_room() {
		return this.bedrooms/occupants
	}
}

my_house = new House(5,4)
console.log(my_house.occupants_per_room())