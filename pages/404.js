import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => router.push("/"), 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Oooops...</h1>
      <h2>The Page cannot be found.</h2>
      <p>
        Go Back To{" "}
        <Link href="/">
          <a>HomePage</a>
        </Link>
      </p>
    </div>
  );
};
export default NotFound;
