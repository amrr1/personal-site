import { contactData } from "./contact.data";

export function ContactApp() {
  return (
    <div className="flex flex-col gap-3 p-4 text-sm">
      <p>
        Reach me at{" "}
        <a href={`mailto:${contactData.email}`} className="font-medium underline">
          {contactData.email}
        </a>
      </p>
      <div className="flex gap-3">
        {contactData.links.map((link) => (
          <a key={link.id} href={link.href} className="underline">
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
