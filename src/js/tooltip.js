export default class Tooltip {
  constructor(container) {
    this.container = container;
    this.show = false;
  }

  static get markUp() {
    return `
    <div class="tooltip hidden">
      <div class="tooltip_content">
        <h3 class="tooltip_title">Popover title</h3>
        <p class="tooltip_text">And here's some amazing content.It's very engaging.Right?</p>
      </div>
    </div>
    `;
  }

  get tooltip() {
    return this.container.querySelector('.tooltip');
  }

  init() {
    console.log(this.container);
    this.bindToDOM();
    this.buttonElem = this.container.querySelector('.btn');
    this.buttonElem.addEventListener('click', (e) => {
      e.preventDefault();
      this.showTooltip();
    });
  }

  bindToDOM() {
    this.container.insertAdjacentHTML('beforeend', this.constructor.markUp);
  }

  showTooltip() {
    this.tooltip.classList.toggle('hidden');
    this.show = !this.tooltip.classList.contains('hidden');
  }
}
