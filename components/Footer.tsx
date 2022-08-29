import VercelLogo from "./logos/Vercel";

export function Footer() {
  return (
    <footer className="" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="py-8 mx-auto max-w-7xl">
        <div className="md:flex md:items-center md:justify-between">
          <div>
            <a
              className="text-current"
              target="_blank"
              rel="noopener noreferrer"
              href="https://maid.uz"
            >
              <VercelLogo />
            </a>
            <p className="mt-4 text-xs text-gray-500 ">
              &copy; {new Date().getFullYear()} Team Mad Maids. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
