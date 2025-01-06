import { dataContactInfo } from "@/data/contact";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';
import { faRightLeft } from '@fortawesome/free-solid-svg-icons';
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons';
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
  contractAddress: "0x789dfd258c1c1e324ce6772e9e936c097b092ff2",
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
          <div className="col-lg-6 mb-10 mb-lg-0 text-center">
          <div className="row align-self-center gy-5">
            <div className="col-md-12">
              <h4><strong>Contract Address:</strong> <span>{tokenData.contractAddress}</span></h4>
            </div>
            <div className="col-md-6">
              <FontAwesomeIcon icon={faFileInvoiceDollar} style={{ width: '50px', color: '#aaff3a' }} />
              <div style={{ paddingTop: '20px'}}>
                <strong>Name :</strong> <strong>{tokenData.name}</strong>
              </div>
            </div>

            <div className="col-md-6 icon-box">
              <FontAwesomeIcon icon={faTicketAlt} style={{ width: '50px', color: '#aaff3a' }} />
              <div style={{ paddingTop: '20px'}}>
                <strong>Ticker :</strong> <strong>{tokenData.ticker}</strong>
              </div>
            </div>

            <div className="col-md-12 icon-box">
              <FontAwesomeIcon icon={faRightLeft} style={{ width: '50px', color: '#aaff3a' }} />
              <div style={{ paddingTop: '20px'}}>
                <strong>Total Supply :</strong> <strong>{tokenData.totalSupply}</strong>
              </div>
            </div>

            <div className="col-md-6 icon-box">
              <FontAwesomeIcon icon={faCircleDollarToSlot} style={{ width: '50px', color: '#aaff3a' }} />
              <div style={{ paddingTop: '20px'}}>
                <strong>Tax Buy :</strong> <strong>{tokenData.taxBuy}</strong>
              </div>
            </div>

            <div className="col-md-6 icon-box">
            <FontAwesomeIcon icon={faCartShopping} style={{ width: '50px', color: '#aaff3a' }} />
              <div style={{ paddingTop: '20px'}}>
                <strong>Tax Sell :</strong> <strong>{tokenData.taxSell}</strong>
              </div>       
            </div>
            </div>
            {/* <div className="text-center text-lg-start">
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
            </div> */}
          </div>

          {/* Kolom Kanan: Gambar */}
          <div className="col-lg-6">
            <div className="text-center">
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

