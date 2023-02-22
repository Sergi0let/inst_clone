import Post from './Post';

export default function Posts() {
  const posts = [
    {
      id: '1',
      username: 'fox mounder',
      userImg:
        'https://www.akc.org/wp-content/uploads/2021/05/French-Bulldog-puppy-head-portrait-outdoors-500x485.jpeg',
      img: 'https://images.unsplash.com/photo-1677011555044-b38992539a9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      caption:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    },
    {
      id: '2',
      username: 'sky walker',
      userImg:
        'https://www.akc.org/wp-content/uploads/2021/05/French-Bulldog-puppy-head-portrait-outdoors-500x485.jpeg',
      img: 'https://images.unsplash.com/photo-1677014807699-85d9639e957f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      caption:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    },
  ];

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}
