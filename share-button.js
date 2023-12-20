class ShareButton extends HTMLElement {
  static register(tagName) {
    if ("customElements" in window && window.navigator.share) {
      customElements.define(tagName || "share-button", ShareButton);
    }
  }

  connectedCallback() {
    this.button.addEventListener("click", this.share);
  }

  get button() {
    return this.querySelector("button");
  }

  share = () => {
    const root = this.getRootNode();
    window.navigator
      .share({
        title: root.title,
        text: root.title + "\n" + window.location.href,
      })
      .then(() => console.log("Page was succesffuly shared"))
      .catch((error) => console.log(error));
  };
}

ShareButton.register();
