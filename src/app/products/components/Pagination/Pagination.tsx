import styles from "./Pagination.module.css";
import { useRouter } from "next/navigation";

type Props = {
  totalProductsCount: number;
  page: number;
};

const Pagination = ({ totalProductsCount, page }: Props) => {
  const router = useRouter();
  const handlePageChange = (newPage: number) => {
    if (newPage === 1) {
      router.push("/products");
      return;
    }
    router.push(`/products?page=${newPage}`);
  };

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => handlePageChange(Number(page) - 1)}
        disabled={Number(page) === 1}
      >
        {"<"}
      </button>
      <div>{page}</div>
      <button
        onClick={() => handlePageChange(Number(page) + 1)}
        disabled={Number(page) === Math.ceil(totalProductsCount / 4)}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
