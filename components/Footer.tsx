import { currentYear, siteMetadata } from "@/data";
import { Container } from "./Container";

const Footer = () => {
  return (
    <footer className="col-start-1 row-end-[100] py-10 h-fit">
      <Container>
        <div className="divider"></div>
        <div className="flex flex-col items-start justify-between space-y-4 md:items-center md:flex-row">
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
