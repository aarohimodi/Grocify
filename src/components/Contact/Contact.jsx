import React from "react";

function Contact() {
  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-400 py-10">
        <div className="mx-auto max-w-6xl px-5 text-center text-white">
          <p className="mb-1 text-xs uppercase tracking-widest text-orange-100">
            We'd Love To Hear From You
          </p>

          <h1 className="text-3xl font-bold">Contact Us</h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mx-auto max-w-5xl px-5 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Info */}
          <div className="rounded-2xl bg-orange-50 p-7">
            <p className="text-sm font-semibold text-orange-500">
              Get In Touch
            </p>

            <h2 className="mt-2 text-2xl font-bold text-zinc-800">
              How can we help you?
            </h2>

            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Have a question about your order or our products? Feel free to
              reach out to us. Our team will be happy to help you.
            </p>

            <div className="mt-7 space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white">
                  📍
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-800">Address</h3>
                  <p className="mt-1 text-sm text-zinc-500">
                    Gurgaon, Haryana, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white">
                  ✉
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-800">Email</h3>
                  <p className="mt-1 text-sm text-zinc-500">
                    support@example.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white">
                  ☎
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-800">Phone</h3>
                  <p className="mt-1 text-sm text-zinc-500">+91 98765 43210</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-zinc-100 p-7 shadow-sm">
            <h2 className="text-2xl font-bold text-zinc-800">
              Send us a message
            </h2>

            <form className="mt-5 space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-lg border border-zinc-200 px-4 py-3 text-sm outline-none transition focus:border-orange-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-lg border border-zinc-200 px-4 py-3 text-sm outline-none transition focus:border-orange-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-lg border border-zinc-200 px-4 py-3 text-sm outline-none transition focus:border-orange-500"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full resize-none rounded-lg border border-zinc-200 px-4 py-3 text-sm outline-none transition focus:border-orange-500"
              />

              <button
                type="submit"
                className="w-full rounded-lg bg-orange-500 py-3 text-sm font-medium text-white transition hover:bg-orange-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
