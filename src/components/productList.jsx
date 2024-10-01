import React, { useState } from 'react';
import '../styles/ProductList.css';

const ProductList = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [filterText, setFilterText] = useState('');
  const [products, setProducts] = useState([]);
  const [currentId, setCurrentId] = useState(1);
  const [formProduct, setFormProduct] = useState({
    id: '',
    name: '',
    description: '',
    value: '',
    available: 'Sim',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  const openModal = () => {
    setFormProduct({ id: '', name: '', description: '', value: '', available: 'Sim' });
    setIsEditMode(false);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setFormProduct({ id: '', name: '', description: '', value: '', available: 'Sim' });
    setErrorMessage('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormProduct((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const value = parseFloat(formProduct.value);
    if (isNaN(value) || value <= 0) {
      setErrorMessage('O valor deve ser um número maior que zero.');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const addProduct = (newProduct) => {
    if (!validateForm()) return;

    const productExists = products.some((product, index) => 
      product.name.toLowerCase() === newProduct.name.toLowerCase() && index !== editIndex
    );
    
    if (productExists) {
      setErrorMessage('Já existe um produto com este nome.');
      return;
    }

    if (isEditMode) {
      const updatedProducts = [...products];
      updatedProducts[editIndex] = newProduct;
      setProducts(updatedProducts);
      setIsEditMode(false);
    } else {
      newProduct.id = currentId;
      setProducts([...products, newProduct]);
      setCurrentId(currentId + 1);
    }
    closeModal();
  };

  const openDeleteModal = (index) => {
    setDeleteIndex(index);
    setDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    const updatedProducts = products.filter((_, i) => i !== deleteIndex);
    setProducts(updatedProducts);
    setDeleteModalOpen(false);
  };

  const cancelDelete = () => {
    setDeleteModalOpen(false);
  };

  const editProduct = (index) => {
    const productToEdit = products[index];
    setFormProduct(productToEdit);
    setEditIndex(index);
    setIsEditMode(true);
    setModalOpen(true);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(filterText.toLowerCase()) ||
    product.description.toLowerCase().includes(filterText.toLowerCase())
  );

  // Ordena os produtos pelo valor antes de renderizar
  const sortedProducts = filteredProducts.sort((a, b) => {
    return parseFloat(a.value) - parseFloat(b.value);
  });

  return (
    <div className="product-list-container">
      <header className="header">
        <div className="logo-container">
          <img src="logo.png" alt="Logo" className="logo" />
        </div>
      </header>

      <main className="content">
        <h1>Produtos</h1>

        <div className="search-filter">
          <input
            type="text"
            placeholder="Buscar produtos"
            className="search-input"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
          />
          <button className="add-button" onClick={openModal}>
            <strong>Cadastrar Produto</strong>
          </button>
        </div>

        <table className="product-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Valor</th>
              <th>Disponível</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {sortedProducts.length > 0 ? (
              sortedProducts.map((product, index) => (
                <tr key={index}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.value}</td>
                  <td>{product.available}</td>
                  <td>
                    <button className="view-button" onClick={() => editProduct(index)}>
                      <img src="/pencil.png" alt="Editar" className="icon" />
                    </button>
                    <button className="delete-button" onClick={() => openDeleteModal(index)}>
                      <img src="/delete.png" alt="Deletar" className="icon" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="no-products">Nenhum produto encontrado</td>
              </tr>
            )}
          </tbody>
        </table>
      </main>

      {/* Modal para adicionar/editar produto */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{isEditMode ? 'Editar Produto' : 'Adicionar Produto'}</h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              addProduct(formProduct);
            }}>
              <div className="form-group">
                <label>Nome</label>
                <input type="text" name="name" value={formProduct.name} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>Descrição</label>
                <input type="text" name="description" value={formProduct.description} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>Valor</label>
                <input type="number" name="value" value={formProduct.value} onChange={handleInputChange} required />
                {errorMessage && <div className="error-message">{errorMessage}</div>}
              </div>
              <div className="form-group">
                <label>Disponível</label>
                <select name="available" value={formProduct.available} onChange={handleInputChange}>
                  <option value="Sim">Sim</option>
                  <option value="Não">Não</option>
                </select>
              </div>
              <div className="modal-actions">
                <button type="button" className="cancel-button" onClick={closeModal}>Cancelar</button>
                <button type="submit" className="submit-button">Salvar</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal de confirmação de exclusão */}
      {isDeleteModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Confirmar Exclusão</h2>
            <p>Tem certeza que deseja excluir este produto?</p>
            <div className="modal-actions">
              <button className="cancel-button" onClick={cancelDelete}>Cancelar</button>
              <button className="submit-button" onClick={confirmDelete}>Confirmar</button>
            </div>
          </div>
        </div>
      )}

      <footer className="footer">
        <div className="footer-left">
          <img src="ym.png" alt="YM Logo" className="footer-logo" />
        </div>
        <div className="footer-right">
          <a href="https://github.com/Yasmiinmuniz" target="_blank" rel="noopener noreferrer">
            <img src="github.png" alt="GitHub" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/yasmin-muniz-28b820298" target="_blank" rel="noopener noreferrer">
            <img src="linkedin.png" alt="LinkedIn" className="social-icon" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default ProductList;
