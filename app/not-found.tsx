import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container page">
      <header className="page-head">
        <h1 className="display">This page has wandered off.</h1>
        <p>
          <Link href="/" className="btn btn-primary">
            Back to the homepage
          </Link>
        </p>
      </header>
    </div>
  );
}
