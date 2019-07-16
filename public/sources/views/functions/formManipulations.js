export const showFormElements = (...args) => {
	args.forEach((arg) => {
		arg.show();
	});
};

export const hideFormElements = (...args) => {
	args.forEach((arg) => {
		arg.hide();
	});
};