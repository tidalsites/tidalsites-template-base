import Link from "next/link";

type Props = {
  href: "/" | "/about" | "/services" | "/portfolio" | "/contact";
  name: string;
  active: boolean;
};

export const NavLink = ({ href, name, active }: Props) => {
  return (
    <li className="relative">
      <Link
        className={`${active ? "text-accent hover:text-white border-b rounded-none hover:rounded-lg hover:border-none border-b-accent" : "text-white"} uppercase transition-colors hover:bg-accent hover:outline-zinc-500 outline outline-1 outline-transparent px-2 py-1 rounded-lg`}
        href={href}
      >
        {name}
      </Link>
    </li>
  );
};
