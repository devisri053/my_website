import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* Logo or Hero Image for Your Business */}
        <Image
          src="/your-logo.png" // Replace with your logo or an image related to your business
          alt="Organic Mushrooms Logo"
          width={180}
          height={180}
          priority
        />
        <h1 className="text-4xl font-bold text-center sm:text-left">
          Welcome to Organic Mushrooms
        </h1>
        <p className="text-lg text-center sm:text-left">
          Fresh, organic mushrooms delivered straight to your door. Explore our range of delicious, eco-friendly products.
        </p>

        {/* Call to Action Button */}
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/shop" // Link to the shop page or product page
          >
            Shop Now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/about" // Link to the about page or a page describing your business
          >
            Learn More
          </a>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/contact" // Link to your contact page
        >
          <Image
            aria-hidden
            src="/contact-icon.svg" // Replace with a contact icon
            alt="Contact Icon"
            width={16}
            height={16}
          />
          Contact Us
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/faq" // Link to the FAQ page
        >
          <Image
            aria-hidden
            src="/faq-icon.svg" // Replace with an FAQ icon
            alt="FAQ Icon"
            width={16}
            height={16}
          />
          FAQ
        </a>
      </footer>
    </div>
  );
}
