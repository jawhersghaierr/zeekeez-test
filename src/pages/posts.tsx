import PostList from "@/components/PostList";
import { useState } from "react";

export default function Posts() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };
  return (
    <div className="center-content mt-5">
      {/* Contenu de votre page */}
      <div>
        <h1>Liste des postes</h1>
        <p>Ceci est un exemple de contenu des posts</p>
        <PostList page={currentPage} onPageChange={handlePageChange} />
      </div>
    </div>
  );
}
