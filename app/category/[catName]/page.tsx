import NavCategories from "@/components/NavCategories";

type protTypes = {
  params: {
    catName: String;
  };
};

const CategoryPage = ({ params }: protTypes) => {
  return (
    <div className="">
      <NavCategories />
      <div className="flex items-center justify-center mt-6">
        
        <h1 className="mx-auto text-4xl">{params.catName}</h1>
      </div>
    </div>
  );
};

export default CategoryPage;
