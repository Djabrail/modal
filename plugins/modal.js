function _createModal(options) {
  const modal = document.createElement("div");
  modal.classList.add("vmodal");
  modal.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="vmodal-overlay">
    <div class="vmodal-window">
      <div class="vmodal-header">
        <span class="vmodal-title">vModal title</span>
        <span class="vmodal-close">&times;</span>
      </div>
      <div class="vmodal-body">
        <p>Lorem ipsum dolor sit.</p>
        <p>Lorem ipsum dolor sit.</p>
      </div>
      <div class="vmodal-footer">
        <button>Ok</button>
        <button>Cancel</button>
      </div>
    </div>
    </div>
  `
  );
  document.body.appendChild(modal);
  return modal;
}

$.modal = function(options) {
  const $modal = _createModal(options);
  return {
    open() {
      $modal.classList.add("open");
    },
    close() {
      $modal.classList.remove("open");
    },
    destroy() {}
  };
};
