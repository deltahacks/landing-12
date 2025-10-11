import { Mail, MoveRight } from "lucide-react";
import Image from "next/image";
import TeamCarousel from "~/components/TeamCarousel";

const Footer: React.FC = () => {
  return (
    <div className="flex w-full flex-col justify-center">
      <div className="flex w-full justify-center">
        <div className="w-full max-w-360 px-10 md:px-40">
          <div className="relative z-10 pt-13 xl:h-180">
            <Image
              src="/assets/shopping-cart-with-background.png"
              alt="Shopping cart illustration"
              className="absolute right-0 hidden xl:block"
              width={830}
              height={720}
              style={{ objectFit: "contain" }}
            />
            <div className="flex w-full flex-col gap-3 xl:max-w-sm">
              <h1 className="font-darumdrop text-4xl text-dh-brown">
                Still have questions?
              </h1>
              <p className="font-fredoka text-sm text-dh-brown">
                Reach out to us at{" "}
                <a href="mailto:hello@deltahacks.com">hello@deltahacks.com</a>,
                any socials, or subscribe to our newsletter for more updates!
              </p>
              <form
                action="https://deltahacks.us19.list-manage.com/subscribe/post?u=7ac221f02edc4242db4789d8f&amp;id=380c22c749&amp;f_id=00a736e7f0"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="flex h-13 w-full items-center justify-between gap-4 rounded-2xl border-3 border-white bg-dh-beige p-3 text-dh-newletter-brown drop-shadow-sm"
                target="_self"  
                noValidate
              >
                <div className="flex w-full items-center gap-4">
                  <Mail className="w-6" />
                  <input
                    type="email"
                    name="EMAIL"
                    className="flex-1 text-sm text-dh-brown outline-none placeholder:text-dh-newletter-brown"
                    placeholder="Sign up for our newsletter"
                    id="mce-EMAIL"
                    required={true}
                  />
                </div>
                <div className="hidden">
                  <input type="hidden" name="tags" value="24287902" />
                </div>
                <div id="mce-responses" className="clear">
                  <div
                    className="response hidden"
                    id="mce-error-response"
                  ></div>
                  <div
                    className="response hidden"
                    id="mce-success-response"
                  ></div>
                </div>
                <div aria-hidden="true" className="absolute opacity-0 pointer-events-none -z-10">
                  <input
                    type="text"
                    name="b_7ac221f02edc4242db4789d8f_380c22c749"
                    tabIndex={-1}
                  />
                </div>
                <div className="relative min-h-7 min-w-12">
                  <div className="absolute inset-0 h-full w-full rounded-md bg-dh-mauve" />
                  <button
                    className="absolute -top-0.5 left-0.5 flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-white text-dh-mauve transition-all duration-100 active:top-0 active:left-0 active:border active:border-dh-mauve"
                    type="submit"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                  >
                    <MoveRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-360">
        <div className="w-full px-6 md:px-40 xl:hidden">
          <div className="h-12" />
          <Image
            className="w-full"
            src="/assets/shopping-cart.png"
            alt="Reach Out To Us"
            width={797}
            height={622}
          />
        </div>
      </div>
      <div className="h-14 xl:h-5" />
      <footer className="flex w-full justify-center">
        <div className="flex max-w-360 min-w-0 flex-col justify-center pb-20 md:px-40">
          <p className="font-fredoka m-0 p-0 text-center text-sm text-dh-brown">
            Made with 🩷 from the DeltaHacks Team
          </p>
          <TeamCarousel />
          <div className="flex flex-col gap-4 px-4">
            <div className="w-full border-t border-dashed border-dh-brown lg:border-solid" />
            <div className="flex flex-col justify-between gap-4 xl:flex-row">
              <div className="font-fredoka flex w-full justify-between gap-10 px-5 xl:w-auto xl:px-0">
                <a
                  href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md"
                  className="text-xs text-dh-brown hover:underline"
                >
                  Code of Conduct
                </a>
                <a
                  href="https://mlh.io/privacy"
                  className="text-xs text-dh-brown hover:underline"
                >
                  Privacy Policy
                </a>
                <a href="#" className="text-xs text-dh-brown hover:underline">
                  Travel Guidelines
                </a>
              </div>
              <p className="text-center text-sm text-dh-brown">
                © Copyright {new Date().getFullYear()} DeltaHacks
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
