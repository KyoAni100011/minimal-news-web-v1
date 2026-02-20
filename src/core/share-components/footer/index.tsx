export default function Footer() {
  const links = [
    { label: "Guidelines", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Lists", href: "#" },
    { label: "API", href: "https://github.com/HackerNews/API" },
    { label: "Security", href: "#" },
    { label: "Legal", href: "#" },
    { label: "Contact", href: "mailto:hn@yoursite.com" },
  ];

  return (
    <footer className="mt-1 text-xs text-gray-500">
      {/* Orange divider */}
      <div className="border-t-2 border-orange-500 mb-2"></div>

      {/* Links */}
      <div className="flex justify-center flex-wrap">
        {links.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            className={`px-2 hover:underline ${
              i !== links.length - 1 ? "border-r border-gray-300" : ""
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Search */}
      <div className="text-center mt-4">
        <form>
          Search:{" "}
          <input
            type="text"
            className="border border-gray-300 px-2 py-1 text-xs focus:outline-none focus:border-orange-500"
          />
        </form>
      </div>
    </footer>
  );
}
