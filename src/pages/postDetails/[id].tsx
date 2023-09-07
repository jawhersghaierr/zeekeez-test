import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useAppSelector } from "../../hooks/hooks";

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const postId = parseInt(params.id);
  return {
    props: {
      postId,
    },
  };
}

export default function PostDetails({ postId }: { postId: number }) {
  const router = useRouter();
  const posts = useAppSelector((state) => state.postSlice.posts);
  const post = posts.find((p) => p.id === postId);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="center-content mt-5">
      <div className="smallContainer">
        <h1 className="smallTitle">Détail du post: {postId}</h1>
      </div>
      <div className="smallContainer">
        <h3 className="smallTitle">{post?.title}</h3>
        <p className="smallContent">{post?.body}</p>
      </div>
    </div>
  );
}
