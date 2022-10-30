/**
 * @jest-environment jsdom
 */

import Tooltip from '../tooltip';

const container = document.createElement('div');
const popover = new Tooltip(container);
popover.bindToDOM();

test('создана разметка', () => {
  expect(popover.container.innerHTML).toEqual(Tooltip.markUp);
});

test('проверка наличия tooltip', () => {
  expect(popover.tooltip.classList.contains('tooltip')).toBeTruthy();
});

test('showTooltip меняет значение this.show при включении подсказки', () => {
  popover.showTooltip();
  expect(popover.show).toBe(true);
});
