import ComplexSVGAnimation from "../components/ComplexSVGAnimation";
import PostList from "../components/PostList";
import { useEffect, useState } from "react";

export default function Posts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(true);
  const [showOtherContent, setShowOtherContent] = useState(false);
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  // Start the animation when the component mounts
  useEffect(() => {
    const animationDuration = 3000; // Duration in milliseconds
    const timer = setTimeout(() => {
      setIsAnimating(false);

      // After animation stops, show posts content
      setTimeout(() => {
        setShowOtherContent(true);
      }, 300); // Adjust the delay as needed
    }, animationDuration);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className=" mt-5">
      {showOtherContent ? (
        <>
          <div className="smallContainer">
            <h1 style={{ color: "white" }} className="smallTitle p-3">
              Liste des postes
            </h1>
          </div>
          <PostList page={currentPage} onPageChange={handlePageChange} />
        </>
      ) : (
        <ComplexSVGAnimation />
      )}
    </div>
  );
}
