import Container from "../Container/Container";
import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-[#212121] text-white px-4">
      <div className="border-b border-[#454d5e] pb-4">
        <Container>
          <div className="flex flex-col md:flex-row w-full text-xs mt-4 justify-between pb-4">
            <div className="flex flex-col">
              <div className="font-semibold text-gray-400 mt-4 mb-2">ABOUT</div>
              <a href="/" aria-label="Contact Us">
                Contact Us
              </a>
              <a
                href="https://corporate.flipkart.net/corporate-home"
                aria-label="About Us"
              >
                About Us
              </a>
              <a href="/" aria-label="Careers">
                Careers
              </a>
              <a
                href="http://stories.flipkart.com/"
                aria-label="Flipkart Stories"
              >
                Flipkart Stories
              </a>
              <a
                href="http://stories.flipkart.com/category/top-stories/news/"
                aria-label="Press"
              >
                Press
              </a>
              <a
                href="https://www.flipkartwholesale.com/"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Flipkart Wholesale"
              >
                Flipkart Wholesale
              </a>
              <a
                href="https://www.cleartrip.com/"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Cleartrip"
              >
                Cleartrip
              </a>
              <a
                href="/corporate-information"
                aria-label="Corporate Information"
              >
                Corporate Information
              </a>
            </div>
            <div className="flex flex-col">
              <div className="font-semibold  text-gray-400 mt-4 mb-2">HELP</div>
              <a
                href="/pages/payments"
                className="HlWMPX"
                aria-label="Payments"
              >
                Payments
              </a>
              <a
                href="/pages/shipping"
                className="HlWMPX"
                aria-label="Shipping"
              >
                Shipping
              </a>
              <a
                href="/helpcentre?catalog=55c9c6edb000002e002c1701&amp;view=CATALOG"
                className="HlWMPX"
                aria-label="Cancellation &amp; Returns"
              >
                Cancellation &amp; Returns
              </a>
              <a
                href="/helpcentre?catalog=55c9c8e2b0000023002c1702&amp;view=CATALOG"
                className="HlWMPX"
                aria-label="FAQ"
              >
                FAQ
              </a>
              <a href="/" className="HlWMPX" aria-label="Report Infringement">
                Report Infringement
              </a>
            </div>
            <div className="flex flex-col">
              <div className="font-semibold  text-gray-400 mt-4 mb-2">
                CONSUMER POLICY
              </div>
              <a
                href="/"
                className="HlWMPX"
                aria-label="Cancellation &amp; Returns"
              >
                Cancellation &amp; Returns
              </a>
              <a href="/" className="HlWMPX" aria-label="Terms Of Use">
                Terms Of Use
              </a>
              <a href="/" className="HlWMPX" aria-label="Security">
                Security
              </a>
              <a href="/" className="HlWMPX" aria-label="Privacy">
                Privacy
              </a>
              <a href="/" className="HlWMPX" aria-label="Sitemap">
                Sitemap
              </a>
              <a href="/" className="HlWMPX" aria-label="Grievance Redressal">
                Grievance Redressal
              </a>
              <a href="/" className="HlWMPX" aria-label="EPR Compliance">
                EPR Compliance
              </a>
            </div>
            <div className="flex flex-col">
              <div className="font-semibold text-gray-400 mt-4 mb-2">
                SOCIAL
              </div>
              <a
                href="https://www.facebook.com/flipkart"
                className="HlWMPX"
                aria-label="Facebook"
              >
                Facebook
              </a>
              <a
                href="https://www.twitter.com/flipkart"
                className="HlWMPX"
                aria-label="Twitter"
              >
                Twitter
              </a>
              <a
                href="https://www.youtube.com/flipkart"
                className="HlWMPX"
                aria-label="YouTube"
              >
                YouTube
              </a>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-8 md:border-l border-[#454d5e] md:pl-4">
              <div>
                <div className="font-semibold  text-gray-400 mt-4 mb-2">
                  Mail Us
                </div>
                <p>
                  Flipkart Internet Private Limited,
                  <br />
                  Buildings Alyssa, Begonia &
                  <br />
                  Clove Embassy Tech Village,
                  <br /> Outer Ring Road, Devarabeesanahalli
                  <br />
                  Village, Bengaluru, 560103, Karnataka, India
                </p>
              </div>
              <div>
                <div className="font-semibold  text-gray-400 mt-4 mb-2">
                  Registered Office Address
                </div>
                <p>
                  Flipkart Internet Private Limited,
                  <br /> Buildings Alyssa, Begonia & <br />
                  Clove Embassy Tech Village, <br /> Outer Ring Road,
                  Devarabeesanahalli
                  <br />
                  Village, Bengaluru, 560103, Karnataka, <br />
                  India CIN : U51109KA2012PTC066107 <br /> Telephone:
                  044-45614700
                  <br />
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div>
        <Container>
          <div className="w-full flex flex-col md:flex-row gap-2 text-xs justify-around py-8">
            <div className="flex items-center gap-1">
              <img
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/sell-image-9de8ef.svg"
                alt="Seller"
              />
              <p>Become a seller</p>
            </div>
            <div className="flex items-center gap-1">
              <img
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/advertise-image-866c0b.svg"
                alt="Advertise"
              />
              <p>Advertise</p>
            </div>
            <div className="flex items-center gap-1">
              <img
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/gift-cards-image-d7ff24.svg"
                alt="gift cards"
              />
              <p>Gift cards</p>
            </div>
            <div className="flex items-center gap-1">
              <img
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/help-centre-image-c4ace8.svg"
                alt="Help center"
              />
              <p>Help center</p>
            </div>
            <div className="flex justify-center items-center mt-4 md:mt-0">
              <AiOutlineCopyright />
              <p>2007-2023 flipkart.com</p>
            </div>
            <div>
              <img
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg"
                alt=""
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
