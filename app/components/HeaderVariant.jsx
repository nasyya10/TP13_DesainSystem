"use client";

import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaBars, FaSearch, FaBell, FaTimes, FaShoppingCart, FaCheck } from "react-icons/fa";

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

const variantStyles = {
  modern: {
    background: "linear-gradient(135deg, #e91e63 0%, #ad1457 100%)",
    color: "#fff"
  },
  minimal: {
    background: "#ffffff",
    color: "#e91e63",
    border: "1px solid #f8bbd9"
  },
  glassmorphism: {
    background: "rgba(233, 30, 99, 0.15)",
    color: "#fff",
    backdrop: "blur(10px)"
  },
};

// ====== VARIANT MODERN: Elevated header with icons ======
const ModernHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2.5rem;
  background: ${variantStyles.modern.background};
  color: ${variantStyles.modern.color};
  box-shadow: 0 8px 32px rgba(233, 30, 99, 0.3);
  border-radius: 20px;
  margin-bottom: 1.5rem;
  font-family: "Poppins", sans-serif;
  max-width: 100%;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    flex-direction: row;
    gap: 0.5rem;
    padding: 0.6rem 0.8rem;
    border-radius: 12px;
  }
`;

const ModernLogo = styled.div`
  font-size: 1.6rem;
  font-weight: 800;
  letter-spacing: -1px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: "🌸";
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    gap: 0.3rem;

    &::before {
      font-size: 1.2rem;
    }
  }
`;

const ModernNav = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const ModernLink = styled.a`
  color: inherit;
  text-decoration: none;
  font-weight: 500;
  font-size: 15px;
  position: relative;
  transition: all 0.3s;
  
  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 3px;
    background: white;
    transition: width 0.3s;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const IconButton = styled.button`
  background: ${({ $active }) => $active ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.2)'};
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
    
    svg {
      font-size: 11px;
    }
  }
`;

const NotificationBadge = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background: #ffc107;
  color: #333;
  font-size: 10px;
  font-weight: 700;
  min-width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${pulse} 2s infinite;
  
  @media (max-width: 768px) {
    top: -3px;
    right: -3px;
    min-width: 14px;
    height: 14px;
    font-size: 8px;
  }
`;

const CartBadge = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background: #4caf50;
  color: white;
  font-size: 10px;
  font-weight: 700;
  min-width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    top: -3px;
    right: -3px;
    min-width: 14px;
    height: 14px;
    font-size: 8px;
  }
`;

const IconGroup = styled.div`
  display: flex;
  gap: 0.8rem;

  @media (max-width: 768px) {
    gap: 0.3rem;
  }
`;

// ====== VARIANT MINIMAL: Clean centered header ======
const MinimalHeader = styled.header`
  background: ${variantStyles.minimal.background};
  color: ${variantStyles.minimal.color};
  border: ${variantStyles.minimal.border};
  padding: 1.5rem 2rem;
  border-radius: 0;
  border-left: none;
  border-right: none;
  margin-bottom: 1.5rem;
  font-family: "Inter", sans-serif;
  max-width: 100%;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    padding: 0.6rem 0.8rem;
  }
`;

const MinimalContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MinimalLogo = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  color: #2c3e50;
  text-transform: uppercase;
  letter-spacing: 2px;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    letter-spacing: 1px;
  }
`;

const MinimalNav = styled.nav`
  display: flex;
  gap: 3rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const MinimalLink = styled.a`
  color: #7f8c8d;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: color 0.3s;
  
  &:hover {
    color: #2c3e50;
  }
`;

const MinimalButton = styled.button`
  background: ${({ $clicked }) => $clicked ? '#4caf50' : '#e91e63'};
  color: white;
  border: none;
  padding: 0.7rem 1.8rem;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: ${({ $clicked }) => $clicked ? '#388e3c' : '#c2185b'};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${({ $clicked }) => $clicked ? 'rgba(76, 175, 80, 0.3)' : 'rgba(233, 30, 99, 0.3)'};
  }
  
  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 10px;
  }
`;

const MinimalMobileMenu = styled.button`
  display: none;
  background: #f0f4f8;
  border: none;
  color: #2c3e50;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background: #e2e8f0;
  }
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

const MinimalActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

// ====== VARIANT GLASSMORPHISM: Glass effect with backdrop blur ======
const GlassHeader = styled.header`
  background: ${variantStyles.glassmorphism.background};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: ${variantStyles.glassmorphism.color};
  padding: 1.2rem 2rem;
  border-radius: 16px;
  margin-bottom: 1.5rem;
  font-family: "Poppins", sans-serif;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    padding: 0.6rem 0.8rem;
    border-radius: 12px;
  }
`;

const GlassLogo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #fff, #f8bbd9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const GlassNav = styled.nav`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const GlassLink = styled.a`
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;

const GlassSearch = styled.div`
  display: flex;
  align-items: center;
  background: ${({ $focused }) => $focused ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 25px;
  padding: 0.5rem 1.2rem;
  gap: 0.5rem;
  border: 1px solid ${({ $focused }) => $focused ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.2)'};
  transition: all 0.3s;
  
  input {
    background: transparent;
    border: none;
    outline: none;
    color: white;
    font-size: 14px;
    width: ${({ $focused }) => $focused ? '180px' : '120px'};
    transition: width 0.3s;
    
    &::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const SearchResults = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  margin-top: 0.5rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  z-index: 100;
`;

const SearchResultItem = styled.div`
  padding: 0.8rem 1rem;
  color: #333;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: #f8bbd9;
  }
  
  span {
    font-size: 14px;
  }
`;

const GlassMobileNav = styled.nav`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    gap: 0.3rem;
    align-items: center;
  }
`;

const GlassMobileLink = styled.a`
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-weight: 500;
  font-size: 9px;
  padding: 0.25rem 0.4rem;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.1);
  transition: all 0.3s;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const SearchWrapper = styled.div`
  position: relative;
`;

// Individual header components with internal state
function ModernHeaderComponent({ data }) {
  const [notificationCount, setNotificationCount] = useState(3);
  const [cartCount, setCartCount] = useState(2);

  const handleNotificationClick = () => {
    setNotificationCount(0);
  };

  const handleCartClick = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <ModernHeader>
      <ModernLogo>{data.logo}</ModernLogo>
      <ModernNav>
        {data.links.map((link, idx) => (
          <ModernLink key={idx} href="#">{link}</ModernLink>
        ))}
      </ModernNav>
      <IconGroup>
        <IconButton><FaSearch /></IconButton>
        <IconButton onClick={handleNotificationClick} $active={notificationCount > 0}>
          <FaBell />
          {notificationCount > 0 && <NotificationBadge>{notificationCount}</NotificationBadge>}
        </IconButton>
        <IconButton onClick={handleCartClick}>
          <FaShoppingCart />
          {cartCount > 0 && <CartBadge>{cartCount}</CartBadge>}
        </IconButton>
      </IconGroup>
    </ModernHeader>
  );
}

function MinimalHeaderComponent({ data }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 2000);
  };

  return (
    <MinimalHeader>
      <MinimalContainer>
        <MinimalLogo>{data.logo}</MinimalLogo>
        <MinimalNav>
          {data.links.map((link, idx) => (
            <MinimalLink key={idx} href="#">{link}</MinimalLink>
          ))}
        </MinimalNav>
        <MinimalActions>
          <MinimalButton onClick={handleClick} $clicked={isClicked}>
            {isClicked ? <><FaCheck /> Berhasil!</> : data.buttonText}
          </MinimalButton>
          <MinimalMobileMenu><FaBars /></MinimalMobileMenu>
        </MinimalActions>
      </MinimalContainer>
    </MinimalHeader>
  );
}

function GlassmorphismHeaderComponent({ data }) {
  const [searchValue, setSearchValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const mockResults = [
    '🌹 Mawar Merah Premium',
    '🌷 Tulip Warna-Warni',
    '🌸 Bunga Sakura',
    '💐 Buket Ulang Tahun'
  ].filter(item =>
    searchValue && item.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
      setShowResults(false);
    }, 200);
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    setShowResults(e.target.value.length > 0);
  };

  const handleSelectResult = (result) => {
    setSearchValue(result);
    setShowResults(false);
  };

  return (
    <GlassHeader>
      <GlassLogo>{data.logo}</GlassLogo>
      <GlassNav>
        {data.links.map((link, idx) => (
          <GlassLink key={idx} href="#">{link}</GlassLink>
        ))}
        <SearchWrapper>
          <GlassSearch $focused={isFocused}>
            <FaSearch size={14} />
            <input
              type="text"
              placeholder={data.searchPlaceholder}
              value={searchValue}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            {searchValue && (
              <FaTimes
                size={12}
                style={{ cursor: 'pointer', opacity: 0.6 }}
                onClick={() => setSearchValue('')}
              />
            )}
          </GlassSearch>
          {showResults && mockResults.length > 0 && (
            <SearchResults>
              {mockResults.map((result, idx) => (
                <SearchResultItem key={idx} onClick={() => handleSelectResult(result)}>
                  <span>{result}</span>
                </SearchResultItem>
              ))}
            </SearchResults>
          )}
        </SearchWrapper>
      </GlassNav>
      <GlassMobileNav>
        {data.links.map((link, idx) => (
          <GlassMobileLink key={idx} href="#">{link}</GlassMobileLink>
        ))}
      </GlassMobileNav>
    </GlassHeader>
  );
}

export default function HeaderVariant({ variant = "modern", data }) {
  const defaultData = {
    modern: {
      logo: "FloristHub",
      links: ["Beranda", "Buket", "Layanan", "Kontak"]
    },
    minimal: {
      logo: "FLORIST",
      links: ["Beranda", "Katalog", "Tentang", "Kontak"],
      buttonText: "Pesan Sekarang"
    },
    glassmorphism: {
      logo: "✦ Bloom Florist",
      links: ["Beranda", "Katalog", "Layanan"],
      searchPlaceholder: "Cari bunga..."
    }
  };

  const headerData = data || defaultData[variant];

  switch (variant) {
    case "modern":
      return <ModernHeaderComponent data={headerData} />;
    case "minimal":
      return <MinimalHeaderComponent data={headerData} />;
    case "glassmorphism":
      return <GlassmorphismHeaderComponent data={headerData} />;
    default:
      return null;
  }
}
