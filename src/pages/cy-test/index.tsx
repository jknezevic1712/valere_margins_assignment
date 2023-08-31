import Link from "next/link";

const CyTest = () => {
  return (
    <div>
      <Link href="/about/">
        <a data-cy="nav-item">About</a>
      </Link>
      <button onClick={() => console.log("Clicked!")} data-cy="mmenu-btn">
        MMenu
      </button>
    </div>
  );
};

export default CyTest;
