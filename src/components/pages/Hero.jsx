import React, { useCallback, useEffect, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { products } from "../data/data";
import { ProductItems } from "./ProductsItems";

export const Hero = () => {
  const [searchProducts, setSearchProducts] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [color1, setColor1] = useState("#000000");
  const [color2, setColor2] = useState("#000000");
  const inputRef = useRef();

  const handleSearch = (event) => {
    const keyword = event.target.value.toLowerCase();
    const filtered = products.filter((item) =>
      item.title.toLowerCase().includes(keyword)
    );
    setFilteredProducts(filtered);
    setSearchProducts(keyword);
  };

  const getRandomColor = useCallback(() => {
    let color = "";
    do {
      color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    } while (
      color === "#FFFFFF" ||
      color === "#000000" ||
      color === color1 ||
      color === color2
    );
    return color;
  }, [color1, color2]);

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setColor1(getRandomColor());
      setColor2(getRandomColor());
    }, 1000);

    return () => clearInterval(interval);
  }, [getRandomColor]);

  return (
    <section className="hero">
      <div className="container">
        <h1>
          <label>
            Oldschool <span style={{ color: color1 }}>a tua</span> Loja
          </label>
          <label>
            A tua <span style={{ color: color2 }}>ARTE</span> !
          </label>
        </h1>
        <p>
          Produtos de qualidade, variedade de cores e marcas. Venha conferir, e
          sinta-se em casa!
        </p>
        <div className="search">
          <span>Todas os Produtos</span>
          <hr />
          <input
            className="heroSearch search-input"
            type="search"
            placeholder="Pesquisa"
            value={searchProducts}
            onChange={handleSearch}
            ref={inputRef}
          />
          <button>
            <BiSearch className="searchIcon heIcon" />
          </button>
        </div>
        <p>Exemplos: Hardcore, 94, Caps, Mute, Marcadores...</p>
      </div>
      {searchProducts && <ProductItems items={filteredProducts} />}

      <a
        href="https://www.montanacolors.com/en/shops/retail-shops/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="official_dealer" src="images/MTN_Dealer.avif" alt="" />
      </a>
      <div>
        <a href="https://nbqpro.com/en/" target="_blank" rel="noreferrer">
          <img className="official_dealer2" src="images/nbq_logo.png" alt="" />
        </a>
      </div>
    </section>
  );
};
