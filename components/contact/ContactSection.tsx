import { dataContactInfo } from "@/data/contact";
import React from "react";
import Reveal from "../utils/Reveal";
import ContactForm from "./ContactForm";


// Definisi tipe data untuk informasi token
type TokenInfo = {
  contractAddress: string;
  name: string;
  ticker: string;
  totalSupply: string;
  taxBuy: string;
  taxSell: string;
};

// Data token
const tokenData: TokenInfo = {
  contractAddress: "",
  name: "News AI",
  ticker: "NXAI",
  totalSupply: "1,000,000,000",
  taxBuy: "4%",
  taxSell: "4%",
};

export default function ContactSection() {
  return (
    <section className="py-15 pt-lg-30">
      <div className="container">
        <div className="row align-items-center">
          {/* Kolom Kiri: Informasi Token */}
          <div className="col-lg-6 mb-10 mb-lg-0">
            <div className="text-center text-lg-start">
              <h2 className="fw-medium mb-4">{tokenData.name} Token Information</h2>
              <p>
                <strong>Contract Address:</strong> <span>{tokenData.contractAddress}</span>
              </p>
              <ul className="list-unstyled">
                <li>
                  <strong>Name:</strong> {tokenData.name}
                </li>
                <li>
                  <strong>Ticker:</strong> {tokenData.ticker}
                </li>
                <li>
                  <strong>Total Supply:</strong> {tokenData.totalSupply}
                </li>
                <li>
                  <strong>Tax Buy:</strong> {tokenData.taxBuy}
                </li>
                <li>
                  <strong>Tax Sell:</strong> {tokenData.taxSell}
                </li>
              </ul>
            </div>
          </div>

          {/* Kolom Kanan: Gambar */}
          <div className="col-lg-6">
            <div className="text-center text-lg-start">
              <img
                src="/images/coin2.png"
                alt="Token Illustration"
                className="img-fluid rounded-4 shadow-lg"
                style={{ maxWidth: "400px", width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

