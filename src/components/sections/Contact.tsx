import { appConfig } from "@/config/app";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
        <div className="max-w-lg mx-auto">
          <form action={appConfig.formcarry} method="POST" encType="multipart/form-data">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Input placeholder="Name" name="name" />
              <Input placeholder="Email" type="email" name="email" />
            </div>
            <Input placeholder="Subject" className="mb-4" name="subject" />
            <textarea
              placeholder="Message"
              className="w-full p-2 border rounded-md mb-4"
              name="message"
            ></textarea>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
