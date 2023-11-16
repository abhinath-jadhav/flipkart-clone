import { Container, SearchBody, SearchHeader, SideBar } from "../../components";

const SearchResult = () => {
  return (
    <div>
      <div className="bg-white py-1">
        <Container>
          <SearchHeader />
        </Container>
      </div>
      <div className="grid grid-cols-5 mx-4 mt-2">
        <SideBar className="col-span-1 mr-2 px-2 py-1 h-screen" />
        <SearchBody className="col-span-4 ml-1 px-2 py-1" />
      </div>
    </div>
  );
};

export default SearchResult;
