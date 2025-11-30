
import HeaderDescription from "./HeaderDescription"

const sectionHeaderDetails = [
  {
    title: "Explore Categories",
    descrip1: "Shop Harvested Products By Categories",
    descrip2:
      "From fruits to grains, explore all harvest categories in one place.",
  },
];
const CategoriesNav = ()=>{
	return (

		<>
			<section>
			<HeaderDescription details={sectionHeaderDetails} />
			</section>
		</>
		)
}

export default CategoriesNav;