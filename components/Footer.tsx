import { currentYear, siteMetadata } from "@/data";
import { Container } from "./Container";

const Footer = () => {
  return (
    <footer className="h-fit py-10">
      <Container>
        <div className="divider"></div>
        <div className="flex flex-col items-center justify-between md:flex-row">
          {/* Tools section */}
          <div>Made with love using </div>
          {/* Copyright statement */}
          <div>
            <p className="text-sm">
              Copyright @ {currentYear} • {siteMetadata.footerTitle}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
