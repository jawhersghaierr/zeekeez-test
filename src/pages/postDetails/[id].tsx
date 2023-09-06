import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useAppSelector } from "@/hooks/hooks";

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
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
    </div>
  );
}
