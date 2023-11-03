const overviewButtons = document.querySelectorAll('.overview__button');
const components = document.querySelectorAll('.component');


overviewButtons.forEach(overviewButton => {
	const displayComponent = (event) => {
		const button = event.currentTarget;
		const componentToShow = button.dataset.componentToShow;

		overviewButtons.forEach(overviewButton => {
			overviewButton.classList.remove
			('overview__button--active');

			if (overviewButton.dataset.componentToShow === componentToShow) {
				button.classList.add('overview__button--active')
			}
		})
		components.forEach(component =>{
			component.classList.remove('component--visible');

			const componentName = component.dataset.componentName;

			if (componentName === componentToShow) {
				component.classList.add('component--visible');
			}

		});
	}

	overviewButton.addEventListener ('click', displayComponent);
});



const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
	const accordionToggle = accordion.querySelector('.accordion__toggle');

	const displayAccordionContent = (event) => {
		accordion.classList.toggle('accordion--expanded');
	}	
	accordionToggle.addEventListener('click', displayAccordionContent);
});

const checkbox = document.querySelector('.input-checkbox__input');

const toggleCheckmarkClass = (event) => {
	const checkboxId = event.target.id;
	const label = document.querySelector(`label[for='${checkboxId}']`);

	if (event.target.checked) {
		label.classList.add('checked');
	} else {
		label.classList.remove('checked');
	}
}

checkbox.forEach(checking => {
	checking.addEventListener('change', toggleCheckmarkClass);
});