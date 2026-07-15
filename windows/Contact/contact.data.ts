export interface ContactLink {
  id: string;
  label: string;
  href: string;
}

export interface ContactData {
  email: string;
  links: ContactLink[];
}

export const contactData: ContactData = {
  email: "hello@example.com",
  links: [{ id: "github", label: "GitHub", href: "https://github.com/" }],
};
