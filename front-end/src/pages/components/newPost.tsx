import React from 'react';

const Popup = ({ handleClose, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button onClick={handleClose}>Fechar</button>
        <p>Conteúdo do Popup aqui.</p>
      </section>
    </div>
  );
};

export default Popup;