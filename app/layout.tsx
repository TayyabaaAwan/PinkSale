"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { ethers } from "ethers";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

const items = [
  {
    text: "Home",
    icon: "home",
  },
  {
    text: "Home",
    icon: "bi bi-house-door",
    //<HomeOutlined />,
  },
  {
    text: "Launchpads",
    icon: "bi bi-rocket",
    //<RocketOutlined />,
    subitems: [{ text: "Create Launchpad" }, { text: "Create fair launch" }],
  },
  {
    text: "PinkLock",
    icon: "bi bi-lock",
    // <UnlockOutlined />,
  },
  {
    text: "AirDrop",
    icon: "bi bi-balloon",
  },
  {
    text: "Staking",
    icon: "bi bi-cash-stack",
    //<DatabaseFilled />,
  },
  {
    text: "Private Sale",
    icon: "bi bi-shield",
    //  <PropertySafetyFilled />,
  },
  {
    text: "Buy Crypto Fiat",
    icon: "bi bi-coin",
    // <DollarTwoTone />,
  },
  {
    text: "Bridge",
    icon: "bi bi-git",
    //<BranchesOutlined />,
  },
  {
    text: "Leaderboard",
    icon: "bi bi-trophy",
    //<CrownOutlined />,
  },
  {
    text: "Anti-Bot",
    icon: "bi bi-shield-check",
    //<SafetyCertificateTwoTone />,
  },
  {
    text: "Multi-Sender",
    icon: "bi bi-arrow-right-square",
  },
  {
    text: "dexview.com",
    icon: "bi bi-graph-up",
    //<LineChartOutlined />,
  },
  {
    text: "Pools Alert",
    icon: "bi bi-robot",
    //<RobotOutlined />,
  },
  {
    text: "KYC & Audit",
    icon: "bi bi-file-earmark-check",
  },
  {
    text: "Docs",
    icon: "bi bi-file-earmark-text",
  },
  {
    text: "Shop",
    icon: "bi bi-cart3",
    //<ShoppingCartOutlined />,
  },
  {
    text: "Telegram",
    icon: "bi bi-telegram",
  },
  {
    text: "Twitter",
    icon: "bi bi-twitter",
    // <TwitterOutlined />,
  },
  {
    text: "Facebook",
    icon: "bi bi-facebook",
    //<FacebookOutlined />,
  },
];

declare global {
  interface Window {
    ethereum?: any;
  }
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [web3, setWeb3] = useState<any>();
  const [accounts, setAccounts] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState("");

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      // Initialize Web3 with MetaMask provider
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);

      // Request access to accounts
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((accounts: React.SetStateAction<never[]>) =>
          setAccounts(accounts)
        )
        .catch((error: any) => console.error(error));
    } else {
      console.error("MetaMask extension not detected");
    }
  }, []);

  const handleConnectWallet = async () => {
    try {
      if (typeof window.ethereum !== "undefined") {
        // Request access to accounts
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccounts(accounts);
        console.log(accounts, "accounts");
      } else {
        alert("MetaMask extension not detected");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleAccountChange = (event: any) => {
    setSelectedAccount(event.target.value);
  };
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          className="wrap"
          style={{
            paddingLeft: "25px",
            paddingRight: "25px",
            paddingTop: "215px",
            fontFamily:
              "-apple-system,BlinkMacSystemFont,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji",
          }}
        >
          <nav
            className="navbar navbar-dark fixed-top d-flex"
            style={{ margin: "0", backgroundColor: "white" }}
          >
            <div
              className="namelogo"
              style={{ display: "grid", gridTemplateColumns: " 1fr auto" }}
            >
              <div className="logo-text-grid" style={{ display: "flex" }}>
                <a
                  className="navbar-brand"
                  href="#"
                  style={{ marginLeft: "10px" }}
                >
                  <img
                    className="img-fluid"
                    src="./images/hyfaLogo.png"
                    alt="logo"
                    style={{ height: "40px", width: "40px" }}
                  />
                  <span
                    style={{
                      paddingLeft: "5px",
                      color: "#E45706",
                      fontSize: "25px",
                      fontWeight: "500",
                    }}
                  >
                    LaunchPad
                  </span>
                </a>
              </div>
            </div>
            <div className="buttons">
              <button
                type="button"
                className="btn rounded-pill mx-1"
                style={{ backgroundColor: "#ffdda9", color: " #12022f" }}
                onClick={handleConnectWallet}
              >
                Connect Wallet
              </button>
            </div>
            <div
              className="trendBar d-flex"
              style={{ width: "100%", justifyContent: "flex-end", margin: "0" }}
            >
              <section
                style={{
                  backgroundColor: "#E45706",
                  color: "white",
                  fontSize: "25px",
                  fontWeight: "300",
                }}
                className="d-flex w-100 align-items-center col-12 pt-1"
              >
                <h5 className="col-1 d-flex justify-content-center">Home</h5>
                <h5 className="col-1 d-flex justify-content-center">
                  Launch Pads
                </h5>
              </section>
            </div>
          </nav>

          <h2
            style={{
              display: "flex",
              fontSize: "25px",
              fontWeight: "500",
              color: " #12022f",
              paddingLeft: "500px",
              paddingRight: "240px",
            }}
          >
            Project Funding Made Easy!
          </h2>
          <p
            style={{
              display: "flex",
              paddingLeft: "40px",
              paddingRight: "40px",
            }}
          >
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>

          <div className="">
            <div
              className=""
              style={{
                color: "black",
              }}
            ></div>
            <div className="">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
