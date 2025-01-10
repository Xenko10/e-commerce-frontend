import styles from "./Pagination.module.css";
import { useRouter } from "next/navigation";
import IconChevron from "../../../../../public/icons/IconChevron";

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

  if (Number(page) > Math.ceil(totalProductsCount / 4)) {
    router.push("/products");
  }

  return (
    <div className={styles.pagination}>
      <button
        className={`${styles.chevron} ${styles.leftArrow}`}
        onClick={() => handlePageChange(Number(page) - 1)}
        disabled={Number(page) === 1}
      >
        <IconChevron />
      </button>
      <div>{page}</div>
      <button
        className={styles.chevron}
        onClick={() => handlePageChange(Number(page) + 1)}
        disabled={Number(page) === Math.ceil(totalProductsCount / 4)}
      >
        <IconChevron />
      </button>
    </div>
  );
};

export default Pagination;
