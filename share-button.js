class ShareButton extends HTMLElement {
  static register(tagName) {
    if ("customElements" in window) {
      customElements.define(tagName || "share-button", ShareButton);
    }
  }
  
  connectedCallback() {
    if (window.navigator.share) {
      this.button.addEventListener("click", this.share);
    }
  }

  get button() {
    return this.querySelector("button");
  }

  share = () => {
    const root = this.getRootNode();
    window.navigator.share({
      title: root.title,
      text: root.title + "\n" + window.location.href
    });
  };
}

ShareButton.register();
