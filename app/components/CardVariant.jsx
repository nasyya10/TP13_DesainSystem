"use client";

import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaStar, FaMapMarkerAlt, FaLeaf, FaTruck, FaHeart, FaMinus, FaPlus, FaSpinner, FaCheck, FaShoppingCart } from "react-icons/fa";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const variantStyles = {
  elevated: {
    background: "#fff",
    color: "#e91e63",
  },
  bordered: {
    background: "#f8f9fa",
    color: "#e91e63",
  },
  gradient: {
    background: "linear-gradient(135deg, #e91e63 0%, #ad1457 100%)",
    color: "#fff",
  },
};

const ElevatedCard = styled.div`
  width: 100%;
  max-width: 350px;
  background: ${variantStyles.elevated.background};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  transition: all 0.4s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ElevatedImageWrapper = styled.div`
  position: relative;
  height: 220px;
  overflow: hidden;
`;

const ElevatedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s;
  
  ${ElevatedCard}:hover & {
    transform: scale(1.1);
  }
`;

const Badge = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(233, 30, 99, 0.95);
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-weight: 700;
  font-size: 14px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const ElevatedContent = styled.div`
  padding: 1.5rem;
`;

const ElevatedTitle = styled.h3`
  margin: 0 0 0.8rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #e91e63;
`;

const ElevatedFeatures = styled.div`
  display: flex;
  gap: 1.2rem;
  margin: 1rem 0;
  color: #7f8c8d;
  font-size: 14px;
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const ElevatedFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.2rem;
  padding-top: 1rem;
  border-top: 1px solid #ecf0f1;
`;

const Price = styled.div`
  font-size: 1.6rem;
  font-weight: 800;
  color: #e91e63;
  
  span {
    font-size: 0.9rem;
    font-weight: 400;
    color: #95a5a6;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;

    span {
      font-size: 0.8rem;
    }
  }
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: #f39c12;
  font-weight: 600;
`;

// Dynamic Counter Styles for Elevated Card
const QuantitySection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #ecf0f1;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #f8f9fa;
  border-radius: 25px;
  padding: 0.3rem;
`;

const QuantityButton = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 50%;
  background: ${({ disabled }) => disabled ? '#ddd' : '#e91e63'};
  color: white;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  
  &:hover:not(:disabled) {
    background: #c2185b;
    transform: scale(1.1);
  }
`;

const QuantityDisplay = styled.span`
  font-size: 1.1rem;
  font-weight: 700;
  min-width: 30px;
  text-align: center;
  color: #333;
`;

const AddToCartButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: ${({ $added }) => $added ? '#4caf50' : '#e91e63'};
  color: white;
  border: none;
  padding: 0.8rem 1rem;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background: ${({ $added }) => $added ? '#388e3c' : '#c2185b'};
    transform: scale(1.02);
  }
  
  svg {
    font-size: 1rem;
  }
`;

/* ====== VARIANT BORDERED: Card dengan outline dan ikon ====== */
const BorderedCard = styled.div`
  width: 100%;
  max-width: 380px;
  background: ${variantStyles.bordered.background};
  border: 3px solid #dee2e6;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    border-color: #6c757d;
    box-shadow: 0 8px 24px rgba(108, 117, 125, 0.2);
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const BorderedContent = styled.div`
  padding: 1.8rem;
`;

const BorderedHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 1rem;
`;

const BorderedTitle = styled.h3`
  margin: 0;
  font-size: 1.4rem;
  font-weight: 700;
  color: #e91e63;
`;

const BorderedLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: #6c757d;
  font-size: 14px;
  margin: 0.5rem 0 1rem;
`;

const BorderedImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  margin: 1rem 0;
`;

const BorderedDescription = styled.p`
  color: #495057;
  font-size: 14px;
  line-height: 1.6;
  margin: 1rem 0;
`;

const BorderedFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 2px solid #dee2e6;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
    text-align: center;
  }
`;

const BorderedPrice = styled.div`
  font-size: 1.8rem;
  font-weight: 800;
  color: #e91e63;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const BookButton = styled.button`
  background: ${({ $loading, $success }) => $success ? '#4caf50' : '#e91e63'};
  color: white;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: ${({ $loading }) => $loading ? 'wait' : 'pointer'};
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 160px;
  justify-content: center;
  
  &:hover:not(:disabled) {
    background: ${({ $success }) => $success ? '#388e3c' : '#c2185b'};
    transform: scale(1.05);
  }
  
  svg.spin {
    animation: ${spin} 1s linear infinite;
  }
`;

/* ====== VARIANT GRADIENT: Card gradien berwarna ====== */
const GradientCard = styled.div`
  width: 100%;
  max-width: 320px;
  background: ${variantStyles.gradient.background};
  border-radius: 24px;
  overflow: visible;
  position: relative;
  box-shadow: 0 15px 45px rgba(233, 30, 99, 0.4);
  transition: all 0.4s ease;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.05) rotate(2deg);
  }

  @media (max-width: 768px) {
    max-width: 100%;
    
    &:hover {
      transform: none;
    }
  }
`;

const GradientImageWrapper = styled.div`
  padding: 1.5rem 1.5rem 0;
`;

const GradientImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
`;

const GradientContent = styled.div`
  padding: 1.5rem;
  color: white;
`;

const GradientTitle = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 1.6rem;
  font-weight: 800;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

const GradientDescription = styled.p`
  margin: 0.5rem 0 1rem;
  opacity: 0.95;
  font-size: 14px;
  line-height: 1.5;
`;

const GradientFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GradientPrice = styled.div`
  font-size: 2rem;
  font-weight: 900;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const GradientRating = styled.div`
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const HeartButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 45px;
  height: 45px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  color: ${({ $liked }) => $liked ? '#e91e63' : '#95a5a6'};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  
  &:hover {
    transform: scale(1.15);
    color: #e91e63;
  }
  
  svg {
    font-size: 1.3rem;
    transition: transform 0.2s;
  }
  
  &:active svg {
    transform: scale(1.3);
  }
`;

// Individual card components with internal state
function ElevatedCardComponent({ data }) {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <ElevatedCard>
      <ElevatedImageWrapper>
        <ElevatedImage src={data.image} alt={data.title} />
        <Badge>{data.badge}</Badge>
      </ElevatedImageWrapper>
      <ElevatedContent>
        <ElevatedTitle>{data.title}</ElevatedTitle>
        <ElevatedFeatures>
          <Feature><FaLeaf /> Segar 100%</Feature>
          <Feature><FaTruck /> Free Ongkir</Feature>
        </ElevatedFeatures>
        <ElevatedFooter>
          <Price>{data.price}<span>/buket</span></Price>
          <Rating><FaStar /> {data.rating}</Rating>
        </ElevatedFooter>
        <QuantitySection>
          <QuantityControl>
            <QuantityButton
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
              disabled={quantity <= 1}
            >
              <FaMinus size={12} />
            </QuantityButton>
            <QuantityDisplay>{quantity}</QuantityDisplay>
            <QuantityButton onClick={() => setQuantity(q => q + 1)}>
              <FaPlus size={12} />
            </QuantityButton>
          </QuantityControl>
          <AddToCartButton $added={isAdded} onClick={handleAddToCart}>
            {isAdded ? <><FaCheck /> Ditambahkan!</> : <><FaShoppingCart /> Keranjang</>}
          </AddToCartButton>
        </QuantitySection>
      </ElevatedContent>
    </ElevatedCard>
  );
}

function BorderedCardComponent({ data }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleOrder = () => {
    if (isLoading || isSuccess) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 2000);
    }, 1500);
  };

  return (
    <BorderedCard>
      <BorderedContent>
        <BorderedHeader>
          <div>
            <BorderedTitle>{data.title}</BorderedTitle>
            <BorderedLocation>
              <FaMapMarkerAlt /> {data.location}
            </BorderedLocation>
          </div>
        </BorderedHeader>
        <BorderedImage src={data.image} alt={data.title} />
        <BorderedDescription>{data.description}</BorderedDescription>
        <BorderedFooter>
          <BorderedPrice>{data.price}</BorderedPrice>
          <BookButton
            onClick={handleOrder}
            $loading={isLoading}
            $success={isSuccess}
          >
            {isLoading ? (
              <><FaSpinner className="spin" /> Memproses...</>
            ) : isSuccess ? (
              <><FaCheck /> Berhasil!</>
            ) : (
              'Pesan Sekarang'
            )}
          </BookButton>
        </BorderedFooter>
      </BorderedContent>
    </BorderedCard>
  );
}

function GradientCardComponent({ data }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <GradientCard>
      <HeartButton $liked={isLiked} onClick={() => setIsLiked(!isLiked)}>
        <FaHeart />
      </HeartButton>
      <GradientImageWrapper>
        <GradientImage src={data.image} alt={data.title} />
      </GradientImageWrapper>
      <GradientContent>
        <GradientTitle>{data.title}</GradientTitle>
        <GradientDescription>{data.description}</GradientDescription>
        <GradientFooter>
          <GradientPrice>{data.price}</GradientPrice>
          <GradientRating>★ {data.rating}</GradientRating>
        </GradientFooter>
      </GradientContent>
    </GradientCard>
  );
}

export default function CardVariant({ variant = "elevated", data }) {
  switch (variant) {
    case "elevated":
      return <ElevatedCardComponent data={data} />;
    case "bordered":
      return <BorderedCardComponent data={data} />;
    case "gradient":
      return <GradientCardComponent data={data} />;
    default:
      return null;
  }
}
