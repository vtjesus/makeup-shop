import ContainerProducts from "src/components/ContainerProducts";
import Product from "src/components/Product";
import { useAppSelector } from "src/types/hooks";

const Search = () => {
  const { filteredItems } = useAppSelector((state) => {
    if (state.search.itemsToSearch === "") {
      return {
        filteredItems: [],
      };
    } else {
      return {
        filteredItems: state.items.filter((item) =>
          item.title
            .toLowerCase()
            .includes(state.search.itemsToSearch.toLowerCase())
        ),
      };
    }
  });

  return (
    <div className="container-xxl mt-3">
      <main>
        {filteredItems.length > 0 ? (
          <ContainerProducts>
            {filteredItems.map((item) => (
              <Product key={item.id} {...item} />
            ))}
          </ContainerProducts>
        ) : (
          <p className="text-center fs-3" style={{ marginTop: "7rem" }}>
            Ми не знайшли результатів для цього пошуку.
          </p>
        )}
      </main>
    </div>
  );
};

export default Search;
