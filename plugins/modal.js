function _createModal(options) {
  const { title, content, width, closable } = options;
  const DEFAULT_WIDTH = "300px";

  const modal = document.createElement("div");
  modal.classList.add("vmodal");
  modal.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="vmodal-overlay" data-close='true'>
    <div style='width: ${width || DEFAULT_WIDTH}' class="vmodal-window">
      <div class="vmodal-header">
        <span class="vmodal-title">${title || ""}</span>
        ${
          closable
            ? `<span class="vmodal-close" data-close='true'>&times;</span>`
            : ""
        }
      </div>
      <div class="vmodal-body">
        ${content || ""}
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
  let closing = false;
  const ANIMATION_SPEED = 200;
  const $modal = _createModal(options);

  const modal = {
    open() {
      !closing && $modal.classList.add("open");
    },
    close() {
      closing = true;
      $modal.classList.remove("open");
      $modal.classList.add("hide");

      setTimeout(() => {
        $modal.classList.remove("hide");
        closing = false;
      }, ANIMATION_SPEED);
    }
  };

  $modal.addEventListener("click", event => {
    if (event.target.dataset.close) {
      modal.close();
    }
  });
  return modal;
};
