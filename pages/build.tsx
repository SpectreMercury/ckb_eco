import Link from "next/link";
import { Footer } from "../components/Footer";

import localFont from "next/font/local";
import AnimatedAccordionList from "components/AnimatedAccordionList";
import faqList from "../public/json/buildfaq.json";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../components/Header"), { ssr: false });
const DevBox = dynamic(() => import("../components/DevBox"), { ssr: false });
// Font files can be colocated inside of `app`
const sharpieFont = localFont({
  src: "../public/font/Sharpie-Variable.ttf",
  display: "swap",
});
const RanadeFont = localFont({
  src: "../public/font/Ranade-Variable.ttf",
  display: "swap",
});

const BuildPage = () => {
  return (
    <>
      <Header />
      <main className={"build-main " + RanadeFont.className}>
        <DevBox />
        <div className="build-block-1 ">
          <h2 className={sharpieFont.className}>
            Empower the Bitcoin Ecosystem with
            <br />
            Contract Kernel of Bitcoin
          </h2>
          <h4>
            Build with CKB, unleash the potential of assets on Bitcoin with
            RGB++,
            <br />
            and build the autonomous world on DOBs through the Spore protocol.
          </h4>
          <div className="build-links">
            <Link
              href="https://docs.nervos.org/"
              target="_blank"
              className="button_link button_link_1"
            >
              CKB Docs
            </Link>
            <Link
              href="https://github.com/ckb-cell/rgbpp-sdk"
              target="_blank"
              className="button_link button_link_1"
            >
              RGB++ SDK
            </Link>
            <Link
              href="https://docs.spore.pro/"
              target="_blank"
              className="button_link button_link_1"
            >
              Spore Protocol
            </Link>
          </div>
          <img
            src="images/cloud_about_4.png"
            className="cloud cloud_1"
            height={125}
          />
          <img
            src="images/cloud_about_1.png"
            className="cloud cloud_2"
            height={163}
          />
          <img
            src="images/cloud_about_5.png"
            className="cloud cloud_3"
            height={271}
          />
        </div>
        <div className="build-block-2" id="grant">
          <img
            src="images/cloud_about_3.png"
            className="cloud cloud_4"
            height={163}
          />
          <div className="content">
            <h2 className={sharpieFont.className}>CKB Eco Fund Grants</h2>
            <p>
              The CKB Eco Fund is committed to fostering a thriving and
              sustainable ecosystem around CKB.
              <br />
              We provide grants and support to projects that contribute to the
              growth and adoption of CKB and related technologies.
            </p>
            <div className="build-links">
              <Link
                href="https://forms.gle/UQkKUWdCgJmisgb58"
                target="_blank"
                className="button_link button_link_1"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
        <div className="build-block-3">
          <img
            src="images/cloud_about_6.png"
            className="cloud cloud_6"
            height={155}
          />
          <img src="images/bg_build_2.png" className="hill" height={405} />
          <div className="block-main">
            <h3 className="big">Focus Areas</h3>
            <div className="content-block">
              <h3>Infrastructure and Research</h3>
              <p>
                We support projects that focus on building critical
                infrastructure or conducting research that benefits the CKB
                ecosystem, even though they may not have immediate commercial
                viability.
              </p>
            </div>
            <div className="content-block">
              <h3>Ecosystem Applications</h3>
              <p>
                We support decentralized applications and tools that expand the
                utility and accessibility of CKB. These projects should have the
                potential for commercial viability and independent operation.
                Projects must deploy their contracts on CKB.
              </p>
              <div className="content-list">
                <h5>
                  We are particularly interested in projects that contribute to:
                </h5>
                <div className="project-list">
                  <span>Bitcoin Finance (BiFi)</span>
                  <span>UTXO Stack-based</span>
                  <span>Digital Objects (DOBs)</span>
                  <span>Nostr-related</span>
                  <span>Lightning Network on CKB</span>
                  <span>Games</span>
                  <span>Autonomous Worlds</span>
                  <span>Other Innovative Projects</span>
                </div>
              </div>
            </div>
            <h3 className="big block-2">Application Process</h3>
            <div className="process-block">
              <div>
                <h3>A. Submit Application</h3>
                <p>The application team shall craft a comprehensive proposal and submit it.</p>
                <img src="images/arrow.png" height={72} />
              </div>
              <div>
                <h3>B. Review and Vote</h3>
                <p>
                The grant committee will review the application and then vote on it. 
                </p>
                <img src="images/arrow.png" height={72} />
              </div>
              <div>
                <h3>C. Sign Agreement</h3>
                <p>Sign an agreement outlining the milestones to be achieved.</p>
                <img src="images/arrow.png" height={72} />
              </div>
              <div>
                <h3>D. Distribute Grants</h3>
                <p>
                  With all the steps complete, the grants will be disbursed.
                </p>
                <img src="images/arrow.png" height={72} />
              </div>
            </div>
            <img
              src="images/bg_build_3.png"
              width={"100%"}
              className="bg-hill"
            />
            <h3 className="big">FAQ</h3>
            <div className="build_faq_list">
              <AnimatedAccordionList list={faqList} />
            </div>
          </div>
        </div>
        <div className="build-block-4">
          <div className="content">
            <h2 className={sharpieFont.className}>
              CKB Community Fund DAO Grants
            </h2>
            <p>
              The CKB Community Fund DAO is a community fund initiated by the
              Nervos community and jointly contributed by the community and the
              Nervos Foundation to fund community members to do various things
              around the CKB L1 ecosystem, such as code development, event
              organization, content production etc.
            </p>
            <p>
              The CKB Community Fund DAO has an initial holding of 276,000,000
              CKB. The list of funded projects can be found{" "}
              <Link
                href={"https://talk.nervos.org/t/list-of-funded-proposals/7793"}
                target="_blank"
              >
                here
              </Link>
              .
            </p>
            <p>
              For builders looking for grants and other support within Nervos
              CKB, please read and follow this{" "}
              <Link
                href={
                  "https://talk.nervos.org/t/ckb-community-fund-dao-rules-and-process/6874"
                }
                target="_blank"
              >
                guide
              </Link>
              .
            </p>
            <div className="build-links">
              <Link
                href="https://talk.nervos.org/c/ckb-community-fund-dao/65"
                target="_blank"
                className="button_link button_link_1"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-screen">
          <Footer />
        </div>
      </main>
    </>
  );
};

export default BuildPage;
