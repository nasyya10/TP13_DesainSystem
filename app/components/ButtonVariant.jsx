"use client";

import styled from "styled-components";
import { FaCheck, FaChevronRight, FaDownload } from "react-icons/fa";

const variantStyles = {
  solid: {
    background: "#e91e63",
    color: "#fff",
    hover: "#c2185b",
  },
  outline: {
    background: "transparent",
    color: "#e91e63",
    border: "#e91e63",
    hover: "#e91e63",
  },
  pill: {
    background: "linear-gradient(135deg, #e91e63 0%, #ad1457 100%)",
    color: "#fff",
    hover: "linear-gradient(135deg, #c2185b 0%, #880e4f 100%)",
  },
};

const SolidButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 1rem 2.2rem;
  font-size: 16px;
  font-weight: 700;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: "Poppins", sans-serif;
  background: ${variantStyles.solid.background};
  color: ${variantStyles.solid.color};
  box-shadow: 0 4px 15px rgba(233, 30, 99, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  &:hover {
    background: ${variantStyles.solid.hover};
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(233, 30, 99, 0.4);
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  svg {
    font-size: 18px;
    transition: transform 0.3s;
    flex-shrink: 0;
  }
  
  &:hover svg {
    transform: translateX(5px);
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 13px;
    gap: 0.5rem;
    width: 100%;

    svg {
      font-size: 14px;
    }
  }
`;

/* ====== VARIANT OUTLINE: Tombol dengan border dan efek fill saat hover ====== */
const OutlineButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.9rem 2rem;
  font-size: 15px;
  font-weight: 600;
  border-radius: 8px;
  border: 2px solid ${variantStyles.outline.border};
  background: ${variantStyles.outline.background};
  color: ${variantStyles.outline.color};
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: "Inter", sans-serif;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${variantStyles.outline.hover};
    transition: left 0.4s ease;
    z-index: 0;
  }
  
  &:hover::before {
    left: 0;
  }
  
  &:hover {
    color: white;
    border-color: ${variantStyles.outline.hover};
  }
  
  span, svg {
    position: relative;
    z-index: 1;
  }
  
  svg {
    transition: transform 0.3s;
    flex-shrink: 0;
  }
  
  &:hover svg {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    padding: 0.7rem 1.5rem;
    font-size: 13px;
    gap: 0.5rem;
    width: 100%;
  }
`;

/* ====== VARIANT PILL: Tombol bulat dengan gradien ====== */
const PillButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  padding: 1.1rem 2.5rem;
  font-size: 15px;
  font-weight: 700;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  font-family: "Poppins", sans-serif;
  background: ${variantStyles.pill.background};
  color: ${variantStyles.pill.color};
  box-shadow: 0 8px 25px rgba(233, 30, 99, 0.4);
  position: relative;
  overflow: hidden;
  
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }
  
  &:hover::after {
    width: 300px;
    height: 300px;
  }
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 35px rgba(233, 30, 99, 0.6);
  }
  
  span, svg {
    position: relative;
    z-index: 1;
  }
  
  svg {
    animation: bounce 2s infinite;
    flex-shrink: 0;
  }
  
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }

  @media (max-width: 768px) {
    padding: 0.9rem 2rem;
    font-size: 13px;
    gap: 0.5rem;
    width: 100%;
  }
`;

export default function ButtonVariant({ variant = "solid", onClick, data }) {
  switch (variant) {
    case "solid":
      return (
        <SolidButton onClick={onClick}>
          <span>{data?.label || "Pesan Buket Sekarang"}</span>
          {data?.icon || <FaChevronRight />}
        </SolidButton>
      );

    case "outline":
      return (
        <OutlineButton onClick={onClick}>
          {data?.icon || <FaCheck />}
          <span>{data?.label || "Tambah ke Wishlist"}</span>
        </OutlineButton>
      );

    case "pill":
      return (
        <PillButton onClick={onClick}>
          {data?.icon || <FaDownload />}
          <span>{data?.label || "Download Katalog"}</span>
        </PillButton>
      );

    default:
      return null;
  }
}
