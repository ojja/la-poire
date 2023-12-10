import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../Button";

export default function Header() {
  return (
    <header className="header-page md:py-34 py-14 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/">
              <Image
                src="/images/logo-gold.webp"
                alt="La Poire Logo"
                width="166"
                height="46"
              />
            </Link>
          </div>
          {/* <div>
            <Button variant="primary" size="normal" pill uppercase>
              Contact Us
            </Button>
          </div> */}
        </div>
      </div>
    </header>
  );
}
