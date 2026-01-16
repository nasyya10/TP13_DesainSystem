"use client";

import { useState } from "react";
import styled, { keyframes } from "styled-components";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheck,
  FaPaperPlane
} from "react-icons/fa";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const variantStyles = {
  stacked: { background: "#3d0a1f", color: "#ecf0f1" },
  columns: { background: "linear-gradient(135deg, #e91e63 0%, #ad1457 100%)", color: "#fff" },
  centered: { background: "#3d0a1f", color: "#eee" },
};

/* ====== VARIANT STACKED: Vertical sections ====== */
const StackedFooter = styled.footer`
  background: ${variantStyles.stacked.background};
  color: ${variantStyles.stacked.color};
  padding: 3rem 2rem 1.5rem;
  font-family: "Inter", sans-serif;
  border-top: 4px solid #e91e63;
  max-width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  
  @media (max-width: 768px) {
    padding: 1rem 0.5rem 0.8rem;
  }
`;

const StackedSection = styled.div`
  max-width: 1200px;
  margin: 0 auto 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: 768px) {
    margin: 0 auto 1rem;
    padding-bottom: 1rem;
  }
`;

const StackedBrand = styled.div`
  margin-bottom: 1.5rem;
  
  h2 {
    font-size: 2rem;
    font-weight: 800;
    margin: 0 0 0.5rem;
    color: #f48fb1;
  }
  
  p {
    margin: 0;
    opacity: 0.8;
    font-size: 14px;
    max-width: 400px;
  }

  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 1rem;
    
    h2 {
      font-size: 1.3rem;
    }

    p {
      max-width: 100%;
      font-size: 12px;
    }
  }
`;

const StackedLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 2rem 0;

  @media (max-width: 576px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
    margin: 1rem 0;
    text-align: center;
    justify-items: center;
  }
`;

const LinkGroup = styled.div`
  h4 {
    font-size: 1rem;
    font-weight: 700;
    margin: 0 0 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  a {
    display: block;
    color: inherit;
    text-decoration: none;
    margin: 0.6rem 0;
    opacity: 0.8;
    font-size: 14px;
    transition: all 0.3s;
    
    &:hover {
      opacity: 1;
      padding-left: 5px;
      color: #f48fb1;
    }
  }
  
  @media (max-width: 576px) {
    h4 {
      font-size: 0.75rem;
      margin: 0 0 0.5rem;
    }
    
    a {
      margin: 0.3rem 0;
      font-size: 11px;
    }
  }
`;

const StackedBottom = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5rem;
  font-size: 13px;
  opacity: 0.7;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.8rem;
    text-align: center;
    font-size: 10px;
    padding-top: 1rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  
  a {
    color: inherit;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    transition: all 0.3s;
    
    &:hover {
      background: #e91e63;
      transform: translateY(-3px);
    }
  }
  
  @media (max-width: 576px) {
    gap: 0.5rem;
    
    a {
      width: 28px;
      height: 28px;
      font-size: 12px;
    }
  }
`;

/* ====== VARIANT COLUMNS: Multi-column layout ====== */
const ColumnsFooter = styled.footer`
  background: ${variantStyles.columns.background};
  color: ${variantStyles.columns.color};
  padding: 4rem 3rem 2rem;
  font-family: "Poppins", sans-serif;
  max-width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 1rem 0.5rem 0.8rem;
  }
`;

const ColumnsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const ColumnBox = styled.div`
  h3 {
    font-size: 1.2rem;
    font-weight: 700;
    margin: 0 0 1.5rem;
    position: relative;
    padding-bottom: 0.8rem;
    
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 50px;
      height: 3px;
      background: linear-gradient(90deg, #e91e63, #ad1457);
    }
  }
  
  p {
    margin: 0.8rem 0;
    opacity: 0.85;
    font-size: 14px;
    line-height: 1.7;
  }
  
  a {
    display: block;
    color: inherit;
    text-decoration: none;
    margin: 0.7rem 0;
    opacity: 0.8;
    font-size: 14px;
    transition: all 0.3s;
    
    &:hover {
      opacity: 1;
      color: #f48fb1;
      transform: translateX(5px);
    }
  }
  
  @media (max-width: 576px) {
    h3 {
      font-size: 0.9rem;
      margin: 0 0 0.8rem;
      padding-bottom: 0.5rem;
      
      &::after {
        width: 30px;
        height: 2px;
      }
    }
    
    p {
      font-size: 11px;
      margin: 0.4rem 0;
      line-height: 1.5;
    }
    
    a {
      font-size: 11px;
      margin: 0.4rem 0;
    }
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin: 1rem 0;
  font-size: 14px;
  
  svg {
    color: #e91e63;
    font-size: 16px;
  }
`;

const ColumnsDivider = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  opacity: 0.7;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

// Dynamic Newsletter Form
const NewsletterForm = styled.form`
  margin-top: 1rem;
`;

const NewsletterInputWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: 0.8rem 1rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 14px;
  outline: none;
  transition: all 0.3s;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  
  &:focus {
    border-color: white;
    background: rgba(255, 255, 255, 0.15);
  }
  
  @media (max-width: 576px) {
    padding: 0.6rem 0.8rem;
    font-size: 12px;
  }
`;

const NewsletterButton = styled.button`
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  background: ${({ $success }) => $success ? '#4caf50' : 'white'};
  color: ${({ $success }) => $success ? 'white' : '#e91e63'};
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s;
  
  &:hover:not(:disabled) {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  
  @media (max-width: 576px) {
    padding: 0.6rem 1rem;
    font-size: 12px;
    width: 100%;
    justify-content: center;
  }
`;

const SuccessMessage = styled.div`
  color: #a5d6a7;
  font-size: 13px;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  @media (max-width: 576px) {
    font-size: 11px;
  }
`;

/* ====== VARIANT CENTERED: Center-aligned footer ====== */
const CenteredFooter = styled.footer`
  background: ${variantStyles.centered.background};
  color: ${variantStyles.centered.color};
  padding: 3rem 2rem;
  font-family: "Poppins", sans-serif;
  text-align: center;
  max-width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  
  @media (max-width: 768px) {
    padding: 1.5rem 0.5rem;
  }
`;

const CenteredContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const CenteredLogo = styled.div`
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #e91e63, #ad1457);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const CenteredTagline = styled.p`
  font-size: 16px;
  opacity: 0.8;
  margin: 1rem 0 2rem;
  line-height: 1.6;
`;

const CenteredNav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
  flex-wrap: wrap;
  
  a {
    color: inherit;
    text-decoration: none;
    font-weight: 500;
    font-size: 15px;
    transition: all 0.3s;
    
    &:hover {
      color: #f48fb1;
    }
  }
`;

const CenteredSocial = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 2.5rem 0;
  
  a {
    color: inherit;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s;
    font-size: 18px;
    
    &:hover {
      background: linear-gradient(135deg, #e91e63, #ad1457);
      border-color: transparent;
      transform: scale(1.1);
    }
  }
`;

const CenteredCopyright = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 13px;
  opacity: 0.6;
`;

// Newsletter Component with internal state
function NewsletterSection({ desc }) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail('');
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  return (
    <>
      <p>{desc}</p>
      <NewsletterForm onSubmit={handleSubmit}>
        <NewsletterInputWrapper>
          <NewsletterInput
            type="email"
            placeholder="Masukkan email Anda"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting || isSuccess}
          />
          <NewsletterButton
            type="submit"
            disabled={isSubmitting || isSuccess || !email}
            $success={isSuccess}
          >
            {isSubmitting ? (
              'Mengirim...'
            ) : isSuccess ? (
              <><FaCheck /> Berhasil!</>
            ) : (
              <><FaPaperPlane /> Subscribe</>
            )}
          </NewsletterButton>
        </NewsletterInputWrapper>
        {isSuccess && (
          <SuccessMessage>
            <FaCheck /> Terima kasih! Email Anda sudah terdaftar.
          </SuccessMessage>
        )}
      </NewsletterForm>
    </>
  );
}

export default function FooterVariant({ variant = "stacked", data }) {
  const defaultData = {
    stacked: {
      brandName: "Bloom Florist",
      brandDesc: "Hadirkan keindahan bunga segar untuk setiap momen spesial dalam hidup Anda.",
      linkGroups: [
        {
          title: "Tautan Cepat",
          links: ["Beranda", "Katalog", "Promo", "Galeri"]
        },
        {
          title: "Layanan",
          links: ["Buket Custom", "Dekorasi Event", "Langganan Mingguan", "Workshop"]
        },
        {
          title: "Bantuan",
          links: ["Hubungi Kami", "FAQ", "Kebijakan Privasi", "Syarat & Ketentuan"]
        }
      ],
      copyright: "© 2025 Bloom Florist. Hak cipta dilindungi."
    },
    columns: {
      aboutTitle: "Tentang Florist",
      aboutDesc: "Toko bunga premium yang menghadirkan rangkaian bunga segar berkualitas tinggi untuk berbagai momen spesial Anda.",
      phone: "+62 (21) 555-1234",
      email: "hello@bloomflorist.com",
      address: "Jl. Bunga Mawar No. 88, Jakarta",
      columns: [
        { title: "Produk", links: ["Buket Bunga", "Tanaman Hias", "Vas & Pot", "Hampers", "Dekorasi"] },
        { title: "Kebijakan", links: ["Kebijakan Pengiriman", "Pengembalian", "Privasi", "Syarat & Ketentuan", "Peta Situs"] },
        { title: "Newsletter", desc: "Dapatkan info promo dan tips merawat bunga terbaru" }
      ]
    },
    centered: {
      logo: "✦ BLOOM ✦",
      tagline: "Tempat keindahan bunga bertemu dengan ketulusan hati. Temukan rangkaian sempurna untuk orang tersayang.",
      links: ["Beranda", "Katalog", "Layanan", "Workshop", "Event", "Kontak"],
      copyright: "© 2025 Bloom Florist. Hak cipta dilindungi. | Kebijakan Privasi | Syarat Penggunaan"
    }
  };

  const footerData = data || defaultData[variant];

  switch (variant) {
    case "stacked":
      return (
        <StackedFooter>
          <StackedSection>
            <StackedBrand>
              <h2>{footerData.brandName}</h2>
              <p>{footerData.brandDesc}</p>
            </StackedBrand>
            <StackedLinks>
              {footerData.linkGroups.map((group, idx) => (
                <LinkGroup key={idx}>
                  <h4>{group.title}</h4>
                  {group.links.map((link, linkIdx) => (
                    <a key={linkIdx} href="#">{link}</a>
                  ))}
                </LinkGroup>
              ))}
            </StackedLinks>
          </StackedSection>
          <StackedBottom>
            <div>{footerData.copyright}</div>
            <SocialIcons>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedin /></a>
            </SocialIcons>
          </StackedBottom>
        </StackedFooter>
      );

    case "columns":
      return (
        <ColumnsFooter>
          <ColumnsGrid>
            <ColumnBox>
              <h3>{footerData.aboutTitle}</h3>
              <p>{footerData.aboutDesc}</p>
              <ContactItem>
                <FaPhone />
                <span>{footerData.phone}</span>
              </ContactItem>
              <ContactItem>
                <FaEnvelope />
                <span>{footerData.email}</span>
              </ContactItem>
              <ContactItem>
                <FaMapMarkerAlt />
                <span>{footerData.address}</span>
              </ContactItem>
            </ColumnBox>
            {footerData.columns.map((col, idx) => (
              <ColumnBox key={idx}>
                <h3>{col.title}</h3>
                {col.links && col.links.map((link, linkIdx) => (
                  <a key={linkIdx} href="#">{link}</a>
                ))}
                {col.desc && col.title === "Newsletter" ? (
                  <NewsletterSection desc={col.desc} />
                ) : col.desc && (
                  <p>{col.desc}</p>
                )}
                {idx === footerData.columns.length - 1 && (
                  <SocialIcons style={{ justifyContent: 'flex-start', marginTop: '1.5rem' }}>
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaTwitter /></a>
                  </SocialIcons>
                )}
              </ColumnBox>
            ))}
          </ColumnsGrid>
          <ColumnsDivider>
            <div>© 2025 BloomFlorist. Hak Cipta Dilindungi.</div>
            <div>Dirancang dengan ❤️ untuk pengalaman elegan</div>
          </ColumnsDivider>
        </ColumnsFooter>
      );

    case "centered":
      return (
        <CenteredFooter>
          <CenteredContent>
            <CenteredLogo>{footerData.logo}</CenteredLogo>
            <CenteredTagline>{footerData.tagline}</CenteredTagline>
            <CenteredNav>
              {footerData.links.map((link, idx) => (
                <a key={idx} href="#">{link}</a>
              ))}
            </CenteredNav>
            <CenteredSocial>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedin /></a>
            </CenteredSocial>
            <CenteredCopyright>{footerData.copyright}</CenteredCopyright>
          </CenteredContent>
        </CenteredFooter>
      );

    default:
      return null;
  }
}
