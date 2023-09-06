import React, { useEffect, useState } from "react";
import styles from "./PostList.module.css";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { RootState } from "@/redux/store";
import { fetchPosts, setCurrentPage } from "@/redux/slices/PostSlice";
import Link from "next/link";

interface PostListProps {
  page: number;
  onPageChange: (page: number) => void;
}
const PostList: React.FC<PostListProps> = ({ page, onPageChange }) => {
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const { posts, currentPage, postsPerPage } = useAppSelector(
    (state: RootState) => state.postSlice
  );

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handlePageChange = (newPage: number) => {
    dispatch(setCurrentPage(newPage));
  };

  // Filtrer les posts en fonction de la valeur de recherche
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  return (
    <div className={styles.postList}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Rechercher par titre..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <ul>
        {currentPosts.map((post) => (
          <li key={post.id}>
            <Link href={`/postDetails/${post.id}`}>{post.title}</Link>
            <p>{post.body.slice(0, 50)}...</p>
          </li>
        ))}
      </ul>
      <div className={styles.pagination}>
        {/* <p>Total : {totalPosts}</p>
          <p>Nombre de pages : {totalPages}</p> */}
        <p>
          {indexOfFirstPost + 1} to {Math.min(indexOfLastPost, totalPosts)} of{" "}
          {totalPosts}
        </p>
        <>
          <button
            className={styles["pagination-button"]}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Précédent
          </button>
          <p>
            page {currentPage} of {totalPages}
          </p>

          <button
            className={styles["pagination-button"]}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Suivant
          </button>
        </>
      </div>
    </div>
  );
};

export default PostList;
