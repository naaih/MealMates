import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  return (
    <div className="flex flex-col gap-12">
      {/* <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16 md:px-32">
        <h1 className="text-5xl font-bold tracking-tight text-purple-600">
          MealMates
        </h1>
      </div> */}
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center ">
        <h1 className="text-4xl font-bold tracking-tight text-teal-600">
          Deliciousness delivered just for you!
        </h1>
        <span className="text-xl">Your food is just a click away! 😄</span>
        <SearchBar placeHolder="Search by " onSubmit={handleSearchSubmit} />
      </div>
    </div>
  );
};

export default HomePage;
