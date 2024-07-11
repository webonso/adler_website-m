import ContactForm from '@/app/contact/contactForm';


export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};

export default function ContactUs() {
  return (
    <>
      <main>
        <div className="h-screen w-full relative aspect-auto"></div>
        <ContactForm />
      </main>
    </>
  );
}
