import { useParams, useNavigate } from "react-router-dom";

const posts = [
  { id: 1, title: "React Basics", content: "React is a JS library..." },
  { id: 2, title: "Advanced Hooks", content: "Hooks like useMemo..." },
];

export default function BlogDetail() {
  const { id } = useParams(); // get ID from URL
  const navigate = useNavigate();

  const post = posts.find((p) => p.id === Number(id));

  if (!post) return <h2>Post not found</h2>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={() => navigate("/blog")}>🔙 Back to Blog</button>
    </div>
  );
}
