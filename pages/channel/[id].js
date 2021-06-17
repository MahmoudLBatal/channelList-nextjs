export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = data.map((playlist) => {
    return {
      params: {
        id: playlist.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { playlist: data },
  };
};

const PlayListDetails = ({ playlist }) => {
  return (
    <div>
      <h1>{playlist.name}</h1>
      <p>{playlist.email}</p>
      <p>{playlist.website}</p>
      <p>{playlist?.address?.city}</p>
    </div>
  );
};
export default PlayListDetails;
