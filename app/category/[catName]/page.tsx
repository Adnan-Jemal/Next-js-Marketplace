import NavCategories from "@/components/header/NavCategories";
import Navbar from "@/components/header/Navbar";

type protTypes = {
  params: {
    catName: String;
  };
};

const CategoryPage = ({ params }: protTypes) => {
  return (
    <>
      <Navbar />
      <NavCategories />
      <div className="">
        <div className="flex items-center justify-center mt-6">
          <h1 className="mx-auto text-4xl">{params.catName.toLocaleUpperCase()}</h1>
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
