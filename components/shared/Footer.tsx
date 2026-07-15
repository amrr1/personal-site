import { siteConfig } from "@/config/siteConfig";

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-2 py-4 text-xs text-neutral-500">
      <div className="flex gap-3">
        {siteConfig.socials.map((social) => (
          <a key={social.id} href={social.href} className="hover:underline">
            {social.label}
          </a>
        ))}
      </div>
      <p>
        © {new Date().getFullYear()} {siteConfig.name}
      </p>
    </footer>
  );
}
