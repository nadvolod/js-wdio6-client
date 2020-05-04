import Base from './base';
import { getTextOfElement } from '../helpers/utils';
import Gestures from '../helpers/Gestures';

class CheckoutPageTwo extends Base {
	constructor() {
		super(`~test-${ driver.selectors.checkoutPageTwo.screen }`);
	}

	get SELECTORS(){
		return driver.selectors;
	}

	get screen() {
		return $(`~test-${ this.SELECTORS.checkoutPageTwo.screen }`);
	}

	get cancelButton() {
		return $(`~test-${ this.SELECTORS.checkoutPageTwo.cancelButton }`);
	}

	get finishButton() {
		return $(`~test-${ this.SELECTORS.checkoutPageTwo.finishButton }`);
	}

	get swagItems() {
		return $$(`~test-${ this.SELECTORS.checkoutPageTwo.item.container }`);
	}

	/**
	 * Get a cart Item based on a search string or a number of the visible items
	 *
	 * @param {number|string} needle
	 *
	 * @return the selected cart item
	 */
	swagItem(needle) {
		if (typeof needle === 'string') {
			return this.swagItems.find(cartItem => getTextOfElement(cartItem).includes(needle));
		}

		return this.swagItems[ needle ];
	}

	/**
	 * Get the text of the cart
	 *
	 * @param {number} needle
	 *
	 * @return {string}
	 */
	getSwagItemText(needle) {
		const elm = this.swagItems[ needle ].$(`~test-${ this.SELECTORS.cartContent.cartItem.description }`);
		Gestures.scrollDownToElement(elm);

		return getTextOfElement(elm);
	}

	/**
	 * Cancel checkout
	 *
	 * @return {void}
	 */
	cancelCheckout() {
		Gestures.scrollDownToElement(this.cancelButton);

		return this.cancelButton.click();
	}

	/**
	 * Finsh checkout
	 *
	 * @return {void}
	 */
	finishCheckout() {
		Gestures.scrollDownToElement(this.finishButton);

		return this.finishButton.click();
	}
}

export default new CheckoutPageTwo();
