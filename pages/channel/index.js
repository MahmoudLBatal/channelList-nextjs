import styles from "../../styles/Channel.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { playlists: data },
  };
};

const Channel = ({ playlists }) => {
  return (
    <div>
      <h1>All Playlists</h1>
      {playlists.map((playlist) => (
        <Link href={`/channel/${playlist.id}`} key={playlist.id}>
          <a className={styles.single}>
            <h3>{playlist.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Channel;
