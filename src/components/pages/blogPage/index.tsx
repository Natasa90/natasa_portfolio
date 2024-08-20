import { useEffect, useState, FC} from 'react'
import './blogpage.styles.css'

interface Post {
  id: number;
  title: string;
  cover_image: string;
  url: string; 
}

const PostThumbnail: FC<{ post: Post }> = ({ post }) => {
  return (
    <a href={post.url} target="_blank" rel="noopener noreferrer" className="grid-item-link">
      <div className="grid-item">
        <div className="text-overlay">
          <p>{post.title}</p>
        </div>
        <div className="gradient"></div>
        <img src={post.cover_image} alt={post.title} className="cover-image" />
      </div>
    </a>
  );
};

export const BlogPosts = () => {
   const [posts, setPosts] = useState<Post[]>([]);
  
    useEffect(() => {
      getPosts();
    }, []);
  
    const getPosts = async () => {
      try {
        const response = await fetch(
          "https://dev.to/api/articles?username=natasa90&per_page=4"
        );
        const json = await response.json();
        setPosts(json);
      } catch (error) {
        console.log("error", error);
      }
    };
  
    return (
      <div className="blogContainer">
        <h1 className='headerBlog'>
            Latest Blog Posts
        </h1>
        <div className="grid">
          {posts.map((post) => (
            <PostThumbnail post={post} />
          ))}
        </div>
      </div>
    );
  };