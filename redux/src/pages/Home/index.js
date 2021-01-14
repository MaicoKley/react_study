import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home(){
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-coreracer-masculino/26/NQQ-4635-026/NQQ-4635-026_zoom1.jpg?ts=1594307959"
          alt="Tênis" 
        />
        <strong>Tênis Topzera</strong>
        <span>R$ 399,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-coreracer-masculino/26/NQQ-4635-026/NQQ-4635-026_zoom1.jpg?ts=1594307959"
          alt="Tênis" 
        />
        <strong>Tênis Topzera</strong>
        <span>R$ 399,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 12
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-coreracer-masculino/26/NQQ-4635-026/NQQ-4635-026_zoom1.jpg?ts=1594307959"
          alt="Tênis" 
        />
        <strong>Tênis Topzera</strong>
        <span>R$ 399,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 7
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-coreracer-masculino/26/NQQ-4635-026/NQQ-4635-026_zoom1.jpg?ts=1594307959"
          alt="Tênis" 
        />
        <strong>Tênis Topzera</strong>
        <span>R$ 399,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 9
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-coreracer-masculino/26/NQQ-4635-026/NQQ-4635-026_zoom1.jpg?ts=1594307959"
          alt="Tênis" 
        />
        <strong>Tênis Topzera</strong>
        <span>R$ 399,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 6
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>  
  );
}