import Link from "next/link";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
export const Footer = () => {
  return (
    <div className="py-4 px-2 mt-20">
      <div className="w-fit mx-auto">
        <nav className="px-4 py-2" aria-label="Footer Navigation">
          <ul className="flex flex-wrap gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-2 items-center w-fit mx-auto">
          <a
            target="_blank"
            href="https://www.facebook.com/"
            aria-label="Facebook"
            className="w-10 h-10 grid place-content-center rounded-full"
          >
            <FaFacebook className="text-2xl" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com"
            aria-label="Instagram"
            className="w-10 h-10 grid place-content-center rounded-full"
          >
            <FaInstagram className="text-2xl" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com"
            aria-label="Linkedin"
            className="w-10 h-10 grid place-content-center rounded-full"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <Link
            href="/contact"
            className="w-10 h-10 grid place-content-center rounded-full"
            aria-label="email"
          >
            <FaEnvelope className="text-2xl" />
          </Link>
          <a
            href="tel:123-456-7890"
            className="w-10 h-10 grid place-content-center rounded-full"
            aria-label="phone"
          >
            <FaPhone className="text-xl" />
          </a>
        </div>
      </div>
      <div>
        <span>
          Designed by <a href="https://tidalsites.com">Tidal Sites</a>
        </span>
      </div>
    </div>
  );
};
