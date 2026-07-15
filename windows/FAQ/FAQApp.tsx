import { faqData } from "./faq.data";

export function FAQApp() {
  return (
    <div className="flex flex-col gap-3 p-4 text-sm">
      {faqData.map((item) => (
        <div key={item.id} className="rounded-md border border-neutral-200 p-3">
          <h3 className="font-bold">{item.question}</h3>
          <p className="mt-1 text-neutral-500">{item.answer}</p>
        </div>
      ))}
    </div>
  );
}
